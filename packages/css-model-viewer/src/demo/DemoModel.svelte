<div class="demo-model">
    <div class="side"></div>
    <div class="side"></div>
    <div class="side"></div>
    <div class="side"></div>
    <div class="side"></div>
    <div class="side"></div>
    <div class="outer -top"></div>
    <div class="outer -bottom"></div>
</div>


<style>
    .demo-model {
        --sides: 6;
        --radius: 5em;
        --side-height: clamp(30px, 15vw, 100px);
        --side-width: calc(2 * var(--radius) * tan(pi / var(--sides)));
        --translate-correction: calc(var(--radius) * (1 - tan(pi / var(--sides))));

        position: relative;
        width: calc(var(--radius) * 2);
        height: var(--side-height);
    }

    .side {
        --rotation-value: calc((360 / var(--sides)) * var(--side-n) * 1deg);
        position: absolute;
        width: var(--side-width);
        height: var(--side-height);
        border-block: 2px solid black;
        border-inline: 1px solid black;
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.02);
        display: flex;
        transform: translateX(var(--translate-correction)) rotateY(var(--rotation-value)) translateZ(var(--radius));
    }

    .side:nth-child(1) {
        --side-n: 1;
    }
    .side:nth-child(2) {
        --side-n: 2;
    }
    .side:nth-child(3) {
        --side-n: 3;
    }
    .side:nth-child(4) {
        --side-n: 4;
    }
    .side:nth-child(5) {
        --side-n: 5;
    }
    .side:nth-child(6) {
        --side-n: 6;
    }
</style>
