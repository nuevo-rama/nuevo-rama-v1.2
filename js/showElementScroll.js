const elementos = document.querySelectorAll('.elemento');

        function mostrarElemento(elemento) {
            setTimeout(() => {
                elemento.style.opacity = '1';
                elemento.style.transform = 'translateY(0)';
            }, 500); // 500ms de retraso para cada elemento
        }

        elementos.forEach((elemento) => {
            elemento.addEventListener('transitionend', () => {
                elemento.style.transition = 'none'; // Deshabilitar la transición después de la animación
            });
        });

        window.addEventListener('scroll', () => {
            elementos.forEach((elemento) => {
                const rect = elemento.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100 && elemento.style.opacity !== '1') {
                    mostrarElemento(elemento);
                }
            });
        });