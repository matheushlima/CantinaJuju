import axios from "axios";

const notificationService = async (
  userId: string,
  email?: string,
  title: string,
  description: string,
  date: string,
  community: string
) => {
  const url =
    "https://cantinanotification.azurewebsites.net/api/HttpTriggerNotificacaoCantina?code=5MYZBaqckz849xHFW5UwCfG43Du1VMzvSSgUXFSWB3ySAzFuanTGWA==";

  const notificationData = {
    Emails: [email],
    Titulo: title,
    Descricao: description,
    DataNotificacaoAgendada: date,
    Comunidade: community,
  };

  try {
    const response = await axios.post(url, notificationData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Exemplo de uso
notificationService(
  "userId123",
  "user@example.com",
  "Testando notificação",
  "Enviando para o APP DEU CERTO",
  "2023-07-19",
  "sophiabylayers"
)
  .then((result) => {
    console.log("Notificação enviada com sucesso:", result);
  })
  .catch((error) => {
    console.error("Erro ao enviar notificação:", error);
  });

export default { notificationService };
