<template>
    <div>
        <h4>{{ info.type }}</h4>
        <span>{{info.price}}</span>
        <span>{{info.projects}}</span>
        <span>{{info.storage}}</span>
        <span>{{info.subscription}}</span>
        <button>START TODAY</button>
    </div>
</template>

<script>
export default {
    name:'CardFirstType',
    props:{
        info: Object,
    }
}
</script>

<style lang='scss' scoped>
@import '@/style/variables';
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 25px;
        text-align: center;
        padding: 30px;
        background-color: $white;
        .icon{
            color: $orange;
            font-size: $icon-size;
        }
        h4{
            font-size: $h4-size;
        }
        span{
            font-size: $p-small-size;
            line-height: 20px;
        }
        button{
            padding: 8px 15px;
            border: 1px solid $black;
            border-radius: 15px;
        }


    }
</style>