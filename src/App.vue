<template>
  <div id="app">
    <div id = 'header'>
      <Header></Header>
    </div>
    <div id = 'container'>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  components: {
    Header
  },
  created(){
  },
}
</script>

<style>
*{
  padding: 0px;
  margin: 0px;
  text-decoration: none;
  list-style: none;
  font-size: 16px;
}
html,body{
  height: 100%;
  width: 100%;
  overflow: hidden;
}
#app {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0.5rem;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: url('./assets/img/2.jpg') no-repeat;
  background-size: 100% 100%;
}
#header{
  
}
#container{
  margin-top: 10px;
}

</style>
