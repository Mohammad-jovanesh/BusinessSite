const Btn_Burger =document.querySelector(".Btn_Burger");
const Header=document.querySelector(".header")
Btn_Burger.addEventListener("click",()=>{
    Header.classList.toggle("btn_open")
})