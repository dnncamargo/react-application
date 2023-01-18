import { useState } from 'react';
import Button from "../button";

const Card = () => {

    const [value, setValue] = useState(0);

    
    function Add() {
        setValue(value+1)
    }

    function Rem() {
        if(value > 0){
            setValue(value-1)
        }
    }

    return (
        <div className="card">
            <div className="card-header">
            Meu primeiro card
            </div>
            <div className="card-body">
                <h5 
                        className="card-title">
                    Título do card
                </h5>

                <p 
                        className="card-text">
                    Meu texto no card possui {value} componente(s)
                </p>

                <Button
                        className="btn btn-outline-primary"
                        onClick={Add}>
                    Adicionar
                </Button>
                <Button
                        className="btn btn-outline-danger"
                        onClick={Rem}>
                    Remover
                </Button>
                
            </div>
        </div>
    );
}

export default Card;