<template>
    <div class="content_circle">
        <div class="image_container">
            <slot></slot>
        </div>
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
    height: var(--content-circle-diameter);

    /*border: var(--primary-border);*/

    border-radius: var(--content-circle-diameter);

    /*box-shadow: 0px 0px 8px 0px var(--primary) inset;*/
    box-shadow: 4px 4px 16px 4px black;
    display: flex;
    align-items: center;
    justify-content: center;
}

.image_container {
    width: var(--inner-circle-diameter);
    height: var(--inner-circle-diameter);
    clip-path: circle(50%);

    display: flex;
    align-items: center;
    justify-content: center;
}

.image_container > * {
    min-width: var(--inner-circle-diameter);
    min-height: var(--inner-circle-diameter);
    object-fit: cover;
}

</style>
  