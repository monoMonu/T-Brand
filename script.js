
let nav = document.querySelector("#nav"), hamburger = document.querySelector("#hamburger"), bar1 = document.querySelector(".bar1"), bar2 = document.querySelector(".bar2"), bar3 = document.querySelector(".bar3");
let n = 1;

const navC = [nav.children];
console.log(navC);

hamburger.addEventListener("click",()=>{
    if(n==0){
        nav.style.top = "-500px";
        bar2.style.display = "inline-block";
        bar1.style.transform = "none";
        bar3.style.transform = "none";
        n=1;
    }
    else if(n==1){
        nav.style.top = "100%";
        bar1.style.transform = "translateY(7px) rotate(-135deg)";
        bar3.style.transform = "translateY(-7px) rotate(135deg)";
        bar2.style.display = "none";
        n = 0;
    }
})

// Disabling Right Click
// window.addEventListener("contextmenu", e => e.preventDefault());
