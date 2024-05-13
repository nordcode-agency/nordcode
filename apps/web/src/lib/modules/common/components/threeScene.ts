import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import GUI from 'lil-gui';
import gsap from 'gsap';
import imageUrl from '$lib/assets/color.jpg';
import envMapUrl from '$lib/assets/2k.hdr?url';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'

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

// Inspiration: https://meshbg-1xcve0hlq-chasedavis.vercel.app/0.615577921549203
export function main() {
    const gui = new GUI();
    const canvasEl = document.querySelector('#c') as HTMLCanvasElement;
    const scene = new THREE.Scene();

    const params = {
		color: 0x00ff00,
		subdivision: 2,
		wireframe: false,
        lightIntensity: 3,
	};

    /** TEXTURE */
    const loadingManager = new THREE.LoadingManager();
    const textureLoader = new THREE.TextureLoader(loadingManager);
    const doorTextureColor = textureLoader.load(imageUrl);
    doorTextureColor.colorSpace = THREE.SRGBColorSpace;

	function createCube() {
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
            map: doorTextureColor,
		});
		const mesh = new THREE.Mesh(geometry, material);

		return mesh;
	}

    /** AXIS HELPER */
    const axisHelper = new THREE.AxesHelper(5);
    scene.add(axisHelper);

    /** GROUP */
    const group = new THREE.Group();
    const cube = createCube();
    cube.material.color.setHex(params.color);
    const plane = new THREE.Mesh(
        new THREE.PlaneGeometry(1, 1),
        new THREE.MeshNormalMaterial()
    );
    plane.position.x = 2;
    plane.material.side = THREE.DoubleSide;

    /** TORUS */
    const torus = new THREE.Mesh(
        new THREE.TorusGeometry(0.3, 0.2, 16, 32),
        // new THREE.MeshLambertMaterial({ color: 0xff6347 })
        // new THREE.MeshPhongMaterial({ color: 0xFFFFFF })
        // new THREE.MeshStandardMaterial({ color: 0xFFFFFF })
        new THREE.MeshPhysicalMaterial({ color: 0xFFFFFF })
    );
    torus.position.x = -2;
    // torus.material.transparent = true;
    // torus.material.opacity = 0.5;
    // torus.material.shininess = 100
    // torus.material.map = doorTextureColor;
    torus.material.specular = new THREE.Color(0x1188ff);
    torus.material.metalness = 0.7;
    torus.material.roughness = 0.2;
    torus.material.transmission = 1;
    torus.material.ior = 1.5;
    torus.material.thickness = 0.5;
    group.add(cube, plane, torus);
    scene.add(group);

    /** LIGHTNING */
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    const pointLight = new THREE.PointLight(0xffffff, params.lightIntensity);
    scene.add(ambientLight, pointLight);

    /** RGBE Loader */
    const rgbeLoader = new RGBELoader();
    rgbeLoader.load(envMapUrl, (environmentMap) => {
        environmentMap.mapping = THREE.EquirectangularReflectionMapping;
        scene.background = environmentMap;
        scene.environment = environmentMap;
    });

    /** GUI */
    const objects = gui.addFolder('Objects');
    objects.add(group.position, 'x').min(-3).max(3).step(0.01);
    objects.add(group.position, 'y').min(-3).max(3).step(0.01);
    objects.add(group.position, 'z').min(-3).max(3).step(0.01);
    const lightFolder = gui.addFolder('Light')
    lightFolder.add(pointLight.position, 'x').min(-3).max(3).step(0.01);
    lightFolder.add(pointLight.position, 'y').min(-3).max(3).step(0.01);
    lightFolder.add(pointLight.position, 'z').min(-3).max(3).step(0.01);
    lightFolder.add(params, 'lightIntensity').min(0).max(10).step(0.01).onChange(() => {
        pointLight.intensity = params.lightIntensity;
    });
    const guiTorus = gui.addFolder('Torus');
    guiTorus.add(torus.material, 'metalness').min(0).max(1).step(0.0001);
    guiTorus.add(torus.material, 'roughness').min(0).max(1).step(0.0001);
    guiTorus.add(torus.material, 'transmission').min(0).max(1).step(0.0001);
    guiTorus.add(torus.material, 'ior').min(1).max(2).step(0.0001);
    guiTorus.add(torus.material, 'thickness').min(0).max(1).step(0.0001);

    // guiTorus.add(torus.material, 'shininess').min(0).max(200).step(1);
    gui.add(params, 'wireframe').onChange(() => {
        cube.material.wireframe = params.wireframe;
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
        const elapsedTime = clock.getElapsedTime();
        torus.rotation.y = elapsedTime;
        torus.rotation.x = elapsedTime * -1;
        // camera.position.x = Math.sin(elapsedTime * 0.1 * Math.PI * 2) * 3;
        // camera.position.z = Math.cos(elapsedTime * 0.1 * Math.PI * 2) * 3;
        camera.lookAt(group.position);
        controls.update();
        renderer.render(scene, camera);
        window.requestAnimationFrame(tick);
    };

    tick();
}
