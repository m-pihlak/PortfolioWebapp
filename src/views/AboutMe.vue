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
        grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
        grid-gap: var(--spacing);
    }

    .item-0,
    .item-1,
    .item-2 {
        height: min-content;
    }


    .item-0 {
        grid-row: 1;
        grid-column: 1;
    }

    .item-1 {
        grid-row: 2;
        grid-column: 1;
    }

    .item-2 {
        grid-row: 1/3;
        grid-column: 2;
        
        text-align: center;
        width: 100%;
    }

    .item-2 > img {
        width: 100%;
        border-radius: 4px;
    }

    @media screen and (max-width: 1380px) {
        .wrapper {
            grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        }

        .item-1 {
            grid-row: 2;
            grid-column: 1/3;
        }

        .item-2 {
            grid-row: 1;
            grid-column: 2;
            
            text-align: center;
            width: 100%;
        }
    }

    @media screen and (max-width: 1000px) {
        .wrapper {
            display: flex;
            flex-direction: column;
        }
    }
}

</style>