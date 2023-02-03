function getArticleGenerator(array) {
    // the input comes as an array of strings
    const articles = array.slice();
    // return a function that keeps the initial array in its closure
    return () => {
        const articleElement = document.createElement('article');
        const divElement = document.getElementById('content');
        // every time it’s called, it takes the first element from the array and displays it on the web page, inside "article", in div with ID "content"
        if (articles.length) {
            let currentText = articles.shift();
            articleElement.innerText = currentText;
            divElement.appendChild(articleElement);
            console.log(divElement);
        }
    }
}
