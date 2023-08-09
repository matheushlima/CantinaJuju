<template>
  <div class="atalhosList">
    <div class="h2">Atalhos</div>

    <div class="shortcuts-container">
      <!-- Pedidos -->
      <div class="shortcut">
        <div class="bg"></div>
        <div class="icon"></div>
        <div class="content">
          <div class="access">Acessar</div>
          <div class="title">Pedidos</div>
        </div>
      </div>

      <!-- Carteira -->
      <div class="shortcut">
        <div class="bg"></div>
        <div class="icon"></div>
        <div class="content">
          <div class="access">Acessar</div>
          <div class="title">Carteira</div>
        </div>
      </div>
    </div>
    <!-- Mais atalhos aqui... -->
  </div>
</template>

<script>
export default {
  name: 'AtalhosListAluno',
};
</script>

<style scoped>
.atalhosList {
  position: relative;
  width: 100%;
  max-width: 358px; /* Limitando a largura máxima */
  margin: 0 auto; /* Centralizando horizontalmente */
  padding: 16px;
}

.h2 {
  /* Atalhos */
  font-family: 'Nunito';
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  color: #232b34;
  margin-bottom: 20px;
}

.shortcuts-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.shortcut {
  position: relative;
  width: calc(50% - 10px); /* 2 botões lado a lado com espaço entre eles */
  height: 72px;
  border-radius: 8px;
  transition: background-color 0.3s, box-shadow 0.3s;
  overflow: hidden;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #e8ecef;
}

.shortcut:hover {
  background-color: #f0f0f0;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.icon {
  /* img */
  width: 40px;
  height: 40px;
  background-color: #232B34;
  margin-left: 16px;
  border-radius: 50%;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 16px;
}

.title {
  /* Carteira */
  font-family: 'Nunito';
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #434e5b;
}

.access {
  /* Acessar */
  font-family: 'Nunito';
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: #748494;
}
</style>
