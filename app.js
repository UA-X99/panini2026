// ─── Mi Álbum Panini 2026 — app.js ───────────────────────────────────────────
const LS_KEY = 'panini2026_v1'

// ── Estado ──────────────────────────────────────────────────────────────────
let state = {}
try { state = JSON.parse(localStorage.getItem(LS_KEY) || '{}') } catch (_) { state = {} }

function save() {
  try { localStorage.setItem(LS_KEY, JSON.stringify(state)) } catch (_) {}
}

// 0 = vacía, 1 = tengo, 2 = repetida
function getS(n)   { return state[String(n)] || 0 }
function setS(n,v) { if (v === 0) delete state[String(n)]; else state[String(n)] = v; save() }
function cycleS(n) { const v = (getS(n) + 1) % 3; setS(n, v); return v }

// ── Filtros / búsqueda ───────────────────────────────────────────────────────
let activeGroup = 'ALL'
let activeConf  = 'ALL'
let searchText  = ''

// ── Render principal ─────────────────────────────────────────────────────────
function renderAll() {
  renderSummary()
  renderGrid()
}

function renderSummary() {
  const all = ALBUM.countries.flatMap(c => c.stickers)
  let got = 0, rep = 0
  all.forEach(s => { const v = getS(s.num); if (v===1) got++; else if (v===2) rep++ })
  const total   = ALBUM.total
  const missing = total - got
  const pct     = (got / total * 100).toFixed(1)

  document.getElementById('cnt-got').textContent   = got
  document.getElementById('cnt-miss').textContent   = missing
  document.getElementById('cnt-rep').textContent    = rep
  document.getElementById('cnt-total').textContent  = total
  document.getElementById('cnt-pct').textContent    = pct + '%'
  document.getElementById('prog-bar').style.width   = pct + '%'
}

function renderGrid() {
  const grid = document.getElementById('grid')
  grid.innerHTML = ''

  const countries = ALBUM.countries.filter(c => {
    if (activeGroup !== 'ALL' && c.group !== activeGroup) return false
    if (activeConf  !== 'ALL' && c.conf  !== activeConf)  return false
    if (searchText && !c.name.toLowerCase().includes(searchText.toLowerCase())) return false
    return true
  })

  countries.forEach(c => {
    const got   = c.stickers.filter(s => getS(s.num) >= 1).length
    const total = c.stickers.length
    const pct   = Math.round(got / total * 100)

    const card = document.createElement('div')
    card.className = 'country-card'
    card.dataset.id = c.id
    card.innerHTML = `
      <div class="card-header">
        <span class="flag">${c.flag}</span>
        <div class="card-info">
          <span class="country-name">${c.name}</span>
          <span class="group-badge">Grupo ${c.group} · ${c.conf}</span>
        </div>
        <span class="card-pct">${pct}%</span>
      </div>
      <div class="prog-wrap">
        <div class="prog-fill" style="width:${pct}%"></div>
      </div>
      <div class="card-counts">${got}/${total} láminas · Nº ${c.start}–${c.end}</div>
    `
    card.addEventListener('click', () => openModal(c))
    grid.appendChild(card)
  })

  if (!countries.length) {
    grid.innerHTML = '<p class="empty">No se encontraron selecciones.</p>'
  }
}

// ── Modal ────────────────────────────────────────────────────────────────────
function openModal(country) {
  const modal   = document.getElementById('modal')
  const title   = document.getElementById('modal-title')
  const grid    = document.getElementById('modal-grid')
  const counter = document.getElementById('modal-counter')

  title.textContent = `${country.flag}  ${country.name} — Grupo ${country.group}`
  grid.innerHTML = ''

  function refreshCounter() {
    const got = country.stickers.filter(s => getS(s.num) >= 1).length
    counter.textContent = `${got}/${country.stickers.length}`
  }

  country.stickers.forEach(s => {
    const el = document.createElement('div')
    el.className = 'sticker'
    el.dataset.num = s.num
    refreshSticker(el, s)
    el.addEventListener('click', () => {
      cycleS(s.num)
      refreshSticker(el, s)
      refreshCounter()
      renderSummary()
      renderGrid()
    })
    grid.appendChild(el)
  })

  refreshCounter()
  modal.classList.remove('hidden')
  document.body.style.overflow = 'hidden'
}

function refreshSticker(el, s) {
  const v = getS(s.num)
  el.className = 'sticker' + (v===1 ? ' got' : v===2 ? ' rep' : '')
  const typeIcon = s.type === 'badge' ? '⭐' : s.type === 'team' ? '📸' : '👤'
  el.innerHTML = `
    <div class="st-num">${s.num}</div>
    <div class="st-code">${s.code}</div>
    <div class="st-icon">${typeIcon}</div>
    <div class="st-label">${s.label}</div>
    <div class="st-state">${v===1 ? '✓ Tengo' : v===2 ? '＋ Repetida' : '○ Falta'}</div>
  `
}

function closeModal() {
  document.getElementById('modal').classList.add('hidden')
  document.body.style.overflow = ''
}

// ── Exportar faltantes ───────────────────────────────────────────────────────
function buildMissingList() {
  const lines = []
  ALBUM.countries.forEach(c => {
    const missing = c.stickers.filter(s => getS(s.num) === 0)
    if (missing.length) {
      lines.push(`\n=== ${c.flag} ${c.name} (Grupo ${c.group}) ===`)
      missing.forEach(s => lines.push(`  ${s.code} · Nº${s.num} · ${s.label}`))
    }
  })
  return lines.join('\n').trim()
}

function copyMissing() {
  const text = buildMissingList()
  navigator.clipboard.writeText(text)
    .then(() => alert('✅ Lista copiada al portapapeles'))
    .catch(() => alert('No se pudo copiar. Usa el botón Descargar.'))
}

function downloadMissing() {
  const text = buildMissingList()
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' })
  const a    = document.createElement('a')
  a.href     = URL.createObjectURL(blob)
  a.download = 'faltantes-panini2026.txt'
  a.click()
}

function resetAlbum() {
  if (!confirm('¿Seguro que quieres reiniciar el álbum? Se perderá todo el progreso.')) return
  state = {}
  save()
  renderAll()
  closeModal()
}

// ── Grupos / filtros ─────────────────────────────────────────────────────────
function buildGroupNav() {
  const nav = document.getElementById('group-nav')
  const groups = ['ALL','A','B','C','D','E','F','G','H','I','J','K','L']
  groups.forEach(g => {
    const btn = document.createElement('button')
    btn.textContent = g === 'ALL' ? 'Todos' : 'G-' + g
    btn.className   = 'nav-btn' + (g === activeGroup ? ' active' : '')
    btn.addEventListener('click', () => {
      activeGroup = g
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'))
      btn.classList.add('active')
      renderGrid()
    })
    nav.appendChild(btn)
  })
}

// ── Iniciar ───────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildGroupNav()
  renderAll()

  // Búsqueda
  document.getElementById('search').addEventListener('input', e => {
    searchText = e.target.value
    renderGrid()
  })

  // Cerrar modal al hacer clic en el fondo o en el botón X
  document.getElementById('modal').addEventListener('click', e => {
    if (e.target === document.getElementById('modal')) closeModal()
  })
  document.getElementById('modal-close').addEventListener('click', closeModal)

  // Botones de acción
  document.getElementById('btn-copy').addEventListener('click', copyMissing)
  document.getElementById('btn-dl').addEventListener('click', downloadMissing)
  document.getElementById('btn-reset').addEventListener('click', resetAlbum)
})
