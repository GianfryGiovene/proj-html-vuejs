<template>
    <main>
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
        
    </main>
</template>

<script>
import FirstSection from '@/components/MainComponents/FirstSection.vue';
import SecondSection from '@/components/MainComponents/SecondSection.vue';
import ThirdSection from '@/components/MainComponents/ThirdSection.vue';

export default {
    name:'MainComponent',
    components:{
        FirstSection,
        SecondSection,
        ThirdSection
    }
}
</script>

<style lang='scss' scoped>

</style>