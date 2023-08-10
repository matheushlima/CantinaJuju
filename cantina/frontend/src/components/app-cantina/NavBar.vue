<template>
  <div class="nav-bar">
    <div class="bg"></div>
    <div class="content">
      <div>
        <div class="infoName">
          <div class="iconVoltar" @click="voltarParaTelaAnterior"></div>
          <img class="imageAvatar" :src="localStorageImagem">
          <div class="name">{{ localStorageNome }}</div>
        </div>
        <div class="info">
          <div class="wallet">
            <div class="iconSaldo" @click="toggleSaldoVisibility"></div>
            Saldo na carteira
          </div>
          <div class="price">{{ saldoVisible ? '----' : localStorageSaldo }}</div>
        </div>
      </div>
      <div class="image"></div>
      <div class="icons">
        <div class="iconCarrinho"></div> <!-- Primeiro ícone à direita -->
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
    voltarParaTelaAnterior() {
      this.$router.push({ name: 'home', replace: true })
    },
  },
  computed: {
    localStorageNome() {
      return localStorage.getItem('perfilNome');
    },
    localStorageImagem() {
      return localStorage.getItem('perfilImagem');
    },
    localStorageSaldo() {
      return localStorage.getItem('perfilSaldo');
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
  margin-top: 8px;
}

.infoName {
  display: flex;
  height: 32px;
  align-items: center;
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
  width: 22px;
  height: 22px;
  background: url('@/assets/icons/voltarIcon.svg');
  background-size: contain; 
  background-repeat: no-repeat;
}

.imageAvatar{
  /* img */
width: 32px;
height: 32px;
left: 54px;
margin-left: 16px;
margin-right: 8px;

}
</style>
