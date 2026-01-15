function generarCertificado() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const codigo = document.getElementById("codigo").value.trim();
  const emisor = document.getElementById("emisor").value.trim();
  const fecha = document.getElementById("fecha").value;

  if(!codigo || !emisor || !fecha){
    alert("Rellena todos los campos");
    return;
  }

  doc.setFontSize(22);
  doc.text("CERTIFICADO DE AUTENTICIDAD", 105, 30, null, null, "center");

  doc.setFontSize(14);
  doc.text(`Este documento demuestra que el emisor ha firmado`, 105, 50, null, null, "center");
  doc.text(`el documento con código: ${codigo}`, 105, 60, null, null, "center");

  doc.text(`Fecha: ${fecha}`, 105, 90, null, null, "center");
  doc.text(`Emisor: ${emisor}`, 105, 100, null, null, "center");

  doc.save(`cert_${codigo}.pdf`);
  document.getElementById("mensaje").innerText = "Certificado generado!";
}
