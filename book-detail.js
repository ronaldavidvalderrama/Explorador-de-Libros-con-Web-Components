/**
 * Web Component <book-detail>
 * 
 * Representa una vista tipo modal que muestra información detallada de un libro:
 * - Título
 * - Autor
 * - Imagen de portada
 * - Fecha de publicación
 * - Género
 * - Resumen
 * - Lista de citas
 * 
 * Incluye un botón para volver a la vista de tarjetas de libros.
 * Al presionarlo, emite el evento personalizado 'volver-a-cards'.
 */

class BookDetail extends HTMLElement {
    constructor() {
        super();
        // Crea el Shadow DOM para encapsular estilos y estructura
        this.attachShadow({ mode: 'open' });
    }

    /**
     * Se ejecuta cuando el componente es añadido al DOM.
     * Renderiza el modal e instala el listener del botón "Volver".
     */
    connectedCallback() {
        this.render();

        // Emite el evento para volver a la vista de cards
        this.shadowRoot.querySelector('#volver-btn').addEventListener('click', () => {
            const event = new CustomEvent('volver-a-cards', { bubbles: true });
            this.dispatchEvent(event);
        });
    }

    /**
     * Renderiza el contenido HTML y CSS del modal en el Shadow DOM.
     * Toma los datos del libro desde los atributos del componente.
     */
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

// Define el componente personalizado <book-detail>
customElements.define('book-detail', BookDetail);
