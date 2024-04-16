import express from 'express'

const app = express()

app.get("/", (req, res) => {
    res.send("Marcelo Daniel Anavia")
})

app.get("/materia", (req, res) => {
    res.send("Aplicaciones Híbridas")
})

app.get("/profesor", (req, res) => {
    res.send("Marcos Galbán")
})

const tecnologias = ["HTML", "CSS", "Javascript", "Tailwind", "Vue js"]

app.get("/stack/:tecnologia", (req, res) => {
    if(tecnologias.includes(req.params.tecnologia)) {
        res.send("Dónde te dejo el CV?")
    } else {
        res.send("A leer la documentación entonces...")
    }
})

let listado = [
    {
        id: 1,
        nombre: "Oreos",
        precio: 500
    },
    {
        id: 2,
        nombre: "Pepitos",
        precio: 400
    },
    {
        id: 3,
        nombre: "Pitusas",
        precio: 300
    },
    {
        id: 4,
        nombre: "Saladix",
        precio: 600
    },
    {
        id: 5,
        nombre: "Rex",
        precio: 500
    },
    {
        id:6,
        nombre: "Pipas",
        precio: 200
    },
    {
        id: 7,
        nombre: "Bizznike",
        precio: 600
    },
    {
        id: 8,
        nombre: "Block",
        precio: 1000
    },
    {
        id: 9,
        nombre: "Guaymallen",
        precio: 200
    },
    {
        id: 10,
        nombre: "Jorgito",
        precio: 300
    }
]

app.get("/productos", (req, res) => {
    let {minimo} = req.query
    let {maximo} = req.query

    if(minimo && !maximo) {
        let productosFiltro = listado.filter(producto => producto.precio >= parseInt(minimo))
        res.send(productosFiltro)
    } else if(!minimo && maximo) {
        let productosFiltro = listado.filter(producto => producto.precio <= parseInt(maximo))
        res.send(productosFiltro)
    } else if (maximo && minimo) {
        let productosFiltro = listado.filter(producto => producto.precio >= parseInt(minimo) && producto.precio <= parseInt(maximo))
        res.send(productosFiltro)
    }    

    res.send(listado)
})

app.get("/productos/:id", (req, res) => {
    let producto = listado.find(producto => producto.id === parseInt(req.params.id))

    if(producto) {
        res.send(producto)
    }
})

app.use((req, res) => {
    res.status(404).send(`Página ${req.originalUrl} no encontrada`);
});

app.listen(2023, () => {
    console.log("Servidor corriendo en http://localhost:2023")
})