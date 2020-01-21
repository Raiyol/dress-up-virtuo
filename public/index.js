/* global VIRTUO*/
'use strict';

(() => {
  const render = (actors) => {
    const fragment = document.createDocumentFragment();
    const div = document.createElement('tbody');
    const template = actors.map(actor => {
      return `
        <tr class="actor">
          <td>${actor.who}</td>
          <td>${actor.type}</td>
          <td>${actor.amount}</td>
        </tr>
      `;
    }).join('');

    div.innerHTML = template;
    fragment.appendChild(div);
    document.querySelector('#actors').innerHTML = '<thead> <tr> <th>Entity</th> <th>Operation</th> <th>Amount</th> </tr> </thead>';
    document.querySelector('#actors').appendChild(fragment);
  };

  const button = document.querySelector('#compute');

  button.addEventListener('click', function onClick () {
    const car = VIRTUO.getCar();
    const begin = document.querySelector('#rental .js-begin').value;
    const end = document.querySelector('#rental .js-end').value;
    const distance = document.querySelector('#rental .js-distance').value;
    const option = document.querySelector('#rental .js-option').checked;
    const actors = VIRTUO.payActors(car, begin, end, distance, option);

    render(actors);

    return;
  });
})();
