
document.addEventListener("wheel",function(dets){
    if(dets.deltaY>4){
      gsap.to("#nav1",{
        top:"-125px",
        duration:0.5,

      })
    }
    if(dets.deltaY<0){
      gsap.to("#nav1",{
       top:0,
       duration:0.5,

      })
    }
})

// gsap.to("#nav1",{
    
//     y:-130,
//     duration:0.4,
//     yoyo:true,
//       scrollTrigger:{
//         trigger:"#nav1",
//         scroller:"body",
//         // markers:true,
//       start:"top -15%",
//       end:"top -5%",
    
//       scrub:2,
//       }
    
//   })

gsap.from("#image4",{
  scale:1.2,
  scrollTrigger:{
    trigger:"#image4",
    scroller:"body",
    // markers:true,
    start:"top 30%",
    end:"top 15%",
    scrub:4,
  }
})
gsap.from("#left5 h1,#left5 h2,#left5 h3,#left5 img",{
  x:-600,
  stagger:1,
  duration:1,
  scrollTrigger:{
    trigger:"#left5",
    scroller:"body",
    // markers:true,
    start:"top 40%",
    end:"top 10%",
    scrub:3,
  }

})
gsap.from("#left5 button",{
  y:300,
  stagger:1,
  opacity:0,
  scrollTrigger:{
    trigger:"#left5",
    scroller:"body",
    // markers:true,
    start:"top 50%",
    end:"top 10%",
    scrub:2,
  }

})
gsap.from(".box5",{
  y:300,

  opacity:0,
  scrollTrigger:{
    trigger:"#left5",
    scroller:"body",
    // markers:true,
    start:"top 40%",
    end:"top 10%",
    scrub:3,
  }

})
var tl=gsap.timeline
tl({

  scrollTrigger:{
    trigger:"#page6",
 
    // markers:true,
    start:"top top",
    scrub:3,
    pin:true,

  }
})


.from("#boc2",{
  top:"100%",
},"a")

.to("#boc2,#boc1",{
  width:"90%",
},"a")
.from("#boc3",{
  top:"100%",
},"b")
.to("#boc3",{
  width:"90%",
},"b")
.to("#boc2",{
  top:"3%",
},"b")

.from("#boc4",{
  top:"100%",
  
},"c")
.to("#boc4",{
  width:"90%",
},"c")
.to("#boc4",{
  top:"12%",
},)


gsap.from("#top8 img",{
  y:100,
  opacity:0,
  scrollTrigger:{
    trigger:"#top8 img",
    scroller:"body",
    // markers:true,
    start:"top 70%",
    end:"top 40%",
    scrub:1,
  }
})
document.querySelector("#nav1").addEventListener("wheel",function(dets){

})


gsap.to("#last13 img",{
  y:20,
  repeat:-1,
  duration:1,
  yoyo:true,
})

gsap.from("#top2 a1, #top2 img,#mid2,#down2",{
  x:400,
  opacity:0,
  duration:0.8,
  stagger:0.2,
})
gsap.from("#page2 a4,#arrow2",{
  y:400,
  opacity:0,
  duration:1,
  stagger:0.2,
})