var xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.github.com/users/diego3g");
xhr.send(null);

xhr.onreadyState = function () {
  if (xhr.readyState === 4) {
    console.log(JSON.parse(xhr.responseText));
  }
};
