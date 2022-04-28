<template>
    <section>
        <div class="container">
            <div class="row col-12 offset-0 col-md-6 offset-md-3 justify-content-center">
                <TitleAndInfo :title="sectionTitle" :info="sectionInfo"/>
            </div>
            <div class="row flex-column flex-md-row justify-content-between gap-5">
                <CardSecondType 
                class="col-12 col-md-2"
                :key="card.type" 
                v-for="card in cards" 
                :info="card"/>
            </div>
        </div>
    </section>
</template>

<script>
import TitleAndInfo from '@/components/MainComponents/RecyclableComponents/TitleAndInfo.vue';
import CardSecondType from '@/components/MainComponents/RecyclableComponents/CardSecondType.vue';

export default {
    name:'FourthSection',
    components:{
        TitleAndInfo,
        CardSecondType
    },
    data(){
        return{
            sectionTitle:'OurPlans',
            sectionInfo:'Sed ut persiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
            cards:[
                {
                    type: 'Standard',
                    price: '19',
                    projects: '5 Projects',
                    storage: '5 GB Storage',
                    subscription: 'Unlimited Users'
                },
                {
                    type: 'Premium',
                    price: '29',
                    projects: '10 Projects',
                    storage: '15 GB Storage',
                    subscription: 'Unlimited Users'
                },
                {
                    type: 'Professional',
                    price: '39',
                    projects: '15 Projects',
                    storage: '30 GB Storage',
                    subscription: 'Unlimited Users'
                },
                {
                    type: 'Extreme',
                    price: '59',
                    projects: 'Unlimited Projects',
                    storage: 'Unlimited Storage',
                    subscription: 'Unlimited Users'
                },
            ]
        }
    }
}
</script>

<style lang='scss' scoped>
@import '@/style/variables';
section{
    padding: 70px 0;
    background-image: url('@/assets/background1.jpg');
    & > .container{
        & > div:first-child{
            color: $white;
        }
        & > div:last-child{
            margin-top: 60px;
        }
    }
}
</style>