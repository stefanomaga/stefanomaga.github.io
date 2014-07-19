car = new THREE.Object3D();
apartment.add(car);

function moveCar(){
	console.log("MOVE CAR");
	var movement1 = new TWEEN.Tween(car.position)
            .to({ x: car.position.x + 30, y: car.position.y , z: car.position.z}, 500)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out)  
            .start();
}

function resetCar(){
	console.log("RESET CAR");
	car.position.set(0,0,0);
}