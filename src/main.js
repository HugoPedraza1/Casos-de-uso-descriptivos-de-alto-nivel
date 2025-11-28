
const token = localStorage.getItem('userToken');

if (!token) {
    // Si no hay token, redirigir al login
    window.location.href = '/login.html';
}


document.getElementById("logoutBtn")?.addEventListener("click", () => {
    localStorage.removeItem('userToken');
    window.location.href = '/login.html';
});


let total = 0;

document.getElementById("agregarBtn").addEventListener("click", () => {
    const producto = document.getElementById("producto").value;
    const relleno = document.getElementById("relleno").value;
    const cantidad = parseInt(document.getElementById("cantidad").value);

    const precios = {
        Taco: 15,
        Quesadilla: 35,
        Volcán: 20,
        Refresco: 20
    };

    const subtotal = precios[producto] * cantidad;
    total += subtotal;

    const ticket = document.getElementById("ticket");
    ticket.innerHTML += `<p>${cantidad}x ${producto} (${relleno}) - $${subtotal}</p>`;

    document.getElementById("total").innerText = total;
});

document.getElementById("calcularBtn").addEventListener("click", () => {
    const pago = parseFloat(document.getElementById("pago").value);
    const cambio = pago - total;
    document.getElementById("cambio").innerText = cambio >= 0 ? cambio : 0;
});

document.getElementById("nuevoBtn").addEventListener("click", () => {
    total = 0;
    document.getElementById("ticket").innerHTML = "";
    document.getElementById("total").innerText = "0";
    document.getElementById("pago").value = "";
    document.getElementById("cambio").innerText = "0";
});

document.getElementById("imprimirBtn").addEventListener("click", () => {
    window.print();
});