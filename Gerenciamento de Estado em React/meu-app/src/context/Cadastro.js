import {useNavigate} from 'react-router-dom'
import { useAtendimento } from './AtendimentoContext'

function Cadastro() {
    const { state, dispatch } = useAtendimento();
    const navigate = useNavigate();

    function handleChange(e) {
        dispatch({
            type: "ATUALIZAR",
            campo: e.target.name,
            valor: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        navigate("/resumo");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Cadastro do Paciente</h2>

            <input
                name="nome"
                placeholder="Nome"
                value={state.nome}
                onChange={handleChange}
            />

            <input
                name="contato"
                placeholder="Contato"
                value={state.contato}
                onChange={handleChange}
            />

            <textarea
                name="sintomas"
                placeholder="Sintoma"
                value={state.sintomas}
                onChange={handleChange}
            />

            <button type="submit">Salvar</button>
        </form>
    );
}

export default Cadastro;