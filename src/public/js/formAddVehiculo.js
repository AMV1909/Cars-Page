document.getElementById("forms").innerHTML = `
    <a href="/form/vehiculos">Volver</a>
`;

addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = document.getElementById("addCar");

    const name = form.name.value;
    const mark = form.mark.value;
    const category = form.category.value;
    const image = form.image.value;
    const model = form.model.value;
    const cylinderCapacity = form.cylinderCapacity.value;
    const year = form.year.value;
    const color = form.color.value;
    const description = form.description.value;
    const available = form.available.value;
    const sold = form.sold.value;

    await fetch("/api/vehiculos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            mark,
            category,
            image,
            model,
            cylinderCapacity,
            year,
            color,
            description,
            available,
            sold,
        }),
    }).then((res) => res.json())
        .then((data) => {
            if (data.message) {
                alert("Vehiculo creado");
                window.location.href = "/form/vehiculos";
            } else {
                alert("Error: " + data);
            }
        })
        .catch((err) => alert(err))
});