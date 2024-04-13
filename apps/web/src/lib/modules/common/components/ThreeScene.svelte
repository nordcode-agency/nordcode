<script lang="ts">
	import { onMount } from "svelte";
    import * as THREE from "three";

    // Inspiration: https://meshbg-1xcve0hlq-chasedavis.vercel.app/0.615577921549203
    function main() {
        const canvas = document.querySelector('#c');
        const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });

        // CAMERA
        const fov = 75; // field of view
        const aspect = 2;  // the canvas default
        const near = 0.1; // near clipping plane
        const far = 5; // far clipping plane
        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        camera.position.z = 2;

        // SCENE
        const scene = new THREE.Scene();
        
        // BOX
        const boxWidth = 1;
        const boxHeight = 1;
        const boxDepth = 1;
        const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
        const material = new THREE.MeshPhongMaterial({color: 0x44aa88});
        const cube = new THREE.Mesh(geometry, material)

        // LIGHT
        const color = 0xFFFFFF;
        const intensity = 3;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(-1, 2, 4);
        scene.add(light);

        function makeInstance(geometry, color, x) {
            const material = new THREE.MeshPhongMaterial({color});
            
            const cube = new THREE.Mesh(geometry, material);
            scene.add(cube);
            
            cube.position.x = x;
            
            return cube;
        }

        const cubes = [
            makeInstance(geometry, 0x44aa88,  0),
            makeInstance(geometry, 0x8844aa, -2),
            makeInstance(geometry, 0xaa8844,  2),
        ];

        // ANIMATION
        function render(time) {
            time *= 0.001;  // convert time to seconds
            
            cubes.forEach((cube, ndx) => {
                const speed = 1 + ndx * .1;
                const rot = time * speed;
                cube.rotation.x = rot;
                cube.rotation.y = rot;
            });
            
            renderer.render(scene, camera);
            
            requestAnimationFrame(render);
        }
        requestAnimationFrame(render);
    }

    onMount(() => {
        main();
    });
</script>

<canvas id="c"></canvas>
