// ========================================
// DATA (from V5 JSON)
// ========================================
const videoScripts = [
    {
        titulo: "Você cuidou de todo mundo… mas esqueceu de você?", tipo: "relacionamento", formato: "Reels (até 3 min)", duracao: "3:00 min", descricao_post: "Você cuidou de todo mundo. Agora é sua vez ❤️", dores: "Culpa, abandono próprio, dignidade, identificação profunda", roteiro: [
            { cena: 1, tempo: "00:01–00:05", tipo: "GANCHO", desc: "\"Deixa eu te fazer uma pergunta… você também foi aquela pessoa que sempre cuidou de todo mundo… mas nunca cuidou de si?\"" },
            { cena: 2, tempo: "00:05–00:20", tipo: "CONTEXTO", desc: "\"Trabalhou a vida inteira… ajudou os filhos… segurou as contas da casa… abriu mão de muita coisa… até da sua própria saúde…\"" },
            { cena: 3, tempo: "00:20–00:40", tipo: "DOR", desc: "\"E hoje… quando você precisa ler uma mensagem no celular… ou ver a receita na cozinha… ou até assistir TV… você percebe que sua visão não tá mais a mesma…\"" },
            { cena: 4, tempo: "00:40–01:10", tipo: "DOR", desc: "\"E aí vem aquela sensação… de ter que pedir ajuda… de depender dos outros… de ouvir 'mãe, a senhora não tá enxergando isso?'…\"" },
            { cena: 5, tempo: "01:10–01:40", tipo: "TRANSIÇÃO", desc: "\"Mas deixa eu te falar uma coisa que talvez ninguém nunca te falou…\"" },
            { cena: 6, tempo: "01:40–02:10", tipo: "VIRADA", desc: "\"Você não errou em cuidar dos outros. Mas agora… chegou a sua vez.\"" },
            { cena: 7, tempo: "02:10–02:40", tipo: "SOLUÇÃO", desc: "\"Aqui na Oh!tica, a gente entende sua história. E por isso a gente criou uma forma simples de você voltar a enxergar bem… sem cartão… sem complicação… e com respeito.\"" },
            { cena: 8, tempo: "02:40–03:00", tipo: "CTA", desc: "\"Se você sente que já passou da hora de cuidar de você… manda uma mensagem pra gente. Você merece isso.\"" },
        ]
    },
    {
        titulo: "Por que seu óculos da farmácia não resolve (e pode piorar)", tipo: "transformacao", formato: "Reels", duracao: "2:40 min", descricao_post: "O barato pode sair caro — principalmente com sua visão.", dores: "Desinformação, visão piorando, solução errada", roteiro: [
            { cena: 1, tempo: "00:01–00:05", tipo: "GANCHO", desc: "\"Se você comprou óculos na farmácia e mesmo assim não enxerga direito… isso aqui pode estar piorando sua visão.\"" },
            { cena: 2, tempo: "00:05–00:25", tipo: "CONTEXTO", desc: "\"Esses óculos são feitos pra todo mundo… mas cada olho é diferente.\"" },
            { cena: 3, tempo: "00:25–00:50", tipo: "DOR", desc: "\"Pode até ajudar por um tempo… mas depois começa dor de cabeça, cansaço e visão ainda pior.\"" },
            { cena: 4, tempo: "00:50–01:20", tipo: "SOLUÇÃO", desc: "\"O certo é um óculos feito pra você. Com o grau certo. Do jeito que seu olho precisa.\"" },
            { cena: 5, tempo: "01:20–01:50", tipo: "QUEBRA", desc: "\"E não… isso não precisa ser caro ou complicado.\"" },
            { cena: 6, tempo: "01:50–02:20", tipo: "SOLUÇÃO", desc: "\"Aqui na Oh!tica você consegue fazer seu óculos mesmo sem cartão.\"" },
            { cena: 7, tempo: "02:20–02:40", tipo: "CTA", desc: "\"Se você já tentou de tudo e nada resolveu… fala com a gente.\"" },
        ]
    },
    {
        titulo: "Me conta uma coisa (eu vou te responder)", tipo: "interacao", formato: "Reels", duracao: "2:00 min", descricao_post: "Eu vou te responder de verdade. Pode confiar ❤️", dores: "Isolamento, vergonha, solidão", roteiro: [
            { cena: 1, tempo: "00:01–00:05", tipo: "GANCHO", desc: "\"Posso te fazer uma pergunta sincera?\"" },
            { cena: 2, tempo: "00:05–00:15", tipo: "CONTEXTO", desc: "\"Qual é a maior dificuldade que você tem hoje por não enxergar bem?\"" },
            { cena: 3, tempo: "00:15–00:40", tipo: "DOR", desc: "\"É ler? É cozinhar? É mexer no celular? É depender dos outros?\"" },
            { cena: 4, tempo: "00:40–01:10", tipo: "CTA", desc: "\"Me conta aqui nos comentários ou manda mensagem pra gente…\"" },
            { cena: 5, tempo: "01:10–01:40", tipo: "VIRADA", desc: "\"Eu vou ler um por um… e te responder com carinho, sem julgamento.\"" },
            { cena: 6, tempo: "01:40–02:00", tipo: "CTA", desc: "\"Porque ninguém merece passar por isso sozinho.\"" },
        ]
    },
    {
        titulo: "Mesmo com nome negativado, você pode fazer seu óculos", tipo: "venda", formato: "Reels", duracao: "2:40 min", descricao_post: "Aqui ninguém te julga. Aqui a gente resolve.", dores: "Exclusão financeira, nome negativado, vergonha", roteiro: [
            { cena: 1, tempo: "00:01–00:05", tipo: "GANCHO", desc: "\"Seu nome tá negativado e você acha que não consegue fazer óculos?\"" },
            { cena: 2, tempo: "00:05–00:25", tipo: "CONTEXTO", desc: "\"É exatamente por isso que muita gente continua sem enxergar…\"" },
            { cena: 3, tempo: "00:25–00:50", tipo: "VIRADA", desc: "\"Mas aqui na Oh!tica é diferente.\"" },
            { cena: 4, tempo: "00:50–01:20", tipo: "SOLUÇÃO", desc: "\"A gente acredita que enxergar bem não é luxo… é necessidade.\"" },
            { cena: 5, tempo: "01:20–01:50", tipo: "SOLUÇÃO", desc: "\"Por isso você pode parcelar no boleto. Sem cartão. Sem complicação.\"" },
            { cena: 6, tempo: "01:50–02:20", tipo: "VIRADA", desc: "\"E com atendimento de verdade… com respeito… do jeito que você merece.\"" },
            { cena: 7, tempo: "02:20–02:40", tipo: "CTA", desc: "\"Se você achava que não tinha solução… agora tem.\"" },
        ]
    },
];

const carousels = [
    {
        titulo: "Você também faz isso pra conseguir enxergar melhor?", tipo: "engajamento", formato: "Carrossel Instagram (8 Cards)", desc_post: "Comenta aqui qual desses você faz 👇", cards: [
            { n: 1, tipo: "GANCHO", texto: "Você também faz isso pra conseguir enxergar melhor?" },
            { n: 2, tipo: "CONTEÚDO", texto: "Afasta o celular do rosto até o braço não aguentar mais" },
            { n: 3, tipo: "CONTEÚDO", texto: "Pede pro filho/neto ler mensagem" },
            { n: 4, tipo: "CONTEÚDO", texto: "Aumenta o volume da TV achando que é problema de audição" },
            { n: 5, tipo: "CONTEÚDO", texto: "Finge que entendeu o que leu" },
            { n: 6, tipo: "CONTEÚDO", texto: "Usa óculos velho que já não ajuda mais" },
            { n: 7, tipo: "QUEBRA", texto: "Se você faz pelo menos 2 desses… não é normal da idade." },
            { n: 8, tipo: "CTA", texto: "É falta de óculos certo. E tem solução — mesmo sem cartão." },
        ]
    },
    {
        titulo: "A verdade que ninguém te conta sobre o preço dos óculos", tipo: "autoridade", formato: "Carrossel Instagram (9 Cards)", desc_post: "Nem todo lugar é igual. E você merece saber disso.", cards: [
            { n: 1, tipo: "GANCHO", texto: "A verdade que ninguém te conta sobre o preço dos óculos" },
            { n: 2, tipo: "CONTEÚDO", texto: "Óculos não é caro… o problema é como te vendem" },
            { n: 3, tipo: "CONTEÚDO", texto: "Muitos lugares aumentam preço por causa de cartão e parcelamento" },
            { n: 4, tipo: "CONTEÚDO", texto: "Outros empurram o que você não precisa" },
            { n: 5, tipo: "CONTEÚDO", texto: "E quem mais sofre com isso? Quem mais precisa" },
            { n: 6, tipo: "CONTEÚDO", texto: "Mas existe outra forma" },
            { n: 7, tipo: "CONTEÚDO", texto: "Aqui você paga de forma simples, sem cartão" },
            { n: 8, tipo: "CONTEÚDO", texto: "E só pelo que realmente precisa" },
            { n: 9, tipo: "CTA", texto: "Óculos com respeito e preço justo existem. E estão mais perto do que você imagina." },
        ]
    },
];

// ========================================
// SPA NAVIGATION
// ========================================
function showSection(id) {
    document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
    const sec = document.getElementById(id);
    if (sec) sec.classList.add('active');
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    const link = document.querySelector(`nav a[href="#${id}"]`);
    if (link) link.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (document.getElementById('mainNav').classList.contains('active')) toggleMenu();
    // Trigger reveals & consciousness bars in new section
    setTimeout(() => { observeReveals(); animateConsciousness(); }, 100);
}

// ========================================
// MOBILE MENU
// ========================================
function toggleMenu() {
    document.getElementById('hamburger').classList.toggle('active');
    document.getElementById('mainNav').classList.toggle('active');
    document.getElementById('mobileOverlay').classList.toggle('active');
}

// ========================================
// TABS
// ========================================
function openTab(evt, tabName) {
    document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.classList.add('active');
    if (tabName === 'tab-consc') setTimeout(animateConsciousness, 200);
}

// ========================================
// RENDER VIDEO SCRIPTS
// ========================================
function renderVideoScripts() {
    const container = document.getElementById('video-scripts-container');
    const typeColors = { relacionamento: 'sh-relacionamento', transformacao: 'sh-transformacao', interacao: 'sh-interacao', venda: 'sh-venda', autoridade: 'sh-autoridade' };
    const typeEmojis = { relacionamento: '🔵', transformacao: '🟢', interacao: '🟡', venda: '🔴', autoridade: '⚫' };

    videoScripts.forEach(v => {
        const rows = v.roteiro.map(r => `<tr><td style="font-weight:600;">${r.cena}</td><td>${r.tempo}</td><td><span class="script-type-badge">${r.tipo}</span></td><td>${r.desc}</td></tr>`).join('');
        container.innerHTML += `
        <div class="script-box reveal">
            <div class="script-header ${typeColors[v.tipo]}">
                <h3>${typeEmojis[v.tipo]} ${v.titulo}</h3>
                <div class="script-meta"><span>${v.formato}</span><span>Duração: ${v.duracao}</span><span>${v.roteiro.length} cenas</span></div>
            </div>
            <div class="script-desc">📝 ${v.descricao_post}</div>
            <div class="table-responsive"><table class="script-table"><thead><tr><th style="width:60px">Cena</th><th style="width:100px">Tempo</th><th style="width:90px">Tipo</th><th>Ações, Visual & Áudio</th></tr></thead><tbody>${rows}</tbody></table></div>
            <div class="dores-tag">🎯 Dores trabalhadas: ${v.dores}</div>
        </div>`;
    });
}

// ========================================
// RENDER CAROUSELS
// ========================================
function renderCarousels() {
    const container = document.getElementById('carousels-container');
    carousels.forEach((c, idx) => {
        const slides = c.cards.map((card, i) => `
            <div class="carousel-slide ${i === 0 ? 'active' : ''}" data-carousel="${idx}">
                <div class="card-number">Card ${card.n} de ${c.cards.length}</div>
                <div class="card-type-badge">${card.tipo}</div>
                <div class="card-text">${card.texto}</div>
            </div>`).join('');

        container.innerHTML += `
        <div class="carousel-container reveal">
            <div class="carousel-header"><span class="badge badge-${c.tipo === 'engajamento' ? 'success' : 'warning'}">${c.tipo.toUpperCase()}</span><h3>${c.titulo}</h3><p style="font-size:0.85rem;color:var(--text-secondary);">${c.formato}</p></div>
            <div class="carousel-viewer" id="viewer-${idx}">${slides}</div>
            <div class="carousel-nav">
                <button class="carousel-btn" onclick="changeCard(${idx},-1)" id="prev-${idx}">◀ Anterior</button>
                <span class="carousel-counter" id="counter-${idx}">Card 1 de ${c.cards.length}</span>
                <button class="carousel-btn" onclick="changeCard(${idx},1)" id="next-${idx}">Próximo ▶</button>
            </div>
            <div class="carousel-post-desc">📝 Legenda: ${c.desc_post}</div>
        </div>`;
    });
}

const carouselState = {};
function changeCard(idx, dir) {
    if (!carouselState[idx]) carouselState[idx] = 0;
    const slides = document.querySelectorAll(`[data-carousel="${idx}"]`);
    const total = slides.length;
    slides[carouselState[idx]].classList.remove('active');
    carouselState[idx] = Math.max(0, Math.min(total - 1, carouselState[idx] + dir));
    slides[carouselState[idx]].classList.add('active');
    document.getElementById(`counter-${idx}`).textContent = `Card ${carouselState[idx] + 1} de ${total}`;
}

// ========================================
// SCROLL REVEAL
// ========================================
function observeReveals() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); observer.unobserve(e.target); } });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal:not(.revealed)').forEach(el => observer.observe(el));
}

// ========================================
// CONSCIOUSNESS BARS
// ========================================
function animateConsciousness() {
    document.querySelectorAll('.consciousness-fill').forEach(bar => {
        const w = bar.dataset.width;
        setTimeout(() => { bar.style.width = w + '%'; }, 200);
    });
}

// ========================================
// COUNTER ANIMATION
// ========================================
function animateCounters() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting && !e.target.dataset.animated) {
                e.target.dataset.animated = 'true';
                const target = parseInt(e.target.dataset.target);
                if (!target) return;
                const suffix = e.target.dataset.suffix || '';
                const prefix = e.target.dataset.prefix || '';
                const duration = 1500;
                const start = Date.now();
                const tick = () => {
                    const elapsed = Date.now() - start;
                    const progress = Math.min(elapsed / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    const current = Math.round(eased * target);
                    e.target.textContent = prefix + (target >= 1000 ? Math.round(current / 1000) + 'mil' : current) + suffix;
                    if (progress < 1) requestAnimationFrame(tick);
                };
                tick();
            }
        });
    }, { threshold: 0.5 });
    document.querySelectorAll('.insight-metric[data-target]').forEach(el => observer.observe(el));
}

// ========================================
// CHARTS
// ========================================
function renderCharts() {
    const blue = '#2563EB';
    const blueLight = 'rgba(37, 99, 235, 0.1)';
    const navy = '#0A1628';
    const opts = { responsive: true, plugins: { legend: { display: false } }, animation: { duration: 1200 } };

    // Home Line
    new Chart(document.getElementById('homeLineChart'), { type: 'line', data: { labels: ['2020', '2021', '2022', '2023', '2024', '2025'], datasets: [{ label: 'Buscas', data: [120, 150, 210, 350, 480, 650], borderColor: blue, backgroundColor: blueLight, tension: 0.4, fill: true, pointRadius: 4, pointBackgroundColor: blue }] }, options: opts });

    // Home Bar
    new Chart(document.getElementById('homeBarChart'), { type: 'bar', data: { labels: ['Armações', 'Lentes', 'Exames', 'Limpeza', 'Acessórios'], datasets: [{ data: [85, 95, 70, 30, 25], backgroundColor: [blue, navy, '#3B82F6', '#93C5FD', '#BFDBFE'], borderRadius: 6 }] }, options: opts });

    // Main Line
    new Chart(document.getElementById('mainLineChart'), { type: 'line', data: { labels: ['2020', '2021', '2022', '2023', '2024', '2025'], datasets: [{ label: 'Volume de Buscas', data: [120, 150, 210, 350, 480, 650], borderColor: blue, backgroundColor: blueLight, tension: 0.4, fill: true }] }, options: { ...opts, plugins: { legend: { display: true, position: 'top' } } } });

    // Main Pie
    new Chart(document.getElementById('mainPieChart'), { type: 'doughnut', data: { labels: ['Google Ads', 'Meta Ads', 'WhatsApp', 'Indicação'], datasets: [{ data: [45, 35, 12, 8], backgroundColor: [navy, blue, '#10B981', '#93C5FD'] }] }, options: { responsive: true, plugins: { legend: { position: 'bottom' } }, animation: { duration: 1200 } } });

    // Main Bar
    new Chart(document.getElementById('mainBarChart'), { type: 'bar', data: { labels: ['Armações', 'Lentes', 'Exames', 'Limpeza', 'Acessórios'], datasets: [{ label: 'Demanda (%)', data: [85, 95, 70, 30, 25], backgroundColor: blue, borderRadius: 6 }] }, options: opts });

    // Radar
    new Chart(document.getElementById('mainRadarChart'), { type: 'radar', data: { labels: ['Dor Emocional', 'Urgência', 'Sensib. Preço', 'Confiança', 'Resist. Digital', 'Influência Social'], datasets: [{ label: 'Persona', data: [95, 80, 90, 85, 60, 70], borderColor: blue, backgroundColor: 'rgba(37,99,235,0.15)', pointBackgroundColor: blue }] }, options: { responsive: true, scales: { r: { beginAtZero: true, max: 100 } }, animation: { duration: 1200 } } });

    // Gauges
    const gaugeOpts = (val, label) => ({ type: 'doughnut', data: { labels: [label, ''], datasets: [{ data: [val, 100 - val], backgroundColor: [blue, '#E2E8F0'], borderWidth: 0 }] }, options: { responsive: true, cutout: '75%', plugins: { legend: { display: false }, tooltip: { enabled: false } }, animation: { duration: 1200 } }, plugins: [{ id: 'centerText', afterDraw(chart) { const { ctx, width, height } = chart; ctx.save(); ctx.font = '700 28px Inter'; ctx.fillStyle = '#0F172A'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(val + '%', width / 2, height / 2 - 5); ctx.font = '500 12px Inter'; ctx.fillStyle = '#64748B'; ctx.fillText(label, width / 2, height / 2 + 18); ctx.restore(); } }] });

    new Chart(document.getElementById('gaugeChart1'), gaugeOpts(65, 'Comparecimento'));
    new Chart(document.getElementById('gaugeChart2'), gaugeOpts(45, 'Conversão'));
}

// ========================================
// INIT
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    renderVideoScripts();
    renderCarousels();
    renderCharts();
    animateCounters();
    observeReveals();
});
