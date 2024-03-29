import {
  OCULTAR_ALERTA,
  MOSTRAR_ALERTA

} from  '../types'

//muesta un alerta

export  function mostrarAlerta(alerta){
  return(dispatch) => {
      dispatch(crearAlerta(alerta))
  }
}

const crearAlerta = alerta =>({
  type: MOSTRAR_ALERTA,
  payload: alerta
})

export  function ocultarAlertaAction(){
  return(dispatch) =>{
    dispatch(ocultarAlerta())
  }
}

const ocultarAlerta = () => ({
  type: OCULTAR_ALERTA,
  payload: null
})