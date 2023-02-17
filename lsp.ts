interface ITakePhoto {
    takePhoto();
}

class BasePhone {
    call() {
        console.log("arama yapıldı");
    }
}


class Iphone12 extends BasePhone implements ITakePhoto {
    takePhoto() {
        console.log("Fotoğraf çekildi");
    }
}

class Nokia extends BasePhone {
    takePhoto() {
        throw new Error("Fotoğraf çekme özelliği yok");
    }

}

let phone: BasePhone;
phone = new Iphone12();
phone.call();
if (phone instanceof Iphone12) {
    (phone as Iphone12).takePhoto()
}


phone = new Nokia();
phone.call();