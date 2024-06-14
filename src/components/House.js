import * as THREE from "three";

const wallSize = {
  height: 2.5,
  width: 4,
};
const roofSize = {
  height: 1.5,
};
const doorSize = {
  height: 2,
};

const bushes = (house) => {
  const bushGeometry = new THREE.SphereGeometry(1, 16, 16);
  const bushMaterial = new THREE.MeshStandardMaterial({ color: "#89c854" });
  const _bushes = [
    { scale: { x: 0.5, y: 0.5, z: 0.5 }, position: { x: 0.8, y: 0.2, z: 2.2 } },
    {
      scale: { x: 0.25, y: 0.25, z: 0.25 },
      position: { x: 1.4, y: 0.1, z: 2.1 },
    },
    {
      scale: { x: 0.4, y: 0.4, z: 0.4 },
      position: { x: -0.8, y: 0.1, z: 2.2 },
    },
    {
      scale: { x: 0.15, y: 0.15, z: 0.15 },
      position: { x: -1, y: 0.05, z: 2.6 },
    },
  ];

  for (const bush of _bushes) {
    const { position, scale } = bush;
    const mesh = new THREE.Mesh(bushGeometry, bushMaterial);
    mesh.position.set(position.x, position.y, position.z);
    mesh.scale.set(scale.x, scale.y, scale.z);
    house.add(mesh);
  }
};

const door = () => {
  const { width } = wallSize;
  const { height } = doorSize;
  const _door = new THREE.Mesh(
    new THREE.PlaneGeometry(1.2, height),
    new THREE.MeshStandardMaterial({ color: "#aa7b7b" })
  );
  _door.position.y = height / 2;
  _door.position.z = width / 2 + 0.01;

  return _door;
};

const roof = () => {
  const { height: wallsHeight } = wallSize;
  const { height: roofHeight } = roofSize;
  const _roof = new THREE.Mesh(
    new THREE.ConeGeometry(3.5, roofHeight, 4),
    new THREE.MeshStandardMaterial({ color: "#b35f45" })
  );

  _roof.position.y = wallsHeight + roofHeight / 2;
  _roof.rotation.y = Math.PI / 4;

  return _roof;
};

const walls = () => {
  const { height } = wallSize;
  const _walls = new THREE.Mesh(
    new THREE.BoxGeometry(4, height, 4),
    new THREE.MeshStandardMaterial({ color: "#ac8e82" })
  );
  _walls.position.y = height / 2;

  return _walls;
};

const House = () => {
  const house = new THREE.Group();
  const _walls = walls();
  const _roof = roof();
  const _door = door();
  bushes(house);
  house.add(_walls, _roof, _door);
  return house;
};

export default House;
