
	video1 = document.createElement( 'video' );
		video1.src = "assets/movies/WaltDisney.mp4";
		video1.onPlay = false;

	videoImage1 = document.createElement( 'canvas' );
		videoImage1.width = 428;
		videoImage1.height = 240;

	videoImageContext1 = videoImage1.getContext( '2d' );
		videoImageContext1.fillStyle = '#000000';
		videoImageContext1.fillRect( 0, 0, videoImage1.width, videoImage1.height );

	videoTexture1 = new THREE.Texture( videoImage1 );
		videoTexture1.minFilter = THREE.LinearFilter;
		videoTexture1.magFilter = THREE.LinearFilter;

	video2 = document.createElement( 'video' );
		video2.src = "assets/movies/Proietti.mp4";
		video2.onPlay = false;

	videoImage2 = document.createElement( 'canvas' );
		videoImage2.width = 320;
		videoImage2.height = 180;

	videoImageContext2 = videoImage2.getContext( '2d' );
		videoImageContext2.fillStyle = '#000000';
		videoImageContext2.fillRect( 0, 0, videoImage2.width, videoImage2.height );

	videoTexture2 = new THREE.Texture( videoImage2 );
		videoTexture2.minFilter = THREE.LinearFilter;
		videoTexture2.magFilter = THREE.LinearFilter;

	video3 = document.createElement( 'video' );
		video3.src = "assets/movies/TheLastOfUs.mp4";
		video3.onPlay = false;

	videoImage3 = document.createElement( 'canvas' );
		videoImage3.width = 640;
		videoImage3.height = 360;

	videoImageContext3 = videoImage3.getContext( '2d' );
		videoImageContext3.fillStyle = '#000000';
		videoImageContext3.fillRect( 0, 0, videoImage3.width, videoImage3.height );

	videoTexture3 = new THREE.Texture( videoImage3 );
		videoTexture3.minFilter = THREE.LinearFilter;
		videoTexture3.magFilter = THREE.LinearFilter;

	video4 = document.createElement( 'video' );
		video4.src = "assets/movies/Apple.mp4";
		video4.onPlay = false;

	videoImage4 = document.createElement( 'canvas' );
		videoImage4.width = 640;
		videoImage4.height = 360;

	videoImageContext4 = videoImage4.getContext( '2d' );
		videoImageContext4.fillStyle = '#000000';
		videoImageContext4.fillRect( 0, 0, videoImage4.width, videoImage4.height );

	videoTexture4 = new THREE.Texture( videoImage4 );
		videoTexture4.minFilter = THREE.LinearFilter;
		videoTexture4.magFilter = THREE.LinearFilter;	

	video5 = document.createElement( 'video' );
		video5.src = "assets/movies/Aladdin.mp4";
		video5.onPlay = false;

	videoImage5 = document.createElement( 'canvas' );
		videoImage5.width = 480;
		videoImage5.height = 360;

	videoImageContext5 = videoImage5.getContext( '2d' );
		videoImageContext5.fillStyle = '#000000';
		videoImageContext5.fillRect( 0, 0, videoImage5.width, videoImage5.height );

	videoTexture5 = new THREE.Texture( videoImage5 );
		videoTexture5.minFilter = THREE.LinearFilter;
		videoTexture5.magFilter = THREE.LinearFilter;	

	video6 = document.createElement( 'video' );
		video6.src = "assets/movies/IlPianetaDelTesoro.mp4";
		video6.onPlay = false;

	videoImage6 = document.createElement( 'canvas' );
		videoImage6.width = 480;
		videoImage6.height = 360;

	videoImageContext6 = videoImage6.getContext( '2d' );
		videoImageContext6.fillStyle = '#000000';
		videoImageContext6.fillRect( 0, 0, videoImage6.width, videoImage6.height );

	videoTexture6 = new THREE.Texture( videoImage6 );
		videoTexture6.minFilter = THREE.LinearFilter;
		videoTexture6.magFilter = THREE.LinearFilter;	

	video7 = document.createElement( 'video' );
		video7.src = "assets/movies/Romeo.mp4";
		video7.onPlay = false;

	videoImage7 = document.createElement( 'canvas' );
		videoImage7.width = 450;
		videoImage7.height = 360;

	videoImageContext7 = videoImage7.getContext( '2d' );
		videoImageContext7.fillStyle = '#000000';
		videoImageContext7.fillRect( 0, 0, videoImage7.width, videoImage7.height );

	videoTexture7 = new THREE.Texture( videoImage7 );
		videoTexture7.minFilter = THREE.LinearFilter;
		videoTexture7.magFilter = THREE.LinearFilter;	



function makeTv(x,y, video,videoTexture) {

	var tvGeometry = new THREE.PlaneGeometry( x, y);
	var tvMaterial = new THREE.MeshBasicMaterial( { map: videoTexture, overdraw: true } );	
	var tv = new THREE.Mesh(tvGeometry,tvMaterial);
	tv.video = video;
	// tv.visible = false;

	tv.interact = function() {
		if (tv.video.onPlay) {
			tv.video.pause();
			tv.video.onPlay = false;
		} else {
			tv.video.play();
			tv.video.onPlay = true;
		}	
	}	

	return tv;

}

function makeSpecialTv(x,y, video1,videoTexture1,video2, videoTexture2, video3, videoTexture3, video4, videoTexture4) {
	var tv = new THREE.Object3D();

	var tv1Geometry = new THREE.PlaneGeometry( x, y);
	var tv1Material = new THREE.MeshBasicMaterial( { map: videoTexture1, overdraw: true } );	
	var tv1 = new THREE.Mesh(tv1Geometry,tv1Material);

	var tv2Geometry = new THREE.PlaneGeometry( x, y);
	var tv2Material = new THREE.MeshBasicMaterial( { map: videoTexture2, overdraw: true } );	
	var tv2 = new THREE.Mesh(tv2Geometry,tv2Material);

	var tv3Geometry = new THREE.PlaneGeometry( x, y);
	var tv3Material = new THREE.MeshBasicMaterial( { map: videoTexture3, overdraw: true } );	
	var tv3 = new THREE.Mesh(tv3Geometry,tv3Material);

	var tv4Geometry = new THREE.PlaneGeometry( x, y);
	var tv4Material = new THREE.MeshBasicMaterial( { map: videoTexture4, overdraw: true } );	
	var tv4 = new THREE.Mesh(tv4Geometry,tv4Material);

	tv.tv1 = tv1;
	tv.tv2 = tv2;
	tv.tv3 = tv3;
	tv.tv4 = tv4;

	tv.tv1.video = video1;
	tv.tv2.video = video2;
	tv.tv3.video = video3;
	tv.tv4.video = video4;

	tv.tv1.visible = true;
	tv.tv2.visible = false;
	tv.tv3.visible = false;
	tv.tv4.visible = false;

	tv1.interact = tv2.interact = tv3.interact = tv4.interact = function() {
		console.log("Interact");

		if (this.parent.tv1.video.onPlay) {
			this.parent.tv1.video.pause();
			this.parent.tv1.video.onPlay = false;
		}
		if (this.parent.tv2.video.onPlay) {
			this.parent.tv2.video.pause();
			this.parent.tv2.video.onPlay = false;
		}
		if (this.parent.tv3.video.onPlay) {
			this.parent.tv3.video.pause();
			this.parent.tv3.video.onPlay = false;
		}
		if (this.parent.tv4.video.onPlay) {
			this.parent.tv4.video.pause();
			this.parent.tv4.video.onPlay = false;
		}
		if ((!this.parent.tv1.video.onPlay) && this.parent.tv1.video.visible ){
			this.parent.tv1.video.play();
			this.parent.tv1.video.onPlay = true;
			console.log("Play Video1");
		}
		if ((!this.parent.tv2.video.onPlay) && this.parent.tv2.video.visible ){
			this.parent.tv2.video.play();
			this.parent.tv2.video.onPlay = true;
		}
		if ((!this.parent.tv3.video.onPlay) && this.parent.tv3.video.visible ){
			this.parent.tv3.video.play();
			this.parent.tv3.video.onPlay = true;
		}
		if ((!this.parent.tv4.video.onPlay) && this.parent.tv4.video.visible ){
			this.parent.tv4.video.play();
			this.parent.tv4.video.onPlay = true;
		}
	}	

	return tv;

}

function makeTvs() {
	var tvs = new THREE.Object3D();

	tv1 = makeTv(0.5,0.25,video2,videoTexture2);
	tv1.position.set(13, 1.45, 1.25);
	tv1.rotation.x = -Math.PI/2;
	tv1.rotation.z = Math.PI;
	tvs.add(tv1);

	tv2 = makeSpecialTv(1,0.55,video1,videoTexture1,video5,videoTexture5,video6,videoTexture6,video7,videoTexture7);
	tv2.position.set(13, 9.2, 1.25);
	tv2.rotation.x = -Math.PI/2;
	tv2.rotation.z = Math.PI;
	tv2.rotation.y = Math.PI;
	tvs.add(tv2);

	tv3 = makeTv(0.6,0.3,video3,videoTexture3);
	// tv3.position.set(6.11, 11.52, 1.138);
	tv3.position.set(6.11, 11.4, 1.138);
	tv3.rotation.x = -Math.PI/2;
	tv3.rotation.z = Math.PI;
	tv3.rotation.y = -Math.PI/2;
	tvs.add(tv3);

	imac = makeTv(0.2,0.18,video4,videoTexture4);
	imac.position.set(6.2, 13.65, 0.9);
	imac.rotation.x = -Math.PI/2;
	imac.rotation.z = Math.PI;
	imac.rotation.y = -Math.PI/2;
	// tvs.add(imac);

	return tvs;
}

function makeRemoteControl(){

	var remoteControlGeometry = new THREE.BoxGeometry(1,1,1);
	var remoteControlMaterial = new THREE.MeshLambertMaterial({transparent: true, opacity: 1});
	remoteControl_Box = new THREE.Mesh(remoteControlGeometry, remoteControlMaterial);

	remoteControl_Box.interact = function() {
		console.log("Remote Control Interact");
		if (tv2.tv1.video.onPlay) {
			tv2.tv1.visible = false;
			tv2.tv2.visible = true;
			tv2.tv3.visible = false;
			tv2.tv4.visible = false;
			
			tv2.tv1.video.pause();
			tv2.tv1.video.onPlay = false;
			tv2.tv2.video.play();
			tv2.tv2.video.onPlay = true;
		} 
		if(tv2.tv2.video.onPlay){
			tv2.tv1.visible = false;
			tv2.tv2.visible = false;
			tv2.tv3.visible = true;
			tv2.tv4.visible = false;
			
			tv2.tv2.video.pause();
			tv2.tv2.video.onPlay = false;
			tv2.tv3.video.play();
			tv2.tv3.video.onPlay = true;
		}
		if(tv2.tv3.video.onPlay){
			tv2.tv1.visible = false;
			tv2.tv2.visible = false;
			tv2.tv3.visible = true;
			tv2.tv4.visible = false;
			
			tv2.tv3.video.pause();
			tv2.tv3.video.onPlay = false;
			tv2.tv4.video.play();
			tv2.tv4.video.onPlay = true;
		}
		if(tv2.tv4.video.onPlay){
			tv2.tv1.visible = true;
			tv2.tv2.visible = false;
			tv2.tv3.visible = false;
			tv2.tv4.visible = false;
			
			tv2.tv4.video.pause();
			tv2.tv4.video.onPlay = false;
		}
		else {
			tv2.tv1.visible = true;
			tv2.tv2.visible = false;
			tv2.tv3.visible = false;
			tv2.tv4.visible = false;
			
			tv2.tv1.video.play();
			tv2.tv1.video.onPlay = true;
		}	
	}

	remoteControl_Box.rotation.y = Math.PI/2;
	remoteControl_Box.position.set(0,5,5);

	return remoteControl_Box;
 
}