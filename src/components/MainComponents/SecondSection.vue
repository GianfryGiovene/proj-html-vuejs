<template>
    <section>
        <div class="container">
            <div class="row col-12 offset-0 col-md-6 offset-md-3 justify-content-center">
                <TitleAndInfo :title="sectionTitle" :info="sectionInfo"/>
            </div>
            <div class="row justify-content-between gap-5">
                <CardFirstType
                    class="col-12 col-md-2"
                    :key="index" 
                    v-for="(card,index) in cards" 
                    :icon="card.icon" 
                    :title="card.title" 
                    :text="card.text"
                    :question="card.isThereALink"
                />
            </div>
        </div>
    </section>
</template>

<script>
import TitleAndInfo from '@/components/MainComponents/RecyclableComponents/TitleAndInfo.vue';
import CardFirstType from '@/components/MainComponents/RecyclableComponents/CardFirstType.vue';

export default {
    name:'SecondSection',
    components:{
        TitleAndInfo,
        CardFirstType,
    },
    data(){
        return{
            sectionTitle: 'See Our Top Notch Services',
            sectionInfo: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
            cards: [
                {
                    icon:'fab fa-google',
                    title:'Google SEO',
                    text:'Aliquam non elit lacus. Praesent aliquet, ipsum id scelerisque convallis, mi ligula euismod odio, vel dictum mi risus a mi.',
                    isThereALink: true,
                },
                {
                    icon:'fas fa-cog',
                    title:'Brand Strategy',
                    text:'Aliquam non elit lacus. Praesent aliquet, ipsum id scelerisque convallis, mi ligula euismod odio, vel dictum mi risus a mi.',
                    isThereALink: true,
                },
                {
                    icon:'fas fa-building',
                    title:'Local SEO',
                    text:'Aliquam non elit lacus. Praesent aliquet, ipsum id scelerisque convallis, mi ligula euismod odio, vel dictum mi risus a mi.',
                    isThereALink: true,
                },
                {
                    icon:'fas fa-chart-line',
                    title:'SEO Analysis',
                    text:'Aliquam non elit lacus. Praesent aliquet, ipsum id scelerisque convallis, mi ligula euismod odio, vel dictum mi risus a mi.',
                    isThereALink: true,
                },
            ],
        }
    }
}
</script>

<style lang='scss' scoped>
@import '@/style/variables';
section{
    color: $white;
    background-color: #051745;
    background-image: url('@/assets/pattern_background.png');
    background-size: contain;
    background-position: top;
    & > div{
        padding-top: 80px;
        & > div:last-child{
            padding: 30px 0 80px ;
            & > *{
                background-color: #1a236c;
            }
        }
    }
}
</style>