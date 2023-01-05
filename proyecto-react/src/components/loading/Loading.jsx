import React from "react";

const Loading = () => {
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col text-center">
                    <div class="spinner-grow text-secondary" role="status">
                        <span class="visually-hidden">Cargando...</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading;