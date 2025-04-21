
import { bookData } from './data.js';
import './book-card.js';
import './book-detail.js';

const contenedorLibros = document.getElementById('contenedor-libros');

const renderBookCards = (books) => {
    books.forEach(book => {
        const card = document.createElement('book-card');
        card.setAttribute('title', book.title);
        card.setAttribute('author', book.author);
        card.setAttribute('coverUrl', book.coverUrl);
        card.setAttribute('synopsis', book.synopsis);
        card.setAttribute('publishedDate', book.publishedDate);
        card.setAttribute('genre', book.genre);
        card.setAttribute('summary', book.summary);
        card.setAttribute('quotes', JSON.stringify(book.quotes));
        contenedorLibros.appendChild(card);
    });
};

renderBookCards(bookData);

contenedorLibros.addEventListener('ver-detalles', (event) => {
    const book = event.detail.book;
    const detail = document.createElement('book-detail');
    detail.setAttribute('title', book.title);
    detail.setAttribute('author', book.author);
    detail.setAttribute('coverUrl', book.coverUrl);
    detail.setAttribute('synopsis', book.synopsis);
    detail.setAttribute('publishedDate', book.publishedDate);
    detail.setAttribute('genre', book.genre);
    detail.setAttribute('summary', book.summary);
    detail.setAttribute('quotes', JSON.stringify(book.quotes));
    document.body.appendChild(detail);
}); 