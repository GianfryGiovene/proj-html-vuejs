<template>
    <section>
        <div>
            <div>
                <TitleAndInfo :title="sectionTitle" :info="sectionInfo"/>
            </div>
            <div>
                <img :key="index" v-for="(img,index) in analysisImgs" :src="img" :alt="['analysis-',index]">
            </div>
            <div>
                <button>VIEW OUR WORK</button>
            </div>
        </div>
    </section>
</template>

<script>
import TitleAndInfo from '@/components/MainComponents/RecyclableComponents/TitleAndInfo.vue';
import caseStudy1 from '@/assets/case-study-gallery-1-1-800x600.jpg';
import caseStudy2 from '@/assets/case-study-gallery-2-800x600.jpg';
import caseStudy3 from '@/assets/case-study-gallery-3-1-800x600.jpg';
import caseStudy4 from '@/assets/case-study-gallery-4-1-800x600.jpg';
import caseStudy5 from '@/assets/case-study-gallery-5-1-800x600.jpg';
import caseStudy6 from '@/assets/case-study-gallery-6-1-800x600.jpg';

export default {
    name:'ThirdSection',
    components:{
        TitleAndInfo,
    },
    data(){
        return{
            sectionTitle:'Our Work',
            sectionInfo:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium adoloremque laudantium.',
            analysisImgs:[caseStudy3,caseStudy2,caseStudy1,caseStudy4,caseStudy5,caseStudy6],
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