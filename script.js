import data from "./data.json" with { type: "json" };

const dailyBtn = document.getElementById("daily-btn");
const weeklyBtn = document.getElementById("weekly-btn");
const monthlyBtn = document.getElementById("monthly-btn");

const durations = document.querySelectorAll(".task-duration");
const lastTasks = document.querySelectorAll(".last-task");

const labels = {
  daily: "Yesterday",
  weekly: "Last Week",
  monthly: "Last Month",
};

function render(mode) {
  data.forEach((item, i) => {
    durations[i].textContent = `${item.timeframes[mode].current}hrs`;
    lastTasks[i].textContent = `${labels[mode]} - ${item.timeframes[mode].previous}hrs`;
  });

  dailyBtn.classList.toggle("active", mode === "daily");
  weeklyBtn.classList.toggle("active", mode === "weekly");
  monthlyBtn.classList.toggle("active", mode === "monthly");
}

dailyBtn.addEventListener("click", () => render("daily"));
weeklyBtn.addEventListener("click", () => render("weekly"));
monthlyBtn.addEventListener("click", () => render("monthly"));

render("daily");