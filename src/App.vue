<template>
  <div id='App'>
    <Nav></Nav>
    <Alunos/>
  </div>
</template>

<script>
import Alunos from './components/Aluno/AlunosClass.vue'
import Nav from './components/_Nav/navClass.vue'
export default {
  name: 'App',
  components: {
    Alunos,
    Nav
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
.marginPrincipal{
  width: 50%;
  margin: auto;
}
#App {
  width: 100%;
}
.btn_danger{
  background-color: red;
}
.btn{
  padding: 10px 20px;
  cursor: pointer;
  border: 1px solid black;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  border-bottom: 3px solid black;
}
.btn:hover{
  text-shadow: 1px 1px 1px black;
  margin-top: 3px;
  border-bottom: 1px solid black;
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
