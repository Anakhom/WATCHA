//---------popup logic
document.querySelector("#showLogin")?.addEventListener("click", function() {
  //opening the popup
  document.querySelector(".loginPopup").classList.add("active");
  //hidding the animation while user is loging in
  document.querySelector(".animationDiv").style.visibility = "hidden";
});

document.querySelector(".loginPopup .closeButton")?.addEventListener("click", function() {
  //closing the popup
  document.querySelector(".loginPopup").classList.remove("active");
  //showing the animation
  document.querySelector(".animationDiv").style.visibility = "visible";
});

//-------authorization logic
function failSignin(form) {
  form.name.setCustomValidity('Неверные имя пользователя и/или пароль.');
  form.name.reportValidity();
};

const loginForm = document.querySelector('.loginForm');

loginForm?.addEventListener('submit', async (event) => {
  event.preventDefault();

  const { method, action } = event.target;
  let response;

  //sending user's data to the server
  try {
    response = await fetch(action, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login: event.target.loginLogin.value,
        password: event.target.loginPassword.value,
      })
    })
  } catch (err) {
    return failSignin(event.target);
  }

  //acting based on the server's response 
  if (response.status === 200) {
    location.reload();
  } else {
    return alert(`This user doesn't exist :(`);
  }
});
