<template>
    <div class="bio_card">
        <ContentCircle>
            image
        </ContentCircle>
        <ContentBlock>
            <p style="font-size:18px; color:var(--primary); margin-top: 0;">
                Merili Pihlak
            </p>
            <div v-for="(item, index) in contacts" :key="index" style="display:flex; flex-direction: row;align-items: center;">
                <img src="a" style="margin-right: calc(var(--spacing)/4);"/>
                <p>
                    {{ item.text }}
                </p>
            </div>
        </ContentBlock>
    </div>
</template>
  
<script>
import ContentBlock from '../Content/ContentBlock.vue';
import ContentCircle from '../Content/ContentCircle.vue';

export default {
    name: 'BioCard',
    data: () => ({
        contacts: [
            {
                img: "",
                text: "merili.pihlak@gmail.com"
            }
        ]
    }),
    components: {
        ContentCircle,
        ContentBlock
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.bio_card {
    font-family: "Orbitron", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    font-size: 12px;
    color:white;
    white-space: nowrap;

    overflow: hidden;

    background-color: var(--dark);
    width: var(--bio-card-width);
    height: var(--bio-card-height);
    
    border: var(--primary-border);
    border-radius: 4px;

    box-shadow: 0px 0px 8px 0px var(--primary) inset;

    display: flex;
    flex-direction: column;
    align-items: center;
}

.bio_card > * {
    margin: calc(var(--spacing));
}


@media screen and (max-width: 1200px) {
    .bio_card {
        height: calc(var(--bio-card-height) - var(--nav-button-height) - 40px);
    }
}

@media screen and (min-width: 801px) {
    /* width */
    ::-webkit-scrollbar {
        width: 4px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: none;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background: var(--secondary-second);
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: var(--secondary-third);
    }
    .bio_card {
        overflow-y: scroll;
    }
}

@media screen and (max-width: 800px) {
    .bio_card {
        margin-bottom: var(--spacing);
        height: auto;
        min-height: 100% !important;
    }
}


</style>
  