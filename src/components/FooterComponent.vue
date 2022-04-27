<template>
    <footer>
        <div>
            <div class="logo">
                <img src="@/assets/logo_seo_1x.png" alt="">
            </div>
            <nav>
                <FooterNavBar :navList="navBarList"/>
            </nav>
            <div class="info">
                <span>&copy; Copyright 2022 | Cantalupo Theme by <span>GianCantalupo</span> | All Rights Reserved | Powere by <span>Vue Cli</span></span>
                <div>
                    <font-awesome-icon  :key="index" v-for="(social,index) in socials" class="icon" :icon="social" ></font-awesome-icon>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import FooterNavBar from '@/components/FooterComponents/FooterNavBar.vue';

export default {
    name:'FooterComponent',
    components:{
        FooterNavBar,
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
                },
                {
                    title:'Get In Touch Now',
                    isOver:false,
                }
            ],
            socials:['fab fa-facebook','fab fa-instagram','fab fa-twitter','fab fa-youtube'],
        }
    }
}
</script>

<style lang='scss' scoped>
@import '@/style/variables';
footer{
    padding: 60px 0 20px;
    text-align: center;
    nav{
        margin: 40px 0 40px;
    }
    .info{
        font-size: $p-small-size;
        div{
            color: $dark-grey;
            font-size: $icon-size;
            padding: 40px 0 0;
            display: flex;
            justify-content: center;
            gap: 20px;
        }
    }
}
</style>