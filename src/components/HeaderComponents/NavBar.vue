<template>
    <nav class="navbar navbar-expand-md justify-content-between">
        <div class="container">
            <!-- logo -->
            <img class="navbar-brand" src="@/assets/logo_seo_w_1x.png" alt="logo">

            <!-- navBar show button -->
            <button @click="clicked()" class="navbar-toggler ggf-button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <font-awesome-icon icon="fas fa-bars" ></font-awesome-icon>
            </button>
            <div @mouseleave="isClicked = false" v-if="isClicked" class="ggf-dropdown" >
                <ul class="ggf-dropdown-ul navbar-nav list-group flex-grow-1 justify-content-end  align-items-center">
                    <li 
                    class="nav-item"
                    :key="index" 
                    v-for="(title,index) in navList" 
                    @mouseover="title.isOver = true"
                    >
                        <a  class="nav-link text-decoration-none" href="#">{{ title.title }}</a>
                    </li>
                    <li class="nav-button"><button>GET IN TOUCH NOW</button></li>
                </ul>
            </div>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- nav bar list -->
                <ul class="ggf-ul navbar-nav list-group flex-grow-1 justify-content-end list-group-horizontal align-items-center">
                    <li 
                    class="nav-item"
                    :key="index" 
                    v-for="(title,index) in navList" 
                    @mouseover="title.isOver = true"
                    >
                        <a  class="nav-link text-decoration-none" href="#">{{ title.title }}</a>
                    </li>
                    <li class="nav-button"><button>GET IN TOUCH NOW</button></li>
                </ul>
            </div>
        </div>             
    </nav>
</template>

<script>
export default {
    name:'NavBar',
    props:{
        navList: Array
    },
    data(){
        return{
            isClicked: false,
        }
    },
    methods:{
        clicked(){
            if(this.isClicked=== false){
                this.isClicked = true;
                console.log('dentro',this.isClicked);
            }else{
                this.isClicked = false;
                console.log('fuori',this.isClicked);
            }
            
        }
    }
    
}
</script>

<style lang='scss' scoped>
@import '@/style/variables';
    .container{
        padding: 10px 0;
        color: $white;
        .ggf-dropdown-ul,
        .ggf-ul{          
            gap: 20px;
            li{
                a{
                    
                    &:hover{
                        color: $orange
                    }
                }
            }
            button{
                color: $white;
                font-size: $p-small-size;
                background-color:$bg-primary-button;
                padding: 8px 15px;
                border-radius: 20px;
                border: none;
                &:hover{
                    filter: opacity(0.9);
                }
            }
        }
        .ggf-dropdown-ul{
            a{
                color: $dark-grey;
            }
        }
        .ggf-ul{
            a{
                color: $white;
            }
        }
        & > button{
            font-size: $icon-size;
            color: $white
        }
        .ggf-dropdown{
            color: $black;
            position: absolute;
            top: 80px;
            right: 50px;
            padding: 20px;
            background-color: $white;
        }
        .ggf-button{
            position: relative;
        }
        .ggf-ul{

        }
    }
</style>