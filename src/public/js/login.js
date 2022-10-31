const form = document.getElementById("form");

addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = form.email.value;
    const password = form.password.value;
    await fetch("/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            password,
        }),
    }).then((res) => res.json())
        .then((data) => {
            if (data.message) {
                window.location.href = "/home";
            } else {
                document.getElementById("error").innerHTML = data;
                setTimeout(() => {
                    document.getElementById("error").innerHTML = "";
                }, 5000);
            }
        })
        .catch((err) => alert(err))
        .finally(() => {
            form.password.value = "";
        });
});

addEventListener("change", (e) => {
    document.getElementById("error").innerHTML = "";
});