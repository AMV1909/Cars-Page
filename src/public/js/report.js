import { cars } from "./cars.js";

if (cars.length > 0) {
    cars.forEach((car, index) => {
        document.getElementById("report-content").innerHTML += `
            <div class="report">
                <div class="carName">
                    <h2>${car.name}</h2>
                </div>
    
                <div class="p">
                        <p>Cantidad Vendida:</p>
                        <p>Cantidad Disponible:</p>
                </div>
    
                <div class="i">
                    <p>${car.sold}</p>
                    <p>${car.available}</p>
                </div>
            </div>
        `;
    });

    document.getElementById("Ver Reporte").addEventListener("click", () => {
        document.getElementById("modal").style.display = "flex";
    });

    document.getElementById("closeModal").addEventListener("click", () => {
        document.getElementById("modal").style.display = "none";
    });
} else {
    document.getElementById("report-content").innerHTML = `
        <h2>No hay vehiculos</h2>
    `;
}