//document.getElementById('myvideo').play();
var media = document.getElementById("myvideo");
const playPromise = media.play();
if (playPromise !== null){
    playPromise.catch(() => { media.play(); })
}




/* Code By Webdevtrick ( https://webdevtrick.com ) */
$('button').click(function(){
  $('.popup').addClass('open');
});
 
$('.popup .closebtn').click(function(){
  $('.popup').removeClass('open');
});