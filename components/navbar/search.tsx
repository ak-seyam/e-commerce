// getting stuff
export default function search(searchTerm: string) {
    if (searchTerm.length === 0) return []
    const searchValues = ["Mobile", "T-Shirt", "Sunglasses", "Umbrella", "Football"]
    const result = searchValues.filter(value => {
        if (value.toLowerCase().search(searchTerm.toLowerCase())!== -1) {
            return value
        }
    })
    return result
}