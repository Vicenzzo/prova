const express = require("express");
const app = express();
const handlebars = require("express-handlebars").engine;
const bodyParser = require("body-parser");
const post = require("./models/post")

// Configurando o Handlebars como motor de template
app.engine("handlebars", handlebars({ defaultLayout: "main-prova" }));
app.set("view engine", "handlebars");

// Configurando o body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rota principal
app.get("/", function (req, res) {
    res.render("cadastro");
});

app.post("/cadastrar", function (req, res) {
    post.create({
        nome: req.body.nome,
        endereco: req.body.endereco,
        bairro: req.body.bairro,
        cep: req.body.cep,
        cidade: req.body.cidade,
        estado: req.body.estado
    }).then(function () {
        res.redirect("/")
    }).catch(function (erro) {

    })
})

app.get("/consulta", function (req, res) {
    post.findAll().then(function (posts) {
        res.render("consulta", { posts: posts })
    }).catch(function (erro) {
        console.log("Erro ao carregar dados: " + erro)
    })
})

app.get("/editar/:id", function (req, res) {
    post.findAll({ where: { "id": req.params.id } }).then(function (posts) {
        res.render("editar", { posts: posts })
    }).catch(function (erro) {
        console.log("Erro ao carregar dados: " + erro)
    })
})

app.post("/atualizar", function (req, res) {
    post.update({
        nome: req.body.nome,
        endereco: req.body.endereco,
        bairro: req.body.bairro,
        cep: req.body.cep,
        cidade: req.body.cidade,
        estado: req.body.estado


    }, { where: { id: req.body.id } }).then(function () {
        res.redirect("/consulta")
    }).catch(function (erro) {
        res.send("Erro ao atualizar dados: " + erro)
    })
})

app.get("/excluir/:id", function (req, res) {
    post.destroy({ where: { "id": req.params.id } }).then(function () {
        res.redirect("/consulta")
    }).catch(function (erro) {
        res.send("Erro ao deletar: " + erro)
    })
})

// Iniciar o servidor
app.listen(3000, function () {
    console.log('Server funcionando na porta 3000');
});
