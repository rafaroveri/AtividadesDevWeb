function ItemMenu({ link, texto }) {
    return (
        <li className="nav-item">
            <a className="nav-link" href={link}>{texto}</a>
        </li>
    );
}

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
            <div className="container">
                <a className="navbar-brand fw-bold text-primary" href="#">
                    Sorriso Saudável
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#menuNavbar"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="menuNavbar">
                    <ul className="navbar-nav ms-auto me-3">
                        <ItemMenu link="#inicio" texto="Início" />
                        <ItemMenu link="#servicos" texto="Serviços" />
                        <ItemMenu link="#sobre" texto="Sobre" />
                        <ItemMenu link="#contato" texto="Contato" />
                    </ul>

                    <a className="btn btn-primary" href="#preatendimento">
                        Agendar consulta
                    </a>
                </div>
            </div>
        </nav>
    );
}

function Hero() {
    return (
        <section id="inicio" className="hero-section d-flex align-items-center">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1 className="display-5 fw-bold">
                            Cuide do seu sorriso com profissionais especializados
                        </h1>

                        <p className="lead mt-3">
                            Na Clínica Sorriso Saudável oferecemos atendimento humanizado,
                            tecnologia moderna e foco total no bem-estar dos nossos pacientes.
                        </p>

                        <a href="#preatendimento" className="btn btn-primary btn-lg mt-3">
                            Solicitar atendimento
                        </a>
                    </div>

                    <div className="col-md-6 text-center">
                        <img
                            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5"
                            className="img-fluid rounded"
                            alt="Atendimento odontológico"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function TituloSecao({ titulo, subtitulo }) {
    return (
        <div className="text-center mb-5">
            <h2>{titulo}</h2>
            {subtitulo ? <p className="text-muted">{subtitulo}</p> : null}
        </div>
    );
}

function CardServico({ icone, titulo, descricao }) {
    return (
        <div className="col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                    <i className={"bi " + icone + " fs-1 text-primary"}></i>
                    <h5 className="card-title mt-3">{titulo}</h5>
                    <p className="card-text">{descricao}</p>
                </div>
            </div>
        </div>
    );
}

function Servicos() {
    return (
        <section id="servicos" className="py-5 bg-light">
            <div className="container">
                <TituloSecao
                    titulo="Nossos Serviços"
                    subtitulo="Tratamentos odontológicos realizados com segurança e qualidade."
                />

                <div className="row g-4">
                    <CardServico
                        icone="bi-emoji-smile"
                        titulo="Limpeza Dental"
                        descricao="Remoção de placas bacterianas e prevenção de doenças bucais."
                    />

                    <CardServico
                        icone="bi-shield-plus"
                        titulo="Restauração Dentária"
                        descricao="Recuperação da estrutura do dente com materiais modernos e duráveis."
                    />

                    <CardServico
                        icone="bi-braces"
                        titulo="Ortodontia"
                        descricao="Correção do alinhamento dos dentes e melhora da estética do sorriso."
                    />

                    <CardServico
                        icone="bi-stars"
                        titulo="Clareamento Dental"
                        descricao="Procedimentos seguros para deixar seu sorriso mais branco e saudável."
                    />
                </div>
            </div>
        </section>
    );
}

function Sobre() {
    return (
        <section id="sobre" className="py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <img
                            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5"
                            className="img-fluid rounded"
                            alt="Consultório odontológico"
                        />
                    </div>

                    <div className="col-md-6">
                        <h2>Sobre a Clínica</h2>

                        <p>
                            A Clínica Sorriso Saudável foi criada com o objetivo de oferecer
                            atendimento odontológico de qualidade, com foco no conforto,
                            na prevenção e na saúde bucal de longo prazo.
                        </p>

                        <p>
                            Nosso compromisso é proporcionar um ambiente acolhedor
                            e tratamentos baseados nas melhores práticas da odontologia moderna.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ItemContato({ icone, filhos }) {
    return (
        <div className="col-md-4">
            <i className={"bi " + icone + " fs-2 text-primary"}></i>
            {filhos}
        </div>
    );
}

function Contato() {
    return (
        <section id="contato" className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center mb-4">Contato</h2>

                <div className="row text-center">
                    <ItemContato
                        icone="bi-telephone"
                        filhos={<p className="mt-2">(62) 99999-9999</p>}
                    />

                    <ItemContato
                        icone="bi-geo-alt"
                        filhos={
                            <p className="mt-2">
                                Av. Exemplo, 123
                                <br />
                                Centro
                            </p>
                        }
                    />

                    <ItemContato
                        icone="bi-clock"
                        filhos={
                            <p className="mt-2">
                                Seg - Sex
                                <br />
                                08h às 18h
                            </p>
                        }
                    />
                </div>
            </div>
        </section>
    );
}

function CampoInput({ rotulo, tipo = "text", dica = "", obrigatorio = false }) {
    return (
        <div className="mb-3">
            <label className="form-label">{rotulo}</label>
            <input
                type={tipo}
                className="form-control"
                placeholder={dica}
                required={obrigatorio}
            />
        </div>
    );
}

function CampoTextoArea({ rotulo, linhas = 4, obrigatorio = false }) {
    return (
        <div className="mb-3">
            <label className="form-label">{rotulo}</label>
            <textarea
                className="form-control"
                rows={linhas}
                required={obrigatorio}
            ></textarea>
        </div>
    );
}

function PreAtendimento() {
    return (
        <section id="preatendimento" className="py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <h2 className="text-center mb-4">Pré-Atendimento</h2>

                        <form id="formPaciente">
                            <CampoInput
                                rotulo="Nome (opcional)"
                                dica="Seu nome"
                            />

                            <CampoInput
                                rotulo="Telefone ou Email"
                                obrigatorio={true}
                            />

                            <CampoTextoArea
                                rotulo="Descreva o que você está sentindo"
                                obrigatorio={true}
                            />

                            <div className="alert alert-secondary small">
                                Seus dados serão utilizados apenas para retorno de contato inicial
                                da clínica. Não solicitamos documentos pessoais ou informações
                                sensíveis de saúde neste formulário.
                            </div>

                            <button type="submit" className="btn btn-primary w-100">
                                Enviar informações
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer className="bg-dark text-white text-center py-3">
            <p className="mb-0">© 2026 Clínica Sorriso Saudável</p>
        </footer>
    );
}

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Servicos />
            <Sobre />
            <Contato />
            <PreAtendimento />
            <Footer />
        </>
    );
}

ReactDOM.createRoot(document.getElementById("app")).render(<App />);