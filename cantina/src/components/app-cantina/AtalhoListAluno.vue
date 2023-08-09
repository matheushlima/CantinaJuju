<template>
  <div class="atalhosList">
    
    <div class="h2">
        Atalhos
    </div>


    <!-- Pedidos -->
    <div class="shortcut">
      <div class="bg"></div>
      <div class="icon"></div>
      <div class="title">Pedidos</div>
      <div class="access">Acessar</div>
    </div>
    
    <!-- Carteira -->
    <div class="shortcut">
      <div class="bg"></div>
      <div class="icon"></div>
      <div class="title">Carteira</div>
      <div class="access">Acessar</div>
    </div>
    
    <!-- Mais atalhos aqui... -->
  </div>
</template>

<script>
export default {
  name: 'AtalhosListAluno',
};
</script>

<style scoped>
.atalhosList {
  position: absolute;
  width: 358px;
  height: 104px;
  left: 16px;
  top: 176px;
}

.shortcut {
  position: relative;
  width: 159px;
  height: 72px;
  top: 20px;
  margin-right: 20px;
  display: inline-grid;
  border-radius: 8px;
  transition: background-color 0.3s, box-shadow 0.3s;
}

.shortcut:hover {
  background-color: #F0F0F0;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #ffffff;
  border: 1px solid #e8ecef;
  border-radius: 15px;
}

.icon {
  /* img */

position: absolute;
width: 40px;
height: 40px;
left: 16px;
top: 16px;

}

.title {
 /* Carteira */

position: absolute;
width: 59px;
height: 22px;
left: 72px;
top: 35px;

font-family: 'Nunito';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 22px;
/* identical to box height */
display: flex;
align-items: center;

color: #434E5B;


}

.access {
  /* Acessar */

position: absolute;
width: 51px;
height: 19px;
left: 72px;
top: 16px;

font-family: 'Nunito';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 19px;
/* identical to box height */
display: flex;
align-items: center;

color: #748494;
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