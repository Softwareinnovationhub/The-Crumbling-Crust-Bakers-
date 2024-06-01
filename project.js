var img = document.getElementById('img');

var slides=['fast-food.jpg','cover.jpg', 'cover2.jpg','cover3.jpg', 'cover3.jpg'];

var Start=0;

function slider(){
    if(Start<slides.length){
        Start=Start+1;
    }
    else{
        Start=1;
    }
    console.log(img);
    img.innerHTML = "<img src="+slides[Start-1]+">";
   
}
setInterval(slider,2000);