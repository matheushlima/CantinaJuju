<template>
  <div class="s-alunos-lista">
    <SNavBar
      titulo="Visão geral"
    >
      <template #itemDireito>
        <div class="on-board-icone">
          <el-icon size="28">
            <QuestionFilled @click="onBoard = true" />
          </el-icon>
        </div>
      </template>
    </SNavBar>

    <!-- Carregando -->
    <SAlunosListaLoad/>

    <div>
      <SSwiperOnBoard :fechar-on-board="fecharOnBoard" />
    </div>

    <!-- Página Completa -->
    <SContainer>
      <div class="s-page-container">
        <div class="s-alunos-lista-container">
          <SCardAluno
            nome="Irmão do Jorel"
            turma="4ª B"
            saldo="R$ 20,00"
            button-label="Ver conteúdo"
          />

          <SCardAluno
            nome="Jorel"
            turma="8ª A"
            saldo="R$ 25,50"
            button-label="Ver conteúdo"
          />
          <SCardAluno
            nome="Nicolau"
            turma="2ª ano C"
            saldo="R$ 17,40"
            button-label="Ver conteúdo"
           
          />
        </div>
      </div>
    </SContainer>
  </div>
</template>

<script>
import SCardAluno from '../components/app-cantina/SCardAluno.vue';

export default {
  components: { SCardAluno },
  methods: {
    irParaOutraTela() {
      this.$router.push('/perfil');
    }
  }
}


</script>

<style scoped>
.s-page-container {
  display: flex;
  flex-direction: column;
  min-height: 85vh;
  justify-content: space-between;
}
.s-alunos-lista-container {
  display: grid;
  gap: 16px;
  margin-bottom: 16px;
}

.on-board-icone {
  display: flex;
  justify-content: right;
  color: var(--grey-60);
  position: relative;
}

.on-board-icone:hover {
  cursor: pointer;
  color: var(--grey-80);
}

.alunos-lista-vazio {
  display: grid;
  background: white;
  min-height: calc(100vh - 56px);
}

.s-vazio-content {
  margin: auto 0px;
}
</style>
