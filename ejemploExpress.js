const express = require("express");
const PORT = 56565;
const app = express();
const gatitos = require("./gatitos.json")
const perritos = require("./perritos.json")

app.get("/gatitos", (req, res) => {
    console.log("me hicieron una solicitud GET a /gatitos");

    let htmlContent = '<h1 style="text-align: center;">Esta es la página de gatitos bien god (mentira)</h1>';
    htmlContent += "<ul>";

    gatitos.forEach(gato => {
        htmlContent += `<li>
            <h2 style="text-align: center;">${gato.nombre} - ${gato.raza}, Edad: ${gato.edad} años</h2>
        </li>`;
    });

    htmlContent += "</ul>";

    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(htmlContent);
});


app.get("/", (req, res) => {
    res.setHeader("Content-Type", "text/html;charset=utf-8");
    res.end(`
            <h1 style="color: black; text-align: center; margin: 2vw;">
                Esta es la épica página principal y por supuesto con más de 47 minutos invertidos, 
                página de gatitos y perritos
            </h1>
            <h3 style="text-align: center;">ah profe enseña a poner algun css o imagenes no pude ponerlo mas xdd <br>
            hay dos rutas "/perritos" y "/gatitos" depues nomas el 404</h3>
    `);
});


app.get("/perritos", (req, res) => {
    console.log("me hicieron una solicitud GET a /perritos");


    let htmlContent = `<h1 style="text-align: center;">Esta es la página de perritos bien god (mentira)</h1>`;
    htmlContent += "<ul>";


    perritos.forEach(perrito => {
        htmlContent += `<li>
        <h2 style="text-align:center;">${perrito.nombre} - ${perrito.raza}, Edad: ${perrito.edad} años</h2>
        </li>`;
    });

    htmlContent += "</ul>";


    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(htmlContent);
});
app.listen(PORT, () => {
    console.log("listo en http://localhost:" + PORT);
});
app.use("*", (req, res) => {
    res.status(404)
    res.setHeader("Content-Type", "text/html;charset=utf-8")
    res.end(`<h1 style="text-align: center;">buenas aca no hay nada</h1>`)
})