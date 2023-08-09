import MomentBase from "./MomentBase";

export default (data, horaString) =>
  new Date(MomentBase({ data, format: "YYYY-MM-DD" }) + "T" + horaString);

export function ConcatDataHoraString(dataString, horaString) {
  const [day, month, year] = dataString.split("/");
  const [hours, minutes] = horaString.split(":");
  const dataHora = new Date(+year, month - 1, +day, +hours, +minutes);
  return dataHora
}
