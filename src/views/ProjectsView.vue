<template>
    <div id="projects">
        <AutoGenerate/>
    </div>
</template>

<script>
import '@/assets/css/main.css'
import AutoGenerate from '@/components/Content/AutoGenerate.vue';

export default {
    name: 'ProjectsView',
    components: {
        AutoGenerate
    }
}
</script>

<style>

</style>