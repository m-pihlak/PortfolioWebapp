<template>
    <div id="projects">
        <h1>My Projects</h1>
        <ContentBlock>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, voluptatibus!
            </p>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur aliquid dolores quidem.
            </p>
            <p>
                Lorem ipsum dolor sit amet.
            </p>
        </ContentBlock>
    </div>
</template>

<script>
import '@/assets/css/main.css'
import ContentBlock from '@/components/Content/ContentBlock.vue';

export default {
    name: 'ProjectsView',
    components: {
        ContentBlock
    }
}
</script>

<style>

</style>