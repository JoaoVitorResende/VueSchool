<template>
  <div>
    <TitulosClass text="Professores" />
    <table>
      <thead>
        <th>código</th>
        <th>Nomes</th>
        <th>Alunos</th>
      </thead>
      <tbody v-if="professores.length">
        <tr v-for="(professor, index) in professores" :key="index">
          <td>{{ professor.id }}</td>
          <router-link :to="'/alunos/'+professor.id " tag="td" style="cursor: pointer"
            >{{ professor.name }} {{ professor.lastName }}</router-link
          >
          <td>{{professor.qtAlunos}}</td>
        </tr>
      </tbody>
      <tfoot v-else>
        Nenhum professor encontrado
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
      professores: [],
      alunos:[]
    };
  },
  created() {
    this.getAlunos();
  },
  methods: {
    getAlunos() {
      this.$http
        .get("http://localhost:3000/alunos")
        .then((rest) => rest.json())
        .then((alunosApi) => {
          this.alunos = alunosApi;
          this.getProfessores();
        });
    },
    getProfessores() {
      this.$http
        .get("http://localhost:3000/professores")
        .then((rest) => rest.json())
        .then((professoresApi) => {
          this.professores = professoresApi;
          this.getStudentsQuantity();
        });
    },
    getStudentsQuantity()
    {
      this.professores.forEach ((professor,index) => {
        professor = {
          id:professor.id,
          name:professor.name,
          qtAlunos: this.alunos.filter(aluno => aluno.professor.id == professor.id).length
        }
        this.professores[index] = professor;
      })
    },
  },
};
</script>

<style lang="scss" scoped>
</style>