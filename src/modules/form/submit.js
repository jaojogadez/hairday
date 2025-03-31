import dayjs from "dayjs";
import { scheduleNew } from "../../services/schedule-new.js";
import { schedulesDay } from "../schedules/load.js";

const form = document.querySelector("form");
const $selectDate = document.getElementById("date");
const $clientNameInput = document.getElementById("client");

// Data atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

// Carregar data atual e Definir a data mínina como sendo a data atual
$selectDate.value = inputToday;
$selectDate.min = inputToday;

form.onsubmit = async (event) => {
  event.preventDefault();
  try {
    // Recuperando o nome do cliente
    const name = $clientNameInput.value.trim();

    // Caso entre na condição, o return para tudo
    if (!name) {
      return alert("Informe o nome do cliente!");
    }

    // Recupera o horário selecionado
    const $hourSelected = document.querySelector(".hour-selected");

    if (!$hourSelected) {
      return alert("Selecione a hora.");
    }

    // Recuperar somente a hora
    const [hour] = $hourSelected.textContent.split(":");

    // Insere a hora na data
    const when = dayjs($selectDate.value).add(hour, "hour");

    // Gera um ID
    const id = new Date().getTime().toString();

    // Faz o agendamento
    await scheduleNew({
      id,
      name,
      when,
    });

    // Recarrega
    await schedulesDay();
    $clientNameInput.value = "";
    
  } catch (error) {
    alert("Não foi possível realizar o agendamento");
  }
};
