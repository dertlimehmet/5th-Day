var Shapes;
(function (Shapes) {
    Shapes[Shapes["Square"] = 0] = "Square";
    Shapes[Shapes["Rectangle"] = 1] = "Rectangle";
    Shapes[Shapes["Triangle"] = 2] = "Triangle";
})(Shapes || (Shapes = {}));
class SquareAreaCalculate {
    calculate(aSide, height) {
        return aSide * height;
    }
}
class RectangleAreaCalculate {
    calculate(aSide, height) {
        return aSide * height;
    }
}
class TriangleAreaCalculate {
    calculate(aSide, height) {
        return (aSide * height) / 2;
    }
}
class AreaCalculate {
    goodCalculation(aSide, height, area) {
        return area.calculate(aSide, height);
    }
    badCalculation(aSide, height, shapeType) {
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
var areaCalculate = new AreaCalculate();
//bad
console.log(`Bad Square:${areaCalculate.badCalculation(3, 4, Shapes.Square)}`);
console.log(`Bad Rectangle:${areaCalculate.badCalculation(3, 4, Shapes.Rectangle)}`);
console.log(`Bad Triangle:${areaCalculate.badCalculation(3, 4, Shapes.Triangle)}`);
//good
console.log(`Good Square:${areaCalculate.goodCalculation(3, 4, new SquareAreaCalculate())}`);
console.log(`Good Rectangle:${areaCalculate.goodCalculation(3, 4, new RectangleAreaCalculate())}`);
console.log(`Good Triangle:${areaCalculate.goodCalculation(3, 4, new TriangleAreaCalculate())}`);
