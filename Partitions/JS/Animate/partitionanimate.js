gsap.from("body",{
    scale : 0.95,
    duration: 0.3,
    opacity : 0,
})

// Main Transaction option
function transaction() {

    gsap.to("#select-transaction", {
        opacity: 1,
        pointerEvents: "all",
        duration: 0.8,
        ease: Back.easeOut.config(2.5),
        scale: 1
    })


    gsap.to("#select-transaction-container", {
        delay: 0.2,
        opacity: 1,
        pointerEvents: "all",
        duration: 0.8,
        ease: Back.easeOut.config(2.5),
        scale: 1
    })

    gsap.to("#select-transaction-close", {
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

    gsap.to("#select-transaction", {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.8,
        ease: Back.easeOut.config(2.5),
        scale: 0.95
    })


    gsap.to("#select-transaction-container", {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.8,
        ease: Back.easeOut.config(2.5),
        scale: 0.95
    })

    gsap.to("#select-transaction-close", {
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
// Main Transaction option

// Shares Transaction option
function sharesTransaction() {

    gsap.to("#shares-transaction", {
        opacity: 1,
        pointerEvents: "all",
        duration: 0.8,
        ease: Back.easeOut.config(2.5),
        scale: 1
    })


    gsap.to("#shares-selection", {
        delay: 0.2,
        opacity: 1,
        pointerEvents: "all",
        duration: 0.8,
        ease: Back.easeOut.config(2.5),
        scale: 1
    })

    gsap.to("#shares-transaction-close", {
        delay: 0.4,
        opacity: 1,
        pointerEvents: "all",
        duration: 0.8,
        ease: Back.easeOut.config(2.5),
        scale: 1
    })

    gsap.to("#select-transaction", {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.8,
        ease: Back.easeOut.config(2.5),
        scale: 0.95
    })


    gsap.to("#select-transaction-container", {
        opacity: 0,
        pointerEvents: "none",
        duration: 1,
        ease: Back.easeOut.config(2.5),
        scale: 0.95
    })

    gsap.to("#select-transaction-close", {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.8,
        ease: Back.easeOut.config(2.5),
        scale: 0.90
    })


}


function closeSharesTransaction() {

    gsap.to("#shares-transaction", {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.8,
        ease: Back.easeOut.config(2.5),
        scale: 0.95
    })


    gsap.to("#shares-selection", {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.8,
        ease: Back.easeOut.config(2.5),
        scale: 0.95
    })

    gsap.to("#shares-transaction-close", {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.8,
        ease: Back.easeOut.config(2.5),
        scale: 0.90
    })

    transaction()

}
// Shares Transaction option



// Fixed Transaction option
function fixedTransaction() {

    gsap.to("#fixed-transaction", {
        opacity: 1,
        pointerEvents: "all",
        duration: 0.8,
        ease: Back.easeOut.config(2.5),
        scale: 1
    })


    gsap.to("#fixed-selection", {
        delay: 0.2,
        opacity: 1,
        pointerEvents: "all",
        duration: 0.8,
        ease: Back.easeOut.config(2.5),
        scale: 1
    })

    gsap.to("#fixed-transaction-close", {
        delay: 0.4,
        opacity: 1,
        pointerEvents: "all",
        duration: 0.8,
        ease: Back.easeOut.config(2.5),
        scale: 1
    })

    gsap.to("#select-transaction", {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.8,
        ease: Back.easeOut.config(2.5),
        scale: 0.95
    })


    gsap.to("#select-transaction-container", {
        opacity: 0,
        pointerEvents: "none",
        duration: 1,
        ease: Back.easeOut.config(2.5),
        scale: 0.95
    })

    gsap.to("#select-transaction-close", {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.8,
        ease: Back.easeOut.config(2.5),
        scale: 0.90
    })

}

function closeFixedTransaction() {

    gsap.to("#fixed-transaction", {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.8,
        ease: Back.easeOut.config(2.5),
        scale: 0.95
    })


    gsap.to("#fixed-selection", {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.8,
        ease: Back.easeOut.config(2.5),
        scale: 0.95
    })

    gsap.to("#fixed-transaction-close", {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.8,
        ease: Back.easeOut.config(2.5),
        scale: 0.90
    })

    transaction()

}
// Fixed Transaction option


// Others Transaction option
function othersTransaction() {

    gsap.to("#others-transaction", {
        opacity: 1,
        pointerEvents: "all",
        duration: 0.8,
        ease: Back.easeOut.config(2.5),
        scale: 1
    })


    gsap.to("#others-selection", {
        delay: 0.2,
        opacity: 1,
        pointerEvents: "all",
        duration: 0.8,
        ease: Back.easeOut.config(2.5),
        scale: 1
    })

    gsap.to("#others-transaction-close", {
        delay: 0.4,
        opacity: 1,
        pointerEvents: "all",
        duration: 0.8,
        ease: Back.easeOut.config(2.5),
        scale: 1
    })

    gsap.to("#select-transaction", {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.8,
        ease: Back.easeOut.config(2.5),
        scale: 0.95
    })


    gsap.to("#select-transaction-container", {
        opacity: 0,
        pointerEvents: "none",
        duration: 1,
        ease: Back.easeOut.config(2.5),
        scale: 0.95
    })

    gsap.to("#select-transaction-close", {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.8,
        ease: Back.easeOut.config(2.5),
        scale: 0.90
    })

}

function closeOthersTransaction() {

    gsap.to("#others-transaction", {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.8,
        ease: Back.easeOut.config(2.5),
        scale: 0.95
    })


    gsap.to("#others-selection", {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.8,
        ease: Back.easeOut.config(2.5),
        scale: 0.95
    })

    gsap.to("#others-transaction-close", {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.8,
        ease: Back.easeOut.config(2.5),
        scale: 0.90
    })

    transaction()

}
// Others Transaction option



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
// Shares Buy Form

function sharesBuyForm() {
    gsap.to("#shares-buy-form", {
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
function closeSharesBuyForm() {
    gsap.to("#shares-buy-form", {
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

// Shares Buy Form


// Shares Sell Form

function sharesSellForm() {
    gsap.to("#shares-sell-form", {
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

}
////////////////////////////////////////////////
function closeSharessellForm() {
    gsap.to("#shares-sell-form", {
        duration: 0.7,
        y: "0vh",
        ease: Power1.easeOut
    })

    gsap.to(".red-color", {
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

// Shares Sell Form


// Fixed Investment Buy Form

function fixedBuyForm() {
    gsap.to("#fixed-buy-form", {
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
function closeFixedBuyForm() {
    gsap.to("#fixed-buy-form", {
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

// Fixed Investment Buy Form


// Fixed Investment Sell Form

function fixedSellForm() {
    gsap.to("#fixed-sell-form", {
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

}
////////////////////////////////////////////////
function closeFixedsellForm() {
    gsap.to("#fixed-sell-form", {
        duration: 0.7,
        y: "0vh",
        ease: Power1.easeOut
    })

    gsap.to(".red-color", {
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

// Fixed Investment Sell Form


// Others Investment Buy Form

function othersBuyForm() {
    gsap.to("#others-buy-form", {
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
function closeOthersBuyForm() {
    gsap.to("#others-buy-form", {
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

// Others Investment Buy Form


// Others Investment Sell Form

function othersSellForm() {
    gsap.to("#others-sell-form", {
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

}
////////////////////////////////////////////////
function closeOthersSellForm() {
    gsap.to("#others-sell-form", {
        duration: 0.7,
        y: "0vh",
        ease: Power1.easeOut
    })

    gsap.to(".red-color", {
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

// Others Investment Sell Form



// Necessity Form

function necessityForm() {
    gsap.to(".necessity-expense-form", {
        delay: 0.2,
        duration: 0.7,
        y: "-78vh",
        ease: Power2.easeOut
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
function closeNecessityForm() {
    gsap.to(".necessity-expense-form", {
        duration: 0.7,
        y: "0vh",
        ease: Power1.easeOut
    })

    gsap.to(".selection-category", {
        delay: 0.2,
        duration: 0.5,
        scale: 1,
    })

    gsap.to(".necessity-element", {
        duration: 1,
        y: "0vh",
        ease: Power2.easeIn
    })

}

function wantsForm() {
    gsap.to(".wants-expense-form", {
        delay: 0.2,
        duration: 0.7,
        y: "-78vh",
        ease: Power2.easeOut
    })

    gsap.to(".selection-category", {
        duration: 0.5,
        scale: 0.95,
    })

    gsap.to(".want-element", {
        delay: 0.3,
        duration: 1,
        y: "-98vh",
        ease: Power2.easeOut
    })
}
///////////////////////////
function closeWantsForm() {
    gsap.to(".wants-expense-form", {
        duration: 0.7,
        y: "0vh",
        ease: Power1.easeOut
    })

    gsap.to(".selection-category", {
        delay: 0.2,
        duration: 0.5,
        scale: 1,
    })

    gsap.to(".want-element", {
        duration: 1,
        y: "0vh",
        ease: Power2.easeIn
    })

}

function othersForm() {
    gsap.to(".others-expense-form", {
        delay: 0.2,
        duration: 0.7,
        y: "-78vh",
        ease: Power2.easeOut
    })

    gsap.to(".selection-category", {
        duration: 0.5,
        scale: 0.95,
    })

    gsap.to(".other-element", {
        delay: 0.3,
        duration: 1,
        y: "-98vh",
        ease: Power2.easeOut
    })
}

///////////////////////////
function closeothersForm() {
    gsap.to(".others-expense-form", {
        duration: 0.7,
        y: "0vh",
        ease: Power1.easeOut
    })

    gsap.to(".selection-category", {
        delay: 0.2,
        duration: 0.5,
        scale: 1,
    })

    gsap.to(".other-element", {
        duration: 1,
        y: "0vh",
        ease: Power2.easeIn
    })

}

// Income Form


// Form