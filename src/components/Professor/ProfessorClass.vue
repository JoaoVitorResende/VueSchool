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
          <td>{{ professor.name }} {{ professor.lastName }}</td>
          <td>3</td>
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
      professores: [
        { id: 1, name: "joao" },
        { id: 2, name: "pedro" },
        { id: 3, name: "Heitor" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>