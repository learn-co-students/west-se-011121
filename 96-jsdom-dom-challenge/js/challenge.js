document.addEventListener("DOMContentLoaded", function () {
  // Defining Variables
  let counter = document.getElementById("counter");
  let minus = document.getElementById("minus");
  let plus = document.getElementById("plus");
  let heartButton = document.getElementById("heart");
  let likesUl = document.querySelector(".likes");
  let pause = document.getElementById("pause");
  let form = document.getElementById('comment-form')
  let commentList = document.getElementById('list')
  let ul = document.createElement('ul')
  commentList.appendChild(ul)

  // Stand Alone Functions
  const intervalHandler = setInterval(() => {
    counter.innerText++;
  }, 1000);

  // Stand Alon EventListeners
  plus.addEventListener("click", () => counter.innerText++);
  minus.addEventListener("click", () => counter.innerText--);
  heartButton.addEventListener("click", () => {
    if (document.getElementById(counter.innerText) === null) {
      // create li for counter inner text
      let li = document.createElement("li");
      li.id = counter.innerText;
      li.data = 1;
      li.innerHTML =
        counter.innerText + " has been liked " + li.data + " times";
      likesUl.appendChild(li);
    } else {
      let li = document.getElementById(counter.innerText);
      li.data++;
      li.innerHTML =
        counter.innerText + " has been liked " + li.data + " times";
    }
  });

  form.addEventListener('submit', e => {
    e.preventDefault()
    let input = e.target[0].value
    let li = document.createElement('li')
    li.innerText = input
    ul.appendChild(li)

    input.innerText = ''
  })


  pause.data = false;
  pause.addEventListener("click", () => {
    if (pause.data === false) {
      pause.data = !pause.data;
      pause.innerText = "resume";
      // revisit pausing interval
      window.clearInterval(intervalHandler);
      plus.disabled = true;
      minus.disabled = true;
      heartButton.disabled = true;
    } else {
      pause.data = !pause.data;
      pause.innerText = "pause";
      plus.disabled = false;
      minus.disabled = false;
      heartButton.disabled = false;
    }
  });
});
