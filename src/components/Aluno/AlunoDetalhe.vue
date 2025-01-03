<template>
  <div>
    <TitulosClass :text="`Aluno: ${aluno.name}`" />
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
    };
  },
  methods: {

  }
};
</script>

<style lang="scss" scoped>
</style>