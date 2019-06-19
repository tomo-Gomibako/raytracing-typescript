import Vector3 from "./modules/Vector3"

const v1 = new Vector3(1, 2, 3)
const v2 = new Vector3(3, 5, 7)

console.log(v1.tos())
console.log(v2.tos())

console.log(v1.normalized.tos())
console.log(v1.normalized.norm)

console.log(v1.add(v2).tos())

console.log(v1.subtract(v2).tos())

console.log(v1.multiply(v2).tos())
console.log(v1.multiply(2).tos())

console.log(v1.devide(v2).tos())
console.log(v1.devide(2).tos())

console.log(v1.dot(v2))
console.log(v1.cross(v2))
console.log(v1.sq_magnitude())
console.log(v1.magnitude())
console.log(v1.normalize())
console.log(v1.equals(new Vector3(1, 2, 3)))
console.log(v1.equals(v2))
