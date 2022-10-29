// Authorization: Bearer <token>
export function verifyToken(req, res, next) {
    const { authorization } = req.headers;

    if (typeof authorization !== "undefined") {
        const token = authorization.split(" ")[1];
        req.token = token;
        next();
    } else {
        res.render("error", { error: "Deber logearte antes de entrar aquí", links: [] });
    }
}