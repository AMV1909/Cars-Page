const index = (req, res) => {
    const links = [
        { name: "Login", url: "/login" },
        { name: "Cotizar", url: "/cotizar" },
        { name: "Catalogo", url: "/catalogo" },
    ];

    res.render("index", { links });
}

const login = (req, res) => {
    const links = [
        { name: "Home", url: "/" },
        { name: "Cotizar", url: "/cotizar" },
        { name: "Catalogo", url: "/catalogo" },
    ];

    res.render("login", { links });
}

const cotizar = (req, res) => {
    const links = [
        { name: "Home", url: "/" },
        { name: "Login", url: "/login" },
        { name: "Catalogo", url: "/catalogo" },
    ];

    res.render("cotizar", { links });
}

const catalogo = (req, res) => {
    const links = [
        { name: "Home", url: "/" },
        { name: "Login", url: "/login" },
        { name: "Cotizar", url: "/cotizar" },
    ];

    res.render("catalogo", { links });
}

// Token Views

const home = (req, res) => {
    const links = [
        { name: "Salir", url: "/" },
        { name: "Ver Reporte", url: "#" },
        { name: "Revisar Inventario", url: "/inventario" },
    ];

    res.render("home", { links });
}

const inventario = (req, res) => {
    const links = [
        { name: "Salir", url: "/" },
        { name: "Home", url: "/home" },
        { name: "Ver Reporte", url: "#" },
    ];

    res.render("inventario", { links });
}

export { index, login, cotizar, catalogo, home, inventario };