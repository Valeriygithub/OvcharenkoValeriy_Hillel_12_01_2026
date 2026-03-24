const elementEyeDisap = document.querySelector(".eye-fish-disappears");
const elementEye = document.querySelector(".eye-fish");
const imageFish = document.querySelector(".image-fish");
const title = document.querySelector(".title");
const textDisappears = document.querySelector(".text-disappears");
const imageFishDisappears = document.querySelector(".image-fish-disappears");

// function clickTuch() {
//   let createH5 = document.createElement("h5");
//   createH5.className = "createH5";
//   title.append(createH5);
//   createH5.textContent = rand[Math.floor(Math.random() * rand.length)];
// }

// function eye() {
//   elementEye.style.display = "block"
//   elementEye.classList.add("click-for-fish");
//   elementEye.style.transform = "scale(2)";
// }

// imageFish.addEventListener("click", function () {
//   elementEyeDisap.style.display = "none";
//   setTimeout(clickTuch, 1000);
//   textDisappears.style.display = "none";
//   setTimeout(eye, 700);
//   imageFish.style.display = "none";
//   imageFishDisappears.style.display = "block";
// });


// -------------------------------------------------------------------------
// const elementEyeDisap = document.querySelector(".eye-fish-disappears");
// const elementEye = document.querySelector(".eye-fish");
// const imageFish = document.querySelector(".image-fish");
// const title = document.querySelector(".title");
// const textDisappears = document.querySelector(".text-disappears");
// const imageFishDisappears = document.querySelector(".image-fish-disappears");

let lastClickTime = null; // Variable to store the timestamp of the last click

function clickTuch() {
  let createH5 = document.createElement("h5");
  createH5.className = "createH5";
  title.append(createH5);
  createH5.textContent = rand[Math.floor(Math.random() * rand.length)];
}

function eye() {
  elementEye.style.display = "block";
  elementEye.classList.add("click-for-fish");
  elementEye.style.transform = "scale(2)";
}

imageFish.addEventListener("click", function () {
  if (!lastClickTime || isNewDay(lastClickTime)) { // Check if it's a new day
    elementEyeDisap.style.display = "none";
    setTimeout(clickTuch, 1000);
    textDisappears.style.display = "none";
    setTimeout(eye, 700);
    imageFish.style.display = "none";
    imageFishDisappears.style.display = "block";

    // Update lastClickTime for next check
    lastClickTime = Date.now();
  } else {
    console.log("Action can only be performed once per day. Please try again tomorrow.");
  }
});

function isNewDay(lastClickTime) {
  const today = new Date();
  const lastClickDate = new Date(lastClickTime);

  // Compare day, month, and year for a new day check
  return today.getDate() !== lastClickDate.getDate() ||
         today.getMonth() !== lastClickDate.getMonth() ||
         today.getFullYear() !== lastClickDate.getFullYear();
}
// ------------------------------------------------------------------