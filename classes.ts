class Vehicle {
  constructor(public color: string) {
  }

  drive(): void {
    console.log('chugga chugga');
  }

  honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color)

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color)
  }
  drive(): void {
    console.log('vrooom');
  }
}

const car = new Car(4, 'blue');
car.drive();
car.honk();