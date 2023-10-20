import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";

const Galery = () => {
  // -------------------------------------------------------------
  // Estas se mostraran en el HTML
  // -------------------------------------------------------------
  const [showImages, setshowImages] = useState([]);

  // -------------------------------------------------------------
  // Seran input
  // -------------------------------------------------------------
  const [inputSearch, setinputSearch] = useState("");

  // -------------------------------------------------------------
  // Cada vez que carga la pantalla
  // -------------------------------------------------------------
  const navigate = useNavigate();

  useEffect(() => {
    selectImageBD();
  }, []);

  // -------------------------------------------------------------
  // selecciona todas las imagenes de la base de datos y las pinta en el browser
  // -------------------------------------------------------------
  const selectImageBD = async () => {
    const serviceUrl = "http://localhost:8080/image";
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      let response = await axios.get(serviceUrl, config);

      if (response.data.length > 0) {
        setshowImages(
          <div className="row">
            {response.data.map((item) => (
              <div key={item.id} className="col-md-4 mb-4">
                <img
                  src={item.url}
                  id={item.id}
                  alt={item.name}
                  className="img-gallery"
                  onClick={() => navigate(`/image/${item.id}`)}
                />
              </div>
            ))}
          </div>
        );
      } else {
        setshowImages(<h2>No hay ninguna imagen</h2>);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // -------------------------------------------------------------
  // selecciona todas las imagenes de la base de datos con un filtro de keysWords
  // -------------------------------------------------------------
  //   const selectImageToBDFilter = async () => {
  //     console.log(search);
  //     const serviceUrl = "http://localhost:8080/find/" + search;
  //     let config = {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     };
  //     let response = await axios.get(serviceUrl, config);

  //     if (response.data.length > 0) {
  //       let imagelist = response.data.map((item) => {
  //         return (
  //           <img
  //             key={item.id}
  //             src={item.url}
  //             id={item.id}
  //             onClick={() => navigate("/image" + "/" + item.id)}
  //           />
  //         );
  //       });
  //       setshowImages(imagelist);
  //     } else {
  //       setshowImages(<h2>No hay ninguna imagen que coincida</h2>);
  //     }
  //   };

  return (
    <div>
      <h1> Galería </h1>

      <input type="text" onChange={(e) => setinputSearch(e.target.value)} />
      {/* <button onClick={selectImageToBDFilter}>Buscar</button> */}

      <div className="container">{showImages}</div>

      <div>
        <button onClick={selectImageBD}>Cargar Imagenes</button>
      </div>

      <NotificationContainer />
    </div>
  );
};

export default Galery;
