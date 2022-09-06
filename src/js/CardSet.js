import template from '../templates/card.hbs';
import items from './menu.json';
import { ref } from './refElement';

ref.output.insertAdjacentHTML('beforeend', template(items));
