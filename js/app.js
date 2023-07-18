const alertBanner = document.getElementById("alert");

alertBanner.innerHTML = `<div class="alert-banner"><p><strong>Alert:</strong>You have unread messages</p>
<p class="alert-banner-close">x</p>
</div>`

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = "none"
    }
});

let trafficOptions = {
    backgroundColor: 'rgba(112, 104, 201, .5)',
    fill: true,
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

let trafficChart = new CharacterData(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});


