
class BMI {
  constructor (height, weight) {
    this.height = height
    this.weight = weight
    this.bmi = this.calc()
  }

  calc() {
    const heightM = this.height / 100
    return this.weight / (heightM ** 2)
  }

  pront() {
    let res = '표준'
    if (this.bmi >= 25) res = '비만'
    else if (this.bmi >= 18.50) res = '표준'
    else res = '저체중'
    console.log('BMI =', this.bmi, res)
  }
}

const bmi = new BMI(160, 60)
bmi.pront()
