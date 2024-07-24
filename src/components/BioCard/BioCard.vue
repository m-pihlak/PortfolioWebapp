<template>
    <div class="bio_card">
        <contact-item v-for="(stuff, index) in contacts" :key="index"></contact-item>
    </div>
</template>
  
<script>
import ContactItem from './ContactItem.vue'

export default {
    name: 'BioCard',
    data: () => ({
        contacts: []
    }),
    methods: {
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
  