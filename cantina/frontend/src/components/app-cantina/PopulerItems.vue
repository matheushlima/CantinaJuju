<template>
  <div class="popular-items-container" v-if="!scrolling">
    <div class="item" v-for="(item, index) in items" :key="index">
      <div class="item-content">
        <div class="item-time">
          <div class="time-border">{{ item.horaInicial }} </div>
          <div class="time-border">{{ item.horaFinal }}</div>
        </div>
        <div class="item-header">
          <img class="item-image" :src="item.imageSrc" alt="Item Image" />
        </div>
        <div class="item-details">
          <div class="item-title">{{ item.titulo }}</div>
          <div class="item-info">{{ item.info }}</div>
          <div class="item-price">{{ item.preco }} </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.popular-items-container {
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
  margin-bottom: 10px;
}

.item {
  width: 100%;
  max-width: 358px;
  position: relative;

}

.item-content {
  display: flex;
  align-items: center;
  background: white;
  border-radius: 15px;
  border: 0.50px #E8ECEF solid;
  margin-left: 60px;
}

.item-time {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  padding: 8px;
  width: 60px;
}

.time-border {
  border: 1px solid #748494;
  border-radius: 5px;
  padding: 4px;
  text-align: center;
  color: #748494;
  font-size: 12px;
  font-family: Nunito;
  font-weight: 600;
  word-wrap: break-word;
}

.item-header {
  flex: 0 0 72px;
  margin-right: 10px;
  margin-left: 17px;
}

.item-image {
  width: 72px;
  height: 72px;
  border-radius: 5px;
  border: 0.50px #E8ECEF solid;
}

.item-details {
  flex: 1;
  padding: 16px;
  color: #434E5B;
  font-size: 16px;
  font-family: Nunito;
  font-weight: 600;
  word-wrap: break-word;
}

.item-title {
  color: #434E5B;
  font-size: 16px;
}

.item-info {
  color: #748494;
  font-size: 14px;
  font-weight: 500;
}

.item-price {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #F4F4F5;
  border-radius: 5px;
  height: 24px;
  margin-top: 8px;
  color: #909399;
  font-size: 12px;
  font-family: Nunito;
  font-weight: 700;
}
</style>

<script>
export default {
  props: ['scrolling'],
  data() {
    return {
      items: [
      {
        titulo: 'Hamburguer Clássico',
        info: '200g . 550kcal',
        preco: 'R$ 12,90',
        horaInicial: '10:30',
        horaFinal: '13:00',
        imageSrc: 'https://via.placeholder.com/72x72',
      },
      {
        titulo: 'Wrap de Frango',
        info: '180g . 420kcal',
        preco: 'R$ 8,50',
        horaInicial: '12:15',
        horaFinal: '14:30',
        imageSrc: 'https://via.placeholder.com/72x72',
      },
      {
        titulo: 'Salada Caesar',
        info: '150g . 320kcal',
        preco: 'R$ 9,90',
        horaInicial: '11:00',
        horaFinal: '15:00',
        imageSrc: 'https://via.placeholder.com/72x72',
      },
      {
        titulo: 'Sopa de Legumes',
        info: '250g . 180kcal',
        preco: 'R$ 5,00',
        horaInicial: '17:30',
        horaFinal: '19:00',
        imageSrc: 'https://via.placeholder.com/72x72',
      },
      {
        titulo: 'Suco de Abacaxi',
        info: '300ml',
        preco: 'R$ 3,50',
        horaInicial: '09:00',
        horaFinal: '10:00',
        imageSrc: 'https://via.placeholder.com/72x72',
      },
      ],
    };
  },
};
</script>