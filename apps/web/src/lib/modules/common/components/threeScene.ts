import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import GUI from 'lil-gui';

// Inspiration: https://meshbg-1xcve0hlq-chasedavis.vercel.app/0.615577921549203
export function main() {
	/**
	 * Base
	 */
	// Debug
	const gui = new GUI();

	// Canvas
	const canvas = document.getElementById('c');

	// Scene
	const scene = new THREE.Scene();
	scene.background = new THREE.Color(0x030920);

	/**
	 * Meshes
	 */

	// Material
	const planeMaterial = new THREE.MeshBasicMaterial();
	planeMaterial.roughness = 0.4;
	const planeGeometry = new THREE.PlaneGeometry(5, 5);

	const plane = new THREE.Mesh(planeGeometry, new THREE.MeshBasicMaterial());
	plane.material.color = new THREE.Color(0x00d5ff); // 0x0000ff
	plane.material.side = THREE.DoubleSide;
	plane.position.z = -5;
	scene.add(plane);
	gui.addColor(plane.material, 'color');

	const plane2 = new THREE.Mesh(planeGeometry, new THREE.MeshBasicMaterial());
	plane2.material.color = new THREE.Color(0x1001ff); // 0x00d5ff
	plane2.material.side = THREE.DoubleSide;
	plane2.position.z = -5;
	scene.add(plane2);
	gui.addColor(plane2.material, 'color');

	/**
	 * Cylinder Geometries
	 */
	const cyl = {
		radius: 0.1,
		radialSegments: 32,
		height: 2
	};

	const geometry = new THREE.CylinderGeometry(
		cyl.radius,
		cyl.radius,
		cyl.height,
		cyl.radialSegments
	);
	const physicalMaterial = new THREE.MeshPhysicalMaterial({ color: 0xffffff });

	const cylinderGroup = new THREE.Group();
	scene.add(cylinderGroup);
	const cylinderItems = Array.from(Array(10).keys());
	const cylinderLength = cylinderItems.length;
	const cylinderXStart = -(cylinderLength / 2) * cyl.radius * 2;
	for (const idx of cylinderItems) {
		const cylinder = new THREE.Mesh(geometry, physicalMaterial);
		cylinder.position.set(...[cylinderXStart + idx * cyl.radius * 2, 0, 2]);
		cylinder.material.specular = new THREE.Color(0x1188ff);
		cylinder.material.metalness = 0.3;
		cylinder.material.roughness = 0.5;
		cylinder.material.transmission = 1;
		cylinder.material.ior = 1.5;
		cylinder.material.thickness = 0.5;
		cylinderGroup.add(cylinder);
	}

	/**
	 * Sizes
	 */
	const sizes = {
		width: window.innerWidth,
		height: window.innerHeight
	};

	window.addEventListener('resize', () => {
		// Update sizes
		sizes.width = window.innerWidth;
		sizes.height = window.innerHeight;

		// Update camera
		camera.aspect = sizes.width / sizes.height;
		camera.updateProjectionMatrix();

		// Update renderer
		renderer.setSize(sizes.width, sizes.height);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
	});

	/**
	 * Camera
	 */
	// Base camera
	const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
	camera.position.x = 0;
	camera.position.y = 0;
	camera.position.z = 4;
	scene.add(camera);

	// Controls
	const controls = new OrbitControls(camera, canvas);
	controls.enableDamping = true;

	/**
	 * Renderer
	 */
	const renderer = new THREE.WebGLRenderer({
		canvas: canvas,
		// antialias: true
	});
	renderer.setSize(sizes.width, sizes.height);
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

	/**
	 * Animate
	 */
	const clock = new THREE.Clock();

	const tick = () => {
		const elapsedTime = clock.getElapsedTime();

		// Update objects
		plane.rotation.x = 0.1 * elapsedTime;
		plane.rotation.y = 0.15 * elapsedTime;
		plane2.rotation.x = Math.PI + 0.1 * elapsedTime;
		plane2.rotation.y = Math.PI + 0.15 * elapsedTime;

		// Update controls
		controls.update();

		// Render
		renderer.render(scene, camera);

		// Call tick again on the next frame
		window.requestAnimationFrame(tick);
	};

	tick();
}
