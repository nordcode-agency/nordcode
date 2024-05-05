<script lang="ts">
	// import gsap from "gsap";
	import { onMount } from "svelte";
    import * as THREE from "three";
    import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

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
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const mesh = new THREE.Mesh(geometry, material);

        return mesh;
    }

    // Inspiration: https://meshbg-1xcve0hlq-chasedavis.vercel.app/0.615577921549203
    function main() {
        const canvasEl= document.querySelector('#c') as HTMLCanvasElement;
        const scene = new THREE.Scene();

        /** AXIS HELPER */
        const axisHelper = new THREE.AxesHelper(5);
        scene.add(axisHelper);

        /** GROUP */
        const group = new THREE.Group();
        const cube1 = cube();
        const cube2 = cube();
        cube2.position.x = 2;
        const cube3 = cube();
        cube3.position.x = -2;
        group.add(cube1, cube2, cube3);

        scene.add(group);

        const sizes = {
            width: canvasEl.clientWidth,
            height: canvasEl.clientHeight,
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
            }
            // const elapsedTime = clock.getElapsedTime();
            // camera.position.x = Math.sin(elapsedTime * 0.1 * Math.PI * 2) * 3;
            // camera.position.z = Math.cos(elapsedTime * 0.1 * Math.PI * 2) * 3;
            camera.lookAt(group.position);
            controls.update();
            renderer.render(scene, camera);
            window.requestAnimationFrame(tick);
        }

        tick();
    }

    onMount(() => {
        main();
    });
</script>

<canvas id="c"></canvas>

<style lang="postcss">
    #c {
        display: block;
        inline-size: 100%;
        block-size: 80vh;
        outline: none;
    }
</style>
