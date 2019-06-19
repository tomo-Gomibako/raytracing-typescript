class Vector3 {
	x: number
	y: number
	z: number
	constructor(x: number, y: number, z: number) {
		this.x = x
		this.y = y
		this.z = z
	}
	get normalized(): Vector3 {
		return this.normalize()
	}
	get norm(): number {
		return this.magnitude()
	}
	tos(): string {
		return `Vector3(${ this.x }, ${ this.y }, ${ this.z })`
	}
	add(vec: Vector3): Vector3 {
		return new Vector3(this.x + vec.x, this.y + vec.y, this.z + vec.z)
	}
	subtract(vec: Vector3): Vector3 {
		return new Vector3(this.x - vec.x, this.y - vec.y, this.z - vec.z)
	}
	multiply(val: Vector3): Vector3
	multiply(val: number): Vector3
	multiply(val: any): Vector3 {
		if(val instanceof Vector3) {
			return new Vector3(this.x * val.x, this.y * val.y, this.z * val.z)
		} else if(typeof val === "number") {
			return new Vector3(this.x * val, this.y * val, this.z * val)
		} else {
			throw new Error("An argument must be number or vector3.")
		}
	}
	devide(val: Vector3): Vector3
	devide(val: number): Vector3
	devide(val: any): Vector3 {
		if(val instanceof Vector3) {
			return new Vector3(this.x / val.x, this.y / val.y, this.z / val.z)
		} else if(typeof val === "number") {
			return new Vector3(this.x / val, this.y / val, this.z / val)
		} else {
			throw new Error("An argument must be number or vector3.")
		}
	}
	dot(vec: Vector3): number {
		return this.x * vec.x + this.y * vec.y + this.z * vec.z
	}
	cross(vec: Vector3): Vector3 {
		return new Vector3(
			this.y * vec.z + this.z * vec.y,
			this.z * vec.x + this.x * vec.z,
			this.x * vec.y + this.y * vec.x
		)
	}
	sq_magnitude(): number {
		return this.dot(this)
	}
	magnitude(): number {
		return Math.sqrt(this.sq_magnitude())
	}
	normalize(): Vector3 {
		const mag: number = this.magnitude()
		return new Vector3(this.x / mag, this.y / mag, this.z / mag)
	}
	equals(vec: Vector3): boolean {
		if(this.x == vec.x && this.y == vec.y && this.z == vec.z) {
			return true
		} else {
			return false
		}
	}
}

export default Vector3
