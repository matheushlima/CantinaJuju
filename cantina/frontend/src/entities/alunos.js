const alunos = [
    {
      id: 1,
      imagemAluno: require('@/assets/irmaoJorel.svg'),
      nome: 'Irmão do Jorel',
      turma: '4ª B',
      saldo: '20,00',
      buttonLabel: 'Ver conteúdo',
    },
    {
      id: 2,
      imagemAluno: require('@/assets/jorel.svg'),
      nome: 'Jorel',
      turma: '8ª A',
      saldo: '25,50',
      buttonLabel: 'Ver conteúdo',
    },
    {
      id: 3,
      imagemAluno: require('@/assets/nicolau.svg'),
      nome: 'Nicolau',
      turma: '2ª ano C',
      saldo: '17,40',
      buttonLabel: 'Ver conteúdo',
    },
    // Adicione mais alunos aqui, se necessário
  ];

  export const GetAluno = async () => {
    var alunosMapeados = []

    for (const aluno of alunos) {
      const saldo = await GetAlunoSaldoApi(aluno.id);

        alunosMapeados.push({
        id: aluno.id,
        imagemAluno: aluno.imagemAluno,
        nome: aluno.nome,
        turma: aluno.turma,
        saldo: 'R$' + saldo,
        buttonLabel: aluno.buttonLabel,
      });
  }

  return alunosMapeados;
}

  const GetAlunoSaldoApi = async (id) => {
    try{
      const response = await fetch(`http://localhost:3000/balance/${id}`);
      const alunoSaldo = await response.json();

      return alunoSaldo.balance;

    }
    catch{
      console.log("Deu erro ")
    }
  }