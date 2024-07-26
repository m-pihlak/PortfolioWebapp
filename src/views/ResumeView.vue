<template>
    <div id="resume">
        <h1>My Experience</h1>
        <ContentBlock>
            <p>
                Lorem ipsum dolor sit amet.
            </p>
            <p>
                Lorem ipsum dolor sit.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur.
            </p>
        </ContentBlock>
        
        <h1>My Skills</h1>
        <ContentBlock>
            <p>
                Lorem ipsum dolor sit amet.
            </p>
            <p>
                Lorem ipsum dolor sit.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur.
            </p>
        </ContentBlock>
    </div>
</template>

<script>
import '@/assets/css/main.css'
import ContentBlock from '@/components/Content/ContentBlock.vue';

export default {
    name: 'ResumeView',
    components: {
        ContentBlock
    }
}
</script>

<style>

</style>