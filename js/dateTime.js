// Mostrar el año actual en el footer
const footer = document.getElementById('year');
const currentYear = new Date().getFullYear();
footer.innerHTML = `${currentYear} - `;