import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import GUI from 'lil-gui';
import vertexShader from '../shaders/vertex.glsl?raw';
import fragmentShader from '../shaders/fragment.glsl?raw';

function konami(callback: (args: unknown) => void) {
	let keyboardKeys: string[] = [];
	const konami =
		'ArrowUp,ArrowUp,ArrowDown,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight,KeyB,KeyA';
	return (event: KeyboardEvent) => {
		console.log(event);

		keyboardKeys.push(event.code);
		if (keyboardKeys.toString().indexOf(konami) >= 0) {
			callback(event);
			keyboardKeys = [];
		}
	};
}

const setUniformColors = (colorSchema: 'light' | 'dark', material: THREE.ShaderMaterial) => {
	if (colorSchema === 'dark') {
		material.uniforms.uDepthColor.value.set('#0b152d');
		material.uniforms.uSurfaceColor.value.set('#006eff');
	} else {
		material.uniforms.uDepthColor.value.set('#ecf6ff');
		material.uniforms.uSurfaceColor.value.set('#45b8f2');
	}
};

export function main() {
	/**
	 * Base
	 */
	// Debug
	const gui = new GUI({ width: 340 });
	gui.hide();
	window.addEventListener(
		'keydown',
		konami(() => {
			gui.show();
		})
	);

	// Canvas
	const canvas = document.querySelector('canvas.webgl');

	// Scene
	const scene = new THREE.Scene();

	const debugObject = {
		depthColor: '#000000',
		surfaceColor: '#006eff'
	};

	/**
	 * Water
	 */
	// Geometry
	const waterGeometry = new THREE.PlaneGeometry(2, 4, 128, 128);
	// const waterGeometry = new THREE.IcosahedronGeometry(1, 64);
	// const waterGeometry = new THREE.BoxGeometry(2, 2, 0.25, 512);;

	// Material
	const waterMaterial = new THREE.ShaderMaterial({
		vertexShader,
		fragmentShader,
		uniforms: {
			uTime: { value: 0 },
			uSpeed: { value: 0.05 },
			uBackgroundColor: { value: new THREE.Color('#0b152d') },

			uBigWavesElevation: { value: 0.2 },

			uSmallWavesElevation: { value: 0.2 },
			uSmallIterations: { value: 3 },
			uSmallWavesFrequency: { value: 3 },

			uBigWavesFrequency: { value: new THREE.Vector2(4.0, 2.0) },

			uDistortionFrequency: { value: new THREE.Vector2(3.0, 4.0) },

			uDepthColor: { value: new THREE.Color(debugObject.depthColor) },
			uSurfaceColor: { value: new THREE.Color(debugObject.surfaceColor) },
			uColorMultiplier: { value: 20.0 },
			uColorOffset: { value: 0.0 }
		}
		// side: THREE.DoubleSide,
	});

	const attributeObserver = new MutationObserver(function (mutationList) {
		for (const mutation of mutationList) {
			if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
				const dataThemeValue = (mutation.target as HTMLElement).getAttribute('data-theme');
				if (dataThemeValue === 'light' || dataThemeValue === 'dark') {
					setUniformColors(dataThemeValue as 'light' | 'dark', waterMaterial);
				} else if (dataThemeValue === 'system') {
					setUniformColors(
						window.matchMedia('(prefers-color-scheme: dark)').matches
							? 'dark'
							: 'light',
						waterMaterial
					);
				}
			}
		}
	});
	const htmlEl = document.querySelector('html');

	if (htmlEl) {
		attributeObserver.observe(htmlEl, {
			attributes: true //configure it to listen to attribute changes
		});
	} else {
		console.warn('Expected to find an html element in the document');
	}
	setUniformColors(
		window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
		waterMaterial
	);

	// Mesh
	const water = new THREE.Mesh(waterGeometry, waterMaterial);
	water.rotation.x = -Math.PI * 0.5;
	scene.add(water);

	gui.add(waterMaterial.uniforms.uSpeed, 'value').min(0).max(1).step(0.001).name('uSpeed');

	const bigWavesGroup = gui.addFolder('Big Waves');
	bigWavesGroup
		.add(waterMaterial.uniforms.uBigWavesElevation, 'value')
		.min(0)
		.max(3)
		.step(0.001)
		.name('elevation');

	const smallWavesGroup = gui.addFolder('Small Waves');
	smallWavesGroup
		.add(waterMaterial.uniforms.uSmallWavesElevation, 'value')
		.min(0)
		.max(3)
		.step(0.001)
		.name('elevation');
	smallWavesGroup
		.add(waterMaterial.uniforms.uSmallIterations, 'value')
		.min(0)
		.max(5)
		.step(1)
		.name('iterations');
	smallWavesGroup
		.add(waterMaterial.uniforms.uSmallWavesFrequency, 'value')
		.min(0)
		.max(30)
		.step(0.001)
		.name('frequency');

	const distortionFrequencyGroup = gui.addFolder('Distortion Frequency');
	distortionFrequencyGroup
		.add(waterMaterial.uniforms.uDistortionFrequency.value, 'x')
		.min(0)
		.max(20)
		.step(0.1)
		.name('x');
	distortionFrequencyGroup
		.add(waterMaterial.uniforms.uDistortionFrequency.value, 'y')
		.min(0)
		.max(20)
		.step(0.1)
		.name('z');

	const frequencyGroup = gui.addFolder('Frequency');
	frequencyGroup
		.add(waterMaterial.uniforms.uBigWavesFrequency.value, 'x')
		.min(0)
		.max(20)
		.step(0.1)
		.name('x');
	frequencyGroup
		.add(waterMaterial.uniforms.uBigWavesFrequency.value, 'y')
		.min(0)
		.max(20)
		.step(0.1)
		.name('z');

	const colorsGroup = gui.addFolder('Colors');
	colorsGroup.addColor(debugObject, 'depthColor').onChange(() => {
		waterMaterial.uniforms.uDepthColor.value.set(debugObject.depthColor);
	});
	colorsGroup.addColor(debugObject, 'surfaceColor').onChange(() => {
		waterMaterial.uniforms.uSurfaceColor.value.set(debugObject.surfaceColor);
	});
	colorsGroup
		.add(waterMaterial.uniforms.uColorMultiplier, 'value')
		.min(0)
		.max(20)
		.step(0.1)
		.name('uColorMultiplier');
	colorsGroup
		.add(waterMaterial.uniforms.uColorOffset, 'value')
		.min(0)
		.max(3)
		.step(0.001)
		.name('uColorOffset');

	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
		// const dataTheme = document.querySelector('html')?.getAttribute("data-theme") as "light" | "dark" | "system" | null;
		const newColorScheme = event.matches ? 'dark' : 'light';
		if (
			htmlEl?.getAttribute('data-theme') !== 'light' &&
			htmlEl?.getAttribute('data-theme') !== 'dark'
		) {
			setUniformColors(newColorScheme, waterMaterial);
		}
	});

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
	camera.position.set(0.6924198050961325, 0.717913837087474, 1.1226317501039604);
	camera.rotation.set(-1.0066190542664037, 0.6757842914804814, 0.7796168753682582);
	scene.add(camera);

	// Controls
	const controls = new OrbitControls(camera, canvas);
	controls.enableDamping = true;
	// controls.addEventListener( "change", (event) => {
	//     console.log( controls.object );
	// });

	/**
	 * Renderer
	 */
	const renderer = new THREE.WebGLRenderer({
		canvas: canvas,
		alpha: true,
		premultipliedAlpha: true
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
