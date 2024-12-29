<template>
  <div>
    <TitulosClass text="Aluno" />
    <div>
      <input type="text" placeholder="Nome do aluno" v-model="name" />
      <button class="btn btn_input" @click="addAluno()">Adicionar</button>
    </div>
    <table>
      <thead>
        <th>Materias</th>
        <th>Nomes</th>
        <th>Opções</th>
      </thead>
      <tbody v-if="alunos.length">
        <tr v-for="(aluno, index) in alunos" :key="index">
          <td>{{ aluno.id }}</td>
          <td>{{ aluno.name }} {{ aluno.lastName }}</td>
          <td>
            <button class="btn btn_Danger" @click="remover(aluno)">
              Remover
            </button>
          </td>
        </tr>
      </tbody>
      <tfoot v-else>
        Nenhum aluno encontrado
      </tfoot>
    </table>
  </div>
</template>

<script>
import TitulosClass from "../_Share/TitulosClass.vue";

export default {
  components: {
    TitulosClass,
  },
  data() {
    return {
      titulo: "Aluno",
      name: "",
      alunos: [],
    };
  },
  created() {
    this.getAlunos();
  },
  props: {},
  methods: {
    addAluno() {
      let aluno = {
        name: this.name,
        lastName: "",
      };
      this.postAluno(aluno);
    },
    postAluno(aluno) {
      this.$http
        .post("http://localhost:3000/alunos", aluno)
        .then((rest) => rest.json())
        .then(alunoRetornado => {
          this.alunos.push(alunoRetornado);
          this.name = "";
        });
    },
    getAlunos() {
      this.$http
        .get("http://localhost:3000/alunos")
        .then((rest) => rest.json())
        .then((alunosApi) => (this.alunos = alunosApi));
    },
    remover(aluno) {
      this.$http.delete(`http://localhost:3000/alunos/${aluno.id}`).then(() => {
        let indice = this.alunos.indexOf(aluno);
        this.alunos.splice(indice, 1);
      });
    },
  },
};
</script>

<style scoped>
input {
  border: 0;
  padding: 20px;
  font-size: 1.3rem;
  color: #687f7f;
  display: inline;
}
.btn_input {
  border: 0px;
  padding: 20px;
  font-size: 1.3em;
  background-color: rgb(116, 115, 115);
  display: inline;
}
.btn_input:hover {
  padding: 20px;
  margin: 0px;
  border: 0px;
}
</style>
