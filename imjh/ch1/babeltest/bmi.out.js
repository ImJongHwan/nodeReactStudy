'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BMI = function () {
  function BMI(height, weight) {
    _classCallCheck(this, BMI);

    this.height = height;
    this.weight = weight;
    this.bmi = this.calc();
  }

  _createClass(BMI, [{
    key: 'calc',
    value: function calc() {
      var heightM = this.height / 100;
      return this.weight / heightM ** 2;
    }
  }, {
    key: 'print',
    value: function print() {
      var res = '표준';
      if (this.bmi >= 25) res = '비만';else if (this.bmi >= 18.5) res = '표준';else res = '저체중';
      console.log('BMI =', this.bmi, res);
    }
  }]);

  return BMI;
}();

var bmi = new BMI(160, 60);
bmi.print();

//# sourceMappingURL=bmi.out.js.map