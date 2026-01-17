$(document).ready(function () {
  // ハンバーガーメニュー開閉処理
  $(".js_openHumburgerMenuHandler").on("click", function () {
    $(this).toggleClass("is_active");
    $(".js_sideBarHandler").toggleClass("is_active");
  });

  //新着商品スリック処理
  $(".bl_newProductsList").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1350, //
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 950, //
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 580, //
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
