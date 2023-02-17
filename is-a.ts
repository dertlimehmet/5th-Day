namespace isA {
    abstract class Vehicle {
        ileri(): void {

        }

        abstract sag(): void


        abstract sol(): void

    }

    class Car extends Vehicle {
        sag(): void {
            console.log("Sağa gider");
        }
        sol(): void {
            console.log("Sola gider");;
        }

    }

    class Car2 extends Vehicle {
        sag(): void {
            console.log("Sağa gider");
        }
        sol(): void {
            console.log("Sola gider type2");;
        }

    }

    class Car3 extends Vehicle {
        sag(): void {
            console.log("Sağa gider type3");
        }
        sol(): void {
            console.log("Sola gider");;
        }

    }

    class Train extends Vehicle {
        sag(): void {
            throw new Error("Sağa gidemez");
        }
        sol(): void {
            throw new Error("Sola Gidemez");
        }

    }
}

