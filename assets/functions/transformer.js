car = new THREE.Object3D();
apartment.add(car);

function moveCar(){
	var movement1 = new TWEEN.Tween(car.position)
            .to({ x: car.position.x + 30, y: car.position.y , z: car.position.z}, 500)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out)  
            .start();
}

function resetCar(){
	car.position.set(0.006, 5,17,0);
}