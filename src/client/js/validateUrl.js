export function validateUrl(url) {
  const warningMsg = "Please Enter a Valid Webpage URL";

  // Check if the input value is empty
  if (url === "") {
    document.querySelector(".warning").innerHTML = warningMsg;
    return false;
  }

  const urlRegex = /^(http|https):\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[^\s]*$/;
  const isValid = urlRegex.test(url);

  // Check if the input value is a valid url
  if (!isValid) {
    document.querySelector(".warning").innerHTML = warningMsg;
    return false;
  } else {
    document.querySelector(".warning").innerHTML = "";
    return true;
  }
}
