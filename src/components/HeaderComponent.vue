<template>
    <header>
        <NavBar :navList="navBarList"/>
    </header>
</template>

<script>
import NavBar from '@/components/HeaderComponents/NavBar.vue'
export default {
    name: 'HeaderComponent',
    components:{
        NavBar
    },
    data(){
        return{
            navBarList:[
                {
                    title:'Home',
                    isOver:false,
                },
                {
                    title:'Who We Are',
                    isOver:false,
                },
                {
                    title:'What We Do',
                    isOver:false,
                },
                {
                    title:'Where We Work',
                    isOver:false,
                }, 
                {
                    title:'Carrers',
                    isOver:false,
                },
                {
                    title:'News',
                    isOver:false,
                }
            ],
        }
    }
}
</script>

<style lang='scss' scoped>
    header{
        width: 100%;
        border: 1px solid blue;
        height: 800px;
        background-image: url('@/assets/1-hero-image.png');
        background-size: cover;
        background-position: center;
    }
</style>