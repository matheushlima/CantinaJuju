import moment from "moment";
import "moment/locale/pt-br";

moment.locale("pt-br");

function MomentBase({ data, format = "L" }) {
  const dateFormated = moment(data).format(format);
  return dateFormated;
}

export default MomentBase;


// moment().format('MMMM Do YYYY, h:mm:ss a'); // julho 20º 2022, 4:08:28 pm
// moment().format('dddd');                    // quarta-feira
// moment().format("MMM Do YY");               // jul 20º 22
// moment().format('YYYY [escaped] YYYY');     // 2022 escaped 2022
// moment().format();                          // 2022-07-20T16:08:55-03:00

// moment.locale();         // pt-br
// moment().format('LT');   // 16:09
// moment().format('LTS');  // 16:09:07
// moment().format('L');    // 20/07/2022
// moment().format('l');    // 20/7/2022
// moment().format('LL');   // 20 de julho de 2022
// moment().format('ll');   // 20 de jul de 2022
// moment().format('LLL');  // 20 de julho de 2022 às 16:09
// moment().format('lll');  // 20 de jul de 2022 às 16:09
// moment().format('LLLL'); // quarta-feira, 20 de julho de 2022 às 16:09
// moment().format('llll'); // qua, 20 de jul de 2022 às 16:09
