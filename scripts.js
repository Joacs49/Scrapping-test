function activarScraping() {
  const webhookUrl = window.config.webhookUrl;

    fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then((res) => {
        const msg = document.getElementById("mensaje");
        if (res.ok) {
          msg.textContent = "✔ Automatización iniciada correctamente.";
        } else {
          msg.textContent = "✖ Error al iniciar la automatización.";
          msg.style.color = "red";
        }
      })
      .catch((error) => {
        document.getElementById("mensaje").textContent =
          "✖ Error en la conexión.";
        console.error(error);
      });
  }
  