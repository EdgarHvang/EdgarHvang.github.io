window.onload = function() {
    getProducts();

    document.getElementById('nav-home').onclick = function(event) {
        event.preventDefault();
        getProducts();
    }

    // add/update product
    document.getElementById('product-btn').onclick = function(event) {
        event.preventDefault();
        if (!document.getElementById('product-btn').dataset.id) {
            addProduct();
        } else {
            editProduct();
        }
    }
    //add some default data
    document.getElementById('defaultData').onclick = function(event){
        event.preventDefault();
        setDefaultData();
    }
}

async function getProducts() {
    let products = await fetch('http://localhost:4000/products/').then(response => response.json());
    products.forEach(prod => renderProduct(prod));
    console.log(response.json())
}

function renderProduct(prod) {
    const div = document.createElement('div');
    div.classList = 'col-lg-4';
    div.id = prod.id;
    div.innerHTML = `<svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
    <title>Placeholder</title>
    <rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777"
        dy=".3em">140x140</text>
    </svg>`;

    const h2 = document.createElement('h2');
    h2.textContent =  prod.title;

    const price = document.createElement('p');
    price.textContent = "ISBN: " + prod.ISBN;

    const description = document.createElement('p');
    description.textContent = "publishDate: " + prod.publishDate;

    const author = document.createElement('p');
    author.textContent = "author: " + prod.author;

    div.appendChild(h2);
    div.appendChild(price);
    div.appendChild(description);
    div.appendChild(author);

    const actions = document.createElement('p');
    const updateBtn = document.createElement('a');
    updateBtn.classList = 'btn btn-secondary';
    updateBtn.textContent = 'UPDATE';
    updateBtn.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('product-heading').textContent = 'Edit Product';
        document.getElementById('title').value = prod.title;
        document.getElementById('isbn').value = prod.ISBN;
        document.getElementById('publishDate').value = prod.publishDate;
        document.getElementById('author').value = prod.author;
        document.getElementById('product-btn').dataset.id = prod.id;
    });

    const deleteBtn = document.createElement('a');
    deleteBtn.classList = 'btn btn-secondary';
    deleteBtn.textContent = 'DELETE';
    deleteBtn.addEventListener('click', function(event) {
        event.preventDefault();

        fetch('http://localhost:4000/products/' + prod.id, {
            method: 'DELETE',
        }).then(response => {
            alert('Delete Successfully!');
            div.remove();
        });
    });

    actions.appendChild(updateBtn);
    actions.appendChild(deleteBtn);

    div.appendChild(actions);

    document.getElementById('products').appendChild(div);
}


async function addProduct() {
    console.log("add");
    let result = await fetch('http://localhost:4000/products/', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            title: document.getElementById('title').value,
            ISBN: document.getElementById('isbn').value,
            publishDate: document.getElementById('publishDate').value,
            author: document.getElementById('author').value
        })
    }).then(res => res.json());
    document.getElementById('product-form').reset();
    renderProduct(result);
}

async function setDefaultData(){
    let result = await fetch('http://localhost:4000/products/defaultData', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            title: document.getElementById('title').value,
            ISBN: document.getElementById('isbn').value,
            publishDate: document.getElementById('publishDate').value,
            author: document.getElementById('author').value
        })
    }).then(res => res.json());
    result.forEach(prod => renderProduct(prod));
    // renderProduct(result);
}

function editProduct() {
    const prodId = document.getElementById('product-btn').dataset.id;
    const title = document.getElementById('title').value;
    const isbn = document.getElementById('isbn').value;
    const publishDate = document.getElementById('publishDate').value;
    const author = document.getElementById('author').value;
    fetch('http://localhost:4000/products/' , {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                id:prodId,
                title: title,
                ISBN: isbn,
                publishDate: publishDate,
                author: author
            })
        }).then(response => response.json())
        .then(jsonObj => {
            const productDiv = document.getElementById(prodId);
            productDiv.querySelector('h2').textContent = title;
            const paragraphArr = productDiv.querySelectorAll('p');
            paragraphArr[0].textContent = isbn;
            paragraphArr[1].textContent = publishDate;
            paragraphArr[2].textContent = author;

            document.getElementById('product-heading').textContent = 'Add a new Product';
            document.getElementById('product-btn').dataset.id = '';
            document.getElementById('product-form').reset();
        });
}