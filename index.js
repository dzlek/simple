var Alphabet = {
  BINARY: "01",
  OCTAL: "01234567",
  DECIMAL: "0123456789",
  HEXA_DECIMAL: "0123456789abcdef",
  ALPHA_LOWER: "abcdefghijklmnopqrstuvwxyz",
  ALPHA_UPPER: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  ALPHA: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  ALPHA_NUMERIC:
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
};

var bin = Alphabet.BINARY,
  oct = Alphabet.OCTAL,
  dec = Alphabet.DECIMAL,
  hex = Alphabet.HEXA_DECIMAL,
  allow = Alphabet.ALPHA_LOWER,
  alup = Alphabet.ALPHA_UPPER,
  alpha = Alphabet.ALPHA,
  alnum = Alphabet.ALPHA_NUMERIC;

function convert(input, source, target) {
  function fromInputTo10(input, source) {
    let res = 0;
    for (let i = 0; i < input.length; i++) {
      res = res * source.length + source.indexOf(input[i]);
    }
    return res;
  }

  function from10ToTarget(value, target) {
    if (value === 0) return target[0];
    let base = target.length;
    let res = "";
    while (value > 0) {
      res = target[value % base] + res;
      value = Math.floor(value / base);
    }
    return res;
  }

  const base10Value = fromInputTo10(input, source);

  console.log("return " + from10ToTarget(base10Value, target));
}

convert("15", dec, oct);
