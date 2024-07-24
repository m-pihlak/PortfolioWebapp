<template>
    <div id="aboutme">
        <h1>About Me</h1>
        <ContentBlock>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur necessitatibus pariatur, dolores odio magnam excepturi cum sint at, id adipisci tempora inventore tenetur nisi. Velit ipsa labore ad eum, cupiditate reprehenderit, dicta earum amet corrupti aliquid pariatur reiciendis enim beatae quaerat esse vel deserunt tenetur sed neque veritatis molestias odio! Enim nulla nihil eligendi reprehenderit. Consequuntur natus delectus inventore maxime quod ipsum quaerat repellendus totam sapiente fuga, blanditiis incidunt! Facilis, cumque dolorum! Porro cum voluptas facere ratione quis, nihil praesentium consectetur at ullam eveniet quas cumque odit. Voluptatem ea minima, sapiente nulla assumenda aut ipsam dolore molestiae qui accusamus sed.
        </ContentBlock>
        <ContentBlock>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur necessitatibus pariatur, dolores odio magnam excepturi cum sint at, id adipisci tempora inventore tenetur nisi. Velit ipsa labore ad eum, cupiditate reprehenderit, dicta earum amet corrupti aliquid pariatur reiciendis enim beatae quaerat esse vel deserunt tenetur sed neque veritatis molestias odio! Enim nulla nihil eligendi reprehenderit. Consequuntur natus delectus inventore maxime quod ipsum quaerat repellendus totam sapiente fuga, blanditiis incidunt! Facilis, cumque dolorum! Porro cum voluptas facere ratione quis, nihil praesentium consectetur at ullam eveniet quas cumque odit. Voluptatem ea minima, sapiente nulla assumenda aut ipsam dolore molestiae qui accusamus sed.
        </ContentBlock>
        <ContentBlock>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur necessitatibus pariatur, dolores odio magnam excepturi cum sint at, id adipisci tempora inventore tenetur nisi. Velit ipsa labore ad eum, cupiditate reprehenderit, dicta earum amet corrupti aliquid pariatur reiciendis enim beatae quaerat esse vel deserunt tenetur sed neque veritatis molestias odio! Enim nulla nihil eligendi reprehenderit. Consequuntur natus delectus inventore maxime quod ipsum quaerat repellendus totam sapiente fuga, blanditiis incidunt! Facilis, cumque dolorum! Porro cum voluptas facere ratione quis, nihil praesentium consectetur at ullam eveniet quas cumque odit. Voluptatem ea minima, sapiente nulla assumenda aut ipsam dolore molestiae qui accusamus sed.
        </ContentBlock>
    </div>
</template>

<script>
import '@/assets/css/main.css'
import ContentBlock from '@/components/Content/ContentBlock.vue';

export default {
    name: 'AboutMe',
    components: {
        ContentBlock
    }
}
</script>

<style>
#aboutme > * {
    margin-bottom: var(--spacing);
}
</style>