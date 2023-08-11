<template>
  <div class="CantinaSaldo">
    <div class="card-wrapper">
      <div class="title">Comprar Créditos</div>
      <div class="description">Selecione um valor e adicione ao seu saldo</div>
      <div class="options">
        <div v-for="option in options" :key="option.value" @click="setInputValue(option.value)" :class="['option', { 'selected': option.value === inputValue }]">
          {{ option.label }}
        </div>
      </div>
      <div class="divider"></div>
      <div class="other-value">Outro Valor</div>
      <div class="value-box">
        <input v-model="inputValue" @input="formatarMoeda" type="text" class="value-input" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: '0.00',
      options: [
        { label: 'R$ 10', value: 10 },
        { label: 'R$ 25', value: 25 },
        { label: 'R$ 50', value: 50 },
        { label: 'R$ 100', value: 100 },
      ],
    };
  },
  methods: {
    formatarMoeda() {
      let valorLimpo = this.inputValue
        .replace(/[^\d.]/g, '')  // Remove caracteres não numéricos exceto ponto
        .replace(/^(\d+\.\d{2}).*/, '$1');  // Mantém até duas casas decimais
        
      if (valorLimpo.indexOf('.') === -1) {
        valorLimpo += '.00';
      } else if (valorLimpo.split('.')[1].length < 2) {
        valorLimpo += '0';
      }
      
      this.inputValue = valorLimpo;
    },
    setInputValue(value) {
      this.inputValue = value.toString();
    },
     selectOption(value) {
      this.selectedOption = value;
    },
  },
};
</script>

<style scoped>
.CantinaSaldo {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 35vh;
  background-color: #f4f4f4;
}

.card-wrapper {
  background-color: white;
  border-radius: 15px;
  box-shadow: 0px 2.5px 16px 2.5px rgba(0, 0, 0, 0.04);
  border: 0.50px #e8ecef solid;
  padding: 20px;
  width: 100%;
  max-width: 360px;
  box-sizing: border-box;
}

.title {
  font-size: 18px;
  font-weight: 500;
  color: #434e5b;
}

.description {
  margin-top: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #748494;
}

.options {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}

.option {
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 15px;
  background-color: #f4f4f4;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 12px;
  font-weight: 700;
  color: #232b34;
  transition: background-color 0.3s ease;
}

.option.selected {
  background-color: #232b34;
  color: white;
}

.divider {
  height: 1px;
  background-color: #e8ecef;
  margin: 20px 0;
}

.other-value {
  font-size: 18px;
  font-weight: 500;
  color: #434e5b;
}

.value-box {
  margin-top: 20px;
}

.value-input {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  background-color: #f4f4f4;
}
</style>
