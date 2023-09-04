import { dateFormat } from '../helpers';
import {LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions} from 'react-swipeable-list';
import "react-swipeable-list/dist/styles.css";
import { Iconos } from './../img/index';

const diccionarioIconos = {
  ahorro: Iconos.IconoAhorro,
  comida: Iconos.IconoComida,
  casa: Iconos.IconoCasa,
  gastos: Iconos.IconoGastos,
  ocio: Iconos.IconoOcio,
  salud: Iconos.IconoSalud,
  suscripciones: Iconos.IconoSuscripciones
}

export const Gasto = ({gasto,setGastoEditar, eliminarGasto}) => {
  const {categoria, nombre, cantidad, id, fecha} = gasto;

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setGastoEditar(gasto)}>
        Editar
      </SwipeAction>
    </LeadingActions>
  )
  
  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => eliminarGasto(id)}
        destructive={true}
      >
        Eliminar
      </SwipeAction>
    </TrailingActions>
  )
  


  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className='gasto sombra'>
          <div className='contenido-gasto'>
            <img 
              src={diccionarioIconos[categoria]}
              alt="Icono gasto"
              />
            <div className='descripcion-gasto'>
              <p className='categoria'>{categoria}</p>
              <p className='nombre-gasto'>{nombre}</p>
              <p className='fecha-gasto'>Agregado el: {''}
                <span>{dateFormat(fecha)}</span>
              </p>
            </div>
          </div>

          <p className='cantidad-gasto'>${cantidad}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}
