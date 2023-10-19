import { useEffect, useState } from 'react';
import axios from 'axios';

const Calculadora = () => {

    // -------------------------------------------------------------
    // Estas se mostraran
    // -------------------------------------------------------------
    const [showVar, setShowVar] = useState([]);


    // -------------------------------------------------------------
    // Seran input
    // -------------------------------------------------------------
    const [inputVar, setInputVar] = useState(0);
    const [inputVarDelete, setInputVarDelete] = useState(0);


    const setVariableShow = (event) => {
        setShowVar(event.target.value);
    }

    // -------------------------------------------------------------
    // crea las variables
    // -------------------------------------------------------------
    const createVariable = async () => {

        var newVariable = {
            name: inputVar,
        }

        if (newVariable.name === 0) {
            alert("Debe digitar todos los datos.");

        } else {

            const serviceUrl = `http://localhost:8080/app`;
            let config = {
                headers: {
                    "Content-Type": "application/json"

                }
            };

            axios.post(serviceUrl, newVariable, config) //then es usando promises, se puede asignar a una variable si quiere sin promises
                .then(response => {
                    alert("Agregado con exito")
                    selectVariables();
                });
        }
    };

    // -------------------------------------------------------------
    // borra una variables
    // -------------------------------------------------------------
    const deleteVariable = async () => {
        const serviceUrl = `http://localhost:8080/app/`;
        try {
            const response = await axios.delete(serviceUrl + inputVarDelete);
            alert("Borrado con éxito");
            selectVariables();
        } catch (error) {
            if (error.response) {
                // La solicitud fue realizada pero el servidor respondió con un código de error
                console.error("Error en la respuesta del servidor:", error.response.data);
                alert("Error: No se pudo borrar la variable.");
            } else if (error.request) {
                // La solicitud se hizo pero no se recibió respuesta
                console.error("No se recibió respuesta del servidor:", error.request);
                alert("Error: No se pudo conectar al servidor.");
            } else {
                // Un error ocurrió durante la configuración de la solicitud
                console.error("Error durante la configuración de la solicitud:", error.message);
                alert("Error: Ocurrió un problema durante la solicitud.");
            }
        }
    }

    // -------------------------------------------------------------
    // seleciona las variables
    // -------------------------------------------------------------
    const selectVariables = async () => {
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
                    return <li key={item.id}>{item.id}, Nombre: {item.name}</li>
                });
                setShowVar(varList);

            } else {
                setShowVar(<h2>No hay datos</h2>);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }


    // -------------------------------------------------------------
    // llama selectVariables cada vez que carga la pantalla
    // -------------------------------------------------------------
    useEffect(() => {
        selectVariables();
    }, []); // El segundo argumento vacío asegura que se llame solo una vez al cargar la página


    return (
        <div className="container mt-5">
            <h1 className="mb-4">Calculadora</h1>

            <div className="mb-4">
                {showVar}
            </div>

            <div className="input-group mb-4">
                <input
                    type="text"
                    className="form-control"
                    value={inputVar}
                    onChange={(e) => setInputVar(e.target.value)}
                />
                <div className="input-group-append">
                    <button className="btn btn-primary" type="button" onClick={createVariable}>
                        Crear Variable
                    </button>
                </div>
            </div>

            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    value={inputVarDelete}
                    onChange={(e) => setInputVarDelete(e.target.value)}
                />
                <button className="btn btn-danger" type="button" onClick={deleteVariable}>
                    Borrar Variable
                </button>
            </div>
        </div>
    );
}
export default Calculadora;