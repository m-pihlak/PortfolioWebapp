<template>
    <div class="content_block">
        <Transition name="slide">
            <RouterView></RouterView>
        </Transition>
    </div>
</template>
  
<script>
import { RouterView } from 'vue-router';


export default {
    name: 'ContentBlock',
    components: {
        RouterView
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.content_block {
    background-color: var(--dark);
    width: var(--content-block-width);
    border-top: var(--primary-border);
    border-left: var(--primary-border);

    border-radius: 4px;
}

main {
    will-change: transform, opacity;
}

.slide-enter-from,
.slide-leave-to {
    opacity: 0;
    transform: translateY(100%);
}

.slide-enter-active,
.slide-leave-active {
    transition: 0.2s ease-out;
}

</style>
  