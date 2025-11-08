var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    //dets->(details) contains information about the mouse event
    crsr.style.left = dets.x+ "px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x - 250+ "px"
    blur.style.top = dets.y-250+"px"
})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })
})


//gsap - is used to animate elements from their current state to a new state over a specified duration.
gsap.to("#nav",{  //elemnt you want to animate
   backgroundColor: "#000",
   height: "110px",
   duration: 0.5,
   scrollTrigger:{
    trigger: "#nav",
    scroller:"body",  //which elemnt scroll should be tracked
    //markers: true,
    start:"top -10%", //navbar color will change exactly when it scrolls 10% above the top
    end: "top -11%",
    scrub: 1  //repeat mein trigger krana
   }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller: "body",
        markers: true,
        start: "top -25%",
        end: "top -70%",
        //scrub - how smoothly it “catches up” when you scroll
        scrub: 2 //Adds a delay (2 seconds) for smoother catching up.
        
    }
})

gsap.from("#about-us img,about-us-in",{
    y: 90,      /*Moves the element 90px down initially.*/ 
    opacity:0,  /*invisible*/
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        //markers:true, 
        start:"top 70%",
        end:"top 65%",
        scrub:1         /*3 sec delay*/
    }
})
gsap.from(".card",{
    scale: 0.8,  /*It shrinks the element to 80% of its original size at the start of the animation.
                 The element starts smaller (80%), and then scales up to its normal size (100%) during the animation.*/ 
    //opacity:0,  /*invisible*/
    duration:1,
    stagger:0.1,   //the animations will play one after another, with a 0.1-second delay between each instead of all animating at once
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        //markers:true, 
        start:"top 70%",
        end:"top 65%",
        scrub:1      /*3 sec delay*/
    }
})
gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        //markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub: 4
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        //markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub: 4
    }
})
gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        //markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub: 3
    }
})