document.addEventListener("DOMContentLoaded", function () {
  const buyButton = document.getElementById("buyButton");

  function calculateTotal() {
    const ticketType = document.getElementById("ticketType").value;
    const quantity = document.getElementById("quantity").value;
    let pricePerTicket;

    // Tentukan harga tiket berdasarkan jenis tiket yang dipilih
    if (ticketType === "regular") {
      pricePerTicket = 50000;
    } else if (ticketType === "vip") {
      pricePerTicket = 100000;
    } else if (ticketType === "vvip") {
      pricePerTicket = 200000;
    }

    // Hitung total harga
    const totalPrice = pricePerTicket * quantity;

    // Tampilkan total harga di elemen totalPrice
    document.getElementById(
      "totalPrice"
    ).innerText = `Total Harga: Rp ${totalPrice.toLocaleString()}`;
  }

  // Mencegah form submit untuk simulasi pembelian
  document
    .getElementById("ticketForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Pembelian tiket berhasil!");
    });

  buyButton.addEventListener("click", function () {
    alert(
      "Terima kasih telah membeli tiket! Kami akan menghubungi Anda segera."
    );
  });
});
