import { apiConfig } from "./api-config.js";

export async function scheduleFetchById({ id }) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules/${id}`);
    return await response.json();
  } catch (error) {
    console.log("Erro ao buscar agendamento: ", error);
    alert("Não foi possível buscar dados do agendamento.");
  }
}
