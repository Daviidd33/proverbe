let citation = document.getElementById('citation')

const getQuote = () => {
    fetch('https://api.quotable.io/random')
        .then((res) => res.json())
        .then(data => {
            citation.innerHTML = data.content
        });

    fetch('https://picsum.photos/1600/1000')
        .then((res) => {
            document.getElementById('image').innerHTML =
                `<img src=${res.url} />`
        })

};

citation.addEventListener('click', getQuote)
getQuote();

