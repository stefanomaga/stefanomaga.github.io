function makeToaster() {
	makeToasts();

	var toasterGeometry = new THREE.BoxGeometry(0.5,0.5,0.5);
	var toasterMaterial = new THREE.MeshLambertMaterial({transparent: true, opacity: 1});
	toaster = new THREE.Mesh(toasterGeometry, toasterGeometry);
	toaster.position.set(6,6.75,1);

	toaster.interact = function() {

	}

	return toaster;
}

function makeToasts() {
	var toasGeometry = new THREE.BoxGeometry(0.25,0.25,0.25);
	var toasMaterial = new THREE.MeshLambertMaterial({transparent: true, opacity: 1});
	toast1 = new THREE.Mesh(toasGeometry, toasMaterial);
	toast2 = new THREE.Mesh(toasGeometry, toasMaterial);
	toaster.position.set(6.15,6.75,1.5);	
	toaster.position.set(5.9,6.75,1.5);	
}