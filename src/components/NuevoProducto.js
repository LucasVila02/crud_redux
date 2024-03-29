import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

//actions de redux
import {crearNuevoProcuctoAction} from '../actions/productoActions'
import { mostrarAlerta, ocultarAlertaAction} from '../actions/alertaActions'

const NuevoProducto = () => {

  const navigate = useNavigate()

  //State del componente
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState(0);

  //utilizar use dispath y te crea una funcion
  const dispatch = useDispatch()

  //acceder al state del store
  const cargando = useSelector( state => state.productos.loading)
  const error =  useSelector(state => state.productos.error)
  const alerta = useSelector(state => state.alerta.alerta)

  console.log(cargando)

  //mandar a llamar el action de productoACtion
  const agregarProducto = producto => dispatch(crearNuevoProcuctoAction(producto))


  //cuando el usuario haga submit
  const submitNuevoProducto = e => {
    e.preventDefault()

    //validar formulario
    if(nombre.trim() === '' || precio <= 0 ){

      const alerta = {
        msg: 'Ambos campos son obligatorios',
        classes: 'alert alert-danger text-center text-uppercase p3'
      }
      dispatch(mostrarAlerta(alerta))
      return;
    }

    //si no hay errores
    dispatch(ocultarAlertaAction())

    //crear el nuevo producto
    agregarProducto({
      nombre,
      precio
    })

    setTimeout(() => {
      navigate('/')
    }, 2000);
  }
  return ( 
    <div className='row justify-content-center'>
      <div className='col-md-8'>
        <div className='card'>
          <div className='card-body'>
            <h2 className='text-center mb-4 font-weight-bold'>
              Agregar Nuevo producto
            </h2>
            {alerta ? <p className={alerta.classes}>{alerta.msg}</p>: null}

            <form
              onSubmit={ submitNuevoProducto}
            >
              <div className='form-group'>
                <label>Nombre Producto</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Nombre Producto'
                  name='nombre'
                  value={nombre}
                  onChange={ e => setNombre(e.target.value)}
                />
              </div>

              <div className='form-group'>
                <label>Precio Producto</label>
                <input
                  type='number'
                  className='form-control'
                  placeholder='Precio Producto'
                  name='Precio'
                  value={precio}
                  onChange={ e => setPrecio(Number(e.target.value))}
                />
              </div>

              <button
                type='submit'
                className='btn btn-primary font-weight-bold text-uppercase d-block w-100'
              >
                Agregar
              </button>

            </form>

            {cargando ? <p>Cargando...</p>: null}
            {error ? <p className='alert alert-danger p-2 mt-4 text-center text-uppercase font-weight-bold '>Hubo un error</p> : null }

          </div>
        </div>
      </div>
    </div>
   );
}
 
export default NuevoProducto ;