let products = [];


module.exports = class Product {
    constructor(id, title,ISBN ,publishDate, author) {
        this.id = id;
        this.title = title;
        this.ISBN = ISBN;
        this.publishDate = publishDate;
        this.author = author;
    }

    save() {

        if(this.id){
            products.push(this);
        }else{
            this.id = Math.random().toString();
            products.push(this);
        }

        return this;
    }

    update() {
        const index = products.findIndex(p => p.id==this.id);
        if (index > -1) {
            products.splice(index, 1, this)
        } else {
            throw new Error('Not found');
        }
    }

    static fectchAll() {
        return products;
    }

    static findById(productId) {
        const index = products.findIndex(p => p.id==productId);
        console.log(index);
        if (index != -1) {
            return products[index];
        } else {
            throw new Error('Not found')
        }

    }

    static deleteById(productId) {
        console.log(productId);
        const index = products.findIndex(p => p.id == productId);
        console.log(index);
        if (index != -1) {
            console.log("--------");
            products = products.filter(p=> p.id != productId);
        } else {
            throw new Error('NOT Found');
        }
        console.log(products);
    }

    static getBookByAuthor(firstName){
        console.log("xxx")
       let index = products.find(p=>p.author.firstName === firstName);
       if(index != -1){
        return products.filter(p=>p.author.firstName === firstName)[0];
       }else{
        throw new Error('NOT Found');
       }
    }

}

