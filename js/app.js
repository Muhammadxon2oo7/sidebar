const openMenu=document.getElementById("open")
const closeMenu=document.getElementById("close")
const Aside=document.getElementById("aside")

function openAside(){
    document.documentElement.style.scrollBehavior = "smooth";
    openMenu.style.display = "none"
    closeMenu.style.display = "block"
    Aside.style.marginLeft = "0"
    
}
function closeAside(){
    document.documentElement.style.scrollBehavior = "smooth";
    openMenu.style.display = "block"
    closeMenu.style.display = "none"
    Aside.style.marginLeft = ""
}

openMenu.addEventListener("click", openAside)
closeMenu.addEventListener("click", closeAside)
