//import useAddShoppingCar from "../Hooks/useAddShoppingCar"
import "./DetailesVideoGame.css"
import Carousel from 'react-bootstrap/Carousel';
import Button from "react-bootstrap/Button"
import { Col, Row } from "react-bootstrap";



function DetailesVideoGame({dataDatail, setAccion}){ 

    let {genero} = dataDatail
    let {clasificacion} = dataDatail
    let {trailer} =dataDatail
    let {titulo,plataforma,descripcion,precio,garantia,publicador,lanzamiento} = dataDatail["producto"]
    let foto1 = dataDatail["producto"]["listaFotos"][0].foto
    let foto2 = dataDatail["producto"]["listaFotos"][1].foto
    let foto3 = dataDatail["producto"]["listaFotos"][2].foto


    const handlerSetAccion = () => {
        setAccion("products")
    }

    const handlerBuy = async () => {
        
        let dataBuy = {
            "idCarrito": 0,
            "fecha": "25/03/2023",
            "idcliente": 2,
            "idProducto": 9
        }

        //let res = await fetch("http://localhost:8080/shopping/addShoppingCar")

        //console.log(res);  
    } 

    return (
        <div className="w">
            <p onClick={handlerSetAccion}>Regresar</p>


          <div className="containerProduct">
            
                <Row className="rowProduct">
                      <Col sm={5}>
                      <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="img-fluid"
          src={foto1}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-fluid"
          src={foto2}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-fluid"
          src={foto3}
        />
      </Carousel.Item>
      </Carousel>
                      </Col>

                     
<Col sm={5}>
    <div className="title">
        <div className="details">
                <strong><p className="game">{titulo}</p></strong>
                <div className="subtitle">
                 <span>
                    <strong>Plataforma: </strong><p>{plataforma}</p>
                 </span>
                 <span>
                    <strong>Género: </strong><p>{genero}</p>
                 </span>
                 <span>
                    <strong>Clasificación: </strong><p>{clasificacion}</p>
                 </span>
                </div>
                <div className="small"></div>
                
        </div>
                <h4 className="text-dark">Precio: </h4>
                <h4 className="text-dark"><small>$</small>{precio}</h4>
                <div className="d-grid gap-2">
      <Button variant="outline-primary" size="lg" onClick={handlerBuy}>Agregar al carrito</Button>
    </div>
            
    </div>
             
             </Col>
             
          </Row>

          <Row className="justify-content-md-center textDetails">
        <Col sm={8}>
            <h5>Descripción</h5>
                     <p>{descripcion}</p>
            <h5>Información adicional:</h5>
            <h6>Garantía valida por:</h6>
            <p>{garantia}</p>
            <h6>Publicado por:</h6>
            <p>{publicador}</p>
            <h6>Lanzamiento:</h6>
            <p>{lanzamiento}</p>
            <div className="small"></div><br></br>
            <div className="video">
            <iframe width="560" height="315" 
            src={trailer} 
            title="YouTube video player"
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen></iframe>
            </div>
                 </Col>
      </Row>
              
          </div>
          </div>
        
    )
}

export default DetailesVideoGame