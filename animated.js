anime({
    targets: '.aboutPart',
    keyframes: [
        
        {translateY: -10, duration: 300, easing: 'easeInOutSine'},
        {translateY: 0, duration: 300, easing: 'easeInOutSine'},
        {translateY: 0, duration: 800, easing: 'easeInOutSine'},
    ],
    
    delay: anime.stagger(20),
    loop: true,
});

anime({
    targets: '.aboutThing',
    keyframes: [
        
        {translateX: 00, duration: 300, easing: 'easeInOutSine'},
        {translateX: 0, duration: 300, easing: 'easeInOutSine'},
    ],
});

anime({
    targets: '.scrollingChange',
    keyframes: [
        
        {color: '#ffffff', duration: 800, easing: 'easeInOutSine'},
        {color: '#3a3a3a', duration: 100, easing: 'easeInOutSine'},
        {color: '#ffffff', duration: 800, easing: 'easeInOutSine'}
    ],
    delay: anime.stagger(90),
    loop: true,
});
