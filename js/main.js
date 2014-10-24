document.querySelector(".min_icon").onclick=function(){
    var h = document.querySelector(".nav").offsetHeight;
    console.log(h);
    if(h == 16){
        document.querySelector(".nav").style.height = '200px';
    }
    else {
        document.querySelector(".nav").style.height = '16px';
    }

}
