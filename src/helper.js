function saveToStorage(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function loadFromStorage() {
  return JSON.parse(localStorage["todos"].toString());
}

function isDataAvailable() {
  return localStorage["todos"];
}

function random() {
  return Math.floor(Math.random() * 2);
}

function getNoteBackColor() {
  const colors = ["#FFE900", "#1CE8B5"];
  return colors[random()];
}

export { saveToStorage, loadFromStorage, isDataAvailable, getNoteBackColor };
