<template>
    <main>
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
        <FourthSection/>
        <FifthSection/>
        <SixthSection/>
        
    </main>
</template>

<script>
import FirstSection from '@/components/MainComponents/FirstSection.vue';
import SecondSection from '@/components/MainComponents/SecondSection.vue';
import ThirdSection from '@/components/MainComponents/ThirdSection.vue';
import FourthSection from '@/components/MainComponents/FourthSection.vue';
import FifthSection from '@/components/MainComponents/FifthSection.vue';
import SixthSection from '@/components/MainComponents/SixthSection.vue';

export default {
    name:'MainComponent',
    components:{
        FirstSection,
        SecondSection,
        ThirdSection,
        FourthSection,
        FifthSection,
        SixthSection
    }
}
</script>

<style lang='scss' scoped>

</style>