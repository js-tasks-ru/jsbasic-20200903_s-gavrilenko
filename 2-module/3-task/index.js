let calculator = {
  a: 0,
  b: 0,
  read(a, b) {
    this.a = a;
    this.b = b;
  },
  sum() {
    let result = this.a + this.b;
    return result;
  },
  mul() {
    let result = this.a * this.b;
    return result;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
