import { schedulesDay } from "./schedules/load.js";
import { updateDate } from "./schedules/load-date.js";

document.addEventListener("DOMContentLoaded", function() {
    schedulesDay()
    updateDate()
})