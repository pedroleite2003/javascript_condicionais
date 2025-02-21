let body = document.querySelector("body");
body.innerHTML += '<h1>Bem vindo a digital college</h1>';
body.innerHTML += '<br>';
body.innerHTML += '<h2>Olá, qual o seu nome?</h2>';
body.innerHTML += '<input id="nome" placeholder="digite seu nome">';
body.innerHTML += '<button onclick="confirmarNome()">enter</button>';
function confirmarNome() {
    body.innerHTML += `<h2>${nome.value} em  que podemos lhe ajudar?</h2>`;
    setTimeout(() => {
        body.innerHTML += '<h2>1: matricula</h2>';
        body.innerHTML += '<h2>2: reposição de aula:</h2>';
        body.innerHTML += '<h2>3: pedências financeiras</h2>';
        body.innerHTML += '<input id="opcao" placeholder="escolha a opção">';
        body.innerHTML += '<button onclick="confirmarOpcao()">enter</button>';
    }, 2000);
}
function confirmarOpcao() {
    switch (opcao.value) {
        case "1":
            body.innerHTML += '<h2>Qual o curso do seu intesse?</h2>';
            body.innerHTML += '<h2>1: Fullstack</h2>';
            body.innerHTML += '<h2>2: Marketing</h2>';
            body.innerHTML += '<h2>3: Data Analitycs</h2>';
            body.innerHTML += '<input id="curso" placeholder=>';
            body.innerHTML += '<button onclick="confimarCurso()">enter</button>';
        break;

        case "2":
            body.innerHTML += '<h2>Qual sua unidade/</h2>';
            body.innerHTML += '<input id="turma" placeholder="digite sua turma">';
            body.innerHTML +=
                    `<select>
                <option>Aldeota</option>
                <option>Sul</option>
                <option>Norte</option>
                    </select>`;
            body.innerHTML += '<button onclick="confirmarReposicao()">enter</button>';
        break;

        case "3":
            body.innerHTML += '<h2>Entre em contato com nosso financeiro: (85) 94002-8922</h2>'
        break;
        default:
            document.querySelector("#opcao").outerHTML="";
            body.innerHTML += '<h2>Escolha uma opção valida:</h2>'
            body.innerHTML += '<h2>1: matricula</h2>';
            body.innerHTML += '<h2>2: reposição de aula:</h2>';
            body.innerHTML += '<h2>3: pedências financeiras</h2>';
            body.innerHTML += '<input id="opcao" placeholder="escolha a opção">';
            body.innerHTML += '<button onclick="confirmarOpcao()">enter</button>';
        break
    }
}