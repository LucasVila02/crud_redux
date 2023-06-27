import React from 'react'
import {  useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


//redux
import { useDispatch } from 'react-redux';
import { borrarProductoAction, obtenerProductoEditar } from '../actions/productoActions';
const Producto = ({producto}) => {

  const navigate = useNavigate()

  const dispatch = useDispatch()

  //confirmar si desea eliminar
  const confirmarEliminarProducto = id => {
    //preguntar al usuario 
    Swal.fire({
      title: 'Estas Seguro?',
      text: "Un producto que se elimina no se puede recuperar!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {

        //pasar al action
        dispatch(borrarProductoAction(id))

       
      }
    })
  }

  //funciona que  redireciona de forma programada

  const redireccionarEdicion = producto =>{
    dispatch(obtenerProductoEditar(producto))
    navigate(`/productos/editar/${producto.id}`)
  }

  const {nombre, precio , id} = producto

  return ( 
    <tr>
      <td>{nombre}</td>
      <td><span className='font-weight-bold'>$ {precio}</span></td>
      <td className='acciones '>
        <button 
          type='button'
          onClick={() => redireccionarEdicion(producto)}
           className='btn btn-primary mr-2'>
          Editar
        </button>

        <button
          type='button'
          className='btn btn-danger'
          onClick={() => confirmarEliminarProducto(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
}
 
export default Producto;