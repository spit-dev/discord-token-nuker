class Color {
  static get list() {
    return [
      { color: 'red', code: '\u001b[31;1m' },
      { color: 'green', code: '\u001b[32;1m' },
      { color: 'reset', code: '\u001b[37;1m' }
    ];
  };

  static get banner() {
    return this.list[0].code + `============================
TOKEN NUKER MADE BY CHEW-DEV
============================
`;
  };

  static style(number, symbol = '>') {
    const color = this.list[number].code;
    return `  ${color}[${this.list[2].code + symbol + color}] `;
  };

  static log(string = '', symbol = 'LOG:', index = 1) {
    console.log(
      this.style(index, symbol) + string + this.list[2].code
    );

    return;
  };

  static get options() {
    return [
      'Nukear',
      'Informacion',
    ];
  };
};

module.exports.Color = Color;
