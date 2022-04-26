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
        text-align: center;
        .icon{
            color: $orange;
        }
    }
</style>