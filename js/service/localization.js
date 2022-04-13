'use strict'
let gCurrLang = 'en';

//translate
let gTrans = {
    Gallery: {
        en: 'gallery',
        he: 'גלרייה'
    },
    Memes: {
        en: 'memes',
        he: 'ממים'
    },
    About: {
        en: 'about',
        he: 'אודות'
    },
    Search: {
        en: 'filter',
        he: 'פילטר'
    },
    More: {
        en: 'more',
        he: 'עוד'
    },
    Text: {
        en: 'type your text here',
        he: 'הקלד כאן'
    },
    Share: {
        en: 'share',
        he: 'שיתוף'
    },
    Download: {
        en: 'download',
        he: 'הורדה'
    },
    Save: {
        en: 'save',
        he: 'שמור'
    },
    'about-subtitle': {
        en: 'blahblah',
        he: 'בלהבלה'
    },
    'about-text': {
        en: 'about',
        he: 'בלהבלהבלה'
    },
    Enjoy: {
        en: 'Enjoy!',
        he: '!תהנו'
    }
}

function getLang() {
    return gCurrLang;
}

function getTrans(transKey) {
    const currKey = gTrans[transKey];
    if (!currKey) return 'UNKNOWN';
    let txt = currKey[gCurrLang];
    if (!txt) txt = currKey['en'];
    return txt;
}

function toggleLang() {
    gCurrLang = (gCurrLang === 'he') ? 'en' : 'he';
}

function onToggleLang() {
    const lang = toggleLang();
    if (lang === 'he') {
        document.body.classList.add('rtl');
    } else {
        document.body.classList.remove('rtl');
    }
    onInit();
}