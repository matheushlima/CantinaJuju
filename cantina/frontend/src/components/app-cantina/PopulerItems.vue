<template>
    <div class="popular-items-container">
      <div class="item" v-for="(item, index) in items" :key="index">
        <div class="item-content">
          <div class="item-header">
            <img class="item-image" :src="item.imageSrc" alt="Item Image" />
            <div class="item-time">{{ item.time }}</div>
          </div>
          <div class="item-details">
            <div class="item-title">{{ item.title }}</div>
            <div class="item-info">{{ item.info }}</div>
            <div class="item-price">{{ item.price }}</div>
          </div>
        </div>
      </div>
    </div>
  </template>
<style scoped>
.popular-items-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.item {
  width: 358px;
  height: 376px;
  position: relative;
  margin: 10px;
}

.item-content {
  width: 100%;
  height: 100%;
  position: absolute;
  background: white;
  border-radius: 15px;
  border: 0.50px #E8ECEF solid;
}

.item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
}

.item-image {
  width: 72px;
  height: 72px;
  border-radius: 5px;
  border: 0.50px #E8ECEF solid;
}

.item-time {
  text-align: center;
  color: #748494;
  font-size: 12px;
  font-family: Nunito;
  font-weight: 600;
  word-wrap: break-word;
}

.item-details {
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
  data() {
    return {
      items: [
        {
          title: 'Sanduíche de croissant',
          info: '220g . 540kcal',
          price: 'R$ 10,90',
          time: '16:00',
          imageSrc: 'https://via.placeholder.com/72x72',
        },
        {
          title: 'Sanduíche de croissant',
          info: '220g . 540kcal',
          price: 'R$ 10,90',
          time: '16:40',
          imageSrc: 'https://via.placeholder.com/72x72',
        },
        {
          title: 'Salada de frutas',
          info: '100g . 50kcal',
          price: 'R$ 6,90',
          time: '12:00',
          imageSrc: 'https://via.placeholder.com/72x72',
        },
      ],
    };
  },
};
</script>
  