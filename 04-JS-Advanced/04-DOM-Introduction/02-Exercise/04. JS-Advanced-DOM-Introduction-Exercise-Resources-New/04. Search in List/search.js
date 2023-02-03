function search() {
   let matchesCount = 0;
   const liElements = document.querySelectorAll('#towns li');
   let searchTextElement = document.getElementById('searchText').value;
   let resultElement = document.getElementById('result');
   for (const li of liElements) {
      if (li.textContent.includes(searchTextElement) && searchTextElement.length > 0) {
         matchesCount++;
         li.style.fontWeight = 'bold';
         li.style.textDecoration = 'underline';
      } else {
         li.style.fontWeight = 'normal';
         li.style.textDecoration = 'none';
      }
   }
   resultElement.textContent = `${matchesCount} matches found`;
   document.getElementById('searchText').value = '';
}
