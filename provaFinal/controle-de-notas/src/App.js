import { useState } from 'react';
import './App.css';

function App() {
    const [id, setId] = useState();
    const [nome, setNome] = useState('');
    const [nota1, setNota1] = useState('');
    const [nota2, setNota2] = useState('');
    const [nota3, setNota3] = useState('');
    const [lista, setLista] = useState([]);

    function adicionar() {
        console.log('adicionar');

        if(id) {
            const index = lista.findIndex(n => n.id === id);
            lista[index].nome = nome;
            lista[index].nota1 = parseFloat(nota1);
            lista[index].nota2 = parseFloat(nota2);
            lista[index].nota3 = parseFloat(nota3);
            lista[index].media = ((lista[index].nota1 + lista[index].nota2 + lista[index].nota3) / 3).toFixed(2);
        
            setLista([...lista]);
        } else {
            let nota = {
                id: Math.random().toString(36),
                nome: nome,
                nota1: parseFloat(nota1),
                nota2: parseFloat(nota2),
                nota3: parseFloat(nota3),
                media: ((parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3))/3).toFixed(2)
            };

            lista.push(nota);
            setLista([...lista]);
        }

        setId('')
        setNome('');
        setNota1('');
        setNota2('');
        setNota3('');
    }

    function editar(id) {
        console.log('editar ', id);
        const nota = lista.find(n => n.id === id);
        setId(nota.id);
        setNome(nota.nome);
        setNota1(nota.nota1);
        setNota2(nota.nota2);
        setNota3(nota.nota3);
    }

    function excluir(id) {
        console.log('excluir ', id);
        const index = lista.findIndex(n => n.id === id);
        lista.splice(index, 1);
        setLista([...lista]);
    }

    return(
        <div className='container'>
            <br/>
            <h1 className="title-page">CONTROLE DE NOTAS</h1>
            <br/>
            <form className="row">
                <div className="col-md-12 mb-3">
                    <label className="form-label">Nome do Aluno:</label>
                    <input type="text" className="form-control" value={nome} onChange={(event) => setNome(event.target.value)} />
                </div>

                <div className="mb-3 col-md-4">
                    <label className="form-label">Nota 1:</label>
                    <input type="text" className="form-control" value={nota1} onChange={(event) => setNota1(event.target.value)} />
                </div>

                <div className="mb-3  col-md-4">
                    <label className="form-label">Nota 2:</label>
                    <input type="text" className="form-control" value={nota2}  onChange={(event) => setNota2(event.target.value)} />
                </div>

                <div className="mb-3  col-md-4">
                    <label className="form-label">Nota 3:</label>
                    <input type="text" className="form-control" value={nota3}  onChange={(event) => setNota3(event.target.value)} />
                </div>

                <div className='col-md-12'>
                <button type="button" className="btn btn-primary " onClick={adicionar}>Adicionar</button>
                </div>
            </form>
            <br/>

            <table className="table">
                <thead>
                    <tr>
                        <th>Aluno:</th>
                        <th>Nota 1:</th>
                        <th>Nota 2:</th>
                        <th>Nota 3:</th>
                        <th>Média:</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        lista.map((n, index) => {
                                return(
                                    <tr key={index}>
                                        <td>{n.nome}</td>
                                        <td>{n.nota1}</td>
                                        <td>{n.nota2}</td>
                                        <td>{n.nota3}</td>
                                        <td>{n.media}</td>
                                        <td>
                                            <button className="btn btn-primary" onClick={() => editar(n.id)}>Editar</button>
                                        </td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => excluir(n.id)}>Excluir</button>
                                        </td>
                                    </tr>
                                )
                        })  
                    }
                </tbody>
            </table>
            <footer>
                <div class="footer-copyright">
                    <p>© 2022 FEMA - Lucas S, Kauã M, Thalia G, Henrique W, Thales G, Germano.</p>
                </div>
            </footer>
        </div>
    );
}

export default App;