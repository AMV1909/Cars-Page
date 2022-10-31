import { cars } from "./cars.js";

if (cars.length > 0) {
    document.getElementsByTagName("tbody")[0].innerHTML = `
        ${cars.map((car, index) => `
            <tr>
                <td>${car.name}</td>
                <td><a href=${car.image}>${car.image.substring(0, 20)}...</a></td>
                <td>${car.mark}</td>
                <td>${car.model}</td>
                <td>${car.cylinderCapacity}</td>
                <td>${car.year}</td>
                <td>${car.color}</td>
                <td>${car.category}</td>
                <td>${car.description.substring(0, 50)}...</td>
                <td>
                    <button class="edit" id="edit${car._id}"></button>
                    <button class="delete" id="delete${car._id}"></button>
                </td>
            </tr>
        `).join("")}
    `;

    cars.forEach((car) => {
        document.getElementById(`edit${car._id}`).addEventListener("click", () => {
            window.location.href = `/form/vehiculos/${car._id}`;
        });

        document.getElementById(`delete${car._id}`).addEventListener("click", async () => {
            if (confirm("¿Está seguro de que desea eliminar este vehículo?")) {
                await fetch(`/api/vehiculos/${car._id}`, {
                    method: "DELETE"
                }).then((res) => res.json())
                    .then((data) => {
                        if (data.message) {
                            window.location.href = "/form/vehiculos";
                        } else {
                            alert("Error: " + data);
                        }
                    })
                    .catch((err) => alert(err));
            }
        });
    });

} else {
    document.getElementsByTagName("tbody")[0].innerHTML = `
        <tr>
            <td colspan="10">No se encontraron resultados</td>
        </tr>
    `;
}

document.getElementById("add").addEventListener("click", () => {
    window.location.href = "/form/vehiculos/add";
});