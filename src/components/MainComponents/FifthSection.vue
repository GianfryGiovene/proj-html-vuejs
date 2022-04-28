<template>
    <section>
        <div class="container">
            <div class="row col-12 offset-0 col-md-6 offset-md-3 justify-content-center">
                <TitleAndInfo :title="sectionTitle" :info="sectionInfo"/>
            </div>
            <div class="flex-column flex-md-row justify-content-between gap-5">
                <!-- da mettere immagine dentro!!! -->
                <CardThirdType 
                class="col-12 col-md-4"
                :key="card.id" 
                v-for="card in cards" 
                :news="card" />
            </div>
            <div>
                <button>GO TO NEWS</button>
            </div>
        </div>
    </section>
</template>

<script>
import TitleAndInfo from '@/components/MainComponents/RecyclableComponents/TitleAndInfo.vue';
import CardThirdType from '@/components/MainComponents/RecyclableComponents/CardThirdType.vue';

export default {
    name:'FifthSection',
    components:{
        TitleAndInfo,
        CardThirdType,
    },
    data(){
        return{
            sectionTitle:'Our News',
            sectionInfo:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
            cards:[
                {
                    id: 1,
                    title:'Why You Need A SEO Agency Now',
                    data:'November 1st, 2017',
                    text:'A Lorem ipsuim dolor sit amet, consectetur adipiscing elit. IN et scelerisque sem. Nunc molestie neque augue, at gravida mi blandit'
                },
                {
                    id: 2,
                    title:'SEO Tips For Your Startup',
                    data:'November 1st, 2017',
                    text:'A Lorem ipsuim dolor sit amet, consectetur adipiscing elit. IN et scelerisque sem. Nunc molestie neque augue, at gravida mi blandit'
                },
                {
                    id: 3,
                    title:'Image Optimization For Your SIte',
                    data:'November 1st, 2017',
                    text:'A Lorem ipsuim dolor sit amet, consectetur adipiscing elit. IN et scelerisque sem. Nunc molestie neque augue, at gravida mi blandit'
                }
            ]
        }
    }
}
</script>

<style lang='scss' scoped>
@import '@/style/variables';
section{
    padding: 70px;
    background-color: $bg-general;
    & > div{
        & > div:nth-child(2){
            justify-content: center;
            margin: 60px 0;
            display: flex;
            gap: 40px;
            & > *{
                background-color: $bg-general;
            }
        }
        & > div:last-child{
            text-align: center;
            button{
                color: $white;
                padding: 5px 10px;
                border-radius: 25px;
                background-color: $bg-primary-button;
                border: none;
                &:hover{
                    filter: brightness(0.9)
            }
            }
        }
    }
}
</style>