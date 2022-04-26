<template>
    <section>
        <div>
            <div>
                <TitleAndInfo :title="sectionTitle" :info="sectionInfo"/>
            </div>
            <div>
                <CardFirstType 
                    :key="index" 
                    v-for="(card,index) in cards" 
                    :icon="card.icon" 
                    :title="card.title" 
                    :text="card.text"
                    :question="card.isThereALink"
                />
            </div>
            <div>
                <img src="@/assets/agency-seo-desk-front-1200x570.jpg" alt="front-desk">
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
        & > div{
            max-width:$max-width;
            margin: auto;
            & > div:first-child{
                width: 35%;
                margin: auto;
            }
            & > div:nth-child(2){
                margin: 40px 0 ;
                display: flex;
                gap: 100px;
                *{
                    width: calc(100% / 3);
                }
            }
            & > div:last-child{
                width: 100%;
                padding-bottom: 0;
            }
        }
        
    }
</style>