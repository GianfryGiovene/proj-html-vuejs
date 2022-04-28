<template>        
        <ul class="navbar-nav list-group flex-grow-1 justify-content-center list-group-horizontal-md align-items-center">
                <li 
                class="list-item "
                :key="index" 
                v-for="(title,index) in navList" 
                @mouseover="title.isOver = true"
                >
                    <a  class="text-decoration-none" href="#">{{ title.title }}</a>
                </li>
                
            </ul>
</template>

<script>
export default {
    name:'FooterNavBar',
    props:{
        navList: Array
    },
    
}
</script>

<style lang='scss' scoped>
@import '@/style/variables';
    ul{
        gap: 20px;
        li{
            a{
                color: $dark-grey;
                &:hover{
                color: $orange;
                }
            }
        }
    }
    // event classes
    
</style>