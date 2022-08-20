// require("dotenv-safe").config();
const cors = require('cors');

const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();

app.use(express.json());
app.use(cors());

app.get('', (req, res, next) => {
    res.json({message: "Tudo ok por aqui!"});
})

const verifyJWT = (req, res, next) =>{
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });

    jwt.verify(token, function(err, decoded) {
        if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });

        req.userId = decoded.id;
        next();
    });
}

app.get('/clientes',(req, res, next) => {
    console.log("Retornou todos clientes!");
    res.json([{id:1,nome:'Gustavo'}]);
})
app.post("/login", (req, res, next) => {
    if (req.body.usuario === "luiz" && req.body.senha === "123") {
      const id = 1;
      const token = jwt.sign({ id });
      return res.send({ auth: true, token: token });
    }
    res.status(500).json({ message: "Login inválido!" });
  });

app.post('/logout',function (req, res){
    res.json({auth: false, token: null});
})


app.listen(3000);
console.log("Servidor escutando porta 3000")