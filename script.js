/* Reset y Variables */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --accent-color: #e74c3c;
    --text-color: #333;
    --text-light: #666;
    --background-color: #f8f9fa;
    --dark-bg: #2c3e50;
    --white: #ffffff;
    --gold: #f39c12;
    --purple: #8e44ad;
    --green: #27ae60;
    --orange: #e67e22;
    --red: #e74c3c;
    --blue: #3498db;
    --font-primary: 'Playfair Display', serif;
    --font-secondary: 'Inter', sans-serif;
    --shadow: 0 10px 30px rgba(0,0,0,0.1);
    --transition: all 0.3s ease;
}

body {
    font-family: var(--font-secondary);
    line-height: 1.6;
    color: var(--text-color);
    background-color: var(--background-color);
    scroll-behavior: smooth;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Navegación */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(44, 62, 80, 0.95);
    backdrop-filter: blur(10px);
    z-index: 1000;
    padding: 1rem 0;
    transition: var(--transition);
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
}

.nav-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--white);
    font-size: 1.5rem;
    font-weight: 700;
    font-family: var(--font-primary);
}

.nav-logo i {
    color: var(--gold);
    font-size: 1.8rem;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-menu a {
    color: var(--white);
    text-decoration: none;
    font-weight: 500;
    transition: var(--transition);
    position: relative;
}

.nav-menu a:hover {
    color: var(--gold);
}

.nav-menu a::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--gold);
    transition: var(--transition);
}

.nav-menu a:hover::after {
    width: 100%;
}

.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
}

.hamburger span {
    width: 25px;
    height: 3px;
    background: var(--white);
    margin: 3px 0;
    transition: var(--transition);
}

/* Hero Section */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
    color: var(--white);
    position: relative;
    overflow: hidden;
}

.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><polygon fill="rgba(255,255,255,0.05)" points="0,0 1000,300 1000,1000 0,700"/></svg>');
    background-size: cover;
}

.hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    position: relative;
    z-index: 1;
}

.hero-title {
    font-family: var(--font-primary);
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 1rem;
    background: linear-gradient(45deg, var(--white), var(--gold));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: fadeInUp 1s ease-out;
}

.hero-subtitle {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: var(--gold);
    font-weight: 500;
    animation: fadeInUp 1s ease-out 0.2s both;
}

.hero-description {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    line-height: 1.8;
    font-style: italic;
    animation: fadeInUp 1s ease-out 0.4s both;
}

.cta-button {
    background: linear-gradient(45deg, var(--gold), var(--orange));
    color: var(--white);
    padding: 15px 30px;
    border: none;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
    animation: fadeInUp 1s ease-out 0.6s both;
}

.cta-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 20px 40px rgba(243, 156, 18, 0.4);
}

.hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
    animation: fadeInUp 1s ease-out 0.8s both;
}

.philosophical-symbol {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: linear-gradient(45deg, var(--gold), var(--orange));
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    color: var(--white);
    animation: rotate 20s linear infinite;
}

.scroll-indicator {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.5rem;
    color: var(--gold);
    animation: bounce 2s infinite;
}

/* Secciones */
.section {
    padding: 100px 0;
}

.section.dark {
    background: var(--dark-bg);
    color: var(--white);
}

.section-title {
    font-family: var(--font-primary);
    font-size: 3rem;
    text-align: center;
    margin-bottom: 4rem;
    color: var(--primary-color);
    position: relative;
}

.section.dark .section-title {
    color: var(--white);
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: var(--gold);
}

/* Timeline */
.timeline {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
}

.timeline::after {
    content: '';
    position: absolute;
    width: 2px;
    background: var(--gold);
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -1px;
}

.timeline-item {
    padding: 20px 40px;
    position: relative;
    background: transparent;
    width: 50%;
    animation: fadeInUp 0.8s ease-out;
}

.timeline-item:nth-child(odd) {
    left: 0;
    text-align: right;
}

.timeline-item:nth-child(even) {
    left: 50%;
    text-align: left;
}

.timeline-marker {
    position: absolute;
    width: 20px;
    height: 20px;
    background: var(--gold);
    border-radius: 50%;
    top: 15px;
    z-index: 1;
}

.timeline-item:nth-child(odd) .timeline-marker {
    right: -10px;
}

.timeline-item:nth-child(even) .timeline-marker {
    left: -10px;
}

.timeline-content {
    padding: 20px;
    background: var(--white);
    border-radius: 10px;
    box-shadow: var(--shadow);
    transition: var(--transition);
}

.timeline-content:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.timeline-content h3 {
    color: var(--primary-color);
    margin-bottom: 10px;
    font-size: 1.3rem;
}

/* Obras Grid */
.works-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.work-card {
    background: var(--white);
    border-radius: 15px;
    padding: 2rem;
    box-shadow: var(--shadow);
    transition: var(--transition);
    text-align: center;
    animation: fadeInUp 0.8s ease-out;
}

.section.dark .work-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
}

.work-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 30px 60px rgba(0,0,0,0.2);
}

.work-icon {
    font-size: 3rem;
    color: var(--gold);
    margin-bottom: 1rem;
}

.work-card h3 {
    color: var(--primary-color);
    margin-bottom: 1rem;
    font-size: 1.5rem;
}

.section.dark .work-card h3 {
    color: var(--white);
}

.work-links {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
}

.work-links a {
    background: var(--gold);
    color: var(--white);
    padding: 10px 20px;
    border-radius: 25px;
    text-decoration: none;
    transition: var(--transition);
    font-size: 0.9rem;
}

.work-links a:hover {
    background: var(--orange);
    transform: translateY(-2px);
}

/* Filosofía Tabs */
.philosophy-tabs {
    max-width: 1000px;
    margin: 0 auto;
}

.tab-buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 3rem;
    flex-wrap: wrap;
}

.tab-button {
    padding: 12px 30px;
    background: transparent;
    border: 2px solid var(--gold);
    color: var(--gold);
    border-radius: 25px;
    cursor: pointer;
    transition: var(--transition);
    font-weight: 600;
}

.tab-button.active,
.tab-button:hover {
    background: var(--gold);
    color: var(--white);
}

.tab-panel {
    display: none;
    animation: fadeIn 0.5s ease-out;
}

.tab-panel.active {
    display: block;
}

.philosophy-content {
    background: var(--white);
    padding: 3rem;
    border-radius: 15px;
    box-shadow: var(--shadow);
}

.philosophy-content h3 {
    color: var(--primary-color);
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
}

.philosophy-content blockquote {
    background: linear-gradient(45deg, var(--gold), var(--orange));
    color: var(--white);
    padding: 2rem;
    border-radius: 10px;
    font-style: italic;
    font-size: 1.2rem;
    margin: 2rem 0;
    position: relative;
}

.philosophy-content blockquote::before {
    content: '"';
    font-size: 4rem;
    position: absolute;
    top: -10px;
    left: 20px;
    opacity: 0.3;
}

/* Jerarquía Metafísica */
.hierarchy {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 2rem 0;
}

.level {
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 1.5rem;
    background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
    color: var(--white);
    border-radius: 10px;
    animation: slideInLeft 0.8s ease-out;
}

.level-name {
    font-size: 1.3rem;
    font-weight: 700;
    min-width: 150px;
}

.level-description {
    flex: 1;
    font-size: 1.1rem;
}

/* Virtudes Grid */
.virtues-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
}

.virtue-card {
    background: linear-gradient(45deg, var(--purple), var(--blue));
    color: var(--white);
    padding: 2rem;
    border-radius: 10px;
    text-align: center;
    transition: var(--transition);
    animation: fadeInUp 0.8s ease-out;
}

.virtue-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(142, 68, 173, 0.3);
}

.virtue-card h4 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
}

/* Conceptos Lógicos */
.logic-concepts {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
}

.concept {
    background: linear-gradient(45deg, var(--green), var(--blue));
    color: var(--white);
    padding: 2rem;
    border-radius: 10px;
    animation: fadeInUp 0.8s ease-out;
}

.concept h4 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
}

/* Temas Religiosos */
.religious-themes {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
}

.theme {
    background: linear-gradient(45deg, var(--red), var(--orange));
    color: var(--white);
    padding: 2rem;
    border-radius: 10px;
    text-align: center;
    animation: fadeInUp 0.8s ease-out;
}

.theme h4 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
}

/* Influencias */
.influences-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    margin-top: 2rem;
}

.influences-received h3,
.influences-given h3 {
    color: var(--gold);
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
}

.influence-cards {
    display: grid;
    gap: 1.5rem;
}

.influence-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: 1.5rem;
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 1rem;
    transition: var(--transition);
    animation: fadeInUp 0.8s ease-out;
}

.influence-card:hover {
    transform: translateY(-3px);
    background: rgba(255, 255, 255, 0.2);
}

.influence-icon {
    font-size: 2rem;
    color: var(--gold);
    min-width: 50px;
}

.influence-card h4 {
    color: var(--white);
    margin-bottom: 0.5rem;
}

.influence-card p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
}

/* Contexto Grid */
.context-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.context-card {
    background: var(--white);
    padding: 2rem;
    border-radius: 15px;
    box-shadow: var(--shadow);
    text-align: center;
    transition: var(--transition);
    animation: fadeInUp 0.8s ease-out;
}

.context-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 30px 60px rgba(0,0,0,0.2);
}

.context-icon {
    font-size: 3rem;
    color: var(--gold);
    margin-bottom: 1rem;
}

.context-card h3 {
    color: var(--primary-color);
    margin-bottom: 1rem;
    font-size: 1.5rem;
}

/* Videos Grid */
.videos-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.video-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: 2rem;
    border-radius: 15px;
    text-align: center;
    transition: var(--transition);
    animation: fadeInUp 0.8s ease-out;
}

.video-card:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.2);
}

.video-thumbnail {
    font-size: 4rem;
    color: var(--red);
    margin-bottom: 1rem;
}

.video-card h3 {
    color: var(--white);
    margin-bottom: 1rem;
    font-size: 1.3rem;
}

.video-card p {
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 1.5rem;
}

.video-card a {
    background: var(--red);
    color: var(--white);
    padding: 10px 20px;
    border-radius: 25px;
    text-decoration: none;
    transition: var(--transition);
    display: inline-block;
}

.video-card a:hover {
    background: var(--orange);
    transform: translateY(-2px);
}

/* Fuentes Grid */
.sources-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.source-category {
    background: var(--white);
    padding: 2rem;
    border-radius: 15px;
    box-shadow: var(--shadow);
    animation: fadeInUp 0.8s ease-out;
}

.source-category h3 {
    color: var(--primary-color);
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    text-align: center;
}

.source-list {
    list-style: none;
}

.source-list li {
    margin-bottom: 1rem;
}

.source-list a {
    color: var(--secondary-color);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-radius: 5px;
    transition: var(--transition);
}

.source-list a:hover {
    background: var(--background-color);
    color: var(--primary-color);
}

/* Footer */
.footer {
    background: var(--dark-bg);
    color: var(--white);
    padding: 3rem 0 1rem;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
}

.footer-section h3 {
    color: var(--gold);
    margin-bottom: 1rem;
}

.footer-section ul {
    list-style: none;
}

.footer-section ul li {
    margin-bottom: 0.5rem;
}

.footer-section a {
    color: var(--white);
    text-decoration: none;
    transition: var(--transition);
}

.footer-section a:hover {
    color: var(--gold);
}

.footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.7);
}

/* Animaciones */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-10px);
    }
    60% {
        transform: translateY(-5px);
    }
}

/* Responsive Design */
@media (max-width: 768px) {
    .hamburger {
        display: flex;
    }

    .nav-menu {
        position: fixed;
        left: -100%;
        top: 70px;
        flex-direction: column;
        background-color: var(--primary-color);
        width: 100%;
        text-align: center;
        transition: 0.3s;
        box-shadow: 0 10px 27px rgba(0,0,0,0.05);
        padding: 2rem 0;
    }

    .nav-menu.active {
        left: 0;
    }

    .hero-content {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .hero-title {
        font-size: 2.5rem;
    }

    .timeline::after {
        left: 20px;
    }

    .timeline-item {
        width: 100%;
        padding-left: 50px;
        padding-right: 25px;
        text-align: left;
    }

    .timeline-item::before {
        left: 10px;
    }

    .timeline-marker {
        left: 10px !important;
    }

    .influences-container {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .works-grid {
        grid-template-columns: 1fr;
    }

    .tab-buttons {
        flex-direction: column;
        align-items: center;
    }

    .philosophy-content {
        padding: 2rem;
    }

    .hierarchy {
        gap: 0.5rem;
    }

    .level {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
    }

    .level-name {
        min-width: auto;
    }
}

@media (max-width: 480px) {
    .hero-title {
        font-size: 2rem;
    }

    .hero-subtitle {
        font-size: 1.2rem;
    }

    .section-title {
        font-size: 2rem;
    }

    .work-card,
    .context-card,
    .source-category {
        padding: 1.5rem;
    }

    .philosophy-content {
        padding: 1.5rem;
    }

    .timeline-content {
        padding: 15px;
    }
}
