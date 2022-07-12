import Scrollbar from 'smooth-scrollbar';

const options = {
  'dumping': 0.05,
  'renderByPixels': true,
  'plugins': {
    'effect': 'bounce'
  }
}

Scrollbar.init(document.querySelector('#my-scrollbar'), options);

