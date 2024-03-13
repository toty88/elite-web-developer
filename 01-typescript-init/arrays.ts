(() => {
    const ages: number[] = [29, 28, 23, 26]
    const names : Array<string> = ['franco', 'Ati', 'Juanma', 'any']
    ages.push(32)
    ages.pop()
    const products : (string)[] = ['Remera','Short','Gorras', 'Pantuflas']
    products.forEach((product: string) => {
        console.log(product.toLowerCase())
    })

    const values: (string | number)[] = ["20",20,"Franco",50, NaN]
    // la salida de numberValues debe ser un numero
    const numberValues: number[] = values.map((value) => {
        if(typeof value === 'number') return value
        if(typeof value === 'string' && Number(value)) return +value // unary operator -> convierte a number
        return 0
    })

    console.log('numberValues', numberValues)





})()