<template>
    <nav class="container navbar navbar-expand-md justify-content-between">
        <!-- logo -->
        <img class="navbar-brand " src="@/assets/logo_seo_w_1x.png" alt="logo">
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <!-- nav bar list -->
            <ul class="navbar-nav list-group flex-grow-1 justify-content-end list-group-horizontal align-items-center">
                <li 
                class="list-item "
                :key="index" 
                v-for="(title,index) in navList" 
                @mouseover="title.isOver = true"
                >
                    <a  class="text-decoration-none" href="#">{{ title.title }}</a>
                </li>
                <li><button>GET IN TOUCH NOW</button></li>
            </ul>
        </div>
        <!-- navbar hamburger menu  -->
        <!-- sistemare hamburger menu!!!!!!!!!!!!!!!!!!! -->
        <div class="dropdown">
            <button @click="clicked" class="navbar-toggler" type="button" id="dropdownMenuButton" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <font-awesome-icon icon="fas fa-bars" ></font-awesome-icon>
            </button>
            <div v-if="!isClicked" class="dropdown-menu" >
                <a 
                class="dropdown-item"
                :key="index" 
                v-for="(title,index) in navList" 
                @mouseover="title.isOver = true"
                >
                    {{ title.title }}
                </a>
            </div>
        </div>
        
            
                <!-- <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div> -->
             
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
        ul{          
            gap: 20px;
            li{
                a{
                    color: $white;
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
        & > button{
            font-size: $icon-size;
            color: $white
        }
    }

    // event classes

    



</style>