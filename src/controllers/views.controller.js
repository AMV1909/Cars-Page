import jwt from 'jsonwebtoken';

const index = (req, res) => {
    const links = [
        { name: "Login", url: "/api/auth" },
        { name: "Cotizar", url: "/cotizar" },
        { name: "Catálogo", url: "/catalogo" },
    ];

    res.render("index", { links });
}

const login = (req, res) => {
    const links = [
        { name: "Home", url: "/" },
        { name: "Cotizar", url: "/cotizar" },
        { name: "Catálogo", url: "/catalogo" },
    ];

    res.render("login", { links });
}

const cotizar = (req, res) => {
    const links = [
        { name: "Home", url: "/" },
        { name: "Login", url: "/api/auth" },
        { name: "Catálogo", url: "/catalogo" },
    ];

    res.render("cotizar", { links });
}

const catalogo = (req, res) => {
    const links = [
        { name: "Home", url: "/" },
        { name: "Login", url: "/api/auth" },
        { name: "Cotizar", url: "/cotizar" },
    ];

    res.render("catalogo", { links });
}

// Token Views

const home = (req, res) => {
    jwt.verify(req.token, process.env.SECRET_KEY, (err, data) => {
        if (!err) {
            const links = [
                { name: "Salir", url: "/api/logout" },
                { name: "Ver Reporte", url: "#" },
                { name: "Revisar Inventario", url: "/inventario" },
            ];

            res.render("home", { links });
        } else {
            res.render("error", { error: "Deber logearte antes de entrar aquí", links: [] });
        }
    });
}

const inventario = (req, res) => {
    jwt.verify(req.token, process.env.SECRET_KEY, (err, data) => {
        if (!err) {
            const links = [
                { name: "Salir", url: "/api/logout" },
                { name: "Home", url: "/home" },
                { name: "Ver Reporte", url: "#" },
            ];

            res.render("inventario", { links });
        } else {
            res.render("error", { error: "Deber logearte antes de entrar aquí", links: [] });
        }
    });
}

export { index, login, cotizar, catalogo, home, inventario };