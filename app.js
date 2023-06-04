let randomNumbe1 = Math.floor(Math.random()*6)+1; 
let randomNumbe2 = Math.floor(Math.random()*6)+1; 
document.querySelector("img.img1").setAttribute("src", "dice"+randomNumbe1+".png");
document.querySelector("img.img2").setAttribute("src", "dice"+randomNumbe2+".png");
if(randomNumbe1 > randomNumbe2) {
    document.querySelector(".span2").classList.add("hidden"); 
}
else {
    document.querySelector(".span1").classList.add("hidden");

}