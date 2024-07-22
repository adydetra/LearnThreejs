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
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );

// Cube
const cubeGeometry = new THREE.BoxGeometry( 1, 1, 1 );
const cubeMaterial = new THREE.MeshBasicMaterial( { color: 0xfcff3b } );
const cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
cube.position.set( 0, 0, 0 );

// Light
const point = new THREE.PointLight( 0xff0000 );
const ambient = new THREE.AmbientLight( 0x404040 );
point.position.set( 3, 3, 3 );

// Scene
scene.add( cube, point, ambient );