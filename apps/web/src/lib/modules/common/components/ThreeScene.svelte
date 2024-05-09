<script lang="ts">
	// import gsap from "gsap";
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
	import GUI from 'lil-gui';
	import gsap from 'gsap';

	const params = {
		color: 0x00ff00,
		subdivision: 2,
		wireframe: true,
	};

	function resizeRendererToDisplaySize(renderer: THREE.Renderer) {
		const canvas = renderer.domElement;
		const width = canvas.clientWidth;
		const height = canvas.clientHeight;
		const needResize = canvas.width !== width || canvas.height !== height;
		if (needResize) {
			renderer.setSize(width, height, false);
		}

		return needResize;
	}

	function cube() {
		const geometry = new THREE.BoxGeometry(
			1,
			1,
			1,
			params.subdivision,
			params.subdivision,
			params.subdivision
		);
		const material = new THREE.MeshBasicMaterial({
			color: params.color,
            wireframe: params.wireframe,
		});
		const mesh = new THREE.Mesh(geometry, material);

		return mesh;
	}

	// Inspiration: https://meshbg-1xcve0hlq-chasedavis.vercel.app/0.615577921549203
	function main() {
		const gui = new GUI();
		const canvasEl = document.querySelector('#c') as HTMLCanvasElement;
		const scene = new THREE.Scene();

		/** AXIS HELPER */
		const axisHelper = new THREE.AxesHelper(5);
		scene.add(axisHelper);

		/** GROUP */
		const group = new THREE.Group();
		const cube1 = cube();
		cube1.material.color.setHex(params.color);
		const cube2 = cube();
		cube2.position.x = 2;
		const cube3 = cube();
		cube3.position.x = -2;
		group.add(cube1, cube2, cube3);

		scene.add(group);
		gui.add(group.position, 'x').min(-3).max(3).step(0.01);
		gui.add(group.position, 'y').min(-3).max(3).step(0.01);
		gui.add(group.position, 'z').min(-3).max(3).step(0.01);
		gui.add(params, 'wireframe').onChange(() => {
			cube1.material.wireframe = params.wireframe;
		});
		gui.addColor(params, 'color').onChange(() => {
			group.children[0].material.color.set(params.color);
		});
		gui.add(params, 'subdivision')
			.min(1)
			.max(20)
			.step(1)
			.onFinishChange(() => {
                group.remove(...group.children);
				const mesh = cube();
				group.add(mesh);
			});

        params.spin = () => {
            gsap.to(group.rotation, { duration: 1, y: group.rotation.y + Math.PI * 2 });
        };
        gui.add(params, 'spin');

		const sizes = {
			width: canvasEl.clientWidth,
			height: canvasEl.clientHeight
		};

		/** CAMERA */
		const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
		camera.position.z = 3;
		scene.add(camera);

		/** RENDERER */
		const renderer = new THREE.WebGLRenderer({ canvas: canvasEl });
		// renderer.setSize(sizes.width, sizes.height);

		/** CONTROLS */
		const controls = new OrbitControls(camera, canvasEl);
		controls.enableDamping = true;

		/** CLOCK */
		// gsap.to(group.position, { duration: 1, x: 2 });
		// gsap.to(group.position, { delay: 1, duration: 1, x: 0 });
		const clock = new THREE.Clock();

		/** ANIMATION */
		const tick = () => {
			if (resizeRendererToDisplaySize(renderer)) {
				const canvas = renderer.domElement;
				camera.aspect = canvas.clientWidth / canvas.clientHeight;
				camera.updateProjectionMatrix();
				renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
			}
			// const elapsedTime = clock.getElapsedTime();
			// camera.position.x = Math.sin(elapsedTime * 0.1 * Math.PI * 2) * 3;
			// camera.position.z = Math.cos(elapsedTime * 0.1 * Math.PI * 2) * 3;
			camera.lookAt(group.position);
			controls.update();
			renderer.render(scene, camera);
			window.requestAnimationFrame(tick);
		};

		tick();
	}

	onMount(() => {
		main();
	});
</script>

<canvas id="c" />

<style lang="postcss">
	#c {
		display: block;
		inline-size: 100%;
		block-size: 80vh;
		outline: none;
	}
</style>
