<template>
    <div class="content_block">
        <slot></slot>
    </div>
</template>
  
<script>
export default {
    name: 'ContentBlock'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.content_block {
    padding: calc(var(--spacing));
    background-color: var(--dark);
    width: fill;
    border-top: var(--primary-border);
    border-left: var(--primary-border);

    border-radius: 4px;

    box-shadow: 4px 4px 8px -4px var(--primary) inset;
}


</style>
  