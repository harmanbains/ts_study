const carMakers: string[] = ['ford', 'toyota', 'chevy'];

carMakers.forEach( (maker: string): void => {
  console.log(maker);
})

const dates = [new Date(), new Date()];

// string is the type in the inner array
const carsByMake: string[][] = [
  ['f150'],
  ['corolla'],
  ['camaro']
];

// Help with inference when extracting values
const firstCar = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100); // Error

// Help with 'map'
carMakers.map((car:string): string => {
  return car.toUpperCase();
})