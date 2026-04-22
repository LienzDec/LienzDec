const idsDrive = [
    "1sk4gs3ktSvElmwj4Txx0UX1W0kN6AnHg", "1IjgV90yXkDxicSL5qLZ2BX3bScCa0u7k", "1dW29SXxs_jLLz-uzZtSoEi4HdnNxWNID",
    "18oVfvIjyqgqMLuKAV2IWQyE9SjPkmZ6M", "1fDxy101xsImKQtN3N6LRiDmNFCTtxIrL", "1MLXyoMjyPBYlnliMCDoqdfzf2WEqzpXm",
    "19-M6NZ8c91dZCQeJyYTIRCsK3DModN1X", "1Pj5SogZuApdrnIZhKnD6OdtGaeuqFr1s", "18mBesOXaJVilK-tqrdQOjcU9SKXQmK1X",
    "1E1ezp-yRPV3toKV3zEsgOimoCkGPpGl3", "1Nz8K7hwE2XMjScg3jR2dqyqDcFftiGET", "18RkuxiRWJhTRKUWOc3Yn9IDadpPP9Par",
    "1j1CTjI8t3WE07O6YmcgObkThO2JaOHqn", "1_YpSK8qXng7AZpYGhRpcpq3nG-KRTEKU", "1cYsXF8-Yp-H35qb4orr_u_ys-TfH1ZL4",
    "1Ud5IwwO1pE9LxtEaxPpQuYAZuLyNV3VY", "1AqUGGAygevMw72YulinbAD9y5TvapU04", "1ukfCeRn7KO7xDhYqZJnSp1m94DpUqXHr",
    "1XZHYf-ovhDzl6QyYIQv1pK71pWI9O3wH", "1hAwqX57I5_kDTtWADQhwoFRZFpRkSr6x", "19re0iRLMdHkoZR39Po9BWQlLMTH7-0sZ",
    "1xyuTurLLT2cJwk5hmeJ8aXgrcrNdAbzd", "1qbMJF68sCcBGi-FXMin9jDT-08MxBxcZ", "1InerzWsdTvKGRSxMoA8huyKWAM0wmi8a",
    "1Y8aoTw7qF9-fbCj2YMe4H3YOINLFiAw7", "1mieovVCoTOR_XvAcql_qBFFxZ2NBEJWc", "1vyFyuG6AkrnbXEblz8bhX3_QJILHpV-k",
    "1LPiw_CVVohCQxF9cHha3-ey49pLbTA0w", "1oexgEVE4mEocJVO33dqAVNEHeQ4OUTXM", "12tZj_2dSY7XKCNbRNu8swlwdKtONfcDj",
    "15_PAz0LMmyrLyH6ThPScVuMCpzUAQIs3", "1isaLWqClCWC-12TG0dhrGPSCVhE7emCT", "1g6xFQmjHFcIKpMDf_K-v708yWzwckvyr",
    "185v58he12zbXHBVVDvz-1hPjlIQCsLjQ", "1ERktTRCK-1Mw-oX5eyythYJbmJGlH6X1", "1cIFMI_JZ2K6ff1bjZrJ6Nh6Z0mydGBsZ",
    "15ksIDHUOeWWKTL0NCElm50dBjRnZ3dpN", "1shjXTjFBDExECLnS6mNnco2wEQH_R4VB", "1xE41GwcJ5BLYdxf1t3_dgRmOIV2Gx8Iy",
    "1WsyDI4NmzJw5toZuRRLgNi5wQFurb1sS", "1KK29bYfqwtoaneSfjPi2E1vIgGNHsIas", "15PIhxv_AYnkT0TZCyYhXwmiGVjHgxeZr",
    "1k90EYcEzbhGVK8GjTdPfLXRStqLMbFIw", "18XvE3rceSukfZOecEtVqrGVr56XfSpb0", "16iIRwyzh_oYBP8x6ZSlHUsPK2rVt1BWZ",
    "13oN_9BBFP58CfnAuwjQEXhEOhj6bkNrO", "1m-cQIrBRvfLTn9dFteoW8RS1K929AomA", "1x9HL8mEcDBoi8m7sZW_hi2_LFq4QslUv",
    "1oB2zOrWMmLNXgEWZrluVvjdWhldDpsUl", "14siy_GRwrcUAvsM6oNSdnaV1xoeKRrxz", "1y_gGa9Pfq-KHfIak-3L7qv2UW589geFP",
    "1XY6T7wc-oj8o3Kol6WWQ_BvA-RCyPeq2", "1HxEQXezKjTTVrLsiift_RPazmyGxl2On", "1GAD-EYFDIs6vSwp-ubw6RzehTxSOCwUt",
    "1KwScKcmqRbRjJYLXC7_j6B1lc8VNo-Se", "147JZcRs4WrUbB4WD342oJCIqIs1STsiW", "1hjhGBm-cIfmZZ8e7GhrxYpsxR6gTTqIM",
    "1euH6HA2S_x5OOmGTsmEh_-IEpIbTF6Gz", "1Rcmy8pO4MAPitTniWjDEwlrrBc2Tq6RN", "16fJIdpzuOBDe-j8-nxP-DmK55Kz-5doN",
    "1HCnqZlAOY8fTgKCaF7PAzaylPrfCDTMK", "1F7paWN7U2_pJdhhzIpZsqZGIT8-fOj-e", "1-fUdk0m7wg6DImry64LGRmuAcA8sf78R",
    "1c7TP7AOfEQJow1DIbEKmAJqoVbF7ySkH", "1eFIm1qkFoT_34ijaj6v63QxwQYwtKwbM", "15k4LVoV6cVeXc0uvIxINugnlPPM7aJBo"
];

const miTelefono = "523300000000"; // PON AQUÍ TU NÚMERO (Ej: 523312345678)

const productos = idsDrive.map((id, index) => ({
    id: `PD2-${(index + 1).toString().padStart(2, '0')}`,
    nombre: `Diseño Premium ${(index + 1)}`,
    color: index % 3 === 0 ? 'dorado' : 'gris', 
    imagen: `https://drive.google.com/uc?export=view&id=${id}`
}));

const catalog = document.getElementById('catalog');
const searchInput = document.getElementById('searchInput');
const colorFilter = document.getElementById('colorFilter');

function renderCatalog(items) {
    catalog.innerHTML = '';
    items.forEach(prod => {
        const card = document.createElement('div');
        card.className = 'card';
        const mensajeWA = encodeURIComponent(`Hola LienzDec, me interesa el diseño ${prod.nombre} (ID: ${prod.id}) para impresión.`);
        const linkWA = `https://wa.me/${miTelefono}?text=${mensajeWA}`;

        card.innerHTML = `
            <img src="${prod.imagen}" alt="${prod.nombre}" loading="lazy">
            <div class="card-info">
                <h3>${prod.nombre}</h3>
                <span class="card-id">CATÁLOGO PD2 | ${prod.id}</span>
                <a href="${linkWA}" target="_blank" class="btn-whatsapp">Consultar</a>
            </div>
        `;
        catalog.appendChild(card);
    });
}

function filtrar() {
    const text = searchInput.value.toLowerCase();
    const color = colorFilter.value;
    const filtrados = productos.filter(p => {
        const matchText = p.nombre.toLowerCase().includes(text) || p.id.toLowerCase().includes(text);
        const matchColor = color === 'all' || p.color === color;
        return matchText && matchColor;
    });
    renderCatalog(filtrados);
}

searchInput.addEventListener('input', filtrar);
colorFilter.addEventListener('change', filtrar);
renderCatalog(productos);