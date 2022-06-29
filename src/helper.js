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
  events: "#FFE900",
  meetings: "#1CE8B5",
};

export { saveToStorage, loadFromStorage, isDataAvailable, NoteBackColor };
