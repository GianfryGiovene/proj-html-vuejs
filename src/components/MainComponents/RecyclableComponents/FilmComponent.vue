<template>
    <div class="film">
        <div :key="index" v-for="index in 6" >
            <img :src="require(`@/assets/clients_partner_${index}-200x202.png`)" alt="partner">
        </div>
    </div>
</template>

<script>
export default {
    name:'FilmComponent',
    props:{
    }
}
</script>

<style lang="scss" scoped>
@import '@/style/variables';

.film{
    display: flex;
    overflow-x: auto;
    flex-wrap: nowrap;
    gap: 80px;
    & > div{
        width: calc(100% / 4 - 3rem);

    }
}
</style>