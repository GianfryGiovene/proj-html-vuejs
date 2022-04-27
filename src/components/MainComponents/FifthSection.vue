<template>
    <section>
        <div>
            <div>
                <TitleAndInfo :title="sectionTitle" :info="sectionInfo"/>
            </div>
            <div>
                <CardThirdType :key="index" v-for="(card,index) in cards" :news="card" />
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
                    url: '@/assets/blog-post-6-700x441.jpg',
                    title:'Why You Need A SEO Agency Now',
                    data:'November 1st, 2017',
                    text:'A Lorem ipsuim dolor sit amet, consectetur adipiscing elit. IN et scelerisque sem. Nunc molestie neque augue, at gravida mi blandit'
                },
                {
                    title:'SEO Tips For Your Startup',
                    data:'November 1st, 2017',
                    text:'A Lorem ipsuim dolor sit amet, consectetur adipiscing elit. IN et scelerisque sem. Nunc molestie neque augue, at gravida mi blandit'
                },
                {
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
        max-width: $max-width;
        margin: auto;
        & > div:first-child{
            width: 45%;
            margin: auto;
        }
        & > div:nth-child(2){
            justify-content: center;
            margin: 60px 0;
            display: flex;
            gap: 40px;
            & > *{
                width: calc(100% / 3 - 3rem);
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
            }
        }
    }
}
</style>