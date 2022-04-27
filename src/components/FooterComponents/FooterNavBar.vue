<template>        
        <ul>
            <!-- assegnazione color on over da implementare e possibile dropdown menu -->
            <li :key="index" v-for="(title,index) in navList" @mouseover="title.isOver = true">{{ title.title }}</li>
        </ul>
</template>

<script>
export default {
    name:'FooterNavBar',
    props:{
        navList: Array
    },
    
}
</script>

<style lang='scss' scoped>
@import '@/style/variables';
    ul{
        justify-content: center;
        list-style-type: none;
        align-items: center;
        display: flex;
        gap: 20px;
    }
    

    // event classes

    .isOver{
        color: $orange
    }



</style>