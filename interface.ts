interface IRepository<T>{
    get();
    getById(id:number);
    save(data:T);
    update(date:T);
    delete(id:number);

    partialUpdate();
}


//A kişisi Product kullanıyo olsun

class Product{
    id:number;
    name:string;
}

class ProductRepository implements IRepository<Product>{
    partialUpdate() {
        throw new Error("Method not implemented.");
    }
    get() {
        throw new Error("Method not implemented.");
    }
    getById(id: number) {
        throw new Error("Method not implemented.");
    }
    save(data: Product) {
        throw new Error("Method not implemented.");
    }
    update(date: Product) {
        throw new Error("Method not implemented.");
    }
    delete(id: number) {
        throw new Error("Method not implemented.");
    }

}

//B kişisi stock kullanıyo olsun

class Stock{
    id:number;
    count:number;
}

class StockRepository implements IRepository<Stock>{
    partialUpdate() {
        throw new Error("Method not implemented.");
    }
    get() {
        throw new Error("Method not implemented.");
    }
    getById(id: number) {
        throw new Error("Method not implemented.");
    }
    save(data: Stock) {
        throw new Error("Method not implemented.");
    }
    update(date: Stock) {
        throw new Error("Method not implemented.");
    }
    delete(id: number) {
        throw new Error("Method not implemented.");
    }

}

// extensions