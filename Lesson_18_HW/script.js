const product1 = {
    name : "notebook: Lenovo thinkpad",
    description : " Соверменный ноутбук для работы и игр",
    price : 1283,
    info : function () {
        return `товар:{$this.name}, цена:{$this.price}, описание:{$this.description} `;
        
    }
    
};

const product2 = {
    name : "Handy: Samsumg s24",
    description : " Соверменный смартфон с хорошей камерой",
    price : 1230,
    info : function () {
        return `товар:${this.name}, цена:${this.price}, описание:${this.description} `;
        
    }
    
};

function Product(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.info = function() {
        return `товар; ${this.name}; цена: ${this.price}; описание: ${this.description}`;
    };
}

const product3 = new Product("tablet: csvs", "Планшет для мобильной работы", 650);
const product4 = new Product("monitor: rem", "Монитор с высоким разрешением", 450);
const product5 = new Product("keyboard: Info", "Механическая клавиатура", 120);

const products = [product1, product2, product3, product4, product5];


function displayAllProducts(productsArray) {
    console.log("=".repeat(50));
    console.log("ИНФОРМАЦИЯ О ВСЕХ ТОВАРАХ");
    console.log("=".repeat(50));
    
    productsArray.forEach((product, index) => {
        console.log(`| Товар | ${index + 1}    |`);
        console.log(`|${'-'.repeat(20)}|`);
        console.log(`| name: ${product.name}    |`);
        console.log(`| price: ${product.price}    |`);
        console.log(`| description: ${product.description}    |`);
        console.log(`| Info: ${product.info()}    |`);
        console.log("=".repeat(50));
    });
}


displayAllProducts(products);