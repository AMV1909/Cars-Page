import vehiculoSchema from '../models/Vehiculo.js';
import empleadoSchema from '../models/Empleado.js';
import crypto from 'crypto';

const createInfo = (req, res) => {
    const cars = [
        { name: "EcoSport", image: "https://www.elcarrocolombiano.com/wp-content/uploads/2018/10/20181008-FORD-ECOSPORT-FREESTYLE-4X4-2019-COLOMBIA-PRECIO-FICHA-TECNICA-01.jpg", mark: "Ford", model: "2019", cylinderCapacity: 3000, year: 2019, color: "Azul", category: "4x4", description: "El Ford EcoSport destaca por su buen comportamiento dinámico, donde merece la pena hablar de la suspensión, dirección y una gran calidad de aislamiento, lo que permite que este modelo sea un SUV más eficaz y grato a la hora de conducirlo.", sold: 50, available: 50 },
        { name: "Mazda", image: "https://www.elcarrocolombiano.com/wp-content/uploads/2020/04/20201704-MAZDA-6-RENDER-PORTADA.jpg", mark: "Mazda", model: "6", cylinderCapacity: 2500, year: 2017, color: "Rojo", category: "Deportivo", description: "El Mazda6 2017 puede ser maniobrado en 6 velocidades automáticas que están potenciadas por un motor de tipo V4 que puede alcanzar hasta 184 caballos de fuerza. Su economía de combustible le permite recorrer entre 26 y 35 millas por galón de gasolina en su tanque que puede almacenar hasta 16.4 galones, y su cabina tiene espacio hasta para 5 pasajeros.", sold: 50, available: 50 },
        { name: "Camaro", image: "https://www.chevrolet.com.co/content/dam/chevrolet/south-america/colombia/espanol/index/cars/2018-camaro/04-images/negro-camaro-six-ss-2018.jpg?imwidth=960", mark: "Chevrolet", model: "Six SS", cylinderCapacity: 2750, year: 2018, color: "Negro", category: "Deportivo", description: "La sexta generación del Chevrolet Camaro Six SS llega con un diseño totalmente nuevo, una arquitectura más atlética y liviana que respeta el ADN de su antecesor manteniendo solo dos de sus piezas: el emblema del corbatín y la insignia SS. Sus líneas afinadas de forma meticulosa en el túnel del viento están pensadas para perfeccionar su diseño aerodinámico y contribuir a su alto desempeño..", sold: 50, available: 50 },
    ];

    const employees = [
        { name: "Admin", lastname: "Admin", email: "admin@gmail.com", password: "admin" },
        { name: "Santiago", lastname: "Herrera", email: "herrera@gmail.com", password: "concesionario2022" },
    ];

    cars.forEach((car) => {
        const vehiculo = new vehiculoSchema(car);
        vehiculo.save();
    });

    employees.forEach((employee) => {
        employee.password = crypto.createHash('sha256').update(employee.password).digest('base64');
        const empleado = new empleadoSchema(employee);
        empleado.save();
    });

    res.send("Información creada");
}

const deteleAll = async (req, res) => {
    await vehiculoSchema.deleteMany({});
    await empleadoSchema.deleteMany({});

    res.send("Información eliminada");
}

export { createInfo, deteleAll };