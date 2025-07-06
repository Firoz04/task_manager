const taskId = new URLSearchParams(window.location.search).get("task");

const taskForm = document.getElementById("edit-task-form");
const taskInputTitle = document.getElementById("task-title");
const goBackBUtton = document.getElementById("go-back-btn");

const API_URL = "https://6869e3762af1d945cea2bb62.mockapi.io/tasks";

fetch(`${API_URL}/${taskId}`)
  .then((res) => res.json())
  .then((task) => {
    taskInputTitle.value = task.title;
  })
  .catch(() => alert("Something went worng."));

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const updatedTaskTitle = taskInputTitle.value;
  if (updatedTaskTitle) {
    fetch(`${API_URL}/${taskId}`, {
      method: "PUT",
      body: JSON.stringify({ title: updatedTaskTitle, completed: false }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then(() => {
        alert("Task Updated Successfully.");
        window.location.href = "index.html";
      })
      .catch(() => alert("Something went wrong."));
  } else {
    alert("No task Found");
  }
});

goBackBUtton.addEventListener("click", () => {
  window.history.back();
});
