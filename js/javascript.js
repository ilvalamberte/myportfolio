var i=0;
var images=[];
var time=1000;
images[0]='images/bw-norm-pictures/m-web-bw.png'
images[1]='images/bw-norm-pictures/m-web-norm.png';
function changeImg(){
document.slide.src=images[i];
if(i<images.length-1)
{
i++;
}
else
{
i=0;
}
setTimeout("changeImg()",time);
}
window.onload=pageLoad;

function pageLoad(){
    changeImg();
    startJump();
}


let tree=document.querySelector("#tree");

//jump.addEventListener("click", startJump);

function startJump(){

    tree.classList.toggle("jump");
}



