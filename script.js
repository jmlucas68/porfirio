// Navegación y Scroll Suave
document.addEventListener('DOMContentLoaded', function() {
    // Navegación móvil
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Scroll suave para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Cambiar estilo del navbar al hacer scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(44, 62, 80, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.style.background = 'rgba(44, 62, 80, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Animaciones al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos para animaciones
    document.querySelectorAll('.timeline-item, .work-card, .context-card, .influence-card, .video-card, .source-category').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        observer.observe(el);
    });

    // Efecto de paralaje para el hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroImage = document.querySelector('.hero-image');
        if (heroImage) {
            heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });

    // Contador animado para fechas
    function animateCounter(element, start, end, duration) {
        let startTime = null;
        
        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            
            const value = Math.floor(progress * (end - start) + start);
            element.textContent = value;
            
            if (progress < 1) {
                requestAnimationFrame(animation);
            }
        }
        
        requestAnimationFrame(animation);
    }

    // Inicializar contadores cuando sean visibles
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const targetValue = parseInt(counter.dataset.target);
                animateCounter(counter, 0, targetValue, 2000);
                counterObserver.unobserve(counter);
            }
        });
    });

    // Efectos de hover para cards
    document.querySelectorAll('.work-card, .context-card, .influence-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 30px 60px rgba(0,0,0,0.2)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
        });
    });

    // Efecto de escritura para citas
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // Inicializar efecto de escritura para blockquotes
    const quoteObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const quote = entry.target;
                const originalText = quote.textContent;
                typeWriter(quote, originalText, 30);
                quoteObserver.unobserve(quote);
            }
        });
    });

    document.querySelectorAll('blockquote').forEach(quote => {
        quoteObserver.observe(quote);
    });

    // Preloader simple
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
});

// Función para mostrar tabs
function showTab(tabName) {
    // Ocultar todos los panels
    document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    
    // Remover clase active de todos los botones
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });
    
    // Mostrar el panel seleccionado
    document.getElementById(tabName).classList.add('active');
    
    // Activar el botón correspondiente
    event.target.classList.add('active');
}

// Función para scroll suave a sección
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Función para búsqueda (opcional)
function searchContent() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        const content = section.textContent.toLowerCase();
        if (content.includes(searchTerm)) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

// Función para cambiar tema (opcional)
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    
    // Guardar preferencia
    localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
}

// Cargar tema guardado
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
});

// Función para compartir contenido
function shareContent() {
    if (navigator.share) {
        navigator.share({
            title: 'Porfirio de Tiro - Filósofo Neoplatónico',
            text: 'Descubre la vida y obra de Porfirio de Tiro, discípulo de Plotino y gran filósofo neoplatónico.',
            url: window.location.href
        });
    } else {
        // Fallback para navegadores que no soportan Web Share API
        navigator.clipboard.writeText(window.location.href);
        alert('Enlace copiado al portapapeles');
    }
}

// Función para imprimir página
function printPage() {
    window.print();
}

// Easter egg: Konami Code
let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
let konamiIndex = 0;

document.addEventListener('keydown', function(e) {
    if (e.code === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            // Activar modo especial
            document.body.classList.add('philosophical-mode');
            alert('¡Modo Filosófico Activado! 🏛️');
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

// Función para generar citas aleatorias
const porphyryQuotes = [
    "El alma que se ha liberado de las pasiones y se ha purificado mediante la filosofía puede ascender hacia la contemplación de lo divino.",
    "El Uno es la fuente de toda realidad, pero él mismo está más allá de toda determinación.",
    "La filosofía es una purificación y una liberación del alma.",
    "Los dioses no necesitan sacrificios cruentos. Lo que verdaderamente les agrada es la pureza del alma y el ejercicio de la virtud.",
    "Sobre los géneros y las especies, si subsisten o solo se encuentran en los pensamientos puros, me abstendré de hablar."
];

function showRandomQuote() {
    const randomQuote = porphyryQuotes[Math.floor(Math.random() * porphyryQuotes.length)];
    
    // Crear elemento de cita flotante
    const quoteElement = document.createElement('div');
    quoteElement.className = 'floating-quote';
    quoteElement.innerHTML = `
        <blockquote>
            "${randomQuote}"
            <cite>- Porfirio de Tiro</cite>
        </blockquote>
        <button onclick="this.parentElement.remove()">×</button>
    `;
    
    document.body.appendChild(quoteElement);
    
    // Remover después de 10 segundos
    setTimeout(() => {
        if (quoteElement.parentElement) {
            quoteElement.remove();
        }
    }, 10000);
}

// Agregar estilos CSS para la cita flotante
const floatingQuoteStyle = document.createElement('style');
floatingQuoteStyle.textContent = `
    .floating-quote {
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(45deg, var(--gold), var(--orange));
        color: white;
        padding: 1rem;
        border-radius: 10px;
        max-width: 300px;
        z-index: 10000;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        animation: slideInRight 0.5s ease-out;
    }
    
    .floating-quote blockquote {
        margin: 0;
        font-style: italic;
        font-size: 0.9rem;
    }
    
    .floating-quote cite {
        display: block;
        margin-top: 0.5rem;
        font-size: 0.8rem;
        text-align: right;
    }
    
    .floating-quote button {
        position: absolute;
        top: 5px;
        right: 10px;
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .philosophical-mode {
        filter: sepia(0.3) hue-rotate(30deg);
    }
    
    .philosophical-mode .hero {
        background: linear-gradient(135deg, #8B4513 0%, #DAA520 100%);
    }
`;

document.head.appendChild(floatingQuoteStyle);

// Mostrar cita aleatoria cada 30 segundos
setInterval(showRandomQuote, 30000);
