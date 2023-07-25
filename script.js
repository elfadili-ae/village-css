const btn = document.getElementById("btn");
const body = document.querySelector("body");

let isOn = true;

btn.addEventListener("click", () => {

    
    if (isOn)
    {
        isOn = false;
        body.style.backgroundColor = "#07080f";
        btn.style.opacity = 0;

        setTimeout(() => {
            btn.src = "Assets/moon.png";
            btn.onload = () => {
              btn.style.opacity = 1;
            };
          }, 250);
    }
    else
    {
        isOn = true;
        body.style.backgroundColor = "#b0e6ff";
        btn.style.opacity = 0;

        setTimeout(() => {
            btn.src = "Assets/sun.png";
            btn.onload = () => {
              btn.style.opacity = 1;
            };
          }, 250);
    }

 
})