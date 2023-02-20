class SeaAnimals{
    swims(){
        console.log("Deniz hayvanları yüzer");
    }
}

interface ISleep{
    sleeps();
}

class Sharks extends SeaAnimals{
    sleeps(){
        throw new Error("Köpek balıkları uyumaz");
    }
}

class SeaTurtles extends SeaAnimals implements ISleep{
    sleeps() {
        console.log("Deniz kaplumbağaları uyur");
    }

}

let animals:SeaAnimals;

animals=new SeaTurtles();
animals.swims();
(animals as SeaTurtles).sleeps();

animals=new Sharks();
animals.swims();
//(animals as Sharks).sleeps();