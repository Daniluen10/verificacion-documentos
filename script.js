async function verificar() {
  const codigo = document.getElementById("codigo").value.trim();
  const resultado = document.getElementById("resultado");

  const res = await fetch("data.json");
  const data = await res.json();

  if (data[codigo] && data[codigo].estado === "valido") {
    resultado.innerHTML = `
      ✅ Documento auténtico<br>
      <a href="${data[codigo].certificado}" download>
        Descargar certificado
      </a>
    `;
  } else {
    resultado.innerHTML = "❌ Código no válido";
  }
}
