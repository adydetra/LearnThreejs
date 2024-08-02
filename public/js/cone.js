import * as THREE from 'three';

const scene = new THREE.Scene();

// Camera 
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;
camera.position.y = 0;

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Animate
function animate() {
  cone.rotation.y += 0.02;
	renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );

// Cone
const coneGeometry = new THREE.ConeGeometry( 2, 3, 3 ); 
const coneMaterial = new THREE.MeshToonMaterial( { color: 0xFFFFFF } ); 
const cone = new THREE.Mesh( coneGeometry, coneMaterial );
cone.position.set( 0, 0, 0 );

// Light
const point = new THREE.PointLight( 0xff0000 );
const ambient = new THREE.AmbientLight( 0x404040 );
point.position.set( 0, 1, 0 );

// Scene
scene.add( cone, point, ambient );