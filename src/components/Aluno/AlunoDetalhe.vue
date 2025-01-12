<template>
  <div>
    <TitulosClass
      :text="aluno?.name ? `Aluno: ${aluno.name}` : 'Carregando...'"
      :btn-voltar="false"
    >
      <button @click="editAluno()" class="btn btnEditar">Editar</button>
    </TitulosClass>
    <table>
      <tbody>
        <tr>
          <td class="colPequeno">Matrícula:</td>
          <td>
            <label>{{ aluno.id }}</label>
          </td>
        </tr>
        <tr>
          <td class="colPequeno">Nome:</td>
          <td>
            <label>{{ aluno.name }}</label>
            <input
              v-if="this.isEditing == true"
              v-model="aluno.name"
              type="text"
            />
          </td>
        </tr>
        <tr>
          <td class="colPequeno">Sobrenome:</td>
          <td>
            <label>{{ aluno.lastName }}</label>
            <input
              v-if="this.isEditing == true"
              v-model="aluno.lastName"
              type="text"
            />
          </td>
        </tr>
        <tr>
          <td class="colPequeno">Professor:</td>
          <td>
            <label>{{ aluno.professor.name }}</label>
            <select v-if="this.isEditing == true" v-model="aluno.professor">
              <option
                v-for="(prfessor, index) in professores"
                :key="index"
                v-bind:value="prfessor"
              >
                {{ prfessor.name }}
              </option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
    <div style="margin-top: 10px">
      <div v-if="isEditing">
        <button class="btn btnSalvar" @click="saveEdit()">Salvar</button>
        <button class="btn btnCancelar" @click="cancelEdit()">Cancelar</button>
      </div>
    </div>
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
      aluno: {},
      id: this.$route.params.id,
      isEditing: false,
    };
  },
  created() {
    this.getAlunosByID();
    this.getProfessores();
  },
  methods: {
    getAlunosByID() {
      this.$http
        .get(`http://localhost:5133/api/Alunos/${this.id}`)
        .then((rest) => rest.json())
        .then((alunosApi) => (this.aluno = alunosApi));
    },
    getProfessores() {
      this.$http
        .get("http://localhost:5133/api/Professor")
        .then((rest) => rest.json())
        .then((professoresApi) => (this.professores = professoresApi));
    },

    editAluno() {
      this.isEditing = !this.isEditing;
    },
    cancelEdit() {
      this.isEditing = false;
    },
    saveEdit() {
      let alunoEdit = {
        id: this.aluno.id,
        name: this.aluno.name,
        lastName: this.aluno.lastName,
        professor: this.aluno.professor,
      };
      this.updateAluno(alunoEdit);
    },
    updateAluno(alunoEdit) {
      console.log(alunoEdit);
      this.$http
        .put(`http://localhost:5133/api/Alunos/${alunoEdit.id}`, alunoEdit);
        this.cancelEdit();
    },
  },
};
</script>

<style lang="scss" scoped>
colPequeno {
  width: 20%;
  text-align: center;
  background-color: rgb(125, 217, 245);
  font-weight: bold;
}
input,
select {
  margin: 0;
  padding: 5px 10px;
  font-size: 0.9em;
  font-family: Montserrat;
  border-radius: 5px;
  border: 1px solid silver;
  width: 95%;
  background-color: rgb(245, 245, 245);
}
select {
  height: 38px;
  width: 100%;
}
.btnEditar {
  float: right;
  background-color: rgb(40, 206, 236);
}
.btnCancelar {
  float: right;
  background-color: rgb(236, 40, 40);
}
.btnSalvar {
  float: right;
  background-color: rgb(15, 214, 65);
}
</style>