/* 
CLASSES
 - In javascript, classes are a way to define blueprints for creating objects(these objects are different from the objects defined in the previous lectures)
*/

class Rectangle {
    constructor(height, width, color) {
        this.height = height;
        this.width = width;
        this.color = color;
    }

    area() {
        return this.height * this.width;
    }

    paint() {
        console.log(`painting with color ${this.color}`);
    }
}

const rect = new Rectangle(2,4,'red');
const area = rect.area();
console.log(area);
rect.paint();
