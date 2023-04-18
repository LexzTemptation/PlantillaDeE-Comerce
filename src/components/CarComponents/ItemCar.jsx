/* import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'; */

function ItemCar({data})
{
    console.log(data)

    return(
        <div>
            <div class="card mb-3" style={{ maxWidth: '540px' }}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="..." class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Título de la tarjeta</h5>
                            <p class="card-text">Esta es una tarjeta más amplia con texto de apoyo a continuación como introducción natural a contenido adicional. Este contenido es un poco más largo.</p>
                            <p class="card-text"><small class="text-muted">Última actualización hace 3 minutos</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCar




