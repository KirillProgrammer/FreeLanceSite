tns({
    loop: false,
    controls: false,
    navPosition: 'bottom',
    navContainer: '.slider__nav',
    speed: 700,
    items: 1,
    edgePadding: 0,
    responsive: {
        400: {
            edgePadding: 40
        },
        500: {
            edgePadding: 70,
        },
        770: {
            edgePadding: 150,
        },
        994: {
            items: 2,
            gutter: 10,
            edgePadding: 50,
        },
        1200: {
            items: 3,
            gutter: 60,
        }
    }
});