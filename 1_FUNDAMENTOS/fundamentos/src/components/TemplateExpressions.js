const TemplateExpressions = () => {

    const name = 'leonardo';
    const data = {
        age: 24,
        job: "programador",
    };

    return (
        <div>
            <h1 className="corVermelha">Olá {name}, tudo bem?</h1>
            <p>Olá {name} você tem: {data.age}</p>
        </div>
    );
};

export default TemplateExpressions;