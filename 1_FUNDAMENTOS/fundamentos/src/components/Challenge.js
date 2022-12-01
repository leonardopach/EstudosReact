const Challenge = () => {


    const num1 = 5;
    const num2 = 3;
    const imprimir = () => {

        return <h1>{num1} - {num2}</h1>;
    };
    const handleySoma = () => {
        console.log(num1 + num2)
    };

    return (
        <div>
            <div>
                <button onClick={handleySoma}>Clica para somar</button>
            </div>
            <div>
                {imprimir()}
            </div>
        </div>
    );
};

export default Challenge;