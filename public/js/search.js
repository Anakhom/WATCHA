//function to clear out the search bar
const clearInput = () => {
  const input = document.querySelector(".searchTerm");
  input.value = "";
}

const clearButton = document.getElementById("clearButton");
clearButton?.addEventListener("click", clearInput);