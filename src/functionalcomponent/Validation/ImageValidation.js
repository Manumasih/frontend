export default function ImageValidation(event) {
    let { name, files } = event.target
    let size = []
    let type = []
    for (let index in files) {
        if (files[index].size && files[index].size > 1048576) {
            size.push(`Pic ${parseInt(index) + 1} size is larger then 1 mb`)
        }
        if (files[index].type == "" || files[index].type && files[index].type.split("/")[0] !== "image") {
            type.push(`Files ${parseInt(index) + 1} is not an image`)
        }

    }
    console.log();
    return size.concat(type)
}