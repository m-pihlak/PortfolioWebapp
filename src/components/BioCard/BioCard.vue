<template>
    <div class="bio_card">
        <ContentCircle>
            <img src="@/assets/images/pfp/pilt2.png"/>
        </ContentCircle>
        <ContentBlock>
            <p style="font-family: 'Press Start 2P';font-size:14px; color:var(--primary); margin-top: 0;">
                Merili Pihlak
            </p>
            <div class="contacts" v-for="(item, index) in contacts" :key="index" style="display:flex; flex-direction: row;align-items: center;">
                <img :src="item.img" v-if="!item.style"/>
                <img :src="item.img" v-else :style="item.style"/>
                <p v-if="!item.link">
                    {{ item.text }}
                </p>
                <a v-else :href="item.link" target="_blank">
                    {{ item.text }}
                </a>
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
                img: "./svg/email_logo.svg",
                text: "merili.pihlak@gmail.com",
                link: "mailto: merili.pihlak@gmail.com",
                style: "filter: invert(100%);"
            },
            {
                img: "./svg/github-mark-white.svg",
                text: "m-pihlak",
                link: "https://github.com/m-pihlak"
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

.contacts {
    margin-bottom: 16px;
}
.contacts img {
    height: 16px;
    width: auto;
    margin-right: calc(var(--spacing)/4);
}
a, .contacts p {
    color: var(--secondary);
}
a:visited {
    color: var(--secondary-third);
}
a:hover {
    color: var(--secondary-second);
}

.bio_card {
    font-family: "Josefin Sans", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color:white;
    white-space: nowrap;

    overflow: hidden;

    background-color: color-mix(in srgb, var(--dark), transparent 20%);
    width: var(--bio-card-width);
    height: var(--bio-card-height);
    
    /*border: var(--primary-border);*/
    border-radius: 4px;

    /*box-shadow: 0px 0px 8px 0px var(--primary) inset; */
    box-shadow: 4px 4px 16px 4px black;

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
  