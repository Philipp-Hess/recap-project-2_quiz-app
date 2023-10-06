// phew… not a lot going on here. Please add some code!

const bookmark = document.querySelector('[data-js="bookmark"]');
const answerText = document.querySelector('[data-js="text"]');

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("bookmark--active");
});

const hideShowButtonAnswerButton = document.querySelector(
  '[data-js="right-answer"]'
);
hideShowButtonAnswerButton.addEventListener("click", () => {
  //    Antworttext ein/ausblenden
  answerText.classList.toggle("card__answer--active");

  if (answerText.classList.contains("card__answer--active")) {
    hideShowButtonAnswerButton.textContent = "hide answer";
  } else {
    hideShowButtonAnswerButton.textContent = "show answer";
  }
});
