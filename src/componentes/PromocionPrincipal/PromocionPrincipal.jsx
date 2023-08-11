import './PromocionPrincipal.css'

const PromocionPrincipal = () => {
  return (
    <section className='contenedor-promocion'>
      <img className='img-promocion' src="../../public/promocion-principal.png" alt="Cohete volando desde una laptop" />
      <div className='contenedor-texto-promocion'>
        <h2 className='titulo-promocion'>La mayor velocidad</h2>
        <p className='descripcion'>Enlaza tus diferentes dispositivos y vive al máximo todas tus actividades con el plan de conectividad que mejor se adapte a tus necesidades. Explora contenido, realiza videollamadas, sumérgete en juegos en línea y todo lo que quieras, sin restricciones.</p>
        <button className='btn-sub'>Suscribirme</button>
      </div>
    </section>
  )
}

export default PromocionPrincipal