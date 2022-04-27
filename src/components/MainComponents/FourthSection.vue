<template>
    <section>
        <div>
            <div>
                <TitleAndInfo :title="sectionTitle" :info="sectionInfo"/>
            </div>
            <div>
                <CardSecondType :key="card.type" v-for="card in cards" :info="card"/>
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
    & > div{
        max-width: $max-width;
        margin: auto;
        & > div:first-child{
            width: 40%;
            margin: auto;
            color: $white;
        }
        & > div:last-child{
            margin-top: 60px;
            display: flex;
            justify-content: center;
            gap: 20px;
            & > *{
                width: calc(100% / 4 - 4rem);
            }
        }
    }
}
</style>