<template>
  <div class="status-tag">
    <div class="bg"></div>
    <div class="status-text">
      <div class="icon"></div>
      <div>Está tudo bem! Você não possui pendências</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatusTag',
};
</script>

<style scoped>
.status-tag {
  position: relative;
  width: 100%;
  height: auto;
  padding: 20px;
  display: flex;
  align-items: center;
  background: #30B565;
  color: #ffffff;
  font-family: 'Nunito';
  font-weight: 600;
  font-size: 16px;
  box-sizing: border-box; /* Adicione esta linha */
}

.bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #30B565;
  z-index: -1;
}

.status-text {
  display: flex;
  align-items: center;
  flex: 1; /* Para ocupar espaço disponível */
}

.icon {
  width: 16px;
  height: 16px;
  background: #FFFFFF;
  margin-right: 10px;
}

@media screen and (max-width: 768px) {
  .status-tag {
    flex-direction: column;
    text-align: center;
  }

  .bg {
    display: none; /* Esconder o fundo colorido em telas menores */
  }
}
</style>
