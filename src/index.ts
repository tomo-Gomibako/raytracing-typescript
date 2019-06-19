import Vector3 from "./modules/Vector3"

const v1 = new Vector3(1, 2, 3)
const v2 = new Vector3(3, 5, 7)
// const v2 = { x: 3, y: 5, z: 7 }

console.log(v1.tos())
console.log(v1.multiply(2).tos())
console.log(v1.dot(v2))
