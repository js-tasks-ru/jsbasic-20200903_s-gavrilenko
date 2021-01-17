export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.elem = this.createSlider(steps)
  }

  createSlider(steps) {
    let main = document.createElement('div');
    main.classList.add("slider")
    main.insertAdjacentHTML('beforeend', `<div class="slider__thumb">
   <span class="slider__value">0</span>
 </div>

 <div class="slider__progress" ></div>
 <div class="slider__steps">
   
 </div>`)
    let base = main.querySelector(".slider__steps")
    let progress = main.querySelector(".slider__progress")
    let thumb = main.querySelector(".slider__thumb")
    thumb.ondragstart = () => false;
    thumb.addEventListener("pointerdown", function () {
      thumb.ondragstart = () => false;
      function moveAt(pageX) {
        let X = `${pageX - main.getBoundingClientRect().x}px`;
        if (pageX > main.getBoundingClientRect().x && pageX < main.getBoundingClientRect().x + main.getBoundingClientRect().width) {
          thumb.style.left = X
        }
        console.log(X)
      }

      function onPointerMove(event) {
        moveAt(event.pageX);
      }
      document.addEventListener('pointermove', onPointerMove)
      thumb.addEventListener("mouseup", function lol() {
        document.removeEventListener('pointermove', onPointerMove);
        thumb.removeEventListener("mouseup", lol)
      });
    })
    progress.style.width = `0%`
    for (let i = 0; i < steps; i++) {
      if (i === 0) {
        base.insertAdjacentHTML('beforeend', `<span class="slider__step-active"></span>`)
      } else {
        base.insertAdjacentHTML('beforeend', `<span></span>`)
      }
    }
    main.addEventListener('click', function (ev) {
      console.log(ev)
      console.log(main.getBoundingClientRect())
      let xStart = main.getBoundingClientRect().x;
      let width = main.getBoundingClientRect().width;
      let xEnd = xStart + width
      let xClick = ev.screenX;
      let zones = []
      let currentStep;
      zones.push(xStart)
      let xInterval;
      for (let a = 1; a < steps; a++) {
        xInterval = xStart + (width / (steps - 1) * (a - 1)) + (width / (steps - 1) / 2)
        zones.push(xInterval)
      }
      zones.push(xEnd)
      for (let t = 0; t < (zones.length - 1); t++) {
        if (xClick > zones[t]) {
          currentStep = t
        }
      }

      main.querySelector(".slider__value").innerHTML = currentStep
      main.querySelector(".slider__step-active").classList.remove("slider__step-active")
      let spans = base.getElementsByTagName("span")
      spans[currentStep].classList.add("slider__step-active")
      thumb.style.left = `${25 * currentStep}%`
      progress.style.width = `${25 * currentStep}%`
    })
    return main
  }
}
