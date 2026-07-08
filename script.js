gsap.from("#page1 h1", {
    scale: 0.5,
    opacity: 0,
    duration: 1,
})

gsap.to("#page2 h1",{
    transform: "translateX(-150%)",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end:"top -100%",
        scrub: 2,
        pin:true
    }
})