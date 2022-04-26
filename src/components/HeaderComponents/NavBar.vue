<template>
    <nav>
        <img src="@/assets/logo_seo_w_1x.png" alt="logo">
        <ul>
            <li :key="index" v-for="(title,index) in navList" @mouseover="title.isOver = true">{{ title.title }}</li>
            <li><button>GET IN TOUCH NOW</button></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name:'NavBar',
    props:{
        navList: Array
    },
    
}
</script>

<style lang='scss' scoped>
@import '@/style/variables';
    nav{
        padding: 10px 0;
        color: $white;
        max-width: $max-width;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid black;
        img{

        }
        ul{
            list-style-type: none;
            align-items: center;
            display: flex;
            gap: 20px;
            button{
                color: $white;
                background-color: $bg-primary-button;
                padding: 10px 20px;
                border-radius: 20px;
                border: none;
            }
        }
    }

    // event classes

    .isOver{
        color: $orange
    }



</style>