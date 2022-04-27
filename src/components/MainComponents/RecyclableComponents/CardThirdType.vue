<template>
    <div>
        <img src="" alt="">
        <h4>{{ news.title }}</h4>
        <span>{{ news.data }}</span>
        <p>{{ news.text }}</p>
    </div>
</template>

<script>
export default {
    name:'CardFirstType',
    props:{
        news: Object,
    }
}
</script>

<style lang='scss' scoped>
@import '@/style/variables';
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        text-align: center;
        padding: 40px;
        background-color: $white;
        .icon{
            color: $orange;
            font-size: $icon-size;
        }
        h4{
            color: $orange;
            font-size: $h4-size;
        }
        p{
            font-size: $p-small-size;
            line-height: 20px;
            width: 75%;
        }
        a{
            text-decoration: none;
            color: $orange;
        }


    }
</style>