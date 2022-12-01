import React from "react";

const CartWidget = () => {
    return (
<button type="button" class="btn position-relative">
<img src={"images/cart3.svg"} alt={"Carrito"} width="45" />
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
</button>
    )
}

export default CartWidget;