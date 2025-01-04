<template>
  <div>
    <TitulosClass :text="aluno?.name ? `Aluno: ${aluno.name}` : 'Carregando...'" />
    <table>
      <tbody>
        <tr>
          <td class = "colPequeno">Matrícula:</td>
          <td></td>
        </tr>
        <tr>
          <td class = "colPequeno">Nome:</td>
          <td></td>
        </tr>
        <tr>
          <td class = "colPequeno">Sobrenome:</td>
          <td></td>
        </tr>
        <tr>
          <td class = "colPequeno">Data de nascimento:</td>
          <td></td>
        </tr>
        <tr>
          <td class = "colPequeno">Professor:</td>
          <td></td>
        </tr>
      </tbody>
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
      aluno: {},
      id: this.$route.params.id
    };
  },
  created() {
    //this.getAlunosByID()
  },
  methods: {
    getAlunosByID() {
      this.$http
        .get("http://localhost:3000/alunos/" + this.id)
        .then(rest => rest.json())
        .then(alunosApi => (this.aluno = alunosApi));
    },
  }
};
</script>

<style lang="scss" scoped>
</style>