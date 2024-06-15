
// Função para cadastrar o usuário
function cadastrarUsuario(event) {

    // Previnindo o comportamento padrão do formulário
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    console.log(nome, email)

    // Puxando a biblioteca MySQL2
    var mySQL2 = require('mysql2');

    // Conectando ao MySQL
    var conexao = mySQL2.createConnection({

        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'electron-teste'
    });

    // Verificando se conectou
    conexao.connect(function (error) {
        if (error) {
            console.log(error.code);
            console.log(error.fatal);
        } else {
            console.log('Conectado ao MySQL');
        }
    });

    // Cadastrando o usuário
    var query = `INSERT INTO PESSOA (nome, email) VALUES ("${nome}", "${email}")`;

    // Verificando se o usuário foi inserido
    conexao.query(query, function (error) {
        if (error) {
            console.log('O usuário não foi inserido', error);
        } else {
            alert('O usuário foi inserido');
        }
    })



}



// Adicionando o evento de submit ao formulário
var formulario = document.getElementById('Formulario');
formulario.addEventListener('submit', cadastrarUsuario);
    

