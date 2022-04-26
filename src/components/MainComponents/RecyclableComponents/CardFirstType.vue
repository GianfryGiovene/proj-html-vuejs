<template>
    <div>
        <font-awesome-icon  class="icon" :icon="icon" ></font-awesome-icon>
        <h4>{{ title }}</h4>
        <p>{{ text }}</p>
        <a v-if="question" href="#">Read More ></a>
    </div>
</template>

<script>
export default {
    name:'CardFirstType',
    props:{
        title: String,
        icon: String,
        text: String,
        question: Boolean,
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