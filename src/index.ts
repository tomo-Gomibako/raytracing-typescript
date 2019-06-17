const Vector3 = require("./modules/Vector3")

const v1 = new Vector3(1, 2, 3)
const v2 = new Vector3(3, 5, 7)
console.log(v1.tos())
console.log(v1.multiply(2).tos())
console.log(v1.dot(v2))
