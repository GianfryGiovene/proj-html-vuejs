<template>
    <section>
        <div class="container">
            <div class="row col-12 offset-0 col-md-6 offset-md-3 justify-content-center">
                <TitleAndInfo :title="sectionTitle" :info="sectionInfo"/>
            </div>
            <div class="row flex-column flex-md-row justify-content-center gap-5">
                <img class="col-12 col-md-3" :key="item" v-for="item in 6" :src="require(`@/assets/case-study-gallery-${item}-1-800x600.jpg`)" :alt="['analysis-'+item]">
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
    background-color: $bg-general;
    & > div{
        & > div:first-child{
            margin: auto;
            width: 40%;
        }
        & > div:nth-child(2){
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            img{
                &:hover{
                    filter:hue-rotate(90deg);
                }
            }
        }
        & > div:last-child{
            padding-top: 50px;
            text-align: center;
            button{
                color: $white;
                padding: 8px 15px;
                border: none;
                border-radius: 20px;
                background-color: $bg-primary-button;
                &:hover{
                        filter: brightness(0.9)
                    }
            }
        }
    }
}
</style>