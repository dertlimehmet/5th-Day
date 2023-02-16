var Product = /** @class */ (function () {
    function Product(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    return Product;
}());
var ProductRepository = /** @class */ (function () {
    function ProductRepository() {
    }
    ProductRepository.prototype.GetAll = function () {
        var productList = [];
        productList.push(new Product(1, "kalem 1", 100));
        productList.push(new Product(2, "kalem 2", 200));
        productList.push(new Product(3, "kalem 3", 300));
        return productList;
    };
    return ProductRepository;
}());
var ProductService = /** @class */ (function () {
    function ProductService() {
        this._kdv = 1.18; //sonradan değiştirilemez, sadece okunabilir
        this._productRepository = new ProductFactory().CreateRepository();
    }
    ProductService.prototype.GetAll = function () {
        var _this = this;
        var newProductList = [];
        this._productRepository.GetAll().forEach(function (x) {
            newProductList.push(new Product(x.id, x.name, x.price * _this._kdv));
        });
        return newProductList;
    };
    return ProductService;
}());
var ProductFactory = /** @class */ (function () {
    function ProductFactory() {
    }
    ProductFactory.prototype.CreateRepository = function () {
        return new ProductRepository();
    };
    return ProductFactory;
}());
var productService = new ProductService();
productService.GetAll().forEach(function (x) {
    console.log("".concat(x.id, " ").concat(x.name, " ").concat(x.price));
});
