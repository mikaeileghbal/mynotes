function saveToStorage(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function loadFromStorage() {
  return JSON.parse(localStorage["todos"].toString());
}

function isDataAvailable() {
  return localStorage["todos"];
}

export { saveToStorage, loadFromStorage, isDataAvailable };
