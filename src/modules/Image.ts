import path from "path"
import fs from "fs"
import { promisify } from "util"

const writeFile = promisify(fs.writeFile)
const access = promisify(fs.access)
const mkdir = promisify(fs.mkdir)

export default {
	async output<T>(array: T[][], f: (v: T) => Uint8Array, dir: string) {
		const width = array[0].length
		const height = array.length
		const dirpath = `${ path.resolve(__dirname, "../", dir) }`
		const filepath = `${ dirpath }/${ dateStr(new Date()) }.ppm`
		let data = ""
		data += "P3\n"
		data += width
		data += " "
		data += height
		data += "\n"
		data += "255\n"
		for(const i in array) {
			for(let j in array[i]) {
				for(let k = 0; k < 3; k++) {
					if(k) {
						data += " "
					}
					data += f(array[i][j])[k]
				}
				data += "\n"
			}
		}
		await access(dirpath).catch((e) => {
			mkdir(dirpath)
		})
		await writeFile(filepath, data).catch((e) => {
			throw e
		})
	}
}

function dateStr(date: Date): string {
	return `${ date.getFullYear() }-${ date.getMonth() + 1 }-${ date.getDate() }_${ date.getHours() }-${ date.getMinutes() }-${ date.getSeconds() }-${ date.getMilliseconds() }`
}
