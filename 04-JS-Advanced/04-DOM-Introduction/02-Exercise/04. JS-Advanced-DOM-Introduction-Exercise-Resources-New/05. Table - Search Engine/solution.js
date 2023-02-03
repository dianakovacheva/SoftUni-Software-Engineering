function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const tbodyElement = document.querySelectorAll('tbody tr');
      const searchField = document.getElementById('searchField');
      for (const data of tbodyElement) {
         data.classList.remove('select');
         if (data.textContent.includes(searchField.value) && searchField.value.length > 0) {
            data.classList.add('select');
         };
      }
      searchField.value = '';
   }
}