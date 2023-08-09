<template>
    <NavBar/>
    <atalho-list-aluno/>
    <cantinas-list/>
</template>

<script>
import NavBar from '../components/app-cantina/NavBar.vue';
import AtalhoListAluno from '@/components/app-cantina/AtalhoListAluno.vue';
import CantinasList from '@/components/app-cantina/CantinaLista.vue';

export default {
  components: { NavBar,
    AtalhoListAluno,
    CantinasList },
}
</script>

<style s,
    AtalhoListAlunocoped>

</style>
