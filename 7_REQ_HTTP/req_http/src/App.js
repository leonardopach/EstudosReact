import './App.css';
import { useState, useEffect } from 'react';

const url = "http://localhost:4000/";

function App() {

  const [products, setProducts] = useState([]);

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [apelido, setApelido] = useState('');

  // Resgatar dados
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
    };
    fetchData();
  }, []);

  // 2 - add produtos
  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = {
      name: nome,
      idade,
      apelido,
    };
    const res = await fetch("http://localhost:4000/add", {
      method: "POST",
      headers: {
        "access-control-allow-origin": "*",
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Methods': '*',
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    });
    const addedProduct = await res.json();
  };

  return (
    <div className="App">
      <h1>HTTp</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.nome} - {product.idade} - {product.apelido}</li>
        ))}
      </ul>

      <div className='add-product'>
        <form onSubmit={handleSubmit}>
          <label>
            nome:
            <input type='text' value={nome} onChange={(e) => setNome(e.target.value)} />
            Idade:
            <input type='text' value={idade} onChange={(e) => setIdade(e.target.value)} />
            Apelido:
            <input type='text' value={apelido} onChange={(e) => setApelido(e.target.value)} />
            <input type='submit' value="criar" />
          </label>
        </form>
      </div>
    </div>
  );
}

export default App;
