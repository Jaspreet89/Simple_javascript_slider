function simpleslider() {
    currentImage = 0, ul = document.getElementById("image_slider"), liItems = ul.children, imageNumber = liItems.length, imageWidth = liItems[0].children[0].clientWidth, ul.style.width = parseInt(imageWidth * imageNumber) + "px", prev = document.getElementById("prev"), next = document.getElementById("next"), next.addEventListener("click", setNextDuration, !1), prev.addEventListener("click", setPrevDuration, !1)
}

function setNextDuration() {
    x = setInterval(getNext, 300)
}

function setPrevDuration() {
    y = setInterval(getPrevious, 300)
}

function showCurrentImage() {
    console.log(currentImage)
}

function borderBehave() {
    5 === currentImage ? (currentImage = 0, ul.style.left = -parseInt(imageWidth * currentImage) + "px") : currentImage === -1 && (currentImage = 4, ul.style.left = -parseInt(imageWidth * currentImage) + "px")
}

function getNext() {
    currentImage += 1, ul.style.left = -parseInt(imageWidth * currentImage) + "px", showCurrentImage(), clearInterval(x), borderBehave()
}

function getPrevious() {
    currentImage -= 1, ul.style.left = -parseInt(imageWidth * currentImage) + "px", showCurrentImage(), clearInterval(y), borderBehave()
}
var ul, liItems, imageNumber, imageWidth, currentImage, prev, next, x, y;
window.onload = simpleslider();