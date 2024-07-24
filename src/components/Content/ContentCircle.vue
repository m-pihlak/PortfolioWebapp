<template>
    <div class="content_circle">
        <slot></slot>
    </div>
</template>
  
<script>
export default {
    name: 'ContentCircle'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.content_circle {
    background-color: var(--dark);
    width: var(--content-circle-diameter);
    min-height: var(--content-circle-diameter);

    border: var(--primary-border);

    border-radius: var(--content-circle-diameter);

    box-shadow: 0px 0px 8px 0px var(--primary) inset;
    clip-path: circle(50%);
    display: flex;
    align-items: center;
    justify-content: center;
}

.content_circle > * {
    width: 100%;
    height: 100%;
    min-width: 100%;
    min-height: 100%;
}

</style>
  