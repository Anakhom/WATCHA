const nameChanger = document.getElementById("nameChanger");
const pencilButton = document.getElementById("pencilButton");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const login = document.getElementById("login");

pencilButton?.addEventListener("click", async () => {
  let userId = hiddenInput.value;

  let editInput = `
  <form id="editForm">
    <input class="nameInput" name="firstName" type="text" value="${firstName.innerHTML}">
    <input class="nameInput"name="lastName" type="text" value="${lastName.innerHTML}">
    <button id="editButton" type="submit">Edit</button>
  </form> 
  <style>
    #editForm {
      display: flex;
      flex-direction: column; 
      margin-right: 3.3em;
    } 
    .nameInput {
      outline: none;
      font-size: 1.2em;
      padding: 5px 10px;
      margin-bottom: 5px;
      color: #FFF;
      background-color: grey;
      border-color: transparent;
      border-radius: 5%;
    }
    #editButton {
      width: 40%
    }
  </style>
  `
  nameChanger.innerHTML = editInput;
  
  const editForm = document.getElementById("editForm");

  editForm?.addEventListener("submit", async (event) => {
    event.preventDefault();

    let response;

    try {
      response = await fetch(`/profile/${userId}/edit`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: event.target.firstName.value,
          lastName: event.target.lastName.value,
        })
      })
    } catch (err) {
      console.log(err);
    }

    let updatedUser = await response.json();

    if (updatedUser) {
      console.log(updatedUser);
      let editedName = `
      <p id="firstName">${updatedUser.firstName}</p>
      <p id="lastName">${updatedUser.lastName}</p>
      <p id="login">@${updatedUser.login}</p>
      <style>
      #nameChanger {
        margin-top: 6%;
        margin-right: 3.6em;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
      }
        #firstName, #lastName {
          display: flex;
          font-weight: 500;
          font-size: 2em;
          letter-spacing: .1rem;
        }
      </style>
      `
      nameChanger.innerHTML = editedName;
    }

  })
})
