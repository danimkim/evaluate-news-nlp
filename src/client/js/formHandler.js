function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  Client.checkForName(formText);

  console.log("::: Form Submitted :::");

  postData("http://localhost:8081/analyze", { url: formText }).then(function (
    res
  ) {
    document.querySelector("span.agreement").innerHTML = `${res.agreement}`;
    document.querySelector(
      "span.subjectivity"
    ).innerHTML = `${res.subjectivity}`;
    document.querySelector("span.confidence").innerHTML = `${res.confidence}`;
    document.querySelector("span.irony").innerHTML = `${res.irony}`;
    document.querySelector("span.score-tag").innerHTML = `${res.score_tag}`;

    document.querySelector(".section-form-results").classList.add("visible");
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

function resetInput() {
  document.querySelector("#name").value = "";
}

export { handleSubmit, resetInput };
