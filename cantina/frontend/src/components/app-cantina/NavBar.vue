<template>
  <div class="nav-bar">
    <div class="bg"></div>
    <div class="content">
      <div class="info">
        <div class="name">Irmão do Jorel</div>
        <div class="wallet">
          <div class="iconSaldo"></div>
          Saldo na carteira
        </div>
        <div class="price">R$ 14,90</div>
      </div>
      <div class="image"></div>
      <div class="icons">
        <div class="icon"></div> <!-- Primeiro ícone à direita -->
        <div class="icon"></div> <!-- Segundo ícone à direita -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav-bar {
  position: relative;
  width: 100%;
  height: 152px;
  background-color: #ffffff;
  box-shadow: 0px 0px 16px 4px rgba(0, 0, 0, 0.04);
  display: flex;
  align-items: center;
  padding: 0 16px;
}

.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.price {
  font-family: 'Nunito';
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: #232B34;
}

.wallet {
  font-family: 'Nunito';
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  color: #748494;
}

.iconSaldo {
  width: 14px;
  height: 12px;
  background: #748494;
  margin-right: 4px;
}

.name {
  font-family: 'Nunito';
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: #232B34;
}

.image {
  width: 32px;
  height: 32px;
}

.icons {
  display: flex;
  align-items: center;
}

.icon {
  width: 18px;
  height: 12px;
  background: #232B34;
  margin-left: 8px; /* Adicione margem para separar os ícones */
}
</style>
