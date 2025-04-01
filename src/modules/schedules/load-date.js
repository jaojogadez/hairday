import dayjs from "dayjs";

const showDate = document.querySelector(".date-container h2");
const selectedDate = document.querySelector("#date");

export function updateDate() {
  showDate.innerHTML = dayjs(selectedDate.value).format("DD/MM/YY");
  selectedDate.addEventListener("input", () => {
    showDate.innerHTML = dayjs(selectedDate.value).format("DD/MM/YY");
  });
}
