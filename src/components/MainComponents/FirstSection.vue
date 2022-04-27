<template>
    <section>
        <div class="container">
            <div class="row col-12 offset-0 col-md-6 offset-md-3 justify-content-center">
                <TitleAndInfo :title="sectionTitle" :info="sectionInfo"/>
            </div>
            <div class="row flex-column flex-md-row justify-content-between gap-5">
                <CardFirstType 
                    class="col-12 col-md-3"
                    :key="index" 
                    v-for="(card,index) in cards" 
                    :icon="card.icon" 
                    :title="card.title" 
                    :text="card.text"
                    :question="card.isThereALink"
                />
            </div>
            <div class="col-12">
                <img  class="w-100" src="@/assets/agency-seo-desk-front-1200x570.jpg" alt="front-desk">
            </div>
        </div>
    </section>
</template>

<script>
import TitleAndInfo from '@/components/MainComponents/RecyclableComponents/TitleAndInfo.vue';
import CardFirstType from '@/components/MainComponents/RecyclableComponents/CardFirstType.vue';


export default {
    name:'SectionComponent',
    components:{
        TitleAndInfo,
        CardFirstType,
    },
    data(){
        return{
            sectionTitle:'Meet The New Agency SEO Template From The Avada Team',
            sectionInfo:'Sed ut perspiciatis unde ominis iste natus error sit voluptatem accusantium doloremque laudantium.',
            cards:[
                {
                    icon:'fa-solid fa-road',
                    title:'Establish Goals',
                    text:'Aliquam non elit lacus. Praesent aliquet, ipsum id scelerisque convallis, mi ligula euismod odio, vel dictum mi risus a mi.',
                    isThereALink: false,

                },
                {
                    icon:'fa-solid fa-video',
                    title:'Work With a Team',
                    text:'Cras semper auctor aliquam. Sed porta sed lacus sit a,et consectetur. Lorem ipsum dolor sit amet, consectetur adipiscin.',
                    isThereALink: false,
                },
                {
                    icon:'fa-solid fa-tint',
                    title:'Get Results',
                    text:'Vestibulum scelerisque egestas lectus sit amet mostie. Donec consectetur cursus est sed blandit. Nunc sed risus lacus.',
                    isThereALink: false,
                }
            ],
        }
    }
}
</script>

<style lang='scss' scoped>
@import '@/style/variables';
    section{
        background-color: $bg-general;
        padding-top: 80px;
    }
</style>