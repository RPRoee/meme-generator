'use strict'

const gKeywords = { 'all': 0, 'happy': 3, 'funny': 4, 'animal': 10, 'man': 6, 'cartoon': 20, 'baby': 3 };
const KEY = 'imgsDB';
let gImages;
let gFilterBy = 'all';

_createGImgs();

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
        gImages.push(_createImg(1, ['funny', 'man']));
        gImages.push(_createImg(2, ['animal']));
        gImages.push(_createImg(3, ['animal', 'baby']));
        gImages.push(_createImg(4, ['animal']));
        gImages.push(_createImg(5, ['funny', 'baby']));
        gImages.push(_createImg(6, ['funny', 'man']));
        gImages.push(_createImg(7, ['funny', 'baby']));
        gImages.push(_createImg(8, ['funny', 'man']));
        gImages.push(_createImg(9, ['funny', 'baby', 'happy']));
        gImages.push(_createImg(10, ['funny', 'man', 'happy']));
        gImages.push(_createImg(11, ['funny']));
        gImages.push(_createImg(12, ['funny', 'man']));
        gImages.push(_createImg(13, ['man']));
        gImages.push(_createImg(14, ['man']));
        gImages.push(_createImg(15, ['man', 'happy']));
        gImages.push(_createImg(16, ['funny', 'man']));
        gImages.push(_createImg(17, ['man']));
        gImages.push(_createImg(18, ['cartoon']));
    }
    _saveGImgsToStorage();
}

function _createImg(id, keyWords) {
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
    return images;
}

function _saveGImgsToStorage() {
    saveToStorage(KEY, gImages);
}