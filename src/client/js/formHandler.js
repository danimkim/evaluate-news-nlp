function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  Client.checkForName(formText);

  console.log("::: Form Submitted :::");
  fetch("https://api.meaningcloud.com/sentiment-2.1", {
    method: "POST",
    body: {
      key: process.env.API_KEY,
      txt: formText,
      lang: "en",
    },
  })
    .then((res) => res.json())
    .then(function (res) {
      console.log("res", res);
      document.getElementById("results").innerHTML = res.message;
    });
}

export { handleSubmit };
