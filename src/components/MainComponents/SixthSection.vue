<template>
    <section>
        <div class="container ">
            <h3>What Our Clients Say</h3>
            <!-- carousel -->
            <div>
                <CarouselComponent :clients="clients" />
            </div>
            <div class="container">
                <FilmComponent />
            </div>
        </div>
    </section>
</template>

<script>
import CarouselComponent from '@/components/MainComponents/RecyclableComponents/CarouselComponent.vue'
import FilmComponent from '@/components/MainComponents/RecyclableComponents/FilmComponent.vue'

export default {
    name:'SixthSectionComponent',
    components:{
        CarouselComponent,
        FilmComponent,
    },
    data(){
        return{
            clients:[
                {
                    firstName:'Luis',
                    Surname:'Desalvo',
                    role:'CREO TECH',
                    text:'Ability proceeds from a fusion of skills, knowledge, understanding and imagination, consolidated by experiences.'
                },
                {
                    firstName:'Fiona',
                    Surname:'Desperado',
                    role:'RECRUITER',
                    text:'A Lorem ipsuim dolor sit amet, consectetur adipiscing elit. IN et scelerisque sem. Nunc molestie neque augue, at gravida mi blandit '
                },
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/style/variables';
section{
    padding: 80px 0;
    & > .container{
        text-align: center;
        h3{
            font-weight: $extraBold;
        }
        & > div:nth-child(2){
            margin: 60px 0;
        }
        & > div:last-child{
            border-top: 1px solid #f3f3f3;
            padding: 60px 0 20px;
        }
    }
}

</style>