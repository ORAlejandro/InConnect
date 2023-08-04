import './MasBeneficios.css'

const MasBeneficios = () => {
    return (
        <section>
            <h3 className='titulo-mas-beneficios'>Descubrí mas beneficios</h3>

            <div>
                <article>
                    <h4>Instalacion gratuita</h4>
                    <img className='img-instalacion-gratis' src="../../public/instalacion-gratis.png" alt="engranaje con una llave" />
                    <p>Disfruta de nuestra instalación sin costos adicionales. Nuestro equipo de expertos se encargará de poner en funcionamiento todo lo que necesitas de manera profesional y sin ningún cargo extra para ti.</p>
                </article>

                <article>
                    <h4>Beneficio 2</h4>
                    <img src="" alt="" />
                    <p>Descripcion del beneficio</p>
                </article>

                <article>
                    <h4>Beneficio 3</h4>
                    <img src="" alt="" />
                    <p>Descripcion del beneficio</p>
                </article>
            </div>

        </section>
    )
}

export default MasBeneficios