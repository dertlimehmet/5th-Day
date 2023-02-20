enum Shapes {
    Square,
    Rectangle,
    Triangle
}

interface IArea {
    calculate(aSide: number, height: number): number;
}

class SquareAreaCalculate implements IArea {
    calculate(aSide: number, height: number): number {
        return aSide * height;
    }

}

class RectangleAreaCalculate implements IArea {
    calculate(aSide: number, height: number): number {
        return aSide * height;
    }

}

class TriangleAreaCalculate implements IArea {
    calculate(aSide: number, height: number): number {
        return (aSide * height) / 2;
    }

}

class AreaCalculate {
    goodCalculation(aSide: number, height: number, area: IArea) {
        return area.calculate(aSide, height);
    }

    badCalculation(aSide: number, height: number, shapeType: Shapes): number {
        let areaCurrent = 0;
        switch (shapeType) {
            case Shapes.Rectangle:
                areaCurrent = aSide * height;
                break;
            case Shapes.Square:
                areaCurrent = aSide * height;
                break;
            case Shapes.Triangle:
                areaCurrent = (aSide * height) / 2;
                break;
            default:
                break;
        }
        return areaCurrent;
    }
}

var areaCalculate= new AreaCalculate();

//bad
console.log(`Bad Square:${areaCalculate.badCalculation(3,4,Shapes.Square)}`);
console.log(`Bad Rectangle:${areaCalculate.badCalculation(3,4,Shapes.Rectangle)}`);
console.log(`Bad Triangle:${areaCalculate.badCalculation(3,4,Shapes.Triangle)}`);

//good
console.log(`Good Square:${areaCalculate.goodCalculation(3,4,new SquareAreaCalculate())}`);
console.log(`Good Rectangle:${areaCalculate.goodCalculation(3,4,new RectangleAreaCalculate())}`);
console.log(`Good Triangle:${areaCalculate.goodCalculation(3,4,new TriangleAreaCalculate())}`);