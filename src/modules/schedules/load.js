import { hoursLoad } from "../form/hours-load.js";
import { schedulesShow } from "../schedules/show.js";
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { updateDate } from "../schedules/load-date.js";

// Input de data
const $selectedDate = document.querySelector("#date");

export async function schedulesDay() {
    const date = $selectedDate.value

    // Busca na API os agendamentos para carregar do lado direito da tela (html)
    const dailySchedules = await scheduleFetchByDay({ date })

    // Exibe os agendamentos
    schedulesShow({ dailySchedules })

    // Renderiza as horas disponíveis
    hoursLoad({ date, dailySchedules })

    // Os horários disponíveis (horários futuro + não agendado) do lado esquerdo da tela (form)

}
