gsap.from("body",{
    scale : 0.95,
    duration: 0.3,
    opacity : 0,
})

// Transaction option
function transaction() {

    gsap.to(".transaction-word", {
        opacity: 1,
        pointerEvents: "all",
        duration: 0.8,
        ease: Back.easeOut.config(2.5),
        scale: 1
    })


    gsap.to(".transactions", {
        delay: 0.2,
        opacity: 1,
        pointerEvents: "all",
        duration: 0.8,
        ease: Back.easeOut.config(2.5),
        scale: 1
    })

    gsap.to(".close-container", {
        delay: 0.4,
        opacity: 1,
        pointerEvents: "all",
        duration: 0.8,
        ease: Back.easeOut.config(2.5),
        scale: 1
    })

    gsap.to(".upper-page", {
        duration: 0.7,
        filter: "blur(50px)",
    })
}


function closeTransaction() {

    gsap.to(".transaction-word", {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.8,
        ease: Back.easeOut.config(2.5),
        scale: 0.95
    })


    gsap.to(".transactions", {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.8,
        ease: Back.easeOut.config(2.5),
        scale: 0.95
    })

    gsap.to(".close-container", {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.8,
        ease: Back.easeOut.config(2.5),
        scale: 0.90
    })

    gsap.to(".upper-page", {
        delay : 0.2,
        duration: 0.4,
        filter: "blur(0px)",
    })
}
// Transaction option

// Selection Category
function selectionCategory() {
    gsap.to(".selection-category", {
        duration: 0.7,
        y: "-82vh",
        ease: Power2.easeOut
    })

    gsap.to(".red-color", {
        duration: 0.7,
        opacity: 1,
        pointerEvents: "all",
        zIndex: 1
    })
}
//////////////////////////////////////////
function closeSelectionCategory() {
    gsap.to(".selection-category", {
        duration: 0.7,
        y: "0vh",
        ease: Power1.easeOut
    })

    gsap.to(".red-color", {
        duration: 0.7,
        opacity: 0,
        pointerEvents: "none",
    })
}
// Selection Category

// Form
// Income Form

function givingForm() {
    gsap.to(".giving-main-form", {
        duration: 0.7,
        y: "-78vh",
        ease: Power2.easeOut
    })

    gsap.to(".green-color", {
        duration: 0.7,
        opacity: 1,
        pointerEvents: "all",
        zIndex: 1
    })

    gsap.to(".income-element", {
        delay: 0.1,
        duration: 1,
        y: "-98vh",
        ease: Power2.easeOut
    })
}
////////////////////////////////////////////////
function closeGivingForm() {
    gsap.to(".giving-main-form", {
        duration: 0.7,
        y: "0vh",
        ease: Power1.easeOut
    })

    gsap.to(".green-color", {
        delay: 1,
        duration: 0.7,
        opacity: 0,
        pointerEvents: "none",
    })

    gsap.to(".income-element", {
        duration: 1,
        y: "0vh",
        ease: Power2.easeIn
    })
}

// Giving Form

// Gifts Form

function giftForm() {
    gsap.to(".gift-expense-form", {
        delay: 0.2,
        duration: 0.7,
        y: "-78vh",
        ease: Power2.easeOut
    })

    gsap.to(".red-color", {
        duration: 0.7,
        opacity: 1,
        pointerEvents: "all",
        zIndex: 1
    })


    gsap.to(".selection-category", {
        duration: 0.5,
        scale: 0.95,
    })

    gsap.to(".necessity-element", {
        delay: 0.3,
        duration: 1,
        y: "-98vh",
        ease: Power2.easeOut
    })

}
//////////////////////////////////
function closeGiftForm() {
    gsap.to(".gift-expense-form", {
        duration: 0.7,
        y: "0vh",
        ease: Power1.easeOut
    })

    gsap.to(".selection-category", {
        delay: 0.2,
        duration: 0.5,
        scale: 1,
    })

    gsap.to(".red-color", {
        delay: 1,
        duration: 0.7,
        opacity: 0,
        pointerEvents: "none",
    })


    gsap.to(".necessity-element", {
        duration: 1,
        y: "0vh",
        ease: Power2.easeIn
    })

}

//Gifts Form

//Donations

function donationForm() {
    gsap.to(".donation-expense-form", {
        delay: 0.2,
        duration: 0.7,
        y: "-78vh",
        ease: Power2.easeOut
    })

    gsap.to(".selection-category", {
        duration: 0.5,
        scale: 0.95,
    })

    gsap.to(".red-color", {
        duration: 0.7,
        opacity: 1,
        pointerEvents: "all",
        zIndex: 1
    })


    gsap.to(".want-element", {
        delay: 0.3,
        duration: 1,
        y: "-98vh",
        ease: Power2.easeOut
    })
}
///////////////////////////
function closeDonationForm() {
    gsap.to(".donation-expense-form", {
        duration: 0.7,
        y: "0vh",
        ease: Power1.easeOut
    })

    gsap.to(".selection-category", {
        delay: 0.2,
        duration: 0.5,
        scale: 1,
    })

    gsap.to(".red-color", {
        delay: 1,
        duration: 0.7,
        opacity: 0,
        pointerEvents: "none",
    })

    gsap.to(".want-element", {
        duration: 1,
        y: "0vh",
        ease: Power2.easeIn
    })

}

//Donation

//Donation

// Income Form


// Form