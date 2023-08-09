<template>
  <SContainer>
    <div class="s-vazio-home-container">
      <SVazio
        :imagem="vazioHome"
        titulo="Bem vindo a cantina :)"
        sub-titulo="Escolha qual aluno deseja selecionar antes de prosseguir"
        class="s-vazio-home"
      />
    </div>
  </SContainer>
</template>

<script setup>
import vazioHome from "../../../assets/vazioConteudoDado.svg";
</script>


<script>
export default {
  name: "SVazioHome",
};
</script>

<style scoped>
.s-vazio-home-container {
  display: flex;
  min-height: 90vh;
}
.s-vazio-home {
  margin: 35% auto;
}
</style>