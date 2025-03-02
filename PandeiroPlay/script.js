// Define a localização inicial como Florianópolis
var map = L.map('map').setView([-27.5954, -48.5480], 13); 

// Adiciona o mapa do OpenStreetMap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Adiciona um marcador em Florianópolis
L.marker([-27.5954, -48.5480]).addTo(map)
    .bindPopup(' Florianópolis: Centro📍')
    .openPopup();

// Função para obter a localização do usuário em tempo real
function localizarUsuario() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(function(position) {
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;

            // Centraliza o mapa na localização do usuário
            map.setView([lat, lng], 15);

            // Adiciona um marcador na localização do usuário
            L.marker([lat, lng]).addTo(map)
                .bindPopup('Você está aqui! 🏠')
                .openPopup();
        }, function(error) {
            console.error("Erro ao obter localização: ", error);
        });
    } else {
        alert("Geolocalização não suportada pelo seu navegador.");
    }
}

// Chama a função para localizar o usuário
localizarUsuario();

// 

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const menuModal = document.getElementById("menu-modal");
    const closeMenu = document.getElementById("close-menu");
    const overlay = document.getElementById("overlay");

    menuToggle.addEventListener("click", () => {
        menuModal.classList.add("active");
        overlay.classList.add("active");
    });

    closeMenu.addEventListener("click", () => {
        menuModal.classList.remove("active");
        overlay.classList.remove("active");
    });

    overlay.addEventListener("click", () => {
        menuModal.classList.remove("active");
        overlay.classList.remove("active");
    });
});


// 

document.getElementById("animate_confetti").addEventListener("click", () => {
            
    let params = {
        particleCount: 500, // Quantidade de confetes
        spread: 90, // O quanto eles se espalham
        startVelocity: 70, // Velocidade inicial
        origin: { x: 0, y: 0.5 }, // Posição inicial na tela
        angle: 45 // Ângulo em que os confetes serão lançados
    };

    // Joga confetes da esquerda pra direita
    confetti(params);

    // Joga confetes da direita para a esquerda
    params.origin.x = 1;
    params.angle = 135;
    confetti(params);

});


// rotas de navegassao dos links e as section

document.getElementById('irinicio').addEventListener('click', function() {
    document.getElementById('inicio').scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('irRepositorio').addEventListener('click', function() {
    document.getElementById('Repositorio').scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('irMapa').addEventListener('click', function() {
    document.getElementById('Mapa').scrollIntoView({ behavior: 'smooth' });
  });
  document.getElementById('irContato').addEventListener('click', function() {
    document.getElementById('Contato').scrollIntoView({ behavior: 'smooth' });
  });


function irMapabutton () {
    document.getElementById('Mapa').scrollIntoView({ behavior: 'smooth' });
}

