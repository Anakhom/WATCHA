const clearInput = () => {
  const input = document.querySelector(".searchTerm");
  input.value = "";
}

const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", clearInput);