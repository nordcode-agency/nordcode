import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Inspiration: https://meshbg-1xcve0hlq-chasedavis.vercel.app/0.615577921549203
export function main() {
	const baseColor = 0xffffff;

	/**
	 * Base
	 */

	// Canvas
	const canvas = document.getElementById('canvas') as HTMLCanvasElement;

	// Scene
	const scene = new THREE.Scene();
	// scene.background = new THREE.Color(baseColor);

	/**
	 * Meshes
	 */

	// Material
	const planeMaterial = new THREE.MeshBasicMaterial();
	planeMaterial.roughness = 0.4;
	const planeGeometry = new THREE.PlaneGeometry(5, 5);

	const plane = new THREE.Mesh(planeGeometry, new THREE.MeshBasicMaterial());
	plane.material.color = new THREE.Color(0x0000ff);
	plane.material.side = THREE.DoubleSide;
	plane.position.z = -5;
	scene.add(plane);

	const plane2 = new THREE.Mesh(planeGeometry, new THREE.MeshBasicMaterial());
	plane2.material.color = new THREE.Color(0x00d5ff);
	plane2.material.side = THREE.DoubleSide;
	plane2.position.z = -5;
	scene.add(plane2);

	/**
	 * Cylinder Geometries
	 */
	const cyl = {
		radius: 0.1,
		radialSegments: 32,
		height: 3,
		distance: 1.8,
		roughness: 0.7,
		transmission: 2,
		ior: 1.4,
		thickness: 0.5,
		rotation: {
			z: -0.4
		}
	};

	const geometry = new THREE.CylinderGeometry(
		cyl.radius,
		cyl.radius,
		cyl.height,
		cyl.radialSegments
	);

	const physicalMaterial = new THREE.MeshPhysicalMaterial({ color: baseColor });

	const cylinderGroup = new THREE.Group();
	scene.add(cylinderGroup);
	const cylinderItems = Array.from(Array(10).keys());
	const cylinderLength = cylinderItems.length;
	const cylinderXStart = -(cylinderLength / 2) * cyl.radius * 2;
	for (const idx of cylinderItems) {
		const cylinder = new THREE.Mesh(geometry, physicalMaterial);
		cylinder.position.set(...[cylinderXStart + idx * cyl.radius * cyl.distance, 0, 2]);
		cylinder.material.specular = new THREE.Color(baseColor);
		cylinder.material.roughness = cyl.roughness;
		cylinder.material.transmission = cyl.transmission;
		cylinder.material.ior = cyl.ior;
		cylinder.material.thickness = cyl.thickness;
		cylinder.rotation.z = cyl.rotation.z;
		cylinderGroup.add(cylinder);
	}

	function resizeRendererToDisplaySize(renderer) {
		const canvas = renderer.domElement;
		const pixelRatio = window.devicePixelRatio;
		const width = Math.floor(canvas.clientWidth * pixelRatio);
		const height = Math.floor(canvas.clientHeight * pixelRatio);
		const needResize = canvas.width !== width || canvas.height !== height;
		if (needResize) {
			renderer.setSize(width, height, false);
		}
		return needResize;
	}

	/**
	 * Camera
	 */
	// Base camera
	const camera = new THREE.PerspectiveCamera(
		75,
		canvas.clientWidth / canvas.clientHeight,
		0.1,
		100
	);
	camera.position.x = 0;
	camera.position.y = 0;
	camera.position.z = 3;
	camera.updateProjectionMatrix();
	scene.add(camera);

	// Controls
	const controls = new OrbitControls(camera, canvas);
	controls.enableDamping = true;

	/**
	 * Renderer
	 */
	const renderer = new THREE.WebGLRenderer({
		canvas: canvas,
		antialias: true,
		alpha: true,
		premultipliedAlpha: false
	});

	/**
	 * Animate
	 */
	const clock = new THREE.Clock();

	const tick = () => {
		const elapsedTime = clock.getElapsedTime();

		if (resizeRendererToDisplaySize(renderer)) {
			const canvas = renderer.domElement;
			camera.aspect = canvas.clientWidth / canvas.clientHeight;
			camera.updateProjectionMatrix();
		}

		// Update objects
		plane.rotation.x = 0.1 * elapsedTime;
		plane.rotation.y = 0.15 * elapsedTime;
		plane.position.z = -5 + Math.sin(0.15 * elapsedTime);
		plane2.rotation.x = Math.PI + -0.1 * elapsedTime;
		plane2.rotation.y = Math.PI + 0.25 * elapsedTime;

		// Update controls
		controls.update();

		// Render
		renderer.render(scene, camera);

		// Call tick again on the next frame
		window.requestAnimationFrame(tick);
	};

	tick();
}
