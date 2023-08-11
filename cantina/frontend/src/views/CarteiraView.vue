<template>
  <div class="carteira">
      <NavBar />
      <StatusCarteira/>
      <CantinaSaldo/>
      <pagamento-carteira/>
  </div>
</template>
<script>
import NavBar from '../components/app-cantina/NavBar.vue';
import StatusCarteira from '../components/app-cantina/StatusCarteira.vue';
import CantinaSaldo from '../components/app-cantina/CantinaSaldo.vue';
import PagamentoCarteira from '../components/app-cantina/PagamentoCarteira.vue';
export default {
  components: {
    NavBar,
    StatusCarteira,
    CantinaSaldo,
    PagamentoCarteira
  }
}
</script>
<style scoped>

</style>
