<template>
  <div class="s-card-aluno">
    <SCard>
      <header class="header">
        <div class="avatar-container">
          <el-avatar :size="32" :src=imagemAluno class="avatar-content" />
        </div>

        <div class="s-grid">
          <h6 class="s-text-ellipsis">
            {{ nome }}
          </h6>
          <h6 style="font-weight: 400" class="s-text-ellipsis">
            {{ turma }}
          </h6>
        </div>

        <div class="saldo">
          <h6 class="s-text-ellipsis">
            {{ saldo }}
          </h6>
        </div>
      </header>

      <footer>
        <SButtonMenu label="Ver conteúdo" :border-radius="4" :padding="10" @click="irParaOutraTela" />
      </footer>
    </SCard>
  </div>
</template>

<script>

export default {
  methods: {
    irParaOutraTela() {
      localStorage.setItem('perfilNome', this.nome);
      localStorage.setItem('perfilImagem', this.imagemAluno);
      localStorage.setItem('perfilSaldo', this.saldo);

      this.$router.push('/perfil');
    },
  },
  name: "SCardAluno",
  props: {
    imagemAluno: {
      type: String,
    },
    nome: {
      required: true,
      type: String,
    },
    turma: {
      required: true,
      type: String,
    },
    saldo: {
      required: true,
      type: String,
    },
  },

};
</script>

<style scoped>
header {
  display: flex;
  gap: 16px;
  padding-bottom: 24px;
}

.saldo {
  display: flex;
  justify-content: space-between;
}

.avatar-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

h6 {
  margin-bottom: 0;
}
</style>