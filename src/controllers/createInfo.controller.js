import vehiculoSchema from '../models/Vehiculo.js';

const createInfo = (req, res) => {
    const cars = [
        { seriesNumber: 1, name: "Ford", image: "https://www.elcarrocolombiano.com/wp-content/uploads/2021/01/20210124-LOS-10-CARROS-MAS-VENDIDOS-DEL-MUNDO-EN-2020-01.jpg", mark: "A", model: "GT", cylinderCapacity: 5.0, year: 2018, color: "red", category: "sport", description: "The Ford Mustang is an American car manufactured by Ford. It was originally based on the platform of the second generation North American Ford Falcon, a compact car. The original 1962 Ford Mustang I two-seater concept car had evolved into the 1963 Mustang II four-seater concept car which Ford used to pretest how the public would take interest in the first production Mustang. The 1963 Mustang II concept car was designed with a variation of the production model's front and rear ends with a roof that was 2.7 inches shorter than the production model's fastback roofline.", sold: 50, available: 50 },
        { seriesNumber: 2, name: "Mazda", image: "https://www.elcarrocolombiano.com/wp-content/uploads/2020/12/20201224-TOP-10-CARROS-MAS-VENDIDOS-DE-AMERICA-LATINA-HASTA-NOVIEMBRE-2020-01.jpg", mark: "B", model: "GT", cylinderCapacity: 5.0, year: 2020, color: "red", category: "no spe", description: "The Ford Mustang is an American car manufactured by Ford. It was originally based on the platform of the second generation North American Ford Falcon, a compact car. The original 1962 Ford Mustang I two-seater concept car had evolved into the 1963 Mustang II four-seater concept car which Ford used to pretest how the public would take interest in the first production Mustang. The 1963 Mustang II concept car was designed with a variation of the production model's front and rear ends with a roof that was 2.7 inches shorter than the production model's fastback roofline.", sold: 50, available: 50 },
        { seriesNumber: 3, name: "Chevrolet", image: "https://www.elcarrocolombiano.com/wp-content/uploads/2021/01/20210124-LOS-10-CARROS-MAS-VENDIDOS-DEL-MUNDO-EN-2020-01.jpg", mark: "C", model: "GT", cylinderCapacity: 5.0, year: 2022, color: "blue", category: "sport", description: "The Ford Mustang is an American car manufactured by Ford. It was originally based on the platform of the second generation North American Ford Falcon, a compact car. The original 1962 Ford Mustang I two-seater concept car had evolved into the 1963 Mustang II four-seater concept car which Ford used to pretest how the public would take interest in the first production Mustang. The 1963 Mustang II concept car was designed with a variation of the production model's front and rear ends with a roof that was 2.7 inches shorter than the production model's fastback roofline.", sold: 50, available: 50 },
    ];

    cars.forEach((car) => {
        const vehiculo = new vehiculoSchema(car);
        vehiculo.save();
    });

    res.send("Vehiculos creados");
}

export { createInfo };