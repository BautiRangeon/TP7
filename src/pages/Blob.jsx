import { useState } from "react";

const PaginaBlob = () => {
  const [blob, setBlob] = useState(null);

  const crearBlob = () => {
    const texto = "Ejemplo de archivo creado con Blob";

    const nuevoBlob = new Blob([texto], {
      type: "text/plain",
    });

    setBlob(nuevoBlob);
    alert("Blob creado correctamente");
  };

  const descargarBlob = () => {
    if (!blob) return;

    const url = URL.createObjectURL(blob);

    const enlace = document.createElement("a");
    enlace.href = url;
    enlace.download = "archivo.txt";
    enlace.click();

    URL.revokeObjectURL(url);
  };

  const usarSlice = () => {
    if (!blob) return;

    const nuevoBlob = blob.slice(0, 10);

    setBlob(nuevoBlob);
    alert("Slice aplicado correctamente");
  };

  return (
    <main className="contenedor">
      <div className="tarjeta">
        <h1>Ejemplo de uso de Blobs</h1>

        <p className="descripcion">
          Crear, descargar y modificar archivos utilizando Blob
        </p>

        <div className="botones">
          <button onClick={crearBlob}>
            Crear Blob de Texto
          </button>

          <button onClick={descargarBlob}>
            Descargar Blob
          </button>

          <button onClick={usarSlice}>
            Usar slice
          </button>
        </div>
      </div>
    </main>
  );
};

export default PaginaBlob;