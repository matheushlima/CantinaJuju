import { ConcatDataHoraString } from "./ConcatDataHora";

export default (lista) => {
  var listaChamadaOrdenada = lista.sort((a, b) => {
    var ordemData = 0;

    if (a?.horaInicial && b?.horaInicial) {
      var dataHoraInicioA = ConcatDataHoraString(
        a.dataListaChamada,
        a.horaInicial
      );
      var dataHoraInicioB = ConcatDataHoraString(
        b.dataListaChamada,
        b.horaInicial
      );
  
      ordemData = compareFn(dataHoraInicioA, dataHoraInicioB);
    }    

    if (ordemData != 0) return ordemData;

    return compareFn(
      a?.disciplina.toUpperCase(),
      b?.disciplina.toUpperCase()
    );
  });

  return listaChamadaOrdenada;
};

const compareFn = (a, b) => {
  if (a < b) return -1;
  else if (a > b) return 1;
  else return 0;
};
