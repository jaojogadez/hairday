import { schedulesDay } from "./load.js";
import { scheduleCalcel } from "../../services/schedule-cancel.js";
import { scheduleFetchById } from "../../services/schedule-fetch-by-id.js";
import { hoursLoad } from "../form/hours-load.js";
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import dayjs from "dayjs";

const periods = document.querySelectorAll(".period");

// Create click event for any list
periods.forEach((period) => {
  // Captura o click event
  period.addEventListener("click", async (event) => {
    const cancelIcon = event.target.classList.contains("cancel-icon"); // pega o ícone de cancelar
    const editIcon = event.target.classList.contains("edit-icon"); // pega o ícone de cancelar

    if (cancelIcon) {
      // Obtém a li pai do elemento clicado
      const item = event.target.closest("li");

      // Obtém o id da li pai
      const { id } = item.dataset;

      // Confirma que o id foi seleciona
      if (id) {
        // Confirma o cancelamento
        const isConfirm = confirm(
          "Tem certeza que deseja cancelar o agendamento?"
        );

        if (isConfirm) {
          // Requisição para cancelar na API
          console.log("ID que será deletado:", id);
          console.log("ELemento que será deletado:", item);

          await scheduleCalcel({ id });
          schedulesDay(); // recarrega a list
        }
      }
    }

    if (editIcon) {
      // Obtém a li pai do elemento clicado
      const item = event.target.closest("li");
      // Obtém o id da li pai
      const { id } = item.dataset;

      console.log("Item selecionado: ", item);
      console.log("ID do Item: ", id);

      if (id) {
        // Busca agendamento na API
        const schedule = await scheduleFetchById({ id });

        if (schedule) {
          console.log("Agendamento selecionado: ", schedule);
          console.log("Nome: ", schedule.name);
          console.log("Horário: ", schedule.when);

          const date = dayjs(schedule.when);
          const hourFormated = date.format("HH:mm");

          document.querySelector("#client").value = schedule.name;
          document.querySelector("#date").value = date.format("YYYY-MM-DD");

          const formattedDate = date.format("YYYY-MM-DD");

          hoursLoad({
            date: formattedDate,
            dailySchedules: await scheduleFetchByDay({ date: formattedDate }),
          });

          const hours = document.querySelectorAll(".hour");
          hours.forEach((hour) => {
            hour.classList.remove("hour-selected");
          });

          hours.forEach((hour) => {
            if (hour.textContent.trim() === hourFormated) {
              hour.classList.remove("hour-unavailable");
              hour.classList.add("hour-selected");
            }
          });

          await scheduleCalcel({ id });

        }
      }
    }
  });
});
