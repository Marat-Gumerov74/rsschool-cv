window.onload = function () {

  let indicator = document.querySelector('.indication');
  let elementsList = document.querySelectorAll('.list-item');
  let elementsMenu = document.querySelectorAll('.widget-item');


  function startIndicator() {
    indicator.classList.add("indication-small");

    let start = Date.now();
    let timer = setInterval(function () {
    let timePassed = Date.now() - start;

    if (timePassed >= 1000) {
      clearInterval(timer);
      return;
    }
    draw(timePassed);

    }, 20);

    function draw(timePassed) {
      indicator.style.marginLeft = 60 - (timePassed / 2.5) + 'px';
    }
  }

  setTimeout(startIndicator, 2000);


  elementsList.forEach((elem) => {
    elem.style.display = "none";
  });

  function drawElementList() {
    elementsList.forEach((elem) => {
     let timerId = setTimeout(() => elem.style.display = "block", 3000);
    });
  }
    setTimeout(drawElementList, 1000);
  };
