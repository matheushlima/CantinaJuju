<template>
  <div class="cantinas-list">
    <div class="h2">Cantinas</div>

    <!-- Madalosso -->
    <div class="cantina" @click="desenvolvendo">
      <div>
        <div class="imgBanner"></div>
        <div class="infoCantina">
          <div class="cantina-name">
            Cantina da Juju
          </div>
          <div class="item-count">
            2 itens
          </div>
          <div class="status">
            <div class="iconFechado"></div>
              Fehcado
          </div>
        </div>
      </div>
    </div>

    <!-- Subway -->
    <div class="cantina" @click="desenvolvendo">
      <div>
        <div class="imgBannerShostners"></div>
        <div class="infoCantina">
          <div class="cantina-name">
            Shostners & S...
          </div>
          <div class="item-count">
            3 itens
          </div>
          <div class="status">
            <div class="iconAberto"></div>
              Aberto
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'CantinasList',
  methods: {
    desenvolvendo(){
      this.$router.push({name: 'desenvolvendo', replace:true});
    }
  },
};
</script>

<style scoped>
.cantinas-list {
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.h2 {
  font-family: 'Nunito';
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  color: #232b34;
  width: 100%;
  padding-right: 250px
}

.cantina {
  width: 159px;
  height: 180px;
  background: #ffffff;
  border: 1px solid #e8ecef;
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cantina-name{
  width: 127px;
  height: 22px;
  margin-left: 12px;

  font-family: 'Nunito';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;

  color: #434E5B;
}

.item-count{
  width: 43px;
  height: 19px;
  left: 16px;
  top: 126px;

  font-family: 'Nunito';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  margin-left: 20px;

  color: #748494;


}

.imgBanner {
  box-sizing: border-box;
  width: 159px;
  height: 88px;

  background: url('@/assets/imageCantinas/cantinaJuju.png');
  background-repeat: no-repeat;
  border-radius: 15px 15px 0px 0px;

}

.imgBannerShostners{
  box-sizing: border-box;
  width: 159px;
  height: 88px;

  background: url('@/assets/imageCantinas/shostners.png');
  background-repeat: no-repeat;
  border-radius: 15px 15px 0px 0px;
}

.iconAberto{
  /* icon */
  width: 6px;
  height: 6px;
  left: 16px;
  top: 157px;
  margin-right: 8px;
  margin-left: 20px;

  background: url('@/assets/icons/statusAbertoIcon.svg');
  background-size: contain;
  background-repeat: no-repeat;
}

.iconFechado{
  /* icon */
  width: 6px;
  height: 6px;
  left: 16px;
  top: 157px;
  margin-right: 8px;
  margin-left: 20px;

  background: url('@/assets/icons/statusFechadoIcon.svg');
  background-size: contain;
  background-repeat: no-repeat;
}

.status{
  margin-top: 8px;
  display: flex; /* Ativa o flexbox */
  align-items: center; /* Alinha os itens verticalmente ao centro */

}

.infoCantina{
  margin-top: 4px;
}
</style>
