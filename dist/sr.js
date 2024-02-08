window.sr = ScrollReveal({reset: true})

sr.reveal('.section__title', {duration: 3500})



sr.reveal('#apresentation-title', {
    rotate:{x:40, y:0},
    duration: 2500
})

sr.reveal('#apresentation-name',{
    rotate:{x:0, y:50, z:0},
    duration:4000,
    
})

sr.reveal('.apresentation-left-content',{
    duration:4000,
})
sr.reveal('.apresentation-right-content', {
    duration: 2500
})


// about-me
sr.reveal('.about-me-section-container',{
    rotate:{x:50, y:0, z:0},
    duration:3000
})
sr.reveal('#portuguese-text',{
    rotate:{x:0, y:50, z:0},
    duration:6000
    
})

sr.reveal('#english-text',{
    rotate:{x:0, y:50, z:0},
    duration:6000
})

// My skills

sr.reveal('.my-skills-box-content',{
    rotate:{x:0, y:50, z:0},
    duration:3000
})

sr.reveal('.front-end',{
    rotate:{x:100, y:0, z:0},
    duration:3000
})

sr.reveal('.back-end',{
    rotate:{x:100, y:0, z:0},
    duration:3000
})

// carrossel

sr.reveal('.carrossel',{
    rotate:{x:0, y:50, z:0},
    duration:3000
})

// projects

sr.reveal('.projects-slides',{
    rotate:{x:50, y:0, z:0},
    duration:3000
})

sr.reveal('.slide',{
    rotate:{x:0, y:50, z:0},
    duration:6000
})

sr.reveal('#see-all-projects',{
    rotate:{x:0, y:50, z:0},
    duration:6000
})

