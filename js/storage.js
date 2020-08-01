const cache_key = "myUserName";

// var name = prompt("What is your name ?");

// cek dukung ga
if (typeof(Storage) !== "undefined") {

  let username =  document.getElementById('username');
  let changeUserName =  document.getElementById('changename');

  function inputUserName() {
    var name = prompt("What is your name ?", "Guest");
    setUsername(name);
  }

  function setUsername(name) {
    if (name == null || localStorage.getItem(cache_key) == '') name = "Guest";

    localStorage.setItem(cache_key, name);

    renderName();
  }

  function renderName() {
    // alert("'" + localStorage.getItem(cache_key) + "'")

      // if (localStorage.getItem(cache_key) == '') {
      //   alert('tes');
      // }

      if (localStorage.getItem(cache_key) !== null) {
          if (localStorage.getItem(cache_key) == '') {
            username.innerText = "Guest";
          }else {
            username.innerText = localStorage.getItem(cache_key);
          }
      }else {
          inputUserName();
      }
  }

  username.addEventListener('click', function changeName() {
    var name = prompt("Change your name to ?", localStorage.getItem(cache_key));
    setUsername(name);
  })

  changeUserName.addEventListener('click', function changeName() {
    var name = prompt("Change your name to ?", localStorage.getItem(cache_key));
    setUsername(name);
  })

  renderName();
}
