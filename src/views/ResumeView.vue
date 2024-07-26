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
            <h2>Lorem</h2>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis sequi accusantium voluptatibus perspiciatis ut, harum quidem? Facere nisi blanditiis adipisci tenetur magni rem sunt magnam exercitationem sequi quis inventore iure eveniet, ipsum eos quaerat maiores est natus quasi reprehenderit dicta delectus? Expedita illo at harum assumenda accusantium voluptas eligendi doloribus.
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