function Calculator(quantity, leftOperand, rightOperand, bleed) {
    this.quantity = quantity;
    this.leftOperand = leftOperand;
    this.rightOperand = rightOperand;
    this.bleed = bleed;

    let printAreaWidth = 305;
    let printAreaHeight = 470;

    this.calculateResult = function () {
        let result = 0;
        let finalWidth = (this.bleed * 2) + this.leftOperand;
        let finalHeight = (this.bleed * 2) + this.rightOperand;

        let a1 = Math.trunc(printAreaHeight / finalHeight);
        let b1 = Math.trunc(printAreaWidth / finalWidth);
        let c1 = this.quantity / (a1 * b1);

        let a2 = Math.trunc(printAreaHeight / finalWidth);
        let b2 = Math.trunc(printAreaWidth / finalHeight);
        let c2 = this.quantity / (a2 * b2);

        result = Math.round(Math.min(c1, c2)) ;
        return result;
    };
}
module.exports = Calculator;