function create(words) {
   const stringsArray = words.slice();
   const contentElement = document.getElementById('content');
   stringsArray.forEach(string => {
      const divElement = document.createElement('div');
      const pElement = document.createElement('p');
      pElement.style.display = 'none';
      pElement.textContent = string;
      divElement.appendChild(pElement);
      divElement.addEventListener('click', e => {
         pElement.style.display = 'block';
      })
      contentElement.appendChild(divElement);
   });
}