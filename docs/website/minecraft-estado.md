---
description: >-
  Pagina web con HTML, CSS y JS relacionada a servidores de minecraft, estado
  del servidor, rangos y temple.
---

# Minecraft Estado

Esta es una pagina en 3 lenguajes HTML, CSS y JS que muestra el estado del servidor, rangos, términos y condiciones, y por ultimo políticas.

<figure><img src="../.gitbook/assets/Captura de pantalla 2023-11-09 185634.png" alt=""><figcaption></figcaption></figure>

La configuración de la página es directa, ya que implica un diseño de plantilla muy simple. Se requieren dos conjuntos de datos: el token de un Bot o cuenta de Discord, y los detalles del servidor de Minecraft.

## Configuración

Ejemplos de configuración para la página de Minecraft:

### **Servidores**

La página exhibe el estado del servidor web y del servidor de Discord utilizando la API de Discord. Por lo tanto, se precisa un token de acceso para obtener estos datos a través de la API.

```javascript
axios({
    method: "get",
    url: "https://discord.com/api/v10/guilds/<server ID>/members",
    headers: {
        Authorization: `Bot {token}`,
        'Content-Type': 'application/json',
    }
})
    .then(response => {
        const userCount = response.data.length; // Número de usuarios conectados
        const userSection = document.getElementById('discord-users');
        const webSection = document.getElementById("webUsers")
        userSection.innerHTML = `<span class="material-icons-sharp">discord</span> Usuarios conectados: ${userCount}`;
        webSection.innerHTML = `<span class="material-icons-sharp">web</span> Usuarios conectados: ${userCount}`;
    })
    .catch(error => {
        console.error('Error al obtener información de Discord:', error);
    });
```

Para acceder a los datos del servidor web y del servidor de Discord a través de la API de Discord, se requiere el token de un bot o una cuenta de Discord. Este token es esencial para autenticar las solicitudes y obtener los datos necesarios.

## **Minecraft**

La configuración del servidor de Minecraft es aún más simple, ya que solo se necesitan la dirección IP y el puerto del servidor. Estos detalles permiten a la página acceder y mostrar el estado del servidor de Minecraft de manera efectiva.

```javascript
const playerData = {
    labels: [],
    datasets: [
        {
            label: 'Jugadores en línea',
            data: [],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
        },
    ],
};

const ctx = document.getElementById('playerChart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'line',
    data: playerData,
});

async function fetchData() {
    try {
        const response = await axios.get('https://api.mcstatus.io/v2/status/java/{ip}');
        const { players, online, version, server, motd } = response.data;

        document.getElementById('playerCount').textContent = players.online ? players.online : "Disconnected";
        document.getElementById('serverStatus').textContent = online === true ? 'Online' : 'Offline';
        document.getElementById('serverVersion').textContent = version.name_raw ? version.name_raw : "Disconnected";
        document.getElementById('serverMotd').textContent = motd.clean ? motd.clean : "Disconnected";
        updateChart();
    } catch (error) {
        console.error('Error al obtener datos del servidor:', error);
    }
}

function updateChart() {
    const time = new Date().toLocaleTimeString();
    playerData.labels.push(time);
    playerData.datasets[0].data.push(Math.floor(Math.random() * 50));
    chart.update();
}

setInterval(fetchData, 10000);
fetchData();
```

Se genera una tarjeta del servidor y una grafica del flujo de usuarios del servidor a partir de una api [externa](https://mcstatus.io/).

```
https://api.mcstatus.io/v2/status/java/{ip}
```

La tarjeta del servidor se genera a partir de esta misma ip al igual que las UUIDS Y NAMES de los usuarios dentro del servidor de discord.

### Rangos

Los rangos se editan a partir del documento HTML ya que actualmente no existe soporte para una base de datos o una local dentro de la misma pagina web.

```html
      <div class="server-card">
        <div class="rank-name">Behemoth</div>
        <img src="/images/rango/rango1.png" alt="Rango Name" />
        <div class="price">
          <i class="material-icons-sharp">local_offer</i> Precio: $50 USD
          <button class="offer-button" onclick="showOfferNotification()">Oferta</button>
        </div>
        <div class="protection-limit">
          <i class="material-icons-sharp">security</i> Límite de Bloques de Protección: 30 Bloques
        </div>
        <div class="protection-limit"><i class="material-icons-sharp">home</i> Set Homes: 20 /sethome</div>
        <div class="commands-icon" onclick="toggleCommandsList(this)"><i class="material-icons-sharp">info</i></div>
        <div class="commands-list">
          <ul>
            <li>/fly (volar)</li>
            <li>/feed (full comida)</li>
            <li>/ec (abrir tu enderchest)</li>
            <li>/craft (abrir una mesa de trabajo)</li>
            <li>/hat (pon lo que tengas en tu mano en la cabeza)</li>
            <li>/heal (full vida)</li>
            <li>/fix hand (reparar 1 item)</li>
            <li>/fix all (reparar todos tus items)</li>
            <li>/nick (cambia tu nombre)</li>
            <li>/ah sellinventory (subastar inventarios)</li>
          </ul>
        </div>
        <div class="duration-icon" onclick="toggleDurationList(this)"><i class="material-icons-sharp">schedule</i></div>
        <div class="duration-list">
          <ul>
            <li>Mensual: $50 USD</li>
            <li>Permanente: $100 USD</li>
          </ul>
        </div>
      </div>
```

Este es un ejemplo de la estructura de uno de los contenedores de los rangos en la pagina web. Esto es una plantilla no una[ pagina oficial](https://github.com/MikaboshiDev/Web-Minecraft)
