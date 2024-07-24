document.addEventListener('DOMContentLoaded', function() {
    // Esempio di contenuto dinamico
    const mainContent = document.querySelector('main section');
    const dynamicContent = document.createElement('article');
    dynamicContent.innerHTML = `
        <h2>Contenuto Dinamico</h2>
        <p>Questo contenuto è stato caricato dinamicamente usando JavaScript.</p>
    `;
    mainContent.appendChild(dynamicContent);
});