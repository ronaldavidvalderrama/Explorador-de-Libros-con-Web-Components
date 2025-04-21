import { bookData } from './data.js';
import './book-card.js';
import './book-detail.js';

const contenedor = document.getElementById('contenedor-libros');

function renderCards() {
  contenedor.innerHTML = '';
  bookData.forEach(libro => {
    const card = document.createElement('book-card');
    card.setAttribute('title', libro.title);
    card.setAttribute('author', libro.author);
    card.setAttribute('coverUrl', libro.coverUrl);
    card.setAttribute('synopsis', libro.synopsis);

    
    card.addEventListener('click', () => {
      renderDetail(libro);
    });

    contenedor.appendChild(card);
  });
}

function renderDetail(libro) {


  const detail = document.createElement('book-detail');
  detail.setAttribute('title', libro.title);
  detail.setAttribute('author', libro.author);
  detail.setAttribute('coverUrl', libro.coverUrl);
  detail.setAttribute('publishedDate', libro.publishedDate);
  detail.setAttribute('genre', libro.genre);
  detail.setAttribute('summary', libro.summary);
  detail.setAttribute('quotes', JSON.stringify(libro.quotes));

  detail.addEventListener('volver-a-cards', () => {
    detail.remove(); // Elimina el modal
  });

  document.body.appendChild(detail); // Agrega el detalle al body para que esté encima
}


renderCards();
