import dayjs from "dayjs";
const form = document.querySelector("form");
const $selectDate = document.getElementById("date");
const $clientNameInput = document.getElementById("client");

// Data atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

// Carregar data atual e Definir a data mínina como sendo a data atual
$selectDate.value = inputToday;
$selectDate.min = inputToday;

form.onsubmit = (event) => {
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
    console.log($hourSelected);

    if (!$hourSelected) {
      return alert("Selecione a hora.");
    }

    // Recuperar somente a hora
    const [hour] = $hourSelected.textContent.split(":");

    // Insere a hora na data
    const when = dayjs($selectDate.value).add(hour, "hour");

    // Gera um ID
    const id = new Date().getTime();
    console.log({
      id,
      name,
      when
    })

  } catch (error) {
    alert("Não foi possível realizar o agendamento");
  }
};
