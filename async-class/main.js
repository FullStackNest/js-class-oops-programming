console.log('Async with Class');


// Advance code

class Render {
     #productsDiv = document.querySelector('#products');
     #loader = document.querySelector('#loader');
    constructor(apiURL, type, errMessage) {
        this.apiURL = apiURL;
        this.type = type;
        this.errMessage = errMessage;
    }
    async #fetchData(endpoint) {
        const response = await fetch(endpoint);
        const data = await response.json();
        return data;
    }

    #renderError(message) {
        return `
            <div class="alert alert-danger" role="alert">
                Something went wrong! ${message}
            </div>
        `
    }
    #showLoading() {
        return `
            <div class="progress" style="width: 90vw; height: 2rem; font-size: 1.2rem;">
                <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">${this.type} Loading...</div>
            </div>
        `
    }
    #renderCardHTML(product) {
        const rate = product.rating.rate;
        return `
        <div class="card" style="width: 15rem;">
            <img src="${product.image}" class="card-img-top small-img" alt="${product.title}">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.description}</p>
                    <a href="#" class="btn btn-${rate > 3.5 ? "primary" : "danger"}">Rating ${rate}</a>
                </div>
        </div>
        `;
    }
    #renderUserHTML(user) {
        const address = `${user.address.street}, ${user.address.suite} -  ${user.address.city}`;
        return `
       <div class="card" style="width: 15rem;">
            <h6>${user.name}</h6>
            <div class="card-body">
                <h5 class="card-title"><b>Email: </b>${user.email}</h5>
                <p class="card-text"><b>Address: </b>${address}</p>
                
            </div>
       </div>
    `
    }
    #insertCards(data){
        this.#productsDiv.innerHTML = null;
        this.#productsDiv.insertAdjacentHTML('afterbegin', data)
    }
    getData(){
        let dataCard = ``;
        this.#loader.innerHTML = this.#showLoading();
        this.#fetchData(this.apiURL)
            .then(res => {
                res.forEach(item => {
                    dataCard += this.type === 'products' ? this.#renderCardHTML(item) : this.#renderUserHTML(item)
                })
                console.log(dataCard);
                this.#insertCards(dataCard);

            }).catch(() => {
                this.#productsDiv.insertAdjacentHTML('afterbegin', this.#renderError(this.errMessage))
            }).finally(() => {
                this.#loader.innerHTML = null;
                console.log('Fetching completed !');
            })
    }

}




document.getElementById('fetch-btn')
    .addEventListener('click', () => {
        let render = new Render('https://fakestoreapi.com/products', 'products', 'Products API has issue')
        render.getData();
    });

document.getElementById('user-btn').addEventListener('click', () => {
    let render = new Render('https://jsonplaceholder.typicode.com/users', 'users', 'Users API has issue')
    render.getData();
});



// -------------------- Traditional code --------------
// class Render {
//     async fetchData(endpoint) {
//         const response = await fetch(endpoint);
//         const data = await response.json();
//         return data;
//     }

//     renderError(message) {
//         return `
//             <div class="alert alert-danger" role="alert">
//                 Something went wrong! ${message}
//             </div>
//         `
//     }
//     showLoading() {
//         return `
//             <div class="progress" style="width: 90vw; height: 2rem; font-size: 1.2rem;">
//                 <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">Loading...</div>
//             </div>
//         `
//     }
//     renderCardHTML(product) {
//         const rate = product.rating.rate;
//         return `
//         <div class="card" style="width: 15rem;">
//             <img src="${product.image}" class="card-img-top small-img" alt="${product.title}">
//                 <div class="card-body">
//                     <h5 class="card-title">${product.title}</h5>
//                     <p class="card-text">${product.description}</p>
//                     <a href="#" class="btn btn-${rate > 3.5 ? "primary" : "danger"}">Rating ${rate}</a>
//                 </div>
//         </div>
//         `;
//     }
//     renderUserHTML(user) {
//         const address = `${user.address.street}, ${user.address.suite} -  ${user.address.city}`;
//         return `
//        <div class="card" style="width: 15rem;">
//             <h6>${user.name}</h6>
//             <div class="card-body">
//                 <h5 class="card-title"><b>Email: </b>${user.email}</h5>
//                 <p class="card-text"><b>Address: </b>${address}</p>
                
//             </div>
//        </div>
//     `
//     }
// }

// const productsDiv = document.querySelector('#products');
// const loader = document.querySelector('#loader');


// document.getElementById('fetch-btn')
//     .addEventListener('click', () => {
//         let productsCard = ``;
//         productsDiv.innerHTML = null;
//         let render = new Render();
//         loader.innerHTML = render.showLoading();
//         render.fetchData('https://fakestoreapi.com/products')
//             .then(products => {

//                 products.forEach(product => {

//                     productsCard += render.renderCardHTML(product)
//                 })
//                 productsDiv.insertAdjacentHTML('afterbegin', productsCard)

//             }).catch(() => {
//                 productsDiv.insertAdjacentHTML('afterbegin', render.renderError('Products API has issue'))
//             }).finally(() => {
//                 loader.innerHTML = null;
//                 console.log('Products fetching done');
//             })
//     });