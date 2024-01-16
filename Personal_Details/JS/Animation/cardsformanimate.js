//common Entry Animation
gsap.to(".screen-name" ,{
    y: -100,
    opacity: 1,
    duration : 0.5,
    ease: Power2.easeOut,
    stagger: 0.05
})

gsap.to(".screen-name" ,{
    y: -200,
    opacity: 0,
    duration : 0.5,
    delay: 0.8,
    ease: Power2.easeOut,
    stagger: 0.05
})

gsap.to(".loaderenter" , {
    duration: 1,
    y: "-102vh",
    ease: Power4.easeOut,
    delay : 1.3
})

//common Entry Animation

gsap.from(".upper" ,{
    y : "101vh",
    duration : 1,
    delay : 1.4
})

gsap.from(".lower" ,{
    y : "101vh",
    duration : 1,
    delay : 1.6
})

gsap.from(".heading-word",{
    y: 20,
    opacity: 0,
    duration : 0.5,
    delay: 0.8,
    ease: Power2.easeOut,
    delay: 1.9
})

gsap.from(".heading-word1",{
    y: 20,
    opacity: 0,
    duration : 0.5,
    delay: 0.8,
    ease: Power2.easeOut,
    delay: 2.1
})

gsap.from("#input",{
    y: "50vh",
    duration: 0.8,
    opacity: 0,
    delay: 0.8,
    ease: Power2.easeOut,
    delay: 2.4,
    stagger: 0.08
})

