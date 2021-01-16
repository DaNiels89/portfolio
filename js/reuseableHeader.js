class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <div class="logo">
                    <!-- TODO: Update logo -->
                    <!-- <img src="img/nislo.png" alt="" /> -->
                    <a href="/" class="home__link">
                        <i class="fas fa-home fa-lg"></i>
                    </a>
                </div>
                <button class="nav-toggle" aria-label="toggle navigation">
                    <span class="hamburger"></span>
                </button>
                <nav class="nav">
                    <ul class="nav__list">
                        <li class="nav__item">
                            <a href="/" class="nav__link">Home</a>
                        </li>
                        <li class="nav__item">
                            <a href="/#services" class="nav__link">My Services</a>
                        </li>
                        <li class="nav__item">
                            <a href="/#about" class="nav__link">About me</a>
                        </li>
                        <li class="nav__item">
                            <a href="/#work" class="nav__link">My Work</a>
                        </li>
                    </ul>
                </nav>
            </header>
            
            <script>
            
            </script>
            
        `;
    }
}

customElements.define('main-header', Header);