const button = document.getElementById("button");
const mainDoc = document.getElementById("main-doc");


mainDoc.addEventListener("scroll", (e)=> {
    
    ( mainDoc.scrollTop > 20 ) ? button.style.display = "block" : button.style.display = "none";
   
 
})

window.addEventListener("scroll", ()=> {
    (document.documentElement.scrollTop > 20) ? button.style.display = "block" : button.style.display = "none";
   
})

button.addEventListener("click", ()=> {
    mainDoc.scrollTo(0,0);
});
   
button.addEventListener("click", ()=> {
    document.documentElement.scrollTo(0,0);
});