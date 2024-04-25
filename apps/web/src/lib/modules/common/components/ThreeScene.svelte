<script lang="ts">
	import { onMount } from "svelte";
    import * as THREE from "three";

    // Inspiration: https://meshbg-1xcve0hlq-chasedavis.vercel.app/0.615577921549203
    function main() {
        const canvasEl= document.querySelector('#c');
        const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvasEl });

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
        // const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
        const geometry = new THREE.PlaneGeometry(2, 1);

        // LIGHT
        const color = 0xFFFFFF;
        const intensity = 3;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(-1, 2, 4);
        scene.add(light);

        // Assign colors to each vertex
        const colors = [];
        colors.push(new THREE.Color(0xff0000)); // Red
        colors.push(new THREE.Color(0x00ff00)); // Green
        colors.push(new THREE.Color(0x0000ff)); // Blue
        colors.push(new THREE.Color(0xffff00)); // Yellow

        // for (let i = 0; i < geometry.vertices.length; i++) {
        //     geometry.colors[i] = colors[i];
        // }

        function makeInstance(geometry, color, x) {
            // Create the material
            // const material = new THREE.MeshBasicMaterial({ vertexColors: true });
            const material = new THREE.MeshPhongMaterial({color, shininess: 150});
            
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

        function resizeRendererToDisplaySize(renderer) {
            const canvas = renderer.domElement;
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;
            const needResize = canvas.width !== width || canvas.height !== height;
            if (needResize) {
                renderer.setSize(width, height, false);
            }
            return needResize;
        }


        // ANIMATION
        function render(time: number) {
            time *= 0.001;  // convert time to seconds
            if (resizeRendererToDisplaySize(renderer)) {
                const canvas = renderer.domElement;
                camera.aspect = canvas.clientWidth / canvas.clientHeight;
                camera.updateProjectionMatrix();
            }
            
            cubes.forEach((cube, ndx) => {
                const speed = 1 + ndx * .05;
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

<style lang="postcss">
    #c {
        display: block;
        inline-size: 100%;
        block-size: 80vh;
    }
</style>
