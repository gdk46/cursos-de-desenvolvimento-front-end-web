/* eslint-disable import/no-anonymous-default-export */
import React from 'react';


export default (props) =>
    <div className="card">
        
        <div className="conteudo">
            {props.children}
        </div>

        <div className="footer">
            {props.titulo}
        </div>
    </div>