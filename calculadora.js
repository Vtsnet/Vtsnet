const somar = (req, res) => {
    const {num1, num2} = req.query

    if (!isNaN(Number(num1)) && !isNaN(Number(num2))) {
        return res.send(`${Number(num1) + Number(num2)}`);
    }

    return res.send(`Numeros invalidos`);
}
const subtrair = (req, res) => {
    const {num1, num2} = req.query

    if (!isNaN(Number(num1)) && !isNaN(Number(num2))) {

        return res.send(`${num1 - num2}`);
    }
    return res.send(`Numeros invalidos`);
}
const multiplicar = (req, res) => {
    const {num1, num2} = req.query

    if (!isNaN(Number(num1)) && !isNaN(Number(num2))) {

        return res.send(`${num1 * num2}`);
    }
    return res.send(`Numeros invalidos`);
}
const dividir = (req, res) => {
    const {num1, num2} = req.query

    if (!isNaN(Number(num1)) && !isNaN(Number(num2))) {

        return res.send(`${num1 / num2}`);
    }
    return res.send(`Numeros invalidos`);
}

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
}
   