import * as THREE from 'three'
import './style.css'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

// Canvas size
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// Scene
const scene = new THREE.Scene()

// Add green cube
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshStandardMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add(cube);
const geometry4 = new THREE.BoxGeometry( 1.5, 1.5, 1.5 );
const edges0 = new THREE.EdgesGeometry(geometry4); 
const line0 = new THREE.LineSegments(edges0, new THREE.LineBasicMaterial({color: 0x00ee00})); 
scene.add(line0);

// Add red cube
const geometry1 = new THREE.BoxGeometry(1, 1, 1);
const material1 = new THREE.MeshStandardMaterial({color: 0xff0000});
const cube1 = new THREE.Mesh( geometry1, material1 );
scene.add(cube1);
cube1.position.x -= 1.5;

// Add blue cube
const geometry2 = new THREE.BoxGeometry(1, 1, 1);
const material2 = new THREE.MeshStandardMaterial({color: 0x0000ff});
const cube2 = new THREE.Mesh( geometry2, material2 );
scene.add(cube2);
cube2.position.x += 1.5;

// Add hollow line cube
const geometry3 = new THREE.BoxGeometry(2.5,2.5,2.5);
const edges = new THREE.EdgesGeometry(geometry3); 
const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({color: 0xffffff})); 
scene.add(line);

// Light (not reqd when using MeshBasicMaterial)
const light1 = new THREE.PointLight(0xffffff, 100, 100)
light1.position.set(0, 0, 5)
scene.add(light1)
const light2 = new THREE.PointLight(0xffffff, 100, 100)
light2.position.set(0, 0, -5)
scene.add(light2)
const light3 = new THREE.PointLight(0xffffff, 100, 100)
light3.position.set(5, 0, 0)
scene.add(light3)
const light4 = new THREE.PointLight(0xffffff, 100, 100)
light4.position.set(-5, 0, 0)
scene.add(light4)
const light5 = new THREE.PointLight(0xffffff, 100, 100)
light5.position.set(0, 5, 0)
scene.add(light5)
const light6 = new THREE.PointLight(0xffffff, 100, 100)
light6.position.set(0, -5, 0)
scene.add(light6)
// const light = new THREE.AmbientLight(0xffffff, 100); // white light
// scene.add(light);

// Camera
const camera = new THREE.PerspectiveCamera( 75, sizes.width/sizes.height, 0.1, 1000 );
camera.position.z = 5;

// Renderer
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(sizes.width, sizes.height)
renderer.setClearColor(0x304050, 1);

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.enableZoom = true
controls.enablePan = false
controls.autoRotate = false
// controls.autoRotateSpeed = 5

function animate() {
	requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    line0.rotation.x -= 0.01;
    line0.rotation.y -= 0.01;
    cube1.rotation.x += 0.01;
    cube1.rotation.y += 0.01;
    cube2.rotation.x += 0.01;
    cube2.rotation.y += 0.01;
	renderer.render(scene, camera);
}
animate();