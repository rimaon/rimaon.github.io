// fullpage
$(function () {
    $('#fullpage').fullpage({
        autoScrolling: true,
        //scrollHorizontally: true,
        showActiveTooltip: true,
        scrollOverflow: true,
        //메뉴 내비게이션
        menu: '#menu',
        anchors: ['section1', 'section2', 'section3', 'section4', 'section5']
    });
});

// swiper
$(function () {
    $("#youtube").YTPlayer();
});

const mainSlide = new Swiper('.mainSlide', {
    pagination: {
        el: '.swiper-pagination',
        mousewheel: true,
        keyboard: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false
    },
    loop: true,
    slidesPerView: 1, //화면 당 이미지 수
    spaceBetween: 20, // 이미지 사이의 간격
    // effect: 'flip', flipEffect: {   slideShadows: false, },
});

// 원하는 이미지로 이동(loop 버전)
const menu = document.querySelectorAll('.menu');
menu.forEach((item, idx) => {
    item.addEventListener('click', () => {
        mainSlide.slideToLoop(idx); // 해당 페이지로 이동
        mainSlide
            .autoplay
            .start(); // 자동 시작
    });
});

$(document).ready(function () {
    //이미지 변경 함수 호출
    changeIMG();
});

function changeIMG() {
    //img 태그의 아이디로 변경 할 때
    $("#imgID").attr("src", "/images/logo_white.png");
}