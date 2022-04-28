<template>
    <div class="ggf-card row flex-column align-items-center justify-content-center p-3">
        <div>
            <img class="w-100" :src="require(`@/assets/blog-post-${news.id}-700x441.jpg`)" alt="">
        </div>
        
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
    .ggf-card{
        text-align: center;
        padding: 20px;
        background-color: $white;
        img{
            &:hover{
                filter: blur(2px);
            }
        }
        h4{
            color: $orange;
            font-size: $h4-size;
        }
        p{
            font-size: $p-small-size;
            line-height: 20px;
        }
        a{
            text-decoration: none;
            color: $orange;
        }


    }
</style>