<template>
    <div class="bio_card">

        <template v-for="(child, index) in children()">
            <component :is="child" :key="index"></component>
        </template>
    </div>
</template>
  
<script>
import Vue from 'vue';
import ContactItem from './ContactItem.vue'

export default {
    name: 'BioCard',
    methods: {
        children() {
            let ContactClass = Vue.extend(ContactItem);
            let newHeader = new ContactClass({});

            return [
            newHeader
            ];
        },
    },
    components: {
        ContactItem
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div {
    background-color: var(--dark);
    width: var(--bio-card-width);
    height: var(--bio-card-height);
    border: var(--primary-border);
    border-radius: 4px;
}

@media screen and (max-width: 1200px) {
    div {
        height: calc(var(--bio-card-height) - var(--nav-button-height) - 40px);
    }
}
</style>
  