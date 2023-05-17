$(".main-slider").owlCarousel({
    loop: true, // 循環播放
    margin: 0, // 外距 10px
    nav: false, // 顯示點點
    items:1

});

$(".new-post-slider").owlCarousel({
    loop: true, // 循環播放
    margin: 0, // 外距 10px
    nav: true, // 顯示點點
    navContainer: "#custom-nav",
    navText: [
        '<span class="custom-prev"><i class="fa-solid fa-caret-left"></i></span>',
        '<span class="custom-next"><i class="fa-solid fa-caret-right"></i></span>'
      ],
    items:1

});