$('.FortunaSlider').slick({
    waitForAnimate: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    vertical: true,
    verticalSwiping: true,
    infinite: true,
    arrows: false,
    dots: false,
    cssEase: 'linear',
    autoplaySpeed: 0,
    centerMode: true,
    centerPadding: '21%',
    adaptiveHeight: true,
    speed: 25,
    mobileFirst: true,
});

let audioSlider = new Audio;
audioSlider.src = 'slideSound.mp3';

let audioDing = new Audio;
audioDing.src = 'dingSound.mp3';

let PhotoIndexArray = [1, 3, 5, 6, 8, 10, 1, 3, 5, 8, 6,];

let aduioDingStart2 = () => { audioDing.play() };

$('.FortunaSlider').on('swipe', function (event, sick, direction) {
    let autoplay = () => {
        $('.FortunaSlider').slick('slickPlay');
        setTimeout(aduioDingStart2, 1460);
        document.getElementById('FortunaSlider').style.pointerEvents = 'none';
    };
    let autopause = () => {
        $('.FortunaSlider').slick('slickPause');
    };
    let goTo = () => {
        if ($('.FortunaSlider').slick('slickCurrentSlide') != 1 || 3 || 5 || 6 || 8 || 10) {
            let randomNumber = Math.floor(Math.random() * 11);
            $('.FortunaSlider').slick('goTo', PhotoIndexArray[randomNumber], false);
            document.getElementById('FortunaSlider').style.pointerEvents = '';
        };
    };
    autoplay();

    audioSlider.play();

    audioDing.play();

    audioDing.pause();

    audioDing.currentTime = 0;

    setTimeout(autopause, 1500);

    setTimeout(goTo, 1540);
});

