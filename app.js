document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".btn-ver-pdf");
  const pdfViewer = document.getElementById("pdfViewer");
  const tituloPdf = document.getElementById("tituloPdf");
  const btnDescargarPdf = document.getElementById("btnDescargarPdf");

  // Diccionario de PDFs
  const pdfs = {
    informatica: "pdf/peritoInformatica.pdf",
    administracion: "pdf/peritoAdministracion.pdf",
    contador: "pdf/peritoContador.pdf",
    electronica: "pdf/peritoElectronica.pdf",
    mecanica: "pdf/peritoAutomotriz.pdf"
  };

  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      const carrera = boton.dataset.carrera;
      const nombre = boton.dataset.nombre;
      const rutaPdf = pdfs[carrera];
      document.getElementById("visor-pdf").style.display='none';
      if (!rutaPdf) {
        tituloPdf.textContent = "PDF no disponible";
        pdfViewer.src = "";
        btnDescargarPdf.href = "#";
        btnDescargarPdf.classList.add("disabled");
        return;
      }
    document.getElementById("visor-pdf").style.display='block';
      // Cambiar título
      tituloPdf.textContent = `Lista de útiles - ${nombre}`;

      // Cargar vista previa
      pdfViewer.src = rutaPdf;

      // Activar botón de descarga
      btnDescargarPdf.href = rutaPdf;
      btnDescargarPdf.setAttribute("download", `${carrera}.pdf`);
      btnDescargarPdf.classList.remove("disabled");

      // Desplazar al visor
      document.getElementById("visor-pdf").scrollIntoView({
        behavior: "smooth"
      });
    });

    
  });

});