<template>
    <div class="nav_button">
        <div class="svg_placeholder_bottom">
            <svg width="1188" height="323" viewBox="0 0 1188 323" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M862 2.49994C452.685 -5.57525 353.831 27.4647 120.5 69.9999C529.021 25.5336 721.671 38.5872 1057.5 69.9999C599.174 73.544 358.117 94.0739 0.5 215C517.279 127.697 764.795 147.751 1187 215C706.441 210.199 463 184.5 73 322C461.912 264.089 564 236 977.5 294"/>
            </svg>
        </div>
        <button @click="console.log('kaka')">
            {{ innerText }}
        </button>
        <div class="svg_placeholder_top">
            <svg width="1188" height="323" viewBox="0 0 1188 323" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M862 2.49994C452.685 -5.57525 353.831 27.4647 120.5 69.9999C529.021 25.5336 721.671 38.5872 1057.5 69.9999C599.174 73.544 358.117 94.0739 0.5 215C517.279 127.697 764.795 147.751 1187 215C706.441 210.199 463 184.5 73 322C461.912 264.089 564 236 977.5 294"/>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavButton',
    props: {
        content: String,
        
    },
    data: () => ({
        innerText: null
    }),
    mounted() {
        this.innerText = this.$slots.default[0]?.text
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap');

.nav_button {
    height: var(--nav-button-height);
    width: var(--nav-button-width);
    display: grid;
    & > * {
        grid-area: 1/1;
        width: 100%s;
    }
}

button {
    position: relative;
    cursor: pointer;

    background-color: var(--primary);
    border: 0;
    width: fill;
    height: fill;

    transition: ease-in 50ms;

    border-radius: 4px;

    
    font-family: "Orbitron", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    font-size: 24px;
    color:white;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}


.svg_placeholder_top {
    mix-blend-mode: lighten;
    background: white;
    border-radius: 4px;
    opacity: 0;
}
.svg_placeholder_bottom {
    mix-blend-mode: normal;
}

.svg_placeholder_top svg {
    stroke:black;
}

.svg_placeholder_bottom svg {
    stroke: var(--primary);
}

.svg_placeholder_top, 
.svg_placeholder_bottom {
    pointer-events: none;
}

svg {
    position: fixed;
    width: calc(var(--nav-button-width)*1.25);
    height: calc(var(--nav-button-height)*1.25);
    overflow: visible;
    margin-left: calc(var(--nav-button-width)*-0.625);
    margin-top: calc(var(--nav-button-height)*-0.125);
}


/*
Animation
*/

path {
    stroke-width: 80;
    stroke-linejoin: round;
    stroke-linecap: round;
    stroke-dasharray: 5988.9453125, 5988.9453125;
    stroke-dashoffset: 5988.9453125;
    animation: linear 0.2s erase both;
}

.nav_button:active .svg_placeholder_top {
    mix-blend-mode:exclusion;
    background-color: var(--secondary-third);
}

.nav_button:hover path {
    animation: linear 0.2s draw both;
}

.nav_button:hover button {
    background-color: var(--secondary);
    color: var(--dark);
}

.nav_button:hover .svg_placeholder_top {
    opacity: 100%;
}

@keyframes draw {
    from {
        stroke-dashoffset: 5988.9453125;
    }
    to {
        stroke-dashoffset: 0;
    }
}

@keyframes erase {
    to {
        stroke-dashoffset: 5988.9453125;
    }
    from {
        stroke-dashoffset: 0;
    }
}

</style>