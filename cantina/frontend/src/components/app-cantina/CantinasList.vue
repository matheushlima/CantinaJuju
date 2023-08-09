<template>
  <div class="cantinas-list">
    <div class="h2">
        Cantinas
    </div>
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
  </div>
</template>

<script>
export default {
  name: 'CantinasList',
};
</script>

<style scoped>
.cantinas-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.cantina {
  position: relative;
  width: 159px;
  height: 216px;
  background: #FFFFFF;
  border: 1px solid #E8ECEF;
  border-radius: 15px;
}

.bg {
  box-sizing: border-box;
  position: absolute;
  width: 24px;
  height: 184px;
  left: 0;
  top: 0;
  background: #FFFFFF;
  border: 1px solid #E8ECEF;
  border-radius: 15px 0 0 15px;
}

.status {
  position: absolute;
  width: 54px;
  height: 16px;
  left: 16px;
  top: 152px;
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #30B565;
}

.status.closed {
  color: #F56C6C;
}

.icon {
  position: absolute;
  width: 6px;
  height: 6px;
  left: 16px;
  top: 157px;
  background: #30B565;
}

.item-count {
  position: absolute;
  width: 43px;
  height: 19px;
  left: 16px;
  top: 126px;
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: #748494;
}

.cantina-name {
  position: absolute;
  width: 100%;
  bottom: 32px;
  left: 16px;
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #434E5B;
}

.img {
  box-sizing: border-box;
  position: absolute;
  width: 159px;
  height: 88px;
  left: 0;
  bottom: 0;
  /* background: url(image.png); */
  border: 1px solid #E8ECEF;
  border-radius: 0 0 15px 15px;
}

.h2{
  /* Atalhos */

width: 64px;
height: 25px;
left: 0px;
top: 0px;

font-family: 'Nunito';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 25px;
/* identical to box height */
display: flex;
align-items: center;

color: #232B34;


}
</style>