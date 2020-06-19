import { elements } from './base.js';

export const displayNumber = number => {
  elements.numberOfTheDay.innerHTML = `
    <span class="title">${number}</span>
  `
};

export const displayFacts = facts => {
  for (let fact in facts) {
    elements.factsList.appendChild(document.createElement('li')).innerHTML = facts[fact].display
  }
};