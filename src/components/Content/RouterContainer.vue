<template>
    <div class="router_container">
        <Transition name="slide" mode="out-in">
            <RouterView></RouterView>
        </Transition>
    </div>
</template>
  
<script>
import { RouterView } from 'vue-router';


export default {
    name: 'RouterContainer',
    components: {
        RouterView
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.router_container > div > * {
    margin-bottom: var(--spacing);
}

.router_container > div {
    margin:  var(--router-container-content-margin) 0 var(--router-container-content-margin) 0;
    padding-right: var(--spacing);
    padding-left: var(--spacing);
    box-shadow: 0px -8px 8px -4px black inset;
    height: calc(var(--router-container-height) - var(--router-container-content-margin) - var(--nav-button-height));
}
    

.router_container {
    background-color: color-mix(in srgb, var(--dark), transparent 20%);;
    width: var(--router-container-width);
    height: var(--router-container-height);
    /*border-top: var(--primary-border);
    border-left: var(--primary-border);*/

    border-radius: 4px;

    /*box-shadow: 4px 4px 8px -4px var(--primary) inset;*/
    box-shadow: 4px 4px 16px 4px black;
}

main {
    will-change: transform, opacity;
}

.slide-enter-from,
.slide-leave-to {
    opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
    transition: 0.15s opacity;
}

@media screen and (min-width: 801px) {
    /* width */
    ::-webkit-scrollbar {
    width: 12px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: var(--primary-second);
        border-radius: 4px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background: var(--secondary-second);
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: var(--secondary-third);
    }
    .router_container > div {
        overflow-y: scroll;
    }
}


</style>
  