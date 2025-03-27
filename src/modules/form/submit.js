import dayjs from "dayjs";
const form = document.querySelector("form");
const $selectDate = document.getElementById("date");

// Data atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

// Carregar data atual e Definir a data mínina como sendo a data atual
$selectDate.value = inputToday;
$selectDate.min = inputToday;

form.onsubmit = (event) => {
  event.preventDefault();
  alert("Enviado");
};
