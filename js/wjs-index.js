$(function() {
    // 初始化工具提示
    $('[data-toggle="tooltip"]').tooltip()


    var startX, endX;
    // 外面包裹图片的大容器
    var carousel_inner = $(".carousel-inner")[0];
    // 底部圆点
    var carousel = $(".carousel");

    carousel_inner.addEventListener("touchstart", function(e) {
        startX = e.targetTouches[0].clientX;
    });
    carousel_inner.addEventListener("touchend", function(e) {
        endX = e.targetTouches[0].clientX;

        if (endX - startX > 0) {
            carousel.carousel('prev');
        } else if (endX - startX < 0) {
            carousel.carousel('next');
        }
    });

    $('.carousel').carousel({
        interval: 1000
    })
})