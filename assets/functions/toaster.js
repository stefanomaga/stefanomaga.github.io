toast1 = new THREE.Object3D();
	toast2 = new THREE.Object3D();
	toast1.position.set(6.15,6.75,1.5);	
	toast2.position.set(5.9,6.75,1.5);	
	scene.add(toast1);
	scene.add(toast2);

function makeToaster() {

	var toasterGeometry = new THREE.BoxGeometry(0.5,0.5,0.5);
	var toasterMaterial = new THREE.MeshLambertMaterial({transparent: true, opacity: 0});
	toaster = new THREE.Mesh(toasterGeometry, toasterMaterial);
	toaster.position.set(6,6.75,1);

	toaster.interact = function() {
		console.log("TOAST");
		console.log(toast1);
		console.log(toast2);
		var finishToast1a = new TWEEN.Tween(toast1.position)
            .to({ x: toast1.position.x, y: toast1.position.y , z: toast1.position.z + 1}, 500)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out)  
            .start();

        toast1.position.set(toast1.position.x,toast1.position.y,toast1.position.z+1);
            
        var finishToast1b = new TWEEN.Tween(toast1.position)
            .to({ x: toast1.position.x, y: toast1.position.y , z: toast1.position.z - 1}, 500)
            //.easing(TWEEN.Easing.Linear.None)
            .easing(TWEEN.Easing.Bounce.Out) 
            .delay(500) 
            .start();   

        toast1.position.set(toast1.position.x,toast1.position.y,toast1.position.z-1);   

        var finishToast2a = new TWEEN.Tween(toast2.position)
            .to({ x: toast2.position.x, y: toast2.position.y , z: toast2.position.z + 1 }, 500)
            .easing(TWEEN.Easing.Linear.None)
            //.easing(TWEEN.Easing.Bounce.Out)  
            .start();

        toast2.position.set(toast2.position.x,toast2.position.y,toast2.position.z+1);   

        var finishToast2b = new TWEEN.Tween(toast2.position)
            .to({ x: toast2.position.x, y: toast2.position.y , z: toast2.position.z - 1}, 500)
            //.easing(TWEEN.Easing.Linear.None)
            .easing(TWEEN.Easing.Bounce.Out)  
            .delay(500)
            .start();

        toast2.position.set(toast2.position.x,toast2.position.y,toast2.position.z-1);      
	}

	return toaster;
}
