'use strict'

import { hotspot } from "./fetchPage.js";

// let informacoes = await hotspot();
// console.log(informacoes);

let { hotspots }  = await hotspot();
console.log(hotspots);

const criarCards = (indice) => {
    const cardsContainer = document.querySelector('#hotspot');

    const cards = document.createElement('div');
    cards.classList.add('hotspot_infos');   

    const artista = document.createElement('img');
    artista.classList.add('artista-image');
    artista.src = indice.art_pic_src;

    const titulo = document.createElement('span');
    titulo.classList.add('nome');
    titulo.textContent = indice.title

    const descricao = document.createElement('span');
    descricao.classList.add('descricao');
    descricao.textContent = indice.descr;

    cards.appendChild(titulo);
    cards.appendChild(artista);
    cards.appendChild(descricao);

    cardsContainer.appendChild(cards);

    // cards.addEventListener('click', (elemento) => {
    //     elemento.preventDefault();
    //     let linkHotspot = cards.link;

    //     localStorage.setItem('informacoes', linkHotspot);

    //     location.href = '../index.html';
    // });
}

hotspots.forEach(criarCards)