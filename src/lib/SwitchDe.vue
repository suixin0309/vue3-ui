<template>
   <button @click="toggle" :class="{checked}"><span></span></button>
</template>
<script lang="ts">
import { ref } from "vue"
export default {
    setup(props) {
        const checked= ref(false)
        const toggle = ()=>{
            checked.value=!checked.value
        }

        return {checked,toggle}

    }
}
</script>
<style lang="scss" scoped>
$h:22px;
$h2:$h - 4px;
button{
    height: $h;
    width:$h*2;
    border: none;
    background: gray;
    border-radius: $h*0.5;
    position: relative;
}
span{
    position: absolute;
    top: 2px;
    left:2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2*0.5;
    transition: left 250ms;
}
// @keyframes fled {
//     from{
//        left: 2px; 
//     }
//     to{
//         left: calc(100% - 2px - #{$h2});
//     }
// }
button.checked {
    background: blue;
}
button.checked > span{
    // animation: fled 0.5s forwards;
    left: calc(100% - 2px - #{$h2});
}

</style>
