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

const NoteBackColor = {
  notdone: "#FFE900",
  done: "#1CE8B5",
};

export { saveToStorage, loadFromStorage, isDataAvailable, NoteBackColor };
