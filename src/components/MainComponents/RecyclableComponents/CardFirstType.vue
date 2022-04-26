<template>
    <div>
        <font-awesome-icon  class="icon" :icon="['fa-solid', icon]" ></font-awesome-icon>
        <h4>{{ title }}</h4>
        <p>{{ text }}</p>
    </div>
</template>

<script>
export default {
    name:'CardFirstType',
    props:{
        title: String,
        icon: String,
        text: String,
    }
}
</script>

<style lang='scss' scoped>
@import '@/style/variables';
    div{
        display: flex;
        flex-direction: column;
        gap: 20px;
        text-align: center;
        padding: 40px;
        background-color: $white;
        .icon{
            color: $orange;
            font-size: $icon-size;
        }
        h4{
            font-size: $h4-size;
        }
        p{
            font-size: $p-small-size;
            line-height: 20px;
        }


    }
</style>