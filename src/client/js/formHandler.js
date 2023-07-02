function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  Client.checkForName(formText);

  console.log("::: Form Submitted :::");

  postData("http://localhost:8081/analyze", { url: formText }).then(function (
    res
  ) {
    document.getElementById("results").innerHTML = res.agreement;
  });
}

async function postData(url = "", data = {}) {
  const res = await fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  try {
    const resJson = res.json();
    return resJson;
  } catch (error) {
    console.error("Something went wrong! ", error);
  }
}

export { handleSubmit };
