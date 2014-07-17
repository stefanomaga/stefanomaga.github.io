apartment = new THREE.Object3D();


function makeApartment() {
	//Lights
      apartment.add(makeLights());

      //Switches
      apartment.add(makeSwitches());

	//make Doors
      apartment.add(makeDoors());

      //make Windows
      apartment.add(makeWindows());

      //Make Rooms
      apartment.add(makeRooms());

      //MAIN FLOOR
      apartment.add(makeMainFloor());

      //EXTERNAL WALLS
      apartment.add(makeExternalWalls());

      //ROOF
      apartment.add(makeRoof());

      apartment.rotation.z = -Math.PI;

      //OBJECTS
      apartment.add(makeObjects());

      //MOVIES
      apartment.add(makeTvs());

      apartment.rotation.x = -Math.PI/2;
      apartment.position.set(0,0,0);
      apartment.scale.set(3,3,3);
      
      return apartment;
}