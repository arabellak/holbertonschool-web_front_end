function createElement(data) {
    let p = document.createElement('p');
    let content = document.createTextNode(data);
    p.appendChild(content);
    document.body.appendChild(p);
};

function queryWikipedia(callback) {
    let req = new XMLHttpRequest();
    req.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*');
    req.onload = function () {
        let content = JSON.parse(this.response);

        if (req.status >= 200 && req.status < 400) {
            content.forEach((query) => {
                
            });
        }
    };    
};
