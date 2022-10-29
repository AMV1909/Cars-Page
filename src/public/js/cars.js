export const cars = await fetch("/api/vehiculos", {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
}).then(res => res.json());