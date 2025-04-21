class BookDetail extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.shadowRoot.querySelector('#volver-btn').addEventListener('click', () => {
            const event = new CustomEvent('volver-a-cards', { bubbles: true });
            this.dispatchEvent(event);
        });
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                .modal-overlay {
                    position: fixed;
                    top: 0; left: 0;
                    width: 100%; height: 100%;
                    background-color: rgba(0, 0, 0, 0.8);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1000;
                }

                .modal-content {
                    background: white;
                    padding: 2rem;
                    border-radius: 1rem;
                    max-width: 800px;
                    width: 90%;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                    animation: fadeIn 0.3s ease-in-out;
                }

                img {
                    width: 150px;
                    float: right;
                    margin-left: 1rem;
                }

                button {
                    margin-top: 2rem;
                    padding: 0.5rem 1rem;
                    background-color: #333;
                    color: white;
                    border: none;
                    border-radius: 0.5rem;
                    cursor: pointer;
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
            </style>

            <div class="modal-overlay">
                <div class="modal-content">
                    <h2>${this.getAttribute('title')}</h2>
                    <p><strong>Autor:</strong> ${this.getAttribute('author')}</p>
                    <img src="${this.getAttribute('coverUrl')}" alt="Portada" />
                    <p><strong>Fecha de publicación:</strong> ${this.getAttribute('publishedDate')}</p>
                    <p><strong>Género:</strong> ${this.getAttribute('genre')}</p>
                    <p><strong>Resumen:</strong> ${this.getAttribute('summary')}</p>
                    <p><strong>Citas:</strong></p>
                    <ul>
                        ${JSON.parse(this.getAttribute('quotes') || '[]').map(cita => `<li>"${cita}"</li>`).join('')}
                    </ul>
                    <button id="volver-btn">Volver</button>
                </div>
            </div>
        `;
    }
}

customElements.define('book-detail', BookDetail);
