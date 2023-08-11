<template>
  <div class="app-container">
    <div class="fixa">
      <NavBar />
      <AtalhoListAluno />
    </div>
    <CantinasList />
      <div class="h2">Mais populares hoje</div>
    <div class="populer-items">
      <PopulerItems :scrolling="scrolling" />
    </div>
  </div>
</template>

<script>
import NavBar from '../components/app-cantina/NavBar.vue';
import AtalhoListAluno from '@/components/app-cantina/AtalhoListAluno.vue';
import CantinasList from '@/components/app-cantina/CantinaLista.vue';
import PopulerItems from '../components/app-cantina/PopulerItems.vue';

export default {
  components: {
    NavBar,
    AtalhoListAluno,
    CantinasList,
    PopulerItems
  },
  data() {
    return {
      scrolling: false
    };
  },
  methods: {
    handleScroll() {
      const populerItems = this.$refs.populerItems;
      if (!populerItems) return;

      const container = populerItems.querySelector('.populer-items-container');
      if (!container) return;

      const containerTop = container.getBoundingClientRect().top;

      if (containerTop <= 65) {
        this.scrolling = true;
      } else {
        this.scrolling = false;
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style scoped>
/* Estilos existentes aqui */


.h2 {
  font-family: 'Nunito';
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  color: #232b34;
  width: 100%;
  padding-right: 150px;
  position: sticky;
  margin-top: 18px;
}

.fixa {
  position: sticky;
  background-color: rgb(247, 247, 247);
  top: 0;
  z-index: 2; /* Adicione essa linha para sobrepor corretamente */
}

.populer-items {
  overflow-y: auto;
  height: calc(100vh - 65px);
  padding-top: 10px;
}

/* Animação de fade-in/out */
.populer-items-enter-active, .populer-items-leave-active {
  transition: opacity 0.3s;
}
.populer-items-enter, .populer-items-leave-to {
  opacity: 0;
}
</style>
