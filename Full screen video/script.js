var element = document.getElementById("img_id")
function full_screen(){
    if(element.webkitRequestFullscreen){
        element.webkitRequestFullscreen();  
    }
}