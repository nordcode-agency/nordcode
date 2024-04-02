<script lang="ts">
    import { onMount } from 'svelte';

    let container: HTMLDivElement | null
    let canvas: HTMLCanvasElement | null
    let ctx: CanvasRenderingContext2D | null;
    let raf: number;

    // @todo: listen to color scheme change?
    // document.documentElement.addEventListener('color-scheme-changed', (e) => {
    //     init(canvas?.width, canvas?.height);
    // });

    const init = (inlineSize: number, blockSize: number) => {
        if (!canvas || !ctx) {
            return;
        }

        canvas.setAttribute("width", inlineSize.toString());
        canvas.setAttribute("height", blockSize.toString());
        // const fgColor = getComputedStyle(document.documentElement).getPropertyValue("--color-text-default");
        // console.log(getComputedStyle(document.documentElement).getPropertyValue("--color-brand-primary-light-emphasis"));
        const fgColor = 'rgba(255,255,255,0.7)';
        ctx.shadowBlur = 0;

        if (raf) {
            cancelAnimationFrame(raf);
        }

        const count = Math.floor(inlineSize * blockSize / 20000);
        const stars: unknown[] = new Array({length: count});
        for (let i = 0; i < count; i++) {
            const x = Math.random() * inlineSize;
            const y = Math.random() * blockSize;
            const r = Math.random() * inlineSize / 500;
            stars[i] = new Star(x, y, r, fgColor);
        }

        raf = requestAnimationFrame(() => stepFn(stars as Star[], [inlineSize, blockSize]));
    };

    const stepFn = (stars: Star[], size: [number, number]) => {
        if (!ctx) {
            return;
        }

        ctx.clearRect(0, 0, size[0], size[1]);
        stars.forEach((star) => {
            star.move(size);
            star.draw();
        });

        raf = requestAnimationFrame(() => stepFn(stars, size));
    };

    class Star {
        private x: number;
        private y: number;
        private r: number;
        private baseColor: string;
        private currentColor: string;
        private coolDown = 0;

        constructor(x: number, y: number, r: number, color: string) {
            this.x = x;
            this.y = y;
            this.r = r;
            // @todo: randomize color
            this.baseColor = color;
            this.currentColor = color;
        }

        update(x: number, y: number, r: number, color: string) {
            this.x = x;
            this.y = y;
            this.r = r;
            this.baseColor = color;
            this.currentColor = color;
        }

        draw() {
            if (!ctx) {
                return;
            }

            const c= this.getColor()
            ctx.fillStyle = c;
            ctx.shadowColor = c;
            this.currentColor = c;
            ctx.shadowBlur = this.r * 2;

            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
            ctx.closePath();
            ctx.fill();

        }

        move(size: [number, number]) {
            this.x += Math.random() * -.01 * size[0] / 3000;
            this.y += Math.random() * -.05 * size[1] / 3000;

            if (this.x < 0) {
                this.x = size[0];
            }
            if (this.x > size[0]) {
                this.x = 0;
            }
            if (this.y < 0) {
                this.y = size[1];
            }
            if (this.y > size[1]) {
                this.y = 0;
            }

        }

        private getColor(): string {
            if (this.coolDown > 0) {
                this.coolDown--;
                return this.currentColor;
            }

            const random = Math.random();
            this.coolDown = 10;

            if (random < 0.01 * this.r) {
                return "#b1002f";
            } else if (random > 0.99 * this.r) {
                return "#0e2eff";
            } else {
                return this.baseColor;
            }
        }
    }

    onMount(() => {
        if (!container || !canvas) {
            return;
        }
        const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
            if (entry.contentBoxSize) {
                const { inlineSize, blockSize } = entry.contentBoxSize[0];
                init(inlineSize, blockSize);
            }
        }
    });

        resizeObserver.observe(container);
        ctx = canvas.getContext("2d");
  });

</script>

<div class="container" bind:this={container}>
   <canvas bind:this={canvas}>
</div>

<style>
	canvas {
		inline-size: 100%;
		block-size: 100%;
	}

	.container {
        position: absolute;
        inset: 0;
	}
</style>
