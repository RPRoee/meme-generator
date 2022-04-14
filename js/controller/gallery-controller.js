'use strict'

function initGallery() {
    renderImages()
    renderSearchWords()
}

function renderImages() {
    const images = getTodosForDisplay()
    let strHTMLs = images.map(image => {
        return `<img class="meme-img" id=${image.id} src="${image.url}">`
    })
    document.querySelector('.images-container').innerHTML = strHTMLs.join('')
    addImgEventListeners();
}

function renderSearchWords() {
    var wordsMap = getKeyWords()
    var keyWords = Object.keys(wordsMap)
    let strHTML = keyWords.map(word => {
        const fontSize = 10 + wordsMap[word];
        return `<li class="key-word" style="font-size: ${fontSize}px" onclick="onFilterImgs('${word}')">${word}</li>`
    });
    document.querySelector('.search-words').innerHTML = strHTML.join('')
}

function onFilterImgs(word) {
    document.querySelector('[name=search-box]').value = ''
    const lang = getLang()

    document.querySelector('[name=search-box]').placeholder = (lang === 'en') ? 'Search' : 'חיפוש'
    setFilter(word)
    initGallery()
}

function onSetMemeImg(ev) {
    const id = +ev.target.id
    initEditorMeme()
    setMemeImg(id)
    initEditorMeme()
}

function onImgInput(ev) {
    loadImageFromInput(ev, setUserImg);
}

function loadImageFromInput(ev, onImageReady) {
    var reader = new FileReader()
    reader.onload = function(event) {
        var img = new Image()
        img.onload = onImageReady.bind(null, img)
        img.src = event.target.result
    }
    reader.readAsDataURL(ev.target.files[0])
}