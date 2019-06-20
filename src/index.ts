import Vector3 from "./modules/Vector3"
import Image from "./modules/Image"
import Convert from "./modules/Convert"

const a = [
	[new Vector3(0.5, 0.75, 0.25), new Vector3(0.75, 0.5, 0.25), new Vector3(0.5, 0.75, 0.25)],
	[new Vector3(0.75, 0.5, 0.25), new Vector3(0.5, 0.75, 0.25), new Vector3(0.75, 0.5, 0.25)],
	[new Vector3(0.5, 0.75, 0.25), new Vector3(0.75, 0.5, 0.25), new Vector3(0.5, 0.75, 0.25)]
]

Image.output(a, Convert.vector3ToUint8Array, "./output")
