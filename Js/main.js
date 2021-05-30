const Btn_Burger =document.querySelector(".Btn_Burger");
const Header=document.querySelector(".header")
const play=document.querySelector(".play_btn")
const video =document.querySelector(".video")
const pause=document.querySelector(".pause_btn")
const Progress =document.querySelector(".video_progress_2")
var Played=true
var Timer
Btn_Burger.addEventListener("click",()=>{
    Header.classList.toggle("btn_open")
})
play.addEventListener("click",()=>{
    Timer=setInterval(()=>Progress_Show(),100);
        video.play();
        pause.style.display="block";
        play.style.display="none"
       
        
    
})
pause.addEventListener("click",()=>{
    video.pause();
    play.style.display="block";
    pause.style.display="none"
    clearInterval(Timer);

})



function Progress_Show(){
        console.log( video.currentTime/video.duration)
        var video_D=video.currentTime/video.duration
        Progress.style.width=`${video_D*100}%`;
        if(video_D==1){
            video_D=0;
            Progress.style.width=`${video_D*100}%`;
            video.currentTime=0
            play.style.display="block";
            pause.style.display="none";
            clearInterval(Timer);
        }
    
}

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }
    
  });