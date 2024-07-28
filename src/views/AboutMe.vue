<template>
    <div id="aboutme">
        <h1>About Me</h1>
        <div class="image-and-text">
            <ContentBlock class="item1">
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium et laudantium molestiae qui cumque perspiciatis aliquam, reiciendis expedita doloremque veritatis doloribus? Ea voluptate vero et laborum nesciunt explicabo incidunt animi consequuntur praesentium ullam cumque similique veniam nemo ipsam maiores harum ducimus iste quasi distinctio, nihil dolores architecto eius? Deleniti officia labore quasi illo tempora dolorum quaerat fuga voluptate. Laudantium obcaecati iusto nulla facilis earum deleniti nostrum. Explicabo aspernatur eum, ratione omnis laborum eligendi doloremque tempora a commodi fuga deleniti nesciunt aut dignissimos eos voluptatibus suscipit veniam similique porro iste necessitatibus asperiores voluptatum iure corporis! Sed magni est blanditiis ut dolore?
            </p>
            </ContentBlock>

            <ContentBlock class="item2">
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia officia architecto temporibus. Sed, neque? Porro voluptas sed fuga. Sit ullam ut pariatur laboriosam, in, corrupti laudantium molestiae nostrum officiis ratione vel cum neque debitis officia earum fugiat velit nobis culpa soluta dicta nesciunt voluptatibus! Odio, alias, reprehenderit minima provident eaque libero recusandae velit aliquam molestiae, omnis sed possimus praesentium quibusdam! Est recusandae nihil ipsum necessitatibus debitis id officiis reiciendis quam at voluptatibus quisquam rem repellat velit accusantium hic nulla eveniet possimus nemo asperiores, dolorum explicabo aperiam. Soluta delectus iure deleniti? Enim rerum molestiae reiciendis quia nostrum, modi facere fugiat ea?
            </p>
            </ContentBlock>

            <ContentBlock class="item3">
                <img src="@/assets/images/pfp/unnamed.jpg">
                <p>desc</p>
            </ContentBlock>
        </div>
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
.image-and-text {
    display: grid;
    grid-template-areas: 
            "a a c"
            "b b c";
    
    grid-gap: var(--spacing);
}

.item1,
.item2,
.item3 {
    height: min-content;
}


.item1 {
    grid-row: 1;
    grid-column: 1/3;
}

.item2 {
    grid-row: 2;
    grid-column-start: 1;
    grid-column-end: -1;
}

.item3 {
    grid-column: 3;
    grid-row-start: 1;
    grid-row-end: -1;
    
    text-align: center;
    width: 100%;
}

.item3 > img {
    width: 100%;
    height: 100px;
}




</style>