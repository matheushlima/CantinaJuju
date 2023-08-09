<template>
  <div class="nav-bar">
    <!-- bg -->
    <div class="bg"></div>

    <!-- R$ 14,90 -->
    <div class="price">R$ 14,90</div>

    <!-- Saldo na carteira -->
    <div class="wallet">Saldo na carteira</div>

    <!-- icon -->
    <div class="iconSaldo"></div>

    <!-- icon -->
    <div class="icon"></div>

    <!-- Irmão do Jorel -->
    <div class="name">Irmão do Jorel</div>

    <!-- img -->
    <div class="image" ></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style scoped>
.nav-bar {
  position: absolute;
  width: 390px;
  height: 152px;
  left: 0;
  top: 0;
}

.bg {
  position: absolute;
  width: 390px;
  height: 152px;
  left: 0;
  top: 0;
  background: #ffffff;
  box-shadow: 0px 0px 16px 4px rgba(0, 0, 0, 0.04);
}

.price {
  /* R$ 14,90 */

position: absolute;
width: 76px;
height: 25px;
left: 16px;
top: 111px;

font-family: 'Nunito';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 25px;
/* identical to box height */
display: flex;
align-items: center;

color: #232B34;


}

.wallet {
  /* Saldo na carteira */

position: absolute;
width: 107px;
height: 19px;
left: 38px;
top: 85px;

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

.icon {
 /* icon */

position: absolute;
width: 18px;
height: 12px;
left: 356px;
top: 54px;

background: #232B34;

}

.iconSaldo{
    /* icon */

position: absolute;
width: 14px;
height: 12px;
left: 16px;
top: 89px;

background: #748494;

}

.name {
  /* Irmão do Jorel */

position: absolute;
width: 116px;
height: 25px;
left: 56px;
top: 48px;

font-family: 'Nunito';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 25px;
/* identical to box height */
display: flex;
align-items: center;

color: #232B34;


}

.image {
position: absolute;
width: 32px;
height: 32px;
left: 16px;
top: 45px;
}
</style>