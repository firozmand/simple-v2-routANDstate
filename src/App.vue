<template>
<div class=" flex overflow-hidden flex-col p-44 w-screen h-screen bg-black ">

  <p class=" text-4xl text-white"> wellcome to route </p>
  <BTNlINK></BTNlINK>
  <hr>
  <div class="flex flex-row border-gray-50  rounded-3xl text-white border mt-20">
    <router-view></router-view>
  </div>

</div>
</template>

<script>
import linkto from './component/linkto.vue'
export default {
  components:{
    "BTNlINK":linkto
  },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
