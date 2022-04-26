<template>
    <main>
        <FirstSection/>
        <SecondSection/>
        
    </main>
</template>

<script>
import FirstSection from '@/components/MainComponents/FirstSection.vue';
import SecondSection from '@/components/MainComponents/SecondSection.vue';

export default {
    name:'MainComponent',
    components:{
        FirstSection,
        SecondSection,
    }
}
</script>

<style lang='scss' scoped>

</style>