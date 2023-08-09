export interface SophiaMedicalRecord {
  tipoSanguineo: string;
  nomeResponsavel: string;
  tratamentoMedico: string;
  medicacao: number;
  fonoaudiologico: boolean;
  psicologico: boolean;
  psicopedagogico: boolean;
  terapiaOcupacional: boolean;
  outroAcompanhamento: boolean;
  acompanhamento: string;
  fazUsoMedicamento: boolean;
  medicamento: string;
  alergicoMedicamento: boolean;
  medicamentoAlergico: string;
  possuiOutrasAlergias: boolean;
  outrasAlergias: string;
  catapora: boolean;
  caxumba: boolean;
  coqueluxe: boolean;
  escarlatina: boolean;
  hepatite: boolean;
  meningite: boolean;
  rubeola: boolean;
  sarampo: boolean;
  outraDoencaContagiosa: boolean;
  doencaContagiosa: string;
  asma: boolean;
  bronquite: boolean;
  diabete: boolean;
  epilepsia: boolean;
  hemofilia: boolean;
  hipertensao: boolean;
  reumatismo: boolean;
  rinite: boolean;
  doencaCeliaca: boolean;
  dependenciaInsulina: boolean;
  outraDoencaCronica: boolean;
  doencaCronica: string;
  dataInicioDoencaCronica: string;
  necessidadeAuditiva: boolean;
  necessidadeFala: boolean;
  necessidadeFisica: boolean;
  necessidadeVisual: boolean;
  outraNecessidade: boolean;
  necessidadeEspecial: string;
  possivelCuidado: string;
  possuiDoencaCongenita: boolean;
  doencaCongenita: string;
  restricaoAlimentar: string;
  medicamentoFebre: string;
  doseMedicamentoFebre: string;
  medicamentoDorCabeca: string;
  doseMedicamentoDorCabeca: string;
  planoSaude: string;
  numeroPlanoSaude: string;
  registroSus: string;
  nomeHospitalClinica: string;
  telefoneHospitalClinica: string;
  enderecoHospitalClinica: string;
  nomeMedicoContatar: string;
  enderecoMedicoContatar: string;
  contatosMedicoContatar: {
    tipoContato: number;
    contato: string;
  }[];
  parentesContatar: {
    nome: string;
    parentesco: {
      codigo: number;
      descricao: string | null;
      tipoParentesco: number;
    };
    rg: string;
    contatos: [
      {
        tipoContato: number;
        contato: string;
      }
    ];
  }[];
  covid19GrupoRisco: boolean;
  covid19Teve: boolean;
  covid19Vacinado: boolean;
  covid19Observacoes: string;
}

export interface SophiaGuardian {
  codigo: number;
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
  tipoVinculo: {
    codigo: number;
    descricao: string;
    tipoParentesco: number;
  } | null;
  responsavelFinanceiro: boolean;
  responsavelPedagogico: boolean;
  retiradaAutorizada: boolean;
}

export interface SophiaStudent {
  codigo: number;
  codigoExterno: string;
  nome: string;
  email: string;
  contaOffice365: string;
  telefone: string;
  sexo: string;
  dataNascimento: string;
  turmas: {
    codigo: number;
    descricao: string;
  }[];
}

export interface SophiaStudentEnrollment {
  codigoAluno: number;
  matriculas: Enrollments[];
}

export interface Enrollments {
  codigoMatricula: number;
  turma: number;
  nomeTurma: string;
  situacao: string;
}
