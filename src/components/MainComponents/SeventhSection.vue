<template>
    <section>
        <div>
            <TitleAndInfo :title="sectionTitle" :info="sectionInfo" />
        </div>
        <button>CONTACT US NOW</button>
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
    color: $orange;
    padding: 60px 0;
    background-image: url('@/assets/CTA-seo-1.jpg');
    background-size:cover;
    text-align: center;
    div{
        
    }
    button{
        color: $white;
        border-radius: 20px;
        padding: 5px 8px;
        border: none;
        background-color: $bg-primary-button;
    }
}
</style>