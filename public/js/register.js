//---------popup logic
document.querySelector("#show-register")?.addEventListener("click", function() {
  //showing popup
  document.querySelector(".registerPopup").classList.add("active");
  //hiding the animation while user registers
  document.querySelector(".animationDiv").style.visibility = "hidden";
});

document.querySelector(".registerPopup .close-btn")?.addEventListener("click", function() {
  //hiding the popup
  document.querySelector(".registerPopup").classList.remove("active");
  //showing the animation again
  document.querySelector(".animationDiv").style.visibility = "visible";
});

//----------registration logic
const registerForm = document.querySelector('.registerForm');

registerForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const { method, action } = event.target;

  //sending user's data to the server
  let response = await fetch(action, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      login: event.target.registerLogin.value,
      password: event.target.registerPassword.value,
      email: event.target.registerEmail.value,
    }),
  });

  if (response.status === 200) {
    location.reload();
  }
});
