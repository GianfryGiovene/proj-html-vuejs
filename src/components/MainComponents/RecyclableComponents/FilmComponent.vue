<template>
    <div id="film" class="row flex-nowrap no-wrap film">
        <div   :key="index" v-for="index in 6" >
            <img :src="require(`@/assets/clients_partner_${index}-200x202.png`)" alt="partner">
        </div>
    </div >
</template>

<script>
export default {
    name:'FilmComponent',
    props:{
    },
    data(){
        return{
            domElementToFilm: null,
            interval:''
        }
    },
    methods:{
            translatingX(){
                this.domElementToFilm = document.getElementById('film');
                this.interval = setInterval(()=>{
                    if(this.domElementToFilm.scrollLeft === 772){
                        this.domElementToFilm.scrollLeft = 0
                    }else{
                        this.domElementToFilm.scrollLeft += 5;
                    }
                },100)
            }
    },
    created(){
        // this.domElementToFilm = document.getElementById('film');
    },
    beforeDestroy(){
        this.clearInterval(this.interval);
    },
    mounted(){
        this.translatingX()
    }   
}
</script>

<style lang="scss" scoped>
@import '@/style/variables';

.film{
    overflow-x: hidden;
    min-height: 250px;
    gap: 80px;
    position: relative;
    & > div{
        width: calc(100% / 4 - 3rem);

    }
}
</style>