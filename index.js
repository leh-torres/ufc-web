const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.set('views', './views')

const categorias = [
    {
        chave: 0,
        valor: '',
    }
];

const produtos = [{
    id: 0,
    nome: '',
    descricao: '',
    preco: 0,
}]

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/home', (req, res) =>{
    res.render('home', {title:'Lab Map', message:'Bem vindo ao Lab MPA'});
})

app.get('/categorias', (req, res) =>{
    res.render('categorias', {title:'Lab Map', message:'Bem vindo ao Lab MPA', c: categorias});
})

app.post('/categoria-salvar', function (req, res) {
    console.log(req.body)
    categorias.push({chave: req.body.chave, valor:req.body.valor})
   res.redirect('/categorias')
})

app.get('/categoria-deletar', (req, res) =>{
    categorias.splice(req.query.chave, 1)
    res.redirect('/categorias')
})

app.get('/produtos', (req, res) =>{
    res.render('produtos', {p:produtos});
})

app.get('/produtos-cadastrar', (req, res) =>{
    res.render('produtos-cadastrar');
})

app.post('/produtos-salvar', function (req, res) {
    console.log(req.body)
    produtos.push({id: req.body.id, nome: req.body.nome, descricao: req.body.descricao, preco: req.body.preco})
    res.redirect('/produtos')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
  