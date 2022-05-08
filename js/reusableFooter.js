class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = 
    `
      <a href="mailto:info@nislo.nl" class="footer__link" title="Contact Niels Sloesen via email">info@nislo.nl</a>
      <ul class="social-list">
        <li class="social-list__item">
          <a
            class="social-list__link"
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/nielssloesen/"
            target="_blank"
            rel="nofollow noreferrer"
            title="LinkedIn Niels Sloesen"
          >
            <i class="fab fa-linkedin"></i>
          </a>
        </li>
        <li class="social-list__item">
          <a
              class="social-list__link"
              aria-label="Instagram"
              href="https://instagram.com/nielsslo"
              target="_blank"
              rel="nofollow noreferrer"
              title="Instagram Niels Sloesen"
          >
            <i class="fab fa-instagram"></i>
          </a>
        </li>
        <li class="social-list__item">
          <a
              class="social-list__link"
              aria-label="Github"
              href="https://github.com/DaNiels89"
              target="_blank"
              rel="nofollow noreferrer"
              title="Github Niels Sloesen"
          >
            <i class="fab fa-github"></i>
          </a>
        </li>
      </ul>
    `   
  }
}

customElements.define('main-footer', Footer);