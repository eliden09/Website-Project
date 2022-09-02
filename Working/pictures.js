var myImage = document.getElementById('mainImage');
var imageArray = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];
var imageIndex = 1;

function changeImage(){
    myImage.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex > 3) {imageIndex = 0;}
}

function goback() {
    
    window.open("portfolio.html", "_self");

}