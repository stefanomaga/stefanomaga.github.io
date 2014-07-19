function makeToaster() {
	
	var toasterGeometry = new THREE.BoxGeometry(0.5,0.5,0.5);
	var toasterMaterial = new THREE.MeshLambertMaterial({transparent: true, opacity: 1});
	toaster = new THREE.Mesh(toasterGeometry, toasterMaterial);
	toaster.position.set(6,6.75,1);

	toaster.interact = function() {

	}

	return toaster;
}
