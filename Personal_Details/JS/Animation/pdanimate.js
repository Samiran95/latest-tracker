gsap.from("body",{
    scale : 0.95,
    duration: 0.3,
    opacity : 0,
})

// Personal Detail Form

function personalForm() {
    gsap.to(".personal-detail-form", {
        duration: 0.7,
        y: "-75vh",
        ease: Power2.easeOut
    })

    gsap.to(".upper-page", {
        duration: 0.7,
        filter: "blur(50px)",
    })

    gsap.to(".personal-word", {
        delay: 0.1,
        duration: 1,
        y: "-88vh",
        ease: Power2.easeOut
    })
}
////////////////////////////////////////////////
function closePersonalForm() {
    gsap.to(".personal-detail-form", {
        duration: 0.7,
        y: "0vh",
        ease: Power1.easeOut
    })

    gsap.to(".upper-page", {
        delay : 0.9,
        duration: 0.4,
        filter: "blur(0px)",
    })

    gsap.to(".personal-word", {
        duration: 1,
        y: "0vh",
        ease: Power2.easeIn
    })
}

// Personal Detail Form