gsap.from("#nav-logo img,#nav-content a,#nav-log a",{
    y:-100,
    duration:0.7,
    delay:0.2,
    stagger:0.18,
})
gsap.from("#left-img img",{
    y:150,
    scale:0,
    duration:1.5,
    delay:2.5,
})
gsap.from("#right-img img",{
    y:-150,
    scale:0,
    duration:1.5,
    delay:2.5,
    
})
gsap.from("#main h1",{
    y:200,
    opacity:0,
    duration:1.2,
    delay:1.4,
    stagger:0.6,
})
gsap.from("#scroll",{
    opacity:0,
    scale:0,
    delay:3.2,
})
gsap.to("#scroll",{
    y:50,
    repeat:-1,
    selay:0.3,
    duration:0.8,
    yoyo:true,

})