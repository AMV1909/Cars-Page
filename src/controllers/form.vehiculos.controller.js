import jwt from 'jsonwebtoken';

const formVehiculos = (req, res) => {
    jwt.verify(req.token, process.env.SECRET_KEY, (err, data) => {
        if (!err) {
            const links = [
                { name: "Salir", url: "/api/logout" },
                { name: "Home", url: "/home" },
                { name: "Ver Reporte", url: "#" },
                { name: "Revisar Inventario", url: "/inventario" },
            ];

            res.render("formVehiculos", { links });
        } else {
            res.render("error", { error: "Deber logearte antes de entrar aquí", links: [] });
        }
    });
}

const formAddVehiculo = (req, res) => {
    jwt.verify(req.token, process.env.SECRET_KEY, (err, data) => {
        if (!err) {
            const links = [
                { name: "Salir", url: "/api/logout" },
                { name: "Home", url: "/home" },
                { name: "Ver Reporte", url: "#" },
                { name: "Revisar Inventario", url: "/inventario" },
            ];

            res.render("formAddVehiculo", { links });
        } else {
            res.render("error", { error: "Deber logearte antes de entrar aquí", links: [] });
        }
    });
}

const formEditVehiculo = (req, res) => {
    jwt.verify(req.token, process.env.SECRET_KEY, async (err, data) => {
        if (!err) {
            const links = [
                { name: "Salir", url: "/api/logout" },
                { name: "Home", url: "/home" },
                { name: "Ver Reporte", url: "#" },
                { name: "Revisar Inventario", url: "/inventario" },
            ];

            const car = await fetch(`http://localhost:3000/api/vehiculos/${req.params.id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }).then(res => res.json());

            res.render("formEditVehiculo", { links, car });
    } else {
        res.render("error", { error: "Deber logearte antes de entrar aquí", links: [] });
    }
    });
}

export { formVehiculos, formAddVehiculo, formEditVehiculo };