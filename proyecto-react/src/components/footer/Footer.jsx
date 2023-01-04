import React from "react";

const Footer = () => {
    return (
        <div className="container-fluid fondoFooter">
        <div className="container py-5">
            <hr/>
<div className="row">
    <div className="col-md-6">
        <a href="./"> <img src={"images/taiko.png"} alt="Logo Taiko" width="150"/></a>
    </div>
    <div className="col-md-6 text-end">
        <p>
        <a href={"https://www.instagram.com/taikosushi.ok/"} target={"_blank"} className="me-3"> <img src={"images/instagram.svg"} alt="Instagram" width="45"/></a>
        <a href={"https://www.facebook.com/profile.php?id=100075842364275"} target={"_blank"} className="me-3"> <img src={"images/facebook.svg"} alt="Facebook" width="45"/></a>
        </p>
        </div>
        <div className="col-md-12">
        <div className="fondoFooter1">
        <p className="footer-text"> © Copyright Taiko Sushi - 2022</p>
        <p className="footer-text">
          Defensa de lxs consumidores. Para reclamos{" "}
          <a
            href="https://autogestion.produccion.gob.ar/consumidores"
            target="_blank"
            rel="noreferrer"
          >
            ingrese aquí
          </a>
          .
        </p>
      </div>

    </div>
</div>
</div>
</div>


    )
}

export default Footer;