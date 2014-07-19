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

    car.position.set(car.position.x + 15, car.position.y - 20 , car.position.z);

	var movement3 = new TWEEN.Tween(car.position)
            .to({ x: car.position.x - 15, y: car.position.y, z: car.position.z}, 500)
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

    car.position.set(car.position.x, car.position.y - 20 , car.position.z);

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
}

function resetCar(){
	console.log("RESET CAR");
	car.position.set(5,17,0);
	car.rotation.set(-rotationCar);
}