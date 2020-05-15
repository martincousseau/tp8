
function changeBackgroundColor() {
    let okButton = document.getElementById("okButton");
    //let button = mouseEvent.button;
    let var1 = Math.random()*255;
    let var2 = Math.random()*255;
    let var3 = Math.random()*255;

  

    okButton.style.backgroundColor = "rgb("+var1+","+var2+","+var3+")";
    //Math.random()*255,Math.random()*255,Math.random()*255
    //okButton.style.backgroundColor = "red";

}






function main(){

    
    okButton.addEventListener("click",changeBackgroundColor) 

}

main();