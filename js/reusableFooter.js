class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = 
        `
            <!-- Footer -->
            <footer class="footer">
                <a href="mailto:info@nislo.nl" class="footer__link">info@nislo.nl</a>
                <ul class="social-list">
                    <li class="social-list__item">
                        <a
                            class="social-list__link"
                            href="https://www.linkedin.com/in/nielssloesen/"
                            target="”_blank”"
                        >
                            <i class="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li class="social-list__item">
                        <a
                            class="social-list__link"
                            href="https://instagram.com/nielsslo"
                            target="”_blank”"
                        >
                            <i class="fab fa-instagram"></i>
                        </a>
                    </li>
                    <li class="social-list__item">
                        <a
                            class="social-list__link"
                            href="https://github.com/DaNiels89"
                            target="”_blank”"
                        >
                            <i class="fab fa-github"></i>
                        </a>
                    </li>
                </ul>
            </footer>
        `   
    }
}

customElements.define('main-footer', Footer);