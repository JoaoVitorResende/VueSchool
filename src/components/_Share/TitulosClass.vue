<template>
  <div>
    <div style="display: flex; width: 50%;">
      <h1>{{ text }}</h1>
      <div class="voltar">
        <slot></slot>
        <button v-show="btnVoltar" class="btn btnVoltar" @click="Voltar()">Voltar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    btnVoltar: Boolean
  },
  methods: {
      Voltar()
      {
        this.$router.back();
      }
  }
};
</script>

<style lang="scss" scoped>
.voltar {
  width: 50%;
  position: absolute;
  margin-top: 15px;
}
.btnVoltar {
  float: right;
  background-color: rgb(199, 199, 199);
}
</style>