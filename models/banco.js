const Sequelize = require("sequelize")
const Agenda = require("./post")
const sequelize = new Sequelize(
    "prova",
    "root",
    "",
    {
        host: "localhost",
        dialect: "mysql"
    }
)

// sequelize.authenticate().then(function () {
//     console.log("conectado")
// }).catch(function (erro) {
//     console.log("falha ao se conectar: " + erro)
// })

// Agenda.create({
//     nome: "Bianca",
//     endereco: "Rua do coiso",
//     bairro: "Jarim coiso",
//     cep: "04444444",
//     cidade: "Sao Paulo",
//     estado: "Sao Paulo"
// })



module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}

