<template>
  <div>
   <h1>{{titulo}}</h1>
   <div>
    <input type="text" placeholder="Nome do aluno" v-model="name">
    <button class="btn btn_input" @click="addAluno()">Adicionar</button>
   </div>
   <table border="1px">
    <thead>
      <th>Materias</th>
      <th>Nomes</th>
      <th>Opções</th>
    </thead>
    <tbody>
      <tr v-for="(aluno,index) in alunos" :key="index">
        <td>{{aluno.id}}</td>
        <td>{{aluno.name}}</td>
        <td>
          <button class="btn btn_danger" @click="remover(aluno)">Remover</button>
        </td>
      </tr>
    </tbody>
   </table>
  </div>
</template>

<script>
export default {
  data()
  {
    return {
      titulo:"Aluno",
      name: "",
      alunos: [{id:1,name:"jhon"},{id:2,name:"Lucas"},{id:3,name:"jhonathan"},]
      }
  },
  props: {

  },
  methods: {
    addAluno() {
      let aluno = { 
        id: this.alunos.length + 1,
        name: this.name
      }
      this.alunos.push(aluno);
      this.name = "";
    },
    remover(aluno){
      let indice = this.alunos.indexOf(aluno);
      this.alunos.splice(indice, 1)
    }
  },
}
</script>

<style scoped>
input {
  border: 0;
  padding: 20px; 
  font-size: 1.3rem;
  color: #687f7f;
  display: inline;
}
.btn_input{
  border: 0px;
  padding: 20px;
  font-size: 1.3em;
  background-color: rgb(116, 115, 115);
  display: inline;
}
.btn_input:hover{
  padding: 20px;
  margin: 0px;
  border: 0px;
}
</style>
