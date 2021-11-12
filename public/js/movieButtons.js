const watchedButton = document.querySelectorAll(".watchedButton");
const wantButton = document.querySelectorAll(".wantButton");
const hiddenInput = document.getElementById("hiddenInput");

//looping through all the buttons
for (let i = 0; i < watchedButton.length; i++) {
  watchedButton[i]?.addEventListener("click", async () => {

    //both buttons can't be active at the same time
    watchedButton[i].classList.add("activeButton");
    wantButton[i].classList.remove("activeButton");
    
    //getting movie id from the button's value
    let movieId = wantButton[i].value;
    //getting user id from the hidden input in layout
    let userId = hiddenInput.value;
    
    //sending movie info to the server
    let response;
    try {
      response = await fetch(`/profile/${userId}/watched`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          movieId: movieId
        })
      })
    } catch (err) {
      cconsole.log(err);
    }

    //user can't add same movie to the same list twice
    if (response.status === 400) {
      return alert('You have already seen this watcha!');
    }
  })
  
  wantButton[i]?.addEventListener("click", async () => {
    wantButton[i].classList.add("activeButton");
    watchedButton[i].classList.remove("activeButton");
      
    let movieId = wantButton[i].value;
    let userId = hiddenInput.value;
    let response;

    try {
      response = await fetch(`/profile/${userId}/want`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          movieId: movieId
        })
      })
    } catch (err) {
      cconsole.log(err);
    }

    if (response.status === 400) {
      return alert(`You've already added this watcha to your list!`);
    }
  })

}