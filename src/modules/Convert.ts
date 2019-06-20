// eslint-disable-next-line no-unused-vars
import Vector3 from "./Vector3"

const Convert = {
	numberToUint8(val: number): number {
		return (Math.min(Math.max(val, 0), 255))
	},
	vector3ToUint8Array(vec: Vector3): Uint8Array {
		const uint8 = new Uint8Array(3)
		const v = vec.multiply(255)
		uint8[0] = Convert.numberToUint8(v.x)
		uint8[1] = Convert.numberToUint8(v.y)
		uint8[2] = Convert.numberToUint8(v.z)
		return uint8
	}
}

export default Convert
