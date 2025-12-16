import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
      else div.className = 'cards-card-body';
    });
    ul.append(li);
  });
  ul.querySelectorAll('picture > img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));

  // Style brand as badge in meta line (format: "Brand · Year")
  ul.querySelectorAll('.cards-card-body p:last-child').forEach((meta) => {
    const text = meta.textContent;
    const parts = text.split('·').map((s) => s.trim());
    if (parts.length === 2) {
      const [brand, year] = parts;
      meta.innerHTML = `<span class="brand-badge">${brand}</span><span>${year}</span>`;
    }
  });

  block.replaceChildren(ul);
}
