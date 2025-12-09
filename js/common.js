$(document).ready(function(){
    // ハンバーガーメニュー開閉処理
    $('.js_openHumburgerMenuHandler').on('click', function() {
        $(this).toggleClass('is_active');
        $('.js_sideBarHandler').toggleClass('is_active');
    });

    //スリック処理
     $('.bl_newProductsList').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: true,
    responsive: [{
        breakpoint: 1024, // 768〜1023px以下のサイズに適用
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // 480〜767px以下のサイズに適用
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // 〜479px以下のサイズに適用
        settings: {
          slidesToShow: 1,
        },
      }
  ]
  });
});