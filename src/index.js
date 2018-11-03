import $ from 'jquery';
import 'bootstrap';
import './index.scss';

import getCats from './catGetter';

const createCatCards = (cats) => {
  let newString = '';
  cats.forEach((cat) => {
    newString += `
        <div class="card u-clearfix">
          <div class="card-body">
            <span class="card-number card-circle subtle">$${cat['add-on-price'].toFixed(0)}</span>
            <span class="card-author subtle"></span>
            <h2 class="card-title">${cat.name}</h2>
            <span class="card-description subtle">${cat.specialSkill}</span>
            <div class="card-read"><span class="subtle">Color</span>${cat.color}</div>
          </div>
          <img src="${cat.gif}" alt="" class="card-media" />
        </div>`;
  });
  $('#cats').html(newString);
};

getCats()
  .then((data) => {
    createCatCards(data.data.cats);
  })
  .catch((error) => {
    console.error({ error });
  });

$('#cats').show();
