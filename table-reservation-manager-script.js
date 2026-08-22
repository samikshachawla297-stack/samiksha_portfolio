class SectionLabel extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="section-label"><span>${this.getAttribute('number')}</span><i></i><strong>${this.getAttribute('label')}</strong></div>`;
  }
}

class InfoCard extends HTMLElement {
  connectedCallback() {
    const icon = this.getAttribute('icon');
    const title = this.getAttribute('title');
    const copy = this.textContent.trim();
    this.innerHTML = `<article class="info-card"><div class="card-icon">${icon || '·'}</div><h3>${title}</h3><p>${copy}</p></article>`;
  }
}

class FlowItem extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<article class="flow-item"><div class="flow-icon">●</div><h3>${this.getAttribute('title')}</h3><p>${this.getAttribute('text')}</p></article>`;
  }
}

class Feedback extends HTMLElement {
  connectedCallback() {
    const items = (this.getAttribute('items') || '').split('|');
    this.innerHTML = `<article class="feedback-card"><h3>${this.getAttribute('title')}</h3><ul>${items.map((item) => `<li>${item}</li>`).join('')}</ul></article>`;
  }
}

customElements.define('section-label', SectionLabel);
customElements.define('info-card', InfoCard);
customElements.define('flow-item', FlowItem);
customElements.define('feedback-card', Feedback);
