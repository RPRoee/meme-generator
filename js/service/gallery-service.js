'use strict'

const gKeywords = { 'all': 0, 'women': 2, 'happy': 8, 'dance': 2, 'idiots': 7, 'fascism': 4, 'men': 15, 'animals': 4, 'cute': 8, 'sleep': 2, 'babies': 5, 'smart': 4 };
const KEY = 'imgsDB';
let gImages;
let gFilterBy = 'all';

_createGImages();

function setFilter(word) {
    word = word.toLowerCase();
    if (!gKeywords[word] && gKeywords[word] !== 0) return;
    gFilterBy = word;
    if (gFilterBy === 'all') return;
    gKeywords[gFilterBy]++;
}

function getKeyWords() {
    return gKeywords;
}

function _createGImages() {
    let images = loadFromStorage(KEY);
    if (images && images.length) gImages = images;
    else {
        gImages = [];
        gImages.push(_createImage(1, ['women', 'happy', 'dance']))
        gImages.push(_createImage(2, ['idiots', 'fascism', 'men']))
        gImages.push(_createImage(3, ['animals', 'cute', 'happy']))
        gImages.push(_createImage(4, ['animals', 'cute', 'sleep', 'babies']))
        gImages.push(_createImage(5, ['cute', 'babies']))
        gImages.push(_createImage(6, ['animals', 'cute', 'sleep', 'happy']))
        gImages.push(_createImage(7, ['idiots', 'men']))
        gImages.push(_createImage(8, ['cute', 'babies']))
        gImages.push(_createImage(9, ['men', 'smart']))
        gImages.push(_createImage(10, ['idiots', 'men']))
        gImages.push(_createImage(11, ['men', 'smart']))
        gImages.push(_createImage(12, ['men', 'idiots', 'fascism']))
        gImages.push(_createImage(13, ['cute', 'babies', 'dance']))
        gImages.push(_createImage(14, ['idiots','fascism','men']))
        gImages.push(_createImage(15, ['cute', 'babies', 'happy']))
        gImages.push(_createImage(16, ['animals', 'cute']))
        gImages.push(_createImage(17, ['men', 'happy']))
        gImages.push(_createImage(18, ['men', 'happy']))
        gImages.push(_createImage(19, ['men', 'happy', 'smart']))
        gImages.push(_createImage(20, ['men', 'happy']))
        gImages.push(_createImage(21, ['men']))
        gImages.push(_createImage(22, ['women', 'happy']))
        gImages.push(_createImage(23, ['men', 'happy', 'smart']))
        gImages.push(_createImage(24, ['idiots', 'fascism', 'men']))
        gImages.push(_createImage(25, ['idiots', 'men']))
    }
    _saveGImgsToStorage();
}

function _createImage(id, keyWords) {
    return {
        id,
        keyWords,
        url: `meme-imgs/${id}.jpg`
    }
}

function getTodosForDisplay() {
    if (gFilterBy === 'all') return gImages;
    let images = gImages.filter(images => {
        return img.keyWords.includes(gFilterBy);
    })
    debugger
    return images;
}

function _saveGImgsToStorage() {
    saveToStorage(KEY, gImages);
}