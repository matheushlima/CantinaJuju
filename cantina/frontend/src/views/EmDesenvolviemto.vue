<template>
    <div>
        <NavBar />
        <div class="development-message">
        <p>Este recurso está em desenvolvimento</p>
        </div>
    </div>
  </template>
  
<script>
import NavBar from '../components/app-cantina/NavBar.vue';

export default {
    components: {
      NavBar
    }
}
</script>


<style>
  .development-message {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 70vh;
    background-color: #f5f5f5;
    font-size: 24px;
    font-weight: bold;
  }
</style>