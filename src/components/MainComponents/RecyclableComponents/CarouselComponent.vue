<template>
    <div class="carousel">
        <!-- selected -->
        <div >
            <img :src="require(`@/assets/testimonials-${clientPointerSaved+1}.jpg`)" alt="">
            <p>{{ clients[clientPointerSaved].text }}</p>
            <div>
                <h5>{{clients[clientPointerSaved].firstName +' '+ clients[clientPointerSaved].Surname }}</h5>
                <span>{{ clients[clientPointerSaved].role }}</span>
            </div>
        </div>
        <!-- film -->
        <div class="film">
            <div @click="isSelected(index)" :key="index" v-for="(client,index) in clients">
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'CarouselComponent',
    props:{
        clients: Array,
    },
    data(){
        return{
            clientPointerSaved: 0,
            interval:''
        }
    },
    methods:{
        // save pointer
        isSelected(p1){
            this.clientPointerSaved = p1;
            clearInterval(this.interval);
            this.rideOnTheCarousel();
        },
        // set interval function
        rideOnTheCarousel(){
            this.interval = setInterval(()=>{
                if(this.clientPointerSaved === 0){
                    this.clientPointerSaved = 1;
                }else{
                    this.clientPointerSaved = 0;
                }    
            },4000)
            
        },
    },
    mounted(){
        this.rideOnTheCarousel()
    },
    beforeDestroy(){
        clearInterval(this.interval);
    }
}
</script>

<style lang='scss' scoped>
@import '@/style/variables';
.carousel{
    & > div:first-child{
        img{
            border-radius: 50%;
        }
        h5{
            font-weight: $bold;
        }
        p{
            margin: 20px 0 ;
        }
    }
    & > .film{
        display: flex;
        justify-content: center;
        gap: 20px;
        & > div{
            margin-top: 20px;
            border: 2px solid $black;
            padding: 5px;
            border-radius: 50%;
            background-color: $black;
            cursor: pointer;
            &:hover{
                background-color: $white;
            }
        }
    }
}
</style>