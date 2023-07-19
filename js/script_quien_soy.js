//Quién soy?
setTimeout(function(){
    document.getElementById("loading-page").classList.add("loaded");
    document.getElementById("loader").classList.add("opzero");
    document.getElementById("loading-page").style.opacity = 0
    ;
    document.body.classList.add("whitebk");
    document.getElementById("lastray").classList.add("finalray");
  },3000);
  gsap.to("#bg",{
    scrollTrigger:{
        scrub:2
    },
    scale:1.5
  })
  
  gsap.to("#man",{
    scrollTrigger:{
        scrub:1
    },
    scale:0.5
  })
  
  gsap.to("#clouds_1",{
    scrollTrigger:{
        scrub:1
    },
    x:200
  })
  
  gsap.to("#clouds_2",{
    scrollTrigger:{
        scrub:1
    },
    x:-200
  })
  
  gsap.to("#text",{
    scrollTrigger:{
        scrub:1
    },
    y:200
  })
  
  