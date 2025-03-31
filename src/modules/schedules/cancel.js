import { schedulesDay } from "./load.js";
import { scheduleCalcel } from "../../services/schedule-cancel.js";

const periods = document.querySelectorAll(".period");

// Create click event for any list
periods.forEach((period) => {
  // Captura o click event
  period.addEventListener("click", async (event) => {
    const cancelIcon = event.target.classList.contains("cancel-icon"); // pega o ícone de cancelar

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
  });
});
