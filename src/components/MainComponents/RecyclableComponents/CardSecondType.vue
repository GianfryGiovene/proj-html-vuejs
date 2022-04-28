<template>
    <div class="ggf-card flex-column p-3">
        <h4>{{ info.type }}</h4>
        <div class="price">
            <span class="currency">$</span>
            <span class="integer-part">{{info.price}}</span>
            <div>
                <span class="decimal-part">99</span>
                <span class="time">monthly</span>
            </div>
        </div>
        <span>{{info.projects}}</span>
        <span>{{info.storage}}</span>
        <span>{{info.subscription}}</span>
        <button>START TODAY</button>
    </div>
</template>

<script>
export default {
    name:'CardFirstType',
    props:{
        info: Object,
    }
}
</script>

<style lang='scss' scoped>
@import '@/style/variables';
    .ggf-card{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 25px;
        text-align: center;
        padding: 30px;
        background-color: $white;
        h4{
            font-size: $h4-size;
            font-weight: $extraBold;
        }
        .price{
            display: flex;
            .currency{
                align-self: start;
            }
            .integer-part{
                align-self: center;
                font-size: 2.5rem;
                color: $scienceBlue;
                font-weight: $bold;
            }
            & > div{
                display: flex;
                flex-direction: column;
                .decimal-part{
                    align-self: start;
                    color: $scienceBlue;
                }
                .time{
                    font-size: 0.6rem;
                    color: $dark-grey;
                }
            }
        }
        span{
            font-size: $p-small-size;
            line-height: 20px;
            color: $dark-grey;
        }
        button{
            padding: 5px 10px;
            border: 1px solid $black;
            color:$dark-grey;
            border-radius: 25px;
            font-weight: $bold;
            &:hover{
                background-color: $bg-primary-button;
                border: none;
                color: $white;
                
            }
        }


    }
</style>