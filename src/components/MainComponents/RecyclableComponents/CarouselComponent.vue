<template>
    <div class="carousel">
        <!-- selected -->
        <div>
            <img :src="require(`@/assets/testimonials-${clientPointerSaved+1}.jpg`)" alt="">
            <p>{{ clients[clientPointerSaved].text }}</p>
            <div>
                <h5>{{clients[clientPointerSaved].firstName +' '+ clients[clientPointerSaved].Surname }}</h5>
                <span></span>
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
        }
    },
    methods:{
        isSelected(p1){
            this.clientPointerSaved = p1;
        }
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
        p{
            margin: 20px 0 ;
        }
    }
    & > div:last-child{
        display: flex;
        justify-content: center;
        gap: 20px;
        & > div{
            border: 1px solid $black;
            padding: 5px;
            border-radius: 50%;
            background-color: $black;
            cursor: pointer;
        }
    }
}
</style>