<template>
  <div class="cantinas-list">
    <div class="h2">Cantinas</div>

    <!-- Madalosso -->
    <div class="cantina">
      <div class="bg"></div>
      <div class="status">
        <div class="icon"></div>
        Fechado
      </div>
      <div class="item-count">
        2 itens
      </div>
      <div class="cantina-name">
        Madalosso
      </div>
      <div class="img"></div>
    </div>

    <!-- Subway -->
    <div class="cantina">
      <div class="bg"></div>
      <div class="status">
        <div class="icon"></div>
        Aberto
      </div>
      <div class="item-count">
        3 itens
      </div>
      <div class="cantina-name">
        Subway
      </div>
      <div class="img"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CantinasList',
};
</script>

<style scoped>
.cantinas-list {
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
}

.h2 {
  font-family: 'Nunito';
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  color: #232b34;
  width: 100%;
  margin-bottom: 10px;
}

.cantina {
  width: calc(50% - 8px);
  max-width: 159px;
  height: 216px;
  background: #ffffff;
  border: 1px solid #e8ecef;
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
}

.status {
  /* Resto do estilo */
}

/* Resto do estilo */
</style>
