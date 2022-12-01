import React from 'react';

const Events = () => {

    const renderSomething = (x) => {
        if(x){
            return <h1>Renderizado isso!</h1>
        } else {
            return <h1>Também posso renderizar isso</h1>
        }
    }

    const handleyMyEvent = (e) => {
        console.log('Clicou')
        }
        return (
            <div>
                <div>
                    <button onClick={handleyMyEvent}>Clique</button>
                </div>
                {renderSomething(true)}
            </div>
        )
};

export default Events;