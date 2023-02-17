interface IWriteProductRepository{
    save(data:string);
    update(data:string);
    delete(id:number);
}

interface IReadProductRepository{
    getAll();
    getById(id:number);
}

class ProductRepository implements IWriteProductRepository,IReadProductRepository{
    getAll() {
        throw new Error("Method not implemented.");
    }
    getById(id: number) {
        throw new Error("Method not implemented.");
    }
    save(data: string) {
        throw new Error("Method not implemented.");
    }
    update(data: string) {
        throw new Error("Method not implemented.");
    }
    delete(id: number) {
        throw new Error("Method not implemented.");
    }

}