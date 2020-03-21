<template>
    <h1>hello {{name}}</h1>  
</template>


<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data(){
        return{
            name:'de'
        }
    },

})
</script>

<style scoped>
h1{
    color:yellowgreen
}
</style>

