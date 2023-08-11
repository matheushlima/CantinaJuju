<template>
  <div class="status-tag">
    <div class="bg"></div>
    <div class="status-text">
      <div class="icon"></div>
      <div class="text">Está tudo bem! Você não possui pendências</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatusTag',
};
</script>

<style scoped>
.status-tag {
  position: relative;
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  background: #30B565;
  color: #ffffff;
  font-family: 'Nunito';
  font-weight: 600;
  font-size: 16px;
  box-sizing: border-box;
}

.bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #30B565;
  z-index: -1;
}

.status-text {
  display: flex;
  align-items: center;
  flex: 1;
}

.icon {
  width: 16px;
  height: 16px;
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: 10px;
  background: url('@/assets/icons/statusOkIcon.svg');
  background-size: contain;
  background-repeat: no-repeat;
}

.text {
  width: 318px;
  height: 22px;
  left: 48px;
  top: 131px;

  font-family: 'Nunito';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;

  color: #FFFFFF;
}

@media screen and (max-width: 768px) {
  .status-tag {
    flex-direction: column;
    text-align: center;
  }

  .bg {
    display: none;
  }
}
</style>
