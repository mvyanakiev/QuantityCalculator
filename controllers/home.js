const Calculator = require('../models/Calculator');

module.exports = {
    indexGet: (req, res) => {
        res.render('home/index');
    },
    indexPost: (req, res) => {
        let calculatorBody = req.body;

        let calculatorParams = calculatorBody['calculator'];

        let calculator = new Calculator();
        calculator.quantity = Number(calculatorParams.quantity);
        calculator.leftOperand = Number(calculatorParams.leftOperand);
        calculator.rightOperand = Number(calculatorParams.rightOperand);
        calculator.bleed = Number(calculatorParams.bleed);

        if (calculator.bleed < 0) {
            calculator.bleed = 0;
        }

        let result = calculator.calculateResult();
        // let chislo = 34;

        res.render('home/index', {'calculator': calculator, 'result': result});

    }
};