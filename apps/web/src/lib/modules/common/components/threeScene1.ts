import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import GUI from 'lil-gui';
import vertexShader from '../shaders/vertex.glsl?raw';
import fragmentShader from '../shaders/fragment.glsl?raw';

export function main() {
	/**
	 * Base
	 */
	// Debug
	const gui = new GUI({ width: 340 });
	const debugObject = {
		depthColor: '#030920',
		surfaceColor: '#004cff'
	};

	// Canvas
	const canvas = document.querySelector('canvas.webgl');

	// Scene
	const scene = new THREE.Scene();

	/**
	 * Water
	 */
	// Geometry
	// const waterGeometry = new THREE.BoxGeometry(2, 2, 0.25, 512);
	const waterGeometry = new THREE.IcosahedronGeometry(2, 200);

	// Material
	const waterMaterial = new THREE.ShaderMaterial({
		vertexShader,
		fragmentShader,
		side: THREE.DoubleSide,
		uniforms: {
			uBigWavesElevation: { value: 0.175 },
			uBigWavesFrequency: { value: new THREE.Vector2(4.1, 10.0) },
			uTime: { value: 0 },
			uBigWavesSpeed: { value: 0.25 },
			uDepthColor: { value: new THREE.Color(debugObject.depthColor) },
			uSurfaceColor: { value: new THREE.Color(debugObject.surfaceColor) },
			uColorOffset: { value: 0.05 },
			uColorMultiplier: { value: 5.5 },
			uSmallWavesElevation: { value: 1.5 }
		}
	});

	// Debug
	gui.add(waterMaterial.uniforms.uBigWavesElevation, 'value')
		.min(0)
		.max(1)
		.step(0.001)
		.name('uBigWavesElevation');
	gui.add(waterMaterial.uniforms.uSmallWavesElevation, 'value')
		.min(0)
		.max(10)
		.step(0.001)
		.name('uSmallWavesElevation');
	gui.add(waterMaterial.uniforms.uBigWavesFrequency.value, 'x')
		.min(0)
		.max(10)
		.step(0.001)
		.name('uBigWavesFrequencyX');
	gui.add(waterMaterial.uniforms.uBigWavesFrequency.value, 'y')
		.min(0)
		.max(10)
		.step(0.001)
		.name('uBigWavesFrequencyY');
	gui.add(waterMaterial.uniforms.uBigWavesSpeed, 'value')
		.min(0)
		.max(5)
		.step(0.001)
		.name('uBigWavesSpeed');
	gui.add(waterMaterial.uniforms.uColorOffset, 'value')
		.min(0)
		.max(1)
		.step(0.001)
		.name('uColorOffset');
	gui.add(waterMaterial.uniforms.uColorMultiplier, 'value')
		.min(0)
		.max(10)
		.step(0.001)
		.name('uColorMultiplier');
	gui.addColor(debugObject, 'depthColor')
		.name('depthColor')
		.onChange(() => {
			waterMaterial.uniforms.uDepthColor.value.set(debugObject.depthColor);
		});
	gui.addColor(debugObject, 'surfaceColor')
		.name('surfaceColor')
		.onChange(() => {
			waterMaterial.uniforms.uSurfaceColor.value.set(debugObject.surfaceColor);
		});

	// Mesh
	const water = new THREE.Mesh(waterGeometry, waterMaterial);
	water.rotation.x = -Math.PI * 1;
	water.position.set(1.0, -1.5, 0.0);
	scene.add(water);

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
	camera.position.set(1, 1, 1.5);
	scene.add(camera);

	// Controls
	const controls = new OrbitControls(camera, canvas);
	controls.enableDamping = true;

	/**
	 * Renderer
	 */
	const renderer = new THREE.WebGLRenderer({
		canvas: canvas,
		alpha: true,
		premultipliedAlpha: false
	});
	renderer.setSize(sizes.width, sizes.height);
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

	/**
	 * Animate
	 */
	const clock = new THREE.Clock();

	const tick = () => {
		const elapsedTime = clock.getElapsedTime();

		waterMaterial.uniforms.uTime.value = elapsedTime;

		// Update controls
		controls.update();

		// Render
		renderer.render(scene, camera);

		// Call tick again on the next frame
		window.requestAnimationFrame(tick);
	};

	tick();
}
