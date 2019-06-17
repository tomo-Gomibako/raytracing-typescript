import { addListener } from "cluster";

class Vector3 {
	x: number
	y: number
	z: number
	constructor(x: number, y: number, z: number) {
		this.x = x
		this.y = y
		this.z = z
	}
	get normalized(): number {
		return 0
	}
	get norm(): number {
		return 0
	}
	tos(): string {
		return `Vector3(${ this.x }, ${ this.y }, ${ this.z })`
	}
	multiply(val: Vector3): Vector3
	multiply(val: number): Vector3
	multiply(val: any): Vector3 {
		if(val instanceof Vector3) {
			return new Vector3(this.x * val.x, this.y * val.y, this.z * val.z)
		} else if(typeof val === "number") {
			return new Vector3(this.x * val, this.y * val, this.z * val)
		} else {
			throw new Error(`An argument must be number or vector3.`)
		}
	}
	dot(vec: Vector3): number {
		return this.x * vec.x + this.y * vec.y + this.z * vec.z
	}
}

/*
getters:
	normalized
	norm

methods:
	tos
	dot
	cross
	sq_magnitude
	magnitude
	normalize
	equals
*/

module.exports = Vector3
