<template>
    <div id="autogenerated" :class="'wrapper-' + this.$route.name.replace(' ', '-')">
        <div v-for="(section, index1) in this.content" :key="index1" :class="'section-' + index1">
            <h1 v-if="section.h1">{{ section.h1 }}</h1>
            <div class="wrapper">
            <ContentBlock v-for="(block, index2) in section.blocks" :key="index2" :class="'item-' + index2">
                <h2 v-if="block.title">{{ block.title }}</h2>
                <p v-for="(p, index3) in block.paragraphs" :key="index3">{{ p }}</p>
                <a v-if="block.link" :href="block.link.link">{{ block.link.alias }}</a>
                <img v-if="block.img" :src="block.img"/>
                <p v-if="block.desc" style="text-align: center;">{{ block.desc }}</p>
            </ContentBlock>
            </div>
        </div>
    </div>
</template>

<script>
import '@/assets/css/main.css'
import ContentBlock from '@/components/Content/ContentBlock.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'AutoGenerate',
    data() {
        return {
            content: []
        }
    },
    components: {
        ContentBlock
    },
    methods: {
        ...mapGetters([
            'getText'
        ]),
        ...mapActions([
            'updateTexts'
        ])
    },
    mounted() {
        this.updateTexts()
        this.content = this.getText()(this.$route.name)
    }
}
</script>

<style>
#autogenerated > div > * {
    margin-bottom: var(--spacing);
}
#autogenerated > div > .wrapper {
    display: grid;
    gap: var(--spacing);
}
</style>