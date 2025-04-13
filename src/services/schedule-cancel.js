import { apiConfig } from "./api-config";

export async function scheduleCalcel({ id }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
    alert("Não foi possível cancelar o agendamento.");
  }
}
