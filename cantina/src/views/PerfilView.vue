<template>
    <NavBar/>
    <atalho-list-aluno/>
    <cantinas-list/>
    <popular-items-container/>
</template>

<script>
import NavBar from '../components/app-cantina/NavBar.vue';
import AtalhoListAluno from '@/components/app-cantina/AtalhoListAluno.vue';
import CantinasList from '@/components/app-cantina/CantinaLista.vue';
import PopularItem from '@/components/app-cantina/PopulerItems.vue';

export default {
  components: { NavBar,
    AtalhoListAluno,
    CantinasList,
    PopularItem },
}
</script>

<style s,
    AtalhoListAlunocoped>

</style>
