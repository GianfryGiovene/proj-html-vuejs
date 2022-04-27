<template>
    <section>
        <div>
            <div>
                <TitleAndInfo :title="sectionTitle" :info="sectionInfo"/>
            </div>
            <div>
                <img :key="item" v-for="item in 6" :src="require(`@/assets/case-study-gallery-${item}-1-800x600.jpg`)" :alt="['analysis-'+item]">
            </div>
            <div>
                <button>VIEW OUR WORK</button>
            </div>
        </div>
    </section>
</template>

<script>
import TitleAndInfo from '@/components/MainComponents/RecyclableComponents/TitleAndInfo.vue';

export default {
    name:'ThirdSection',
    components:{
        TitleAndInfo,
    },
    data(){
        return{
            sectionTitle:'Our Work',
            sectionInfo:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium adoloremque laudantium.',
        }
    }
}
</script>

<style lang='scss' scoped>
@import '@/style/variables';
section{
    padding: 80px 0;
    & > div{
        max-width: $max-width;
        margin: auto;
        & > div:first-child{
            margin: auto;
            width: 40%;
        }
        & > div:nth-child(2){
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            img{
                width: calc(100% / 3 - 2rem);
            }
        }
        & > div:last-child{
            padding-top: 50px;
            text-align: center;
            button{
                color: $white;
                padding: 10px 20px;
                border: none;
                border-radius: 20px;
                background-color: $bg-primary-button;
            }
        }
    }
}
</style>