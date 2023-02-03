function solve() {
   const addBtnElement = Array.from(document.getElementsByClassName('add-product'));
   const textAreaElement = document.getElementsByTagName('textarea')[0];
   const checkoutBtnElement = document.querySelector('button.checkout')
   let totalPrice = 0;
   let boughtProductsArray = [];
   // add eventListener to addBtnElement
   addBtnElement.forEach(btn => {
      btn.addEventListener('click', e => {
         const productName = e.currentTarget.parentElement.parentElement.getElementsByClassName('product-title')[0].textContent;
         const productPrice = Number(e.currentTarget.parentElement.parentElement.lastElementChild.textContent);
         boughtProductsArray.push(productName);
         totalPrice += productPrice;
         const addedProductStr = `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
         textAreaElement.textContent += addedProductStr;
      })
   });
   // add eventListener to checkoutBtnElement
   checkoutBtnElement.addEventListener('click', e => {
      const uniqueProducts = [... new Set(boughtProductsArray)];
      const resultString = `You bought ${uniqueProducts.join(', ')} for ${totalPrice.toFixed(2)}.`;
      textAreaElement.textContent += resultString;
      // disable all buttons after clicking over the checkout button
      for (const btn of addBtnElement) {
         btn.disabled = true;
      }
      checkoutBtnElement.disabled = true;
   })
}