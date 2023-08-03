const color = ["red","green","palevioletred","yellow"];
const text =["Let's","Rock","And","Roll"];

const title = document.querySelector(".con");
const bg = document.querySelector(".container");

let count = 0;

setInterval(() => {
    switch (count) {
        case 0:
        case 1:
        case 2:
        case 3:
            {
                title.innerText = text[count];
                title.setAttribute("style",`color: white`,`opacity:0.1`);
                bg.setAttribute("style", `background:${color[count]}; opacity:0.5;`);
                count++;
                break;
            }

        default: {
            count = 0;
        }
    }
}, 300);
