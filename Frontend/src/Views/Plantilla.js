import { useEffect, useState } from "react";
import axios from "axios";

const Plantilla = () => {
  // -------------------------------------------------------------
  // Estas se mostraran en el HTML
  // -------------------------------------------------------------
  const [showVariables, setshowVariables] = useState([]);

  // -------------------------------------------------------------
  // Seran input
  // -------------------------------------------------------------
  const [inputName, setinputName] = useState(0);
  const [inputNumber, setinputNumber] = useState(0);
  const [inputVarToDelete, setinputVarToDelete] = useState(0);

  // -------------------------------------------------------------
  // Handle
  // -------------------------------------------------------------
  const handleDelete = (id) => {
    setinputVarToDelete(id);
    deleteVariableBD();
  };

  // -------------------------------------------------------------
  // Cada vez que carga la pantalla
  // -------------------------------------------------------------
  useEffect(() => {
    selectVariablesBD();
  }, []); // El segundo argumento vacío asegura que se llame solo una vez al cargar la página

  // -------------------------------------------------------------
  // crea las variables
  // -------------------------------------------------------------
  const createVariableBD = async () => {
    var newVariable = {
      name: inputName,
      number: inputNumber,
    };

    if (newVariable.name === 0 || newVariable.number === 0) {
      alert("Debe digitar todos los datos.");
    } else {
      const serviceUrl = `http://localhost:8080/app`;
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      axios.post(serviceUrl, newVariable, config).then((response) => {
        alert("Agregado con exito");
        selectVariablesBD(); // para despues de crearlas las cargue en pantalla de forma automatica
      });
    }
  };

  // -------------------------------------------------------------
  // borra una variable
  // -------------------------------------------------------------
  const deleteVariableBD = async () => {
    const serviceUrl = `http://localhost:8080/app/`;
    try {
      const response = await axios.delete(serviceUrl + inputVarToDelete);
      alert("Borrado con éxito");
      selectVariablesBD();
    } catch (error) {
      if (error.response) {
        // La solicitud fue realizada pero el servidor respondió con un código de error
        console.error(
          "Error en la respuesta del servidor:",
          error.response.data
        );
        alert("Error: No se pudo borrar la variable.");
      } else if (error.request) {
        // La solicitud se hizo pero no se recibió respuesta
        console.error("No se recibió respuesta del servidor:", error.request);
        alert("Error: No se pudo conectar al servidor.");
      } else {
        // Un error ocurrió durante la configuración de la solicitud
        console.error(
          "Error durante la configuración de la solicitud:",
          error.message
        );
        alert("Error: Ocurrió un problema durante la solicitud.");
      }
    }
  };

  // -------------------------------------------------------------
  // seleciona las variables
  // -------------------------------------------------------------
  const selectVariablesBD = async () => {
    const serviceUrl = "http://localhost:8080/app";
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      let response = await axios.get(serviceUrl, config);

      if (response.data.length > 0) {
        let varList = response.data.map((item) => {
          return (
            <li key={item.id}>
              {item.id} Nombre: {item.name}, Numero: {item.number}
            </li>
          );
        });
        setshowVariables(varList);
      } else {
        setshowVariables(<h2>No hay datos</h2>);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Plantilla</h1>

      <div className="mb-4">{showVariables}</div>

      <div className="input-group mb-4">
        <input
          type="text"
          className="form-control"
          value={inputName}
          onChange={(e) => setinputName(e.target.value)}
        />
        <input
          type="number"
          className="form-control"
          value={inputNumber}
          onChange={(e) => setinputNumber(e.target.value)}
        />
        <div className="input-group-append">
          <button
            className="btn btn-primary"
            type="button"
            onClick={createVariableBD}
          >
            Crear Variable
          </button>
        </div>
      </div>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={inputVarToDelete}
          onChange={(e) => setinputVarToDelete(e.target.value)}
        />
        <button
          className="btn btn-danger"
          type="button"
          onClick={deleteVariableBD}
        >
          Borrar Variable
        </button>
      </div>
    </div>
  );
};
export default Plantilla;
