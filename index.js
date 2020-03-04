class Polygon {
    constructor(sides) {
        this.sides = sides
    }
    get countSides() {
        let sidesArray = this.sides
        return sidesArray.length 
    }

    get perimeter() {
        const sidesArray = this.sides 
        const add = (accumulator, currentValue) => accumulator + currentValue;
        return sidesArray.reduce(add)
    }
}

class Triangle extends Polygon {

    get isValid() {
        let sidesArray = this.sides 
        let side1 = sidesArray[0]
        let side2 = sidesArray[1]
        let side3 = sidesArray[2]

        if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
            return true
        } else {
            return false
        }
    }
}

class Square extends Polygon {
    
    get isValid() {
        let sidesArray = this.sides 
        let side1 = sidesArray[0]
        let side2 = sidesArray[1]
        let side3 = sidesArray[2]
        let side4 = sidesArray[3]

        if (side1 == side2 && side2 == side3 && side3 == side4) {
            return true
        } else {
            return false 
        }
    }

    get area() {
        let sidesArray = this.sides 
        let side1 = sidesArray[0]
        let side2 = sidesArray[1]

        return side1 * side2 
    }
}