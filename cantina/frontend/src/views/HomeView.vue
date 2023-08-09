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
             v-for="aluno in alunos"
             :key="aluno.nome"
             :imagemAluno="aluno.imagemAluno"
             :nome="aluno.nome"
             :turma="aluno.turma"
             :saldo="aluno.saldo"
             :button-label="aluno.buttonLabel"
          />
        </div>
      </div>
    </SContainer>
  </div>
</template>

<script>
import SCardAluno from '../components/app-cantina/SCardAluno.vue';
import {alunos} from '@/entities/alunos.js'

export default {
  components: { SCardAluno },
  data(){
    return{
      alunos: alunos
    }
  },
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
