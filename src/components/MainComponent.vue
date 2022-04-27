<template>
    <main>
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
        <FourthSection/>
        <FifthSection/>
        
    </main>
</template>

<script>
import FirstSection from '@/components/MainComponents/FirstSection.vue';
import SecondSection from '@/components/MainComponents/SecondSection.vue';
import ThirdSection from '@/components/MainComponents/ThirdSection.vue';
import FourthSection from '@/components/MainComponents/FourthSection.vue';
import FifthSection from '@/components/MainComponents/FifthSection.vue';

export default {
    name:'MainComponent',
    components:{
        FirstSection,
        SecondSection,
        ThirdSection,
        FourthSection,
        FifthSection,
    }
}
</script>

<style lang='scss' scoped>

</style>