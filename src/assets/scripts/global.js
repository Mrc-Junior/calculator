function calc(tipo, valor) {
  if(tipo === 'action') {
    if(valor === 'clear') {
      document.getElementById('result').value = '';
    }

    if (  // Verificação nos operadores aritiméticos
      valor === "+" ||
      valor === "-" ||
      valor === "/" ||
      valor === "%" ||
      valor === "*"
    ) {
      document.getElementById('result').value += valor
    }
    if(valor === "=") {
      const camp_value = eval(document.getElementById("result").value);
      document.getElementById('result').value = camp_value;
    }
  } else if(tipo === 'value') {
    document.getElementById("result").value += valor;
  }
}
