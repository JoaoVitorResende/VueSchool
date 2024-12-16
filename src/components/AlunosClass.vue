<template>
  <div>
   <h1>{{titulo}}</h1>
   <input type="text" placeholder="Nome do aluno" 
   v-model="name" v-on:keyup.enter="addAluno()">
   <table border="1px">
    <thead>
      <th>Mataterias</th>
      <th>Nomes</th>
      <th>Opções</th>
    </thead>
    <tbody>
      <tr v-for="(aluno,index) in alunos" :key="index">
        <td>{{aluno.id}}</td>
        <td>{{aluno.name}}</td>
        <td>
          <button class="btn" @click="remover()">Remover</button>
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
    }
  },
}
</script>

<style scoped>

</style>
