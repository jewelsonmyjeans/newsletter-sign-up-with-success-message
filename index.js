const mainContent = document.querySelector("#main-content");
const subscribeBtn = document.querySelector("#subscribe-btn");
const dismissBtn = document.querySelector("#dismiss-btn");
const success = document.querySelector("#success");
const emailInput = document.querySelector("#email");

subscribeBtn.addEventListener("click", () => {
  const emailValue = emailInput.value;
  const reg = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$");

  if (emailValue === "" || !reg.test(emailValue)) {
    emailInput.classList.add("errorEmail");
  } else {
    mainContent.style.display = "none";
    success.style.display = "block";
    emailValue = ''
  }
});

dismissBtn.addEventListener("click", () => {
  mainContent.style.display = "block";
  success.style.display = "none";
  console.log("dismiss");
});
