function App() {
  return (
    <div className="container">
      <div className="sidebar">
        <details open className="suggestion">
          <summary>Tópicos Sugeridos</summary>
          <button>HTML</button>
          <button>CSS</button>
          <button>JavaScript</button>
          <button>TypeScript</button>
        </details>

        <details open className="historic">
          <summary>Histórico</summary>
          <button>Java</button>
          <button>PHP</button>
        </details>
      </div>

      <div className="content">
        <div className="box-home">
          <span>Olá, eu sou o</span>
          <h1>teach<span>.me</span></h1>
          <p>
            Estou aqui para te ajudar nos seus estudos.
            Selecione um dos tópicos sugeridos ao lado
            ou digite um tópico que deseja estudar para
            começarmos
          </p>
        </div>

        <div className="box-input">
          <textarea placeholder="Insira o tema que deseja estudar..."></textarea>
          <button>Enviar Pergunta</button>
        </div>  

        {/* <div className="box-chat">
          <h1>Você está estudando sobre <span>HTML</span></h1>

          <div className="question">
            <h2><img src="./assets/question.svg" /> Pergunta</h2>
            <p>
              Claro! Aqui está a pergunta simulada: "Como você descreveria o seu conhecimento e experiência com HTML? Você poderia fornecer um exemplo de um projeto em que utilizou HTML e como isso impactou positivamente o resultado final?" Aguardo a sua resposta para
              poder fornecer feedback!
            </p>
          </div>

          <div className="answer">
            <h2>Sua Resposta</h2>
            <p>
              Tenho um conhecimento sólido em HTML. Já construi vários sites
            </p>
          </div>

          <div className="feedback">
            <h2>Feedback teach<span>.me</span></h2>
            <p>
              Ótimo! Parece que você tem uma boa experiência com HTML e construiu vários sites. É importante sempre destacar a prática e os projetos realizados durante uma entrevista de emprego. No entanto, vale ressaltar que seria interessante fornecer um exemplo
              específico de um projeto em que você utilizou HTML e como suas habilidades impactaram positivamente o resultado final. Isso pode ajudar a destacar suas habilidades de forma mais concreta e transmitir confiança ao entrevistador.
              Espero que esse feedback seja útil e esteja à disposição para mais perguntas ou informações adicionais.
            </p>
            <div className="actions">
              <button>Estudar novo tópico</button>
            </div>
          </div>
        </div> */}

        <footer className="box-footer">
          <p>teach<span>.me</span></p>
        </footer>
      </div>
    </div>
  )
}

export default App
