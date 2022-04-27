<template>
    <div class="row flex-column align-items-center p-3">
        <font-awesome-icon  class="icon" :icon="icon" ></font-awesome-icon>
        <h4 class="my-4">{{ title }}</h4>
        <p>{{ text }}</p>
        <a class="text-decoration-none" v-if="question" href="#">Read More ></a>
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
        text-align: center;
        background-color: $white;
        .icon{
            color: $orange;
            font-size: $icon-size;
            &:hover{
                transform: translateX(15px);
                animation: translateX 0.5s;
            }
        }
        h4{
            font-size: $h4-size;
            &:hover{
                color: $orange;
            }
        }
        p{
            font-size: $p-small-size;
            line-height: 20px;
            width: 75%;
        }
        a{
            color: $orange;
        }
    }
@keyframes translateX {
    0%{
        transform: translateX(0px);
    }
    50%{
        transform: translateX(15px);
    }
    100%{
        transform: translateX(0px);
    }
}
</style>