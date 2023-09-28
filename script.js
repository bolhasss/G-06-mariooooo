let image0 = document.querySelector("#image00")
let image1 = document.querySelector("#image01")
let image2 = document.querySelector("#image02")
let image3 = document.querySelector("#image03")

image0.classList.remove('hide')
image1.classList.add('hide')
image2.classList.add('hide')
image3.classList.add('hide')

function image00() {
    image0.classList.remove('hide')
    image1.classList.add('hide')
    image2.classList.add('hide')
    image3.classList.add('hide')
}
function image01() {
    image0.classList.add('hide')
    image1.classList.remove('hide')
    image2.classList.add('hide')
    image3.classList.add('hide')
}
function image02() {
    image0.classList.add('hide')
    image1.classList.add('hide')
    image2.classList.remove('hide')
    image3.classList.add('hide')
}
function image03() {
    image0.classList.add('hide')
    image1.classList.add('hide')
    image2.classList.add('hide')
    image3.classList.remove('hide')
}

const cursor = document.querySelector(".cursor");
    var timeout;

    //follow cursor on mousemove
    document.addEventListener("mousemove", (e) => {
      let x = e.pageX;
      let y = e.pageY;

      cursor.style.top = y + "px";
      cursor.style.left = x + "px";
      cursor.style.display = "block";

      //cursor effects when mouse stopped
      function mouseStopped(){
        cursor.style.display = "none";
      }
      clearTimeout(timeout);
      timeout = setTimeout(mouseStopped, 8000);
    });

    //cursor effects when mouseout
    document.addEventListener("mouseout", () => {
      cursor.style.display = "none";
    });