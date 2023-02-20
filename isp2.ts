interface IPrinterTasks{
    print();
    scan();
}

interface IFaxTaks{
    fax();
}


class EpsonPrinter implements IPrinterTasks,IFaxTaks{
    fax() {
        throw new Error("Method not implemented.");
    }
    print() {
        throw new Error("Method not implemented.");
    }
    scan() {
        throw new Error("Method not implemented.");
    }

}