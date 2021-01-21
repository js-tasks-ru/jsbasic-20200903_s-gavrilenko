export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.elem = this.createSlider(steps, value)
  }

  createSlider(steps, Value) {
    let main = document.createElement('div');
    main.classList.add("slider")
    main.insertAdjacentHTML('beforeend', `<div class="slider__thumb">
      <span class="slider__value">${Value}</span>
      </div>
      <div class="slider__progress" ></div>
      <div class="slider__steps">

</div>`)
    let base = main.querySelector(".slider__steps")
    let progress = main.querySelector(".slider__progress")
    let thumb = main.querySelector(".slider__thumb")
    progress.style.width = `${25 * Value}%`
    thumb.style.left = `${25 * Value}%`
    for (let i = 0; i < steps; i++) {
      if (i === Value) {
        base.insertAdjacentHTML('beforeend', `<span class="slider__step-active"></span>`)
      } else {
        base.insertAdjacentHTML('beforeend', `<span></span>`)
      }
    }
    main.addEventListener('click', (event) => {
      let left = event.clientX - main.getBoundingClientRect().left;
      let leftRelative = left / main.offsetWidth;
      let segments = steps - 1;
      let approximateValue = leftRelative * segments;
      let value = Math.round(approximateValue);
      let valuePercents = value / segments * 100;
      progress.style.width = `${valuePercents}%`
      main.querySelector(".slider__value").innerHTML = value;
      thumb.style.left = `${valuePercents}%`
      main.dispatchEvent(new CustomEvent('slider-change', {
        detail: value,
        bubbles: true
      }))
    })
    return main
  }
}

// let main = document.createElement('div');
// main.classList.add("slider")
// main.insertAdjacentHTML('beforeend', `<div class="slider__thumb">
// <span class="slider__value">0</span>
// </div>

// <div class="slider__progress" ></div>
// <div class="slider__steps">

// </div>`)
// let base = main.querySelector(".slider__steps")
// let progress = main.querySelector(".slider__progress")
// let thumb = main.querySelector(".slider__thumb")
// progress.style.width = `0%`
// for (let i = 0; i < steps; i++) {
//   if (i === 0) {
//     base.insertAdjacentHTML('beforeend', `<span class="slider__step-active"></span>`)
//   } else {
//     base.insertAdjacentHTML('beforeend', `<span></span>`)
//   }
// }
// main.addEventListener('click', function (ev) {
//   console.log(ev)
//   console.log(main.getBoundingClientRect())
//   let xStart = main.getBoundingClientRect().x;
//   let width = main.getBoundingClientRect().width;
//   let xEnd = xStart + width
//   let xClick = ev.screenX;
//   let zones = []
//   let currentStep;
//   zones.push(xStart)
//   let xInterval;
//   for (let a = 1; a < steps; a++) {
//     xInterval = xStart + (width / (steps - 1) * (a - 1)) + (width / (steps - 1) / 2)
//     zones.push(xInterval)
//   }
//   zones.push(xEnd)
//   for (let t = 0; t < (zones.length - 1); t++) {
//     if (xClick > zones[t]) {
//       currentStep = t
//     }
//   }

//   main.querySelector(".slider__value").innerHTML = currentStep
//   main.querySelector(".slider__step-active").classList.remove("slider__step-active")
//   let spans = base.getElementsByTagName("span")
//   spans[currentStep].classList.add("slider__step-active")
//   thumb.style.left = `${25 * currentStep}%`
//   progress.style.width = `${25 * currentStep}%`
// })
// return main