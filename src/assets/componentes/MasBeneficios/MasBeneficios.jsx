import './MasBeneficios.css'

const MasBeneficios = () => {
    return (
        <section>
            <h3 className='titulo-mas-beneficios'>Descubrí mas beneficios</h3>

            <div className='contenedor-beneficios'>
                <article className='contenedor-beneficio-unitario'>
                    <h4 className='titulo-beneficio-unitario'>Instalación gratuita</h4>
                    <img className='img-instalacion-gratis' src="../../public/instalacion-gratis.png" alt="engranaje con una llave" />
                    <p className='descripcion-beneficio'>Disfruta de nuestra instalación sin costos adicionales. Nuestro equipo de expertos se encargará de poner en funcionamiento todo lo que necesitas de manera profesional y sin ningún cargo extra para ti.</p>
                </article>

                <article className='contenedor-beneficio-unitario'>
                    <h4 className='titulo-beneficio-unitario'>Empresa Líder</h4>
                    <img className='img-instalacion-gratis' src="../../public/servicio-verificado.png" alt="simbolo de empresa verificada" />
                    <p className='descripcion-beneficio'>Somos la empresa líder en proporcionar soluciones de conectividad óptima. Nuestra pasión por ofrecer acceso a Internet de alta velocidad y confiabilidad es lo que nos ha convertido en un referente en la industria.</p>
                </article>

                <article className='contenedor-beneficio-unitario'>
                    <h4 className='titulo-beneficio-unitario'>Reintegros</h4>
                    <img className='img-instalacion-gratis' src="../../public/reintegros.png" alt="logo de dinero" />
                    <p className='descripcion-beneficio'>Por cada 6 meses que cumplas vinculados a nosotros aumentamos tu % de reintegro mensual. Contactate con nosotros para mas info. Hacemos que tu dinero rinda más</p>
                </article>
            </div>

        </section>
    )
}

export default MasBeneficios