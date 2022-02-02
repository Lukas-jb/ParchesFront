import actionsTypesEditarParche from './actionsTypes/ActionsTypeEditarParche'
import axios from 'axios'

const URL_API_PUT = 'https://el-parche.herokuapp.com/parches/editar'

export function actualizarParche (
  id,
  uId,
  nombreParche,
  descripcionParche,
  fechaCreacion,
  fechaParche,
  horaParche,
  fechaFin,
  horaFin,
  estado,
  categoria,
  cupoMaximo,
  position
) {
  // Body JSON para enviar al PUT en backend
  const parche = {
    id: id,
    duenoDelParche: uId,
    nombreParche: nombreParche,
    descripcion: descripcionParche,
    fechaCreacion: fechaCreacion,
    fechaInicio: `${fechaParche}T${horaParche}:00.00`,
    fechaFin: `${fechaFin}T${horaFin}:00.00`,
    estado: estado,
    categoria: categoria,
    capacidadMaxima: cupoMaximo,
    ubicacionParche: position
  }

  // Peticion de envio al servidor:
  return dispatch => {
    axios.put(URL_API_PUT, parche)
      .then(function (response) {
        dispatch(editarParche(response.data))
      })
      .catch(function (error) {
        dispatch(editarParcheError(error))
      })
  }
}

export const editarParche = (parche) => {
  return {
    type: actionsTypesEditarParche.LOAD_SUCCESS_EDITAR_PARCHE,
    payload: parche
  }
}

export const editarParcheError = (error) => {
  return {
    type: actionsTypesEditarParche.LOAD_FAILURE_EDITAR_PARCHE,
    payload: error
  }
}

export const editarParcheLoading = () => {
  return {
    type: actionsTypesEditarParche.LOADING_EDITAR_PARCHE
  }
}