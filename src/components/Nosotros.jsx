import React, { useEffect } from 'react'

const Nosotros = () => {

  useEffect(() => {

    const clickear = () => {
      console.log("Click");
    }

    window.addEventListener("click", clickear)

    return () => {
      window.removeEventListener("click", clickear)
    }

  }, [])

  return (
    <div className="container">
        <h1 className="main-title">Nosotros</h1>
        <p>Creada en 2005, nuestra empresa de servicios informáticos se ha convertido desde entonces en proveedor de servicios de mantenimiento informático, asistencia informática y venta informática, con un compromiso claro: “Ser el mejor socio de nuestros clientes para utilizar la tecnología como una herramienta estratégica para su negocio”."</p>
    </div>
  )
}

export default Nosotros