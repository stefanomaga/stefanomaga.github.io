car = new THREE.Object3D();
car.position.set(5,17,0);

	var helper = new THREE.AxisHelper(100);
	car.add(helper);

apartment.add(car);

function moveCar(){
	console.log("MOVE CAR");

	var movement1 = new TWEEN.Tween(car.position)
            .to({ x: car.position.x + 15, y: car.position.y , z: car.position.z}, 500)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out)  
            .start();

    rotationCar = -Math.PI/2;

	var rotation1 = new TWEEN.Tween(car.rotation)
            .to({ z: rotationCar}, 200)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(500) 
            .start(); 

    car.position.set(car.position.x + 15, car.position.y, car.position.z);

	var movement2 = new TWEEN.Tween(car.position)
            .to({ x: car.position.x, y: car.position.y - 20, z: car.position.z}, 500)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out)  
            .delay(700) 
            .start();

    rotationCar = -Math.PI;

	var rotation2 = new TWEEN.Tween(car.rotation)
            .to({ z: rotationCar}, 200)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(1200) 
            .start();   

    car.position.set(car.position.x, car.position.y - 20 , car.position.z);

	var movement3 = new TWEEN.Tween(car.position)
            .to({ x: car.position.x - 25, y: car.position.y, z: car.position.z}, 500)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out)  
            .delay(1400) 
            .start();

    rotationCar = -3*Math.PI/2;

	var rotation3 = new TWEEN.Tween(car.rotation)
            .to({ z: rotationCar}, 200)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(1900) 
            .start();           

    car.position.set(car.position.x-25, car.position.y, car.position.z);

	var movement4 = new TWEEN.Tween(car.position)
            .to({ x: car.position.x, y: car.position.y + 20, z: car.position.z}, 500)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out)  
            .delay(2100) 
            .start();

    rotationCar = 0;

	var rotation4 = new TWEEN.Tween(car.rotation)
            .to({ z: rotationCar}, 200)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(2600) 
            .start();  

    car.position.set(car.position.x, car.position.y + 20, car.position.z);

	var movement5 = new TWEEN.Tween(car.position)
            .to({ x: car.position.x + 10, y: car.position.y, z: car.position.z}, 500)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out)  
            .delay(2800) 
            .start();

    car.position.set(car.position.x + 10, car.position.y, car.position.z);

}

function transformation(){
	var movement1 = new TWEEN.Tween(car.position)
            .to({ x: 15, y: 13 , z: 0}, 500)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out)  
            .start();	

	var rotation1 = new TWEEN.Tween(car.rotation)
            .to({ z: -2*Math.PI}, 50)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(0) 
            .start();

	var rotation2 = new TWEEN.Tween(car.rotation)
            .to({ z: 0}, 50)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(50) 
            .start();

    var rotation3 = new TWEEN.Tween(car.rotation)
            .to({ z: -2*Math.PI}, 50)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(100) 
            .start();  

    var rotation4 = new TWEEN.Tween(car.rotation)
            .to({ z: 0}, 50)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(150) 
            .start();

    var rotation5 = new TWEEN.Tween(car.rotation)
            .to({ z: -2*Math.PI}, 50)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(200) 
            .start(); 

    var rotation6 = new TWEEN.Tween(car.rotation)
            .to({ z: 0}, 50)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(250) 
            .start();

    var rotation7 = new TWEEN.Tween(car.rotation)
            .to({ z: -2*Math.PI}, 50)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(300) 
            .start();  

    var rotation8 = new TWEEN.Tween(car.rotation)
            .to({ z: 0}, 50)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(350) 
            .start();

    var rotation9 = new TWEEN.Tween(car.rotation)
            .to({ z: -2*Math.PI}, 50)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(400) 
            .start();     

   	var rotation10 = new TWEEN.Tween(car.rotation)
            .to({ z: 0}, 50)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(450) 
            .start();

    var rotation11 = new TWEEN.Tween(car.rotation)
            .to({ z: -2*Math.PI}, 50)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(500) 
            .start();  

    var rotation12 = new TWEEN.Tween(car.rotation)
            .to({ z: 0}, 50)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(550) 
            .start();

    var rotation13 = new TWEEN.Tween(car.rotation)
            .to({ z: -2*Math.PI}, 50)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(600) 
            .start(); 

    var rotation14 = new TWEEN.Tween(car.rotation)
            .to({ z: 0}, 50)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(650) 
            .start();

    var rotation15 = new TWEEN.Tween(car.rotation)
            .to({ z: -2*Math.PI}, 50)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(700) 
            .start();  

    var rotation16 = new TWEEN.Tween(car.rotation)
            .to({ z: 0}, 50)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(750) 
            .start();

    var rotation17 = new TWEEN.Tween(car.rotation)
            .to({ z: -2*Math.PI}, 50)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(800) 
            .start();                              
}

function resetCar(){
	console.log("RESET CAR");
}