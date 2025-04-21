class BookCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
        this.shadowRoot.querySelector('.card').addEventListener('click', () => {
        this.dispatchEvent(new CustomEvent('ver-detalles', {
            bubbles: true,
            composed: true,
            detail: {
                book: {
                    title: this.getAttribute('title'),
                    author: this.getAttribute('author'),
                    coverUrl: this.getAttribute('coverUrl'),
                    synopsis: this.getAttribute('synopsis'),
                }
            }
        }));
    });
}

render() {
    this.shadowRoot.innerHTML = `
        <style>
        

        .card {
            cursor: pointer;
            border: 1px solid #ddd;
            border-radius: 12px;
            padding: 1rem;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            max-width: 250px;
            transition: transform 0.2s;
            background-color: beige;
        }

        .card:hover {
            transform: scale(1.02);
        }

        img {
            width: 100%;
            height: auto;
            border-radius: 8px;
        }

        h3 {
            margin: 0.5rem 0 0.2rem;
            font-size: 1.1rem;
        }

        p {
            margin: 0;
            color: #555;
            font-size: 0.9rem;
        }
    </style>

    <div class="card">
        <img src="${this.getAttribute('coverUrl')}" alt="Portada de ${this.getAttribute('title')}">
        <h3>${this.getAttribute('title')}</h3>
        <p><strong>Autor:</strong> ${this.getAttribute('author')}</p>
        <p>${this.getAttribute('synopsis')}</p>
    </div>
    `;
    }
}

customElements.define('book-card', BookCard);