<template>
  <Alunos/>
</template>

<script>
import Alunos from './components/AlunosClass.vue'

export default {
  name: 'App',
  components: {
    Alunos
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700");
body{
  background-color: azure;
  font-family: Montserrat, sans-serif;
  display: grid;
  justify-content: center;
}
body, html{
  margin: 0;
  height: 100%;
}
#app {
}
table{
  margin: 0;
  padding: 0;
  list-style-type: none;
  width: 100%;
}
table tr td{
  padding: 20px;
  font-size: 1.3em;
  background-color: #e0e0e0;
  margin-bottom:2px;
  color: #3e5252;
}
table thead th{
  background-color: rgb(23, 158, 202) !important;
  font-size: 1.2em;
  padding: 10px 0px;
  text-align: center;
}
.colPequeno{
  width: 5%;
}
</style>
