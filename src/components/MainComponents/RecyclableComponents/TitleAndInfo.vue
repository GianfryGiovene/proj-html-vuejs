<template>
    <div>
        <h3>{{ title }}</h3>
        <p>{{ info }}</p>
    </div>
</template>

<script>
export default {
    name:'TitleAndInfo',
    props:{
        title: String,
        info: String,
    }
}
</script>

<style lang='scss' scoped>
@import '@/style/variables';
div{
    text-align: center;
    h3{
        font-size: $h3-size;
        font-weight: $extraBold;
    }
    p{
        margin: 20px 0;
    }
}
</style>