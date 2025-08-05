lucide.createIcons();


//Initialize highlightjs
hljs.highlightAll();
//Custom svg icon
const dataCustomIcon = document.querySelectorAll("[data-custom-icon]");
dataCustomIcon.forEach((icon) => {
  if (icon.getAttribute("data-custom-icon")) {
    const request = new XMLHttpRequest();
    request.open("GET", "./assets/icons/" + icon.getAttribute("data-custom-icon") + ".svg");
    request.setRequestHeader("Content-Type", "image/svg+xml");
    request.addEventListener("load", (event) => {
      if (event.target.status === 200) {
        const response = event.target.responseText;
        icon.innerHTML = response;
      }
    });
    request.send();
  }
});

 /* ========== NAVBAR START ============ */

const navbar=document.getElementById("navbar");
const routes = document.querySelectorAll("#navbar .nav__routes .route");
const sections = document.querySelectorAll("section");
window.onscroll=()=>{
  if (window.scrollY > 100){
    navbar.classList.add("drop");
  } else{
    navbar.classList.remove("drop");
  }
  sections.forEach(section => {
    let top = window.scrollY;
    let offset = section.offsetTop - 100;
    let height = section.offsetHeight;
    let id=section.getAttribute("id");
    if(top >= offset && top < offset + height){
        routes.forEach((route) => {
            route.classList.remove("active");
            document.querySelector("#navbar .nav__routes a[href*=" + id + "]").classList.add("active");
        });


    }
  });
};


//Theme Switching
const themeCheckbox  = document.getElementById("theme-checkbox");
const storageKey ="theme"
if (JSON.parse(localStorage.getItem(storageKey))){
  document.firstElementChild.setAttribute("data-theme", "dark");
  localStorage.setItem(storageKey,JSON.stringify(true));
  themeCheckbox.checked = true;
}else{
    document.firstElementChild.setAttribute("data-theme", "light");
    localStorage.setItem(storageKey,JSON.stringify(false));
    themeCheckbox.checked = false;
}
themeCheckbox.onchange = () => {
    if (themeCheckbox.checked){
      document.firstElementChild.setAttribute("data-theme", "dark");
      localStorage.setItem(storageKey,JSON.stringify(true));
      return;
    } else{
      document.firstElementChild.setAttribute("data-theme", "light");
      localStorage.setItem(storageKey,JSON.stringify(false));
    }
};





 /* ========== NAVBAR END ============== */

/* ========== SIDEBAR START =============*/


const menuBtn = document.getElementById("menu__btn");
const sidebar=document.querySelector(".sidebar");
const closeBtn=document.getElementById("close-sidebar-btn");
menuBtn.onclick = () => {
    sidebar.classList.toggle("visible");
};
closeBtn.onclick =()=>{
    sidebar.classList.remove("visible");
};





/* ========== SIDEBAR END =============*/


/* ============= HEADER START =============  */
const odometers= document.querySelectorAll(".odometer");
setTimeout(() =>{
    odometers.forEach(list => {
        let id=list.getAttribute("id");
        if (id ==="education"){
          list.innerHTML = 3;
        }
        
        if (id === "project"){
            list.innerHTML = 3;
        }
        if (id==="position"){
            list.innerHTML = 1;
        }
        if (id === "achievement"){
            list.innerHTML = 4;
        }
    });
  

}, 4000);



/* ============= HEADER END =============  */

/* ============= TESTIMONIALS START =============  */
/*new Swiper(".testimonials",{
    slidesPerView:1,
    spaceBetween:30,
    loop:true,
    centeredSlides:true,
    speed: 500,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    breakpoints:{
      600:{slidesPerView:"auto"},
    },

});*/
new Swiper(".testimonials", {
  slidesPerView: "auto",
  spaceBetween: 30,
  loop: false,             
  centeredSlides: false,   
  grabCursor: true,
  autoplay: {
    delay: 1200,
    disableOnInteraction: false,
  },
  speed: 1600,
  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});






/* ============= TESTIMONIALS END =============  */
