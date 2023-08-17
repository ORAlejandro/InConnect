import './Internet.css'

const Internet = ({velocidad1, velocidad2, velocidad3, precio1, precio2, precio3, tarjetaPromocion, costoInstalacion}) => {
  return (
    <>
      <h2 className='titulo-internet'>Accedé a la mejor velocidad de Internet</h2>
      <section className='contenedor-planes'>

        <div className='contenedor-plan'>
          <h3 className='plan-internet'>Internet {velocidad1} MB</h3>
          <p className='precio-actual'>Precio actual ${precio1}</p>
          <p className='precio-anterior'>De ${precio1 * 1.2}</p>
          <ul className='listado-beneficios-planes'>
            <li className='beneficios-planes'>Velocidad de descarga de hasta {velocidad1} Megas</li>
            <li className='beneficios-planes'>Hasta 20% de descuento pagando con {tarjetaPromocion}</li>
            <li className='beneficios-planes'>Costo de instalacion: {costoInstalacion}</li>
          </ul>
          <button className='buton-lo-quiero'>¡Lo quiero!</button>
        </div>

        <div className='contenedor-plan'>
          <h3 className='plan-internet'>Internet {velocidad2} MB</h3>
          <p className='precio-actual'>Precio actual ${precio2}</p>
          <p className='precio-anterior'>De ${precio2 * 1.2}</p>
          <ul className='listado-beneficios-planes'>
            <li className='beneficios-planes'>Velocidad de descarga de hasta {velocidad2} Megas</li>
            <li className='beneficios-planes'>Hasta 20% de descuento pagando con {tarjetaPromocion}</li>
            <li className='beneficios-planes'>Costo de instalacion: {costoInstalacion}</li>
          </ul>
          <button className='buton-lo-quiero'>¡Lo quiero!</button>
        </div>

        <div className='contenedor-plan'>
          <h3 className='plan-internet'>Internet {velocidad3} MB</h3>
          <p className='precio-actual'>Precio actual ${precio3}</p>
          <p className='precio-anterior'>De ${precio3 * 1.2}</p>
          <ul className='listado-beneficios-planes'>
            <li className='beneficios-planes'>Velocidad de descarga de hasta {velocidad3} Megas</li>
            <li className='beneficios-planes'>Hasta 20% de descuento pagando con {tarjetaPromocion}</li>
            <li className='beneficios-planes'>Costo de instalacion: {costoInstalacion}</li>
          </ul>
          <button className='buton-lo-quiero'>¡Lo quiero!</button>
        </div>
      </section>
    </>
  )
}

export default Internet