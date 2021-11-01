const toys = [
  {
    id: 1,
    name: "robotTrex",
    cost: 200,
    materials: "plastic",
    height: 24,
    width: 16,
    weight: 16,
    color: "black",
    ageAppropriate: 12,
    type: "robot",
  },

  {
    id: 2,
    name: "easyBakeOven",
    cost: 75,
    materials: "aluminum",
    height: 8,
    width: 14,
    weight: 120,
    color: "purple",
    ageAppropriate: 8,
    type: "kitchen",
  },

  {
    id: 3,
    name: "sillyPutty",
    cost: 2,
    materials: "plastic",
    height: 1,
    width: 2,
    weight: 4,
    color: "yellow",
    ageAppropriate: 6,
    type: "classic",
  },
];

const slinkyToy = {
  id: 4,
  name: "slinky",
  cost: 5,
  materials: "metal",
  height: 4,
  width: 6,
  weight: 8,
  color: "limeGreen",
  ageAppropriate: 5,
  type: "classic",
};

toys.push(slinkyToy);

const basketball = {
  id: 5,
  name: "basketball",
  cost: 15,
  materials: "rubber",
  height: 11,
  width: 7,
  weight: 3.5,
  color: "orange",
  ageAppropriate: 8,
  type: "ball",
};

toys.push(basketball);

for (const toy of toys) {
  console.log(`The ${toy.color} ${toy.name} costs ${toy.cost}.`);
}

for (const toy of toys) {
  toy.cost = toy.cost * 1.05;

  console.log(
    `The ${toy.color} ${toy.name} costs ${toy.cost} and weighs ${toy.weight} ounces.`
  );
}
