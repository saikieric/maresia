$(document).ready(function () {
  // ハンバーガーメニュー開閉処理
  $(".js_openHumburgerMenuHandler").on("click", function () {
    $(this).toggleClass("is_active");
    $(".js_sideBarHandler").toggleClass("is_active");
  });

  //スリック処理
  $(".bl_newProductsList").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    responsive: [
      {
        breakpoint: 1350, // 767〜1350px以下のサイズに適用
        settings: {
          slidesToShow: 3
        },
      },
      {
        breakpoint: 768, // 480〜767px以下のサイズに適用
        settings: {
          slidesToShow: 2
        },
      },
      {
        breakpoint: 480, // 〜479px以下のサイズに適用
        settings: {
          slidesToShow: 1
        },
      },
    ],
  });
});
