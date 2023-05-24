/* ==========================================================
[ 目次 ]

<body>クラス設定
スムース スクロール
ハンバーガーメニュー
スライダー「Splide」

========================================================== */

/* ---------------------------------------------
*   <body>クラス設定
--------------------------------------------- */
/**
 * <body>要素に、ユーザーのOS・デバイスとブラウザ等に関数情報をクラスとして付与する
 * OS・デバイス: iphone, ipad, android, androidphone, androidtablet, windows, mac
 * ブラウザ: ie, edge, chrome, firefox, safari
 */
$(function () {
    'use strict';

    $('body').addClass(function () {
        const ua = window.navigator.userAgent.toLowerCase();
        let bodyClasses = '';

        // プラットフォーム判定
        if (is.ios()) {
            if (is.iphone()) {
                bodyClasses += ' iphone';
            } else if (is.ipad()) {
                bodyClasses += ' ipad';
            }
        } else if (ua.indexOf('macintosh') > -1 && 'ontouchend' in document) {
            bodyClasses += ' ipad';
        } else if (is.android()) {
            bodyClasses += ' android';

            if (is.androidPhone()) {
                bodyClasses += ' androidphone';
            } else if (is.androidTablet()) {
                bodyClasses += ' androidtablet';
            }
        } else if (is.windows()) {
            bodyClasses += ' windows';
        } else if (is.mac()) {
            bodyClasses += ' mac';
        }

        // ブラウザ判定
        if (is.ie()) {
            bodyClasses += ' ie';

            if (is.ie(11)) {
                bodyClasses += ' ie11';
            }
        } else if (is.edge() || ua.indexOf('edg') > -1) {
            bodyClasses += ' edge';
        } else if (is.chrome() || ua.indexOf('crios') > -1) {
            bodyClasses += ' chrome';
        } else if (is.firefox()) {
            bodyClasses += ' firefox';
        } else if (is.safari()) {
            bodyClasses += ' safari';
        }

        return bodyClasses;
    });
});

/* ---------------------------------------------
*   スムース スクロール
--------------------------------------------- */
$(function () {
    'use strict';

    $('a[href^="#"]').on('click.smoothScroll', function () {
        const href = $(this).attr('href'),
            $target = $(href === '#' ? 'html' : href);

        if (!$target.length) return;

        let offset = 0; // スクロール位置をずらす場合は、条件分岐等を行う

        const position = $target.offset().top + offset;
        $('html, body').animate({ scrollTop: position }, 400, 'swing');

        return false;
    });
});

/* ---------------------------------------------
*   ハンバーガーメニュー
--------------------------------------------- */
$(function () {
    'use strict';

    const $html = $('html'),
        $body = $('body'),
        $window = $(window),
        $menu = $('.js-menu'),
        $trigger = $('.js-menu-trigger'),
        openClass = 'is-menu-opened',
        noScrollClass = 'is-noscroll';

    let scrollPos; //スクロール量

    $trigger.on('click.menu', () => {
        $body.toggleClass(openClass);

        const isOpened = $body.hasClass(openClass);

        if (isOpened) {
            const scrollbarWidth = innerWidth - document.body.clientWidth; //スクロールバーの幅
            scrollPos = $window.scrollTop(); //スクロール量を取得
            $html.addClass(noScrollClass);
            $body.css({
                top: -scrollPos,
                'padding-right': `${scrollbarWidth}px`
            });
            $menu.fadeIn(200);
        } else {
            $body.css({ top: '', 'padding-right': '' });
            $html.removeClass(noScrollClass);
            $window.scrollTop(scrollPos);
            $menu.fadeOut(200);
        }
    });
});

/* ---------------------------------------------
*   スライダー「Splide」
--------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const sliderElement = document.querySelector('.js-slider');

    if (!sliderElement) return;

    const splide = new Splide(sliderElement, {
        type: 'loop', //ループスライダー
        speed: 1000, // スライダーの移動時間
        arrows: false, // 矢印ボタンを表示するか否か
        pagination: false, // ページネーションを表示するか否か
        autoplay: true, // 自動再生するか否か
        interval: 5000, // 自動再生の間隔
        pauseOnHover: false // フォーカス時に自動再生を停止するか否か
    });

    splide.mount();

    // アドレスバー・ツールバーを除いた100vhの値を取得
    function setHeight() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    setHeight();

    // window.addEventListener('resize', setHeight);
});
