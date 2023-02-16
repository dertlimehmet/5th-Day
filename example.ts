class Product {
    id: number;
    name: string;
    price: number;
    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class ProductRepository implements IProductRepository {
    GetAll(): Product[] {
        let productList: Product[] = [];
        productList.push(new Product(1, "kalem 1", 100));
        productList.push(new Product(2, "kalem 2", 200));
        productList.push(new Product(3, "kalem 3", 300));
        return productList;
    }
}

class ProductRepositoryWithOracle implements IProductRepository{
    GetAll(): Product[] {
        //sql server
        let productList: Product[] = [];
        productList.push(new Product(1, "Oracle kalem 1", 100));
        productList.push(new Product(2, "Oracle kalem 2", 200));
        productList.push(new Product(3, "Oracle kalem 3", 300));
        return productList;
    }

}

interface IProductRepository{
    GetAll():Product[];
}

class ProductService {

    private _productRepository: IProductRepository;
    readonly _kdv: number = 1.18; //sonradan değiştirilemez, sadece okunabilir
    constructor(productRepository:IProductRepository) {
        this._productRepository = productRepository;
    }

    GetAll(): Product[] {

        let newProductList: Product[] = [];

        this._productRepository.GetAll().forEach(x => {
            newProductList.push(new Product(x.id, x.name, x.price * this._kdv))
        })
        return newProductList;
    }
}



class ProductFactory {
    public CreateRepository(): IProductRepository {
        return new ProductRepository();
    }
    public CreateRepositoryWithOracle():IProductRepository{
        return new ProductRepositoryWithOracle();
    }
}



var productService = new ProductService(new ProductFactory().CreateRepository());
productService.GetAll().forEach(x => {
    console.log(`${x.id} ${x.name} ${x.price}`)
})