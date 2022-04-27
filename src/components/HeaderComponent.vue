<template>
    <header class="container-fluid">
        <NavBar  :navList="navBarList"/>
        <section class="jumbo-tron container row">
            <div class="col-6">
                <h2>SEM Campaigns Made Simple With Avada</h2>
                <p>Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu ornare erat. Carabitur pulvinar elit.</p>
                <button>BUY AVADA NOW</button>
                <button>CONTACT US</button>
            </div>
        </section>
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
@import '@/style/variables';
    header{
        color:$white;
        background-image: url('@/assets/1-hero-image.png');
        background-size: cover;
        background-position: center;
        section{
            margin: auto;
            display: flex;
            padding: 180px 0;
            div{
                h2{
                    font-size: $h2-size;
                }
                p{
                    margin: 30px 0;
                }
                button{
                    color: $white;
                    margin: 20px 10px 20px 0;
                    padding: 8px 15px;
                    border: none;
                    border-radius: 30px;
                    &:hover{
                        filter: brightness(0.9)
                    }
                }
                button:nth-child(3){
                    background-color: $bg-primary-button;
                }
                button:nth-child(4){
                    background-color: $bg-secondary-button;
                }
            }
            
        }
    }
</style>