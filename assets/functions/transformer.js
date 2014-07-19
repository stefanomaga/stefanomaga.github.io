car = new THREE.Object3D();
apartment.add(car);

function moveCar(){
	console.log("MOVE CAR");
	var movement1 = new TWEEN.Tween(car.position)
            .to({ x: car.position.x + 20, y: car.position.y , z: car.position.z}, 500)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out)  
            .start();

	var rotation1 = new TWEEN.Tween(car.rotation)
            .to({ z: Math.PI/2}, 500)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out) 
            .delay(500) 
            .start();            
}

function resetCar(){
	console.log("RESET CAR");
	car.position.set(0,0,0);
}