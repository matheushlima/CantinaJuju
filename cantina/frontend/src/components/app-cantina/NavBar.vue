<template>
  <div class="nav-bar">
    <div class="bg"></div>
    <div class="content">
      <div class="info">
        <div class="name">Irmão do Jorel</div>
        <div class="wallet">
          <div class="iconSaldo" @click="toggleSaldoVisibility"></div>
          Saldo na carteira
        </div>
        <div class="price">{{ saldoVisible ? '----' : saldo }}</div>
      </div>
      <div class="image"></div>
      <div class="icons">
        <div class="iconCarrinho"></div> <!-- Primeiro ícone à direita -->
        <div class="iconVoltar"></div> <!-- Segundo ícone à direita -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      saldo: 'R$ 42,00', // Valor original do saldo
      saldoVisible: true, // Define se o saldo ou '----' deve ser mostrado
    };
  },
  methods: {
    toggleSaldoVisibility() {
      this.saldoVisible = !this.saldoVisible;
    },
  },
};
</script>

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
  background: url('@/assets/icons/visualizarSaldoIcon.svg');
  background-size: contain;
  background-repeat: no-repeat;
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

.iconCarrinho {
  width: 18px;
  height: 12px;
  background: url('@/assets/icons/carrinhoIcon.svg');
  background-size: contain; 
  background-repeat: no-repeat;
  margin-left: 8px; /* Adicione margem para separar os ícones */
}

.iconVoltar {
  width: 18px;
  height: 12px;
  background: url('@/assets/icons/voltarIcon.svg');
  background-size: contain; 
  background-repeat: no-repeat;
  margin-left: 8px; /* Adicione margem para separar os ícones */
}
</style>
