<template>
    <section>
        <div class="ggf-background"></div>
        <div class="container">
            <div>
            <TitleAndInfo :title="sectionTitle" :info="sectionInfo" />
            </div>
            <button>CONTACT US NOW</button>
        </div>
    </section>
</template>

<script>
import TitleAndInfo from '@/components/MainComponents/RecyclableComponents/TitleAndInfo.vue'
export default {
    name:'SeventhSection',
    components:{
        TitleAndInfo,
    },
    data(){
        return{
            sectionTitle:'Start Your Free Consultation',
            sectionInfo:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
        }
    }
}
</script>

<style lang='scss' scoped>
@import '@/style/variables';
section{
    color: $white;
    padding: 60px 0;
    text-align: center;
    position: relative;
    .ggf-background{
        filter: brightness(0.6);
        min-height: 300px;
        background-image: url('@/assets/CTA-seo-1.jpg');
        background-size:cover;
        background-position: center;
    }
    .container{
        position: absolute;
        width: 50%;
        height: 50%;
        top: 50%;
        left: 50%;
        transform: translate(- 50% , - 50%);
        z-index: 5000;
        button{
            margin-top: 15px ;
            color: $white;
            border-radius: 20px;
            padding: 5px 8px;
            border: none;
            background-color: $bg-primary-button;
            &:hover{
                filter: brightness(0.9)
            }
        }
    }
}
</style>