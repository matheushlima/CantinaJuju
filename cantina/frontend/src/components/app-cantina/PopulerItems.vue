<template>
  <div class="popular-items-container" v-if="!scrolling">
    <div class="item" v-for="(item, index) in items" :key="index">
      <div class="item-content">
        <div class="item-time">
          <div class="time-border">{{ item.horaInicial }} </div>
          <div class="time-border">{{ item.horaFinal }}</div>
        </div>
        <div class="item-header">
          <img class="item-image" :src="item.imageSrc" alt="Imagem da Salada">
        </div>
        <div class="item-details">
          <div class="item-title">{{ item.titulo }}</div>
          <div class="item-info">{{ item.info }}</div>
          <div class="itemStatus">
            <s-tag-status label="Disponivel" variant="success" />
            <div class="item-price">{{ item.preco }} </div>
          </div>
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
  padding: 0px 16px 16px 16px;
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

.itemStatus{
  display: flex;
  margin-top: 8px;
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
  background-size: contain;
  background-repeat: no-repeat;
}

.item-details {
  flex: 1;
  padding-top: 16px;
  padding-bottom: 10px;
  color: #434E5B;
  font-size: 16px;
  font-family: Nunito;
  font-weight: 600;
  word-wrap: break-word;
}

.item-title {
  color: #434E5B;
  font-size: 16px;
  align-content: initial;
}

.item-info {
  color: #00B8AD;
  font-size: 14px;
  font-weight: 500;
}

.item-price {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #F4F4F5;
  border-radius: 5px;
  height: 32px;
  color: #909399;
  font-size: 12px;
  font-family: Nunito;
  font-weight: 700;
  width: 70px;
}
</style>

<script>

import saladaImg from '@/assets/Cardapio/saladaImg.png';
import sanduicheImg from '@/assets/Cardapio/sanduicheImg.png';
import boloImg from '@/assets/Cardapio/boloImg.png';

export default {
  props: ['scrolling'],
  data() {
    return {
      items: [
        {
          titulo: 'Salada de frutas',
          info: 'Cantina da Juju',
          preco: 'R$ 6,90',
          horaInicial: '10:30',
          horaFinal: '13:00',
          imageSrc: saladaImg,
        },
        {
          titulo: 'Sanduíche de croissant',
          info: 'Cantina da Juju',
          preco: 'R$ 8,50',
          horaInicial: '12:15',
          horaFinal: '14:30',
          imageSrc: sanduicheImg,
        },
        {
          titulo: 'Sanduíche de croissant',
          info: 'Cantina da Juju',
          preco: 'R$ 9,90',
          horaInicial: '11:00',
          horaFinal: '15:00',
          imageSrc: sanduicheImg,
        },
        {
          titulo: 'Bolo de cenoura com especiarias',
          info: 'Cantina da Juju',
          preco: 'R$ 5,00',
          horaInicial: '17:30',
          horaFinal: '19:00',
          imageSrc: boloImg,
        },
      ],
    };
  },
};
</script>