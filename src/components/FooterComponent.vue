<template>
    <footer class="container">
        <div class="row">
            <div class="logo">
                <img src="@/assets/logo_seo_1x.png" alt="">
            </div>
            <FooterNavBar class="foot-nav-bar" :navList="navBarList"/>
            <div class="info">
                <span>&copy; Copyright 2022 | Cantalupo Theme by <span id="author">GianCantalupo</span> | All Rights Reserved | Powered by <span id="powered-by">Vue Cli</span></span>
                <div >
                    <a :key="index" v-for="(social,index) in socials" :href="social.link"><font-awesome-icon   class="icon" :icon="social.icon" ></font-awesome-icon></a>
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
            socials:[
                {
                    icon:'fab fa-facebook',
                    link:'https://www.facebook.com/'
                },
                {
                    icon:'fab fa-instagram',
                    link:'https://www.instagram.com/'
                },
                {
                    icon:'fab fa-twitter',
                    link:'https://twitter.com/'
                },
                {
                    icon:'fab fa-youtube',
                    link:'https://www.youtube.com/'
                }],
        }
    }
}
</script>

<style lang='scss' scoped>
@import '@/style/variables';
footer{
    padding: 60px 0 20px;
    text-align: center;
    .foot-nav-bar{
        margin: 40px 0 40px;
    }
    .info{
        font-size: $p-small-size;
        #author, #powered-by{
            color: $orange;
            font-weight: $bold;
        }
        div{
            padding: 40px 0 0;
            display: flex;
            justify-content: center;
            gap: 20px;
            a{
                color: $dark-grey;
                font-size: $icon-size;
                &:hover{
                    color: $orange;
                }
            }
        }
    }
}
</style>