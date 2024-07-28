<template>
    <div id="aboutme">
        <AutoGenerate/>
    </div>
</template>

<script>
import '@/assets/css/main.css'
import AutoGenerate from '@/components/Content/AutoGenerate.vue';


export default {
    name: 'AboutMe',
    components: {
        AutoGenerate
    }
}
</script>

<style>

.wrapper-about-me {
    .wrapper {
        display: grid;
        grid-template-areas: 
                "a a c"
                "b b c";
        
        grid-gap: var(--spacing);
    }

    .item-0,
    .item-1,
    .item-2 {
        height: min-content;
    }


    .item-0 {
        grid-row: 1;
        grid-column: 1/3;
    }

    .item-1 {
        grid-row: 2;
        grid-column-start: 1;
        grid-column-end: -1;
    }

    .item-2 {
        grid-column: 3;
        grid-row-start: 1;
        grid-row-end: -1;
        
        text-align: center;
        width: 100%;
    }

    .item-2 > img {
        width: 100%;
        height: 100px;
    }
}

</style>