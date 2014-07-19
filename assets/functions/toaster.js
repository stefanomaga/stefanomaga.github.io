function makeToaster() {

	var toasterGeometry = new THREE.BoxGeometry(0.5,0.5,0.5);
	var toasterMaterial = new THREE.MeshLambertMaterial({transparent: true, opacity: 1});
	toaster = new THREE.Mesh(toasterGeometry, toasterMaterial);
	toaster.position.set(6,6.75,1);

	toaster.interact = function() {
		console.log("TOAST");
		var finishToast1 = new TWEEN.Tween(toast1.position)
            .to({ x: toast1.position.x, y: toast1.position.y + 1 , z: toast1.position.z }, 2000)
            //.easing(TWEEN.Easing.Linear.None)
            .easing(TWEEN.Easing.Bounce.Out)  
            .start();

        var finishToast2 = new TWEEN.Tween(toast2.position)
            .to({ x: toast2.position.x, y: toast2.position.y + 1 , z: toast2.position.z }, 2000)
            //.easing(TWEEN.Easing.Linear.None)
            .easing(TWEEN.Easing.Bounce.Out)  
            .start();
	}

	return toaster;
}
