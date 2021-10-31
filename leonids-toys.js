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

for (const toy of toys) {
  console.log(toy.cost);
}

for (const toy of toys) {
  console.log(toy.materials);
}

for (const toy of toys) {
  console.log(toy.height);
}

for (const toy of toys) {
  console.log(toy.width);
}

for (const toy of toys) {
  console.log(toy.weight);
}

for (const toy of toys) {
  console.log(toy.ageAppropriate);
}

for (const toy of toys) {
  console.log(toy.type);
}
