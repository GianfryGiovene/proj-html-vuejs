<template>
    <main>
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
        <FourthSection/>
        
    </main>
</template>

<script>
import FirstSection from '@/components/MainComponents/FirstSection.vue';
import SecondSection from '@/components/MainComponents/SecondSection.vue';
import ThirdSection from '@/components/MainComponents/ThirdSection.vue';
import FourthSection from '@/components/MainComponents/FourthSection.vue';

export default {
    name:'MainComponent',
    components:{
        FirstSection,
        SecondSection,
        ThirdSection,
        FourthSection,
    }
}
</script>

<style lang='scss' scoped>

</style>