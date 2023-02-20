interface ISaveInformation{
    save(name:string,surname:string);
}

class SaveAsPDF implements ISaveInformation{
    save(name: string, surname: string) {
        console.log(`Saved as .PDF: ${name}-${surname}`);
    }

}

class SaveAsTXT implements ISaveInformation{
    save(name: string, surname: string) {
        console.log(`Saved as .TXT: ${name}-${surname}`);
    }

}

class SaveService{
    _saving:ISaveInformation;
    constructor(saving:ISaveInformation){
        this._saving=saving;
    }

    Saving(name:string,surname:string){
        this._saving.save(name,surname);
    }
}

let saveService=new SaveService(new SaveAsPDF());
saveService.Saving("mehmet","dertli");