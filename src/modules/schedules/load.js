import { hoursLoad } from "../form/hours-load.js";

// Input de data
const $selectedDate = document.querySelector("#date");

export function schedulesDay() {
    // Busca na API os agendamentos para carregar do lado direito da tela (html)

    const date = $selectedDate.value

    // Renderiza as horas disponíveis
    hoursLoad({date})

    // Os horários disponíveis (horários futuro + não agendado) do lado esquerdo da tela (form)

}
