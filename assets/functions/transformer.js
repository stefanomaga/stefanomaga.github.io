car = new THREE.Object3D();
car.position.set(5,17,0);
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

	var movement2 = new TWEEN.Tween(car.position)
            .to({ x: car.position.x + 15, y: car.position.y, z: car.position.z}, 500)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out)  
            .delay(750) 
            .start();

    // var rotation1 = new TWEEN.Tween(car.rotation)
    //         .to({ z: -Math.PI/2}, 500)
    //         .easing(TWEEN.Easing.Linear.None)
    //         //.easing(TWEEN.Easing.Bounce.Out) 
    //         .delay(1000) 
    //         .start();            

    // rotationCar = -Math.PI;


}

function resetCar(){
	console.log("RESET CAR");
	car.position.set(5,17,0);
	car.rotation.set(-rotationCar);
}