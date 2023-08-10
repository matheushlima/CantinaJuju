<template>
  <div class="InfoPagamento">
    <div class="card">
      <div class="info-header">
        <div class="info-title">
          <span class="info-title-text">Método de Pagamento</span>
          <span class="info-title-required">*</span>
        </div>
        <div class="info-subtitle">Métodos cadastrados</div>
      </div>
      <div class="card-content">
        <div class="header">
          <div class="radio-circle" @click="selectOption('creditCard')">
            <div :class="{ selected: selectedOption === 'creditCard' }"></div>
          </div>
          <div class="title">Cartão de crédito</div>
          <div class="number">. Final 5337</div>
        </div>
        <div class="header">
          <div class="radio-circle" @click="selectOption('pix')">
            <div :class="{ selected: selectedOption === 'pix' }"></div>
          </div>
          <div class="title">Pix</div>
        </div>
      </div>
    </div>
    <div class="button-container">
      <button class="custom-button" @click="showNotification">Confirmar Pagamento</button>
    </div>

    <div v-if="showPopup" class="popup">
      <div class="popup-content">
        <span class="popup-message">Pagamento confirmado com sucesso!</span>
        <button class="popup-close-button" @click="closePopup">Fechar</button>
      </div>
    </div>
  </div>
</template>
  
<style scoped>
.InfoPagamento {
  display: inline-flex;
  flex-direction: column;
  gap: 15px;
  align-items: flex-start;
  max-width: 360px;
  width: 100%;
}

.card {
  background: white;
  box-shadow: 0px 2.5px 16px 2.5px rgba(0, 0, 0, 0.04);
  border-radius: 15px;
  border: 0.50px #E8ECEF solid;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* Alteração aqui para alinhar à esquerda */
  padding: 20px;
  width: 100%;
  max-width: 360px;
}

.info-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 15px;
}

.info-title {
  display: flex;
  align-items: center;
}

.info-title-text {
  color: #434E5B;
  font-size: 16px;
  font-family: Nunito;
  font-weight: 500;
  word-wrap: break-word;
  margin-right: 5px;
}

.info-title-required {
  color: #F56C6C;
  font-size: 16px;
  font-family: Nunito;
  font-weight: 500;
  word-wrap: break-word;
}

.info-subtitle {
  color: #748494;
  font-size: 14px;
  font-family: Nunito;
  font-weight: 500;
  word-wrap: break-word;
}

.header {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 19px;
  margin-bottom: 12px;
}

.radio-circle {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid #00B8AD;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 6px;
}

.radio-circle div {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.selected {
  background-color: #00B8AD;
}

.title,
.number {
  color: #434E5B;
  font-size: 14px;
  font-family: Nunito;
  font-weight: 500;
  word-wrap: break-word;
}

.number {
  margin-left: auto;
  color: #909399;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.custom-button {
  width: 360px;
  height: 48px;
  background: #00B8AD;
  border-radius: 5px;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.custom-button:hover {
  background-color: #009c95;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  width: 90%;
  text-align: center;
}

.popup-message {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
}

.popup-close-button {
  background-color: #00B8AD;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  cursor: pointer;
}

.popup-close-button:hover {
  background-color: #009c95;
}

</style>
  
<script>
export default {
  data() {
    return {
      selectedOption: "",
      showPopup: false,
    };
  },
  methods: {
    selectOption(option) {
      this.selectedOption = option;
    },
    showNotification() {
      this.showPopup = true;
    },
    closePopup() {
      this.showPopup = false;
      this.$router.push('/perfil');
    },
  },
  name: "InfoPagamento",
};
</script>
  