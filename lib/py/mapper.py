""" Mapping functions and primitive objects """
from pyplasm import *
from scipy import *
import os,sys

""" import modules from larcc/lib """
sys.path.insert(0, 'lib/py/')
import lar2psm
from lar2psm import *
from simplexn import *
from larcc import *
from largrid import *

def larTranslate (tvect):
   def larTranslate0 (points):
      return [VECTSUM([p,tvect]) for p in points]
   return larTranslate0

def larRotate (angle):     # 2-dimensional !! TODO: n-dim
   def larRotate0 (points):
      a = angle
      return [[x*COS(a)-y*SIN(a), x*SIN(a)+y*COS(a)] for x,y in points]
   return larRotate0

def larScale (svect):
   def larScale0 (points):
      print "\n points =",points
      print "\n svect =",svect
      return [AA(PROD)(TRANS([p,svect])) for p in points]
   return larScale0

""" cellular decomposition of the unit d-cube """
def larDomain(shape, cell='cuboid'):
   if cell=='simplex': V,CV = larSimplexGrid1(shape)
   elif cell=='cuboid': V,CV = larCuboids(shape)
   V = larScale( [1./d for d in shape])(V)
   return [V,CV]

def larIntervals(shape, cell='cuboid'):
   def larIntervals0(size):
      V,CV = larDomain(shape,cell)
      V = larScale( size)(V)
      return [V,CV]
   return larIntervals0

from collections import defaultdict
def checkModel(model,dim=2):
   V,CV = model; n = len(V)
   vertDict = defaultdict(list)
   for k,v in enumerate(V): vertDict[vcode(v)].append(k) 
   points,verts = TRANS(vertDict.items())
   invertedindex = [None]*n
   V = []
   for k,value in enumerate(verts):
      V.append(eval(points[k]))
      for i in value:
         invertedindex[i]=k   
   CV = [[invertedindex[v] for v in cell] for cell in CV]
   # filter out degenerate cells
   CV = [list(set(cell)) for cell in CV if len(set(cell))>=dim+1]
   return [V, CV]

def larMap(coordFuncs):
   if isinstance(coordFuncs, list): coordFuncs = CONS(coordFuncs)
   def larMap0(domain,dim=2):
      V,CV = domain
      V = AA(coordFuncs)(V)  # plasm CONStruction
      return [V,CV]
      # checkModel([V,CV])  TODO
   return larMap0

if __name__=="__main__":
   V,EV = larDomain([5])
   VIEW(EXPLODE(1.5,1.5,1.5)(MKPOLS((V,EV))))
   V,EV = larIntervals([24])([2*PI])
   VIEW(EXPLODE(1.5,1.5,1.5)(MKPOLS((V,EV))))
      
   V,FV = larDomain([5,3])
   VIEW(EXPLODE(1.5,1.5,1.5)(MKPOLS((V,FV))))
   V,FV = larIntervals([36,3])([2*PI,1.])
   VIEW(EXPLODE(1.5,1.5,1.5)(MKPOLS((V,FV))))
      
   V,CV = larDomain([5,3,1])
   VIEW(EXPLODE(1.5,1.5,1.5)(MKPOLS((V,CV))))
   V,CV = larIntervals([36,2,3])([2*PI,1.,1.])
   VIEW(EXPLODE(1.5,1.5,1.5)(MKPOLS((V,CV))))

def larCircle(radius=1.,angle=2*PI,dim=1):
   def larCircle0(shape=36):
      domain = larIntervals([shape])([angle])
      V,CV = domain
      x = lambda p : radius*COS(p[0])
      y = lambda p : radius*SIN(p[0])
      return larMap([x,y])(domain,dim)
   return larCircle0

def larHelix(radius=1.,pitch=1.,nturns=2,dim=1):
   def larHelix0(shape=36*nturns):
      angle = nturns*2*PI
      domain = larIntervals([shape])([angle])
      V,CV = domain
      x = lambda p : radius*COS(p[0])
      y = lambda p : radius*SIN(p[0])
      z = lambda p : (pitch/(2*PI)) * p[0]
      return larMap([x,y,z])(domain,dim)
   return larHelix0

def larDisk(radius=1.,angle=2*PI):
   def larDisk0(shape=[36,1]):
      domain = larIntervals(shape)([angle,radius])
      V,CV = domain
      x = lambda p : p[1]*COS(p[0])
      y = lambda p : p[1]*SIN(p[0])
      return larMap([x,y])(domain)
   return larDisk0

def larHelicoid(R=1.,r=0.5,pitch=1.,nturns=2,dim=1):
   def larHelicoid0(shape=[36*nturns,2]):
      angle = nturns*2*PI
      domain = larIntervals(shape,'simplex')([angle,R-r])
      V,CV = domain
      V = larTranslate([0,r,0])(V)
      domain = V,CV
      x = lambda p : p[1]*COS(p[0])
      y = lambda p : p[1]*SIN(p[0])
      z = lambda p : (pitch/(2*PI)) * p[0]
      return larMap([x,y,z])(domain,dim)
   return larHelicoid0

def larRing(r1,r2,angle=2*PI):
   def larRing0(shape=[36,1]):
      V,CV = larIntervals(shape)([angle,r2-r1])
      V = larTranslate([0,r1])(V)
      domain = V,CV
      x = lambda p : p[1] * COS(p[0])
      y = lambda p : p[1] * SIN(p[0])
      return larMap([x,y])(domain)
   return larRing0

def larSphere(radius=1,angle1=PI,angle2=2*PI):
   def larSphere0(shape=[18,36]):
      V,CV = larIntervals(shape,'simplex')([angle1,angle2])
      V = larTranslate([-angle1/2,-angle2/2])(V)
      domain = V,CV
      x = lambda p : radius*COS(p[0])*COS(p[1])
      y = lambda p : radius*COS(p[0])*SIN(p[1])
      z = lambda p : radius*SIN(p[0])
      return larMap([x,y,z])(domain)
   return larSphere0

from scipy.linalg import det
"""
def makeOriented(model):
   V,CV = model
   out = []
   for cell in CV: 
      mat = scipy.array([V[v]+[1] for v in cell]+[[0,0,0,1]])
      if det(mat) < 0.0:
         out.append(cell)
      else:
         out.append([cell[1]]+[cell[0]]+cell[2:])
   return V,out
"""
def larCylinder(radius,height,angle=2*PI):
   def larCylinder0(shape=[36,1]):
      domain = larIntervals(shape)([angle,1])
      V,CV = domain
      x = lambda p : radius*COS(p[0])
      y = lambda p : radius*SIN(p[0])
      z = lambda p : height*p[1]
      mapping = [x,y,z]
      model = larMap(mapping)(domain)
      # model = makeOriented(model)
      return model
   return larCylinder0

def larToroidal(r,R,angle1=2*PI,angle2=2*PI):
   def larToroidal0(shape=[24,36]):
      domain = larIntervals(shape,'simplex')([angle1,angle2])
      V,CV = domain
      x = lambda p : (R + r*COS(p[0])) * COS(p[1])
      y = lambda p : (R + r*COS(p[0])) * SIN(p[1])
      z = lambda p : -r * SIN(p[0])
      return larMap([x,y,z])(domain)
   return larToroidal0

def larCrown(r,R,angle=2*PI):
   def larCrown0(shape=[24,36]):
      V,CV = larIntervals(shape,'simplex')([PI,angle])
      V = larTranslate([-PI/2,0])(V)
      domain = V,CV
      x = lambda p : (R + r*COS(p[0])) * COS(p[1])
      y = lambda p : (R + r*COS(p[0])) * SIN(p[1])
      z = lambda p : -r * SIN(p[0])
      return larMap([x,y,z])(domain)
   return larCrown0

def larBox(minVect,maxVect):
   size = DIFF([maxVect,minVect])
   print "size =",size
   box = larApply(s(*size))(larCuboids([1,1,1]))
   print "box =",box
   return larApply(t(*minVect))(box)

def larBall(radius=1,angle1=PI,angle2=2*PI):
   def larBall0(shape=[18,36]):
      V,CV = checkModel(larSphere(radius,angle1,angle2)(shape))
      return V,[range(len(V))]
   return larBall0

def larSolidHelicoid(thickness=.1,R=1.,r=0.5,pitch=1.,nturns=2.,steps=36):
   def larSolidHelicoid0(shape=[steps*int(nturns),1,1]):
      angle = nturns*2*PI
      domain = larIntervals(shape)([angle,R-r,thickness])
      V,CV = domain
      V = larTranslate([0,r,0])(V)
      domain = V,CV
      x = lambda p : p[1]*COS(p[0])
      y = lambda p : p[1]*SIN(p[0])
      z = lambda p : (pitch/(2*PI))*p[0] + p[2]
      return larMap([x,y,z])(domain)
   return larSolidHelicoid0

def larRod(radius,height,angle=2*PI):
   def larRod0(shape=[36,1]):
      V,CV = checkModel(larCylinder(radius,height,angle)(shape))
      return V,[range(len(V))]
   return larRod0

def larTorus(r,R,angle1=2*PI,angle2=2*PI):
   def larTorus0(shape=[24,36,1]):
      domain = larIntervals(shape)([angle1,angle2,r])
      V,CV = domain
      x = lambda p : (R + p[2]*COS(p[0])) * COS(p[1])
      y = lambda p : (R + p[2]*COS(p[0])) * SIN(p[1])
      z = lambda p : -p[2] * SIN(p[0])
      return larMap([x,y,z])(domain)
   return larTorus0

def larPizza(r,R,angle=2*PI):
   assert angle <= PI
   def larPizza0(shape=[24,36]):
      V,CV = checkModel(larCrown(r,R,angle)(shape))
      V += [[0,0,-r],[0,0,r]]
      return V,[range(len(V))]
   return larPizza0

def larHollowCyl(r,R,height,angle=2*PI):
   def larHollowCyl0(shape=[36,1,1]):
      V,CV = larIntervals(shape)([angle,R-r,height])
      V = larTranslate([0,r,0])(V)
      domain = V,CV
      x = lambda p : p[1] * COS(p[0])
      y = lambda p : p[1] * SIN(p[0])
      z = lambda p : p[2] * height
      return larMap([x,y,z])(domain)
   return larHollowCyl0

def larHollowSphere(r,R,angle1=PI,angle2=2*PI):
   def larHollowSphere0(shape=[36,1,1]):
      V,CV = larIntervals(shape)([angle1,angle2,R-r])
      V = larTranslate([-angle1/2,-angle2/2,r])(V)
      domain = V,CV
      x = lambda p : p[2]*COS(p[0])*COS(p[1])
      y = lambda p : p[2]*COS(p[0])*SIN(p[1])
      z = lambda p : p[2]*SIN(p[0])
      return larMap([x,y,z])(domain)
   return larHollowSphere0

def t(*args): 
   d = len(args)
   mat = scipy.identity(d+1)
   for k in range(d): 
      mat[k,d] = args[k]
   return mat.view(Mat)

def s(*args): 
   d = len(args)
   mat = scipy.identity(d+1)
   for k in range(d): 
      mat[k,k] = args[k]
   return mat.view(Mat)

def r(*args): 
   args = list(args)
   n = len(args)
   if n == 1: # rotation in 2D
      angle = args[0]; cos = COS(angle); sin = SIN(angle)
      mat = scipy.identity(3)
      mat[0,0] = cos;   mat[0,1] = -sin;
      mat[1,0] = sin;   mat[1,1] = cos;
   
   if n == 3: # rotation in 3D
      mat = scipy.identity(4)
      angle = VECTNORM(args); axis = UNITVECT(args)
      cos = COS(angle); sin = SIN(angle)
      if axis[1]==axis[2]==0.0:  # rotation about x
         mat[1,1] = cos;   mat[1,2] = -sin;
         mat[2,1] = sin;   mat[2,2] = cos;
      elif axis[0]==axis[2]==0.0:   # rotation about y
         mat[0,0] = cos;   mat[0,2] = sin;
         mat[2,0] = -sin;  mat[2,2] = cos;
      elif axis[0]==axis[1]==0.0:   # rotation about z
         mat[0,0] = cos;   mat[0,1] = -sin;
         mat[1,0] = sin;   mat[1,1] = cos;
      
      else:    # general 3D rotation (Rodrigues' rotation formula)   
         I = scipy.identity(3) ; u = axis
         Ux = scipy.array([
            [0,      -u[2],    u[1]],
            [u[2],      0,    -u[0]],
            [-u[1],   u[0],      0]])
         UU = scipy.array([
            [u[0]*u[0], u[0]*u[1],  u[0]*u[2]],
            [u[1]*u[0], u[1]*u[1],  u[1]*u[2]],
            [u[2]*u[0], u[2]*u[1],  u[2]*u[2]]])
         mat[:3,:3] = cos*I + sin*Ux + (1.0-cos)*UU
      
   
   return mat.view(Mat)

def larEmbed(k):
   def larEmbed0(model):
      V,CV = model
      if k>0:
         V = [v+[0.]*k for v in V] 
      elif k<0:
         V = [v[:-k] for v in V] 
      return V,CV
   return larEmbed0

def larApply(affineMatrix):
   def larApply0(model):
      if isinstance(model,Model):
         # V = scipy.dot([v.tolist()+[1.0] for v in model.verts], affineMatrix.T).tolist()
         V = scipy.dot(array([v+[1.0] for v in model.verts]), affineMatrix.T).tolist()
         V = [v[:-1] for v in V]
         CV = copy(model.cells)
         return Model((V,CV))
      elif isinstance(model,tuple) or isinstance(model,list):
         V,CV = model
         V = scipy.dot([v+[1.0] for v in V], affineMatrix.T).tolist()
         return [v[:-1] for v in V],CV
   return larApply0

""" Flatten a list using Python generators """
def flatten(lst):
   for x in lst:
      if (isinstance(x,tuple) or isinstance(x,list)) and len(x)==2:
         yield x
      elif (isinstance(x,tuple) or isinstance(x,list)):
         for x in flatten(x):
            yield x
      elif isinstance(x, Struct):
         for x in flatten(x.body):
            yield x
      else:
         yield x
 
# lst = [[1], 2, [[3,4], 5], [[[]]], [[[6]]], 7, 8, []]
# print list(flatten(lst)) 
# [1, 2, 3, 4, 5, 6, 7, 8]

def checkStruct(lst):
   """ Return the common dimension of structure elements.
   """
   vertsDims = [computeDim(obj) for obj in flatten(lst)]
   if EQ(vertsDims): 
      return vertsDims[0]
   else: 
      print "\n vertsDims =", vertsDims
      print "*** LAR ERROR: Struct dimension mismatch."

def computeDim(obj):
   """ Check for dimension of a structure element (Verts or V). 
   """
   if (isinstance(obj,lar2psm.Model)):
      return obj.n
   elif (isinstance(obj,tuple) or isinstance(obj,list)) and len(obj)==2:
      V = obj[0]
      if (isinstance(V,list) and isinstance(V[0],list) and 
            (isinstance(V[0][0],float) or isinstance(V[0][0],int))): 
         dim = len(V[0])
         return dim
   elif (isinstance(obj,lar2psm.Mat)):
      dim = obj.shape[0]-1
      return dim
   else: return 0

""" Traversal of a scene multigraph """
def traversal(CTM, stack, obj, scene=[]):
   print "\n CTM, obj =",obj
   for i in range(len(obj)):
      if isinstance(obj[i],Model): 
         scene += [larApply(CTM)(obj[i])]
      elif (isinstance(obj[i],tuple) or isinstance(obj[i],list)) and len(obj[i])==2:
         scene += [larApply(CTM)(obj[i])]
      elif isinstance(obj[i],Mat): 
         CTM = scipy.dot(CTM, obj[i])
      elif isinstance(obj[i],Struct):
         stack.append(CTM) 
         traversal(CTM, stack, obj[i], scene)
         CTM = stack.pop()
   return scene

def evalStruct(struct):
   dim = checkStruct(struct.body)
   print "\n dim =",dim
   CTM, stack = scipy.identity(dim+1), []
   print "\n CTM, stack =",CTM, stack
   scene = traversal(CTM, stack, struct) 
   return scene

""" TODO: 
use Decimal (http://docs.python.org/2/library/decimal.html) 
"""
ROUND_ZERO = 1E-07
def round_or_zero (x,prec=7):
   """
   Decision procedure to approximate a small number to zero.
   Return either the input number or zero.
   """
   def myround(x):
      return eval(('%.'+str(prec)+'f') % round(x,prec))
   xx = myround(x)
   if abs(xx) < ROUND_ZERO: return 0.0
   else: return xx

def prepKey (args): return "["+", ".join(args)+"]"

def fixedPrec(value):
   if abs(value - int(value))<ROUND_ZERO: value = int(value)
   out = ('%0.7f'% value).rstrip('0')
   if out == '-0.': out = '0.'
   return out
   
def vcode (vect): 
   """
   To generate a string representation of a number array.
   Used to generate the vertex keys in PointSet dictionary, and other 
   similar operations.
   """
   return prepKey(AA(fixedPrec)(vect))

