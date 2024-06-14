import * as THREE from "three";

const gravesGroup = (graves) => {
  const graveGeometry = new THREE.BoxGeometry(0.6, 0.8, 0.2);
  const graveMaterial = new THREE.MeshStandardMaterial({ color: "#b2b6b1" });
};

const Graves = () => {
  const graves = new THREE.Group();
  const _graves = gravesGroup(graves);
  bushes(graves);
  graves.add(_walls, _roof, _door);
  return graves;
};

export default Graves;
