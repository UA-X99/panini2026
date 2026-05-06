// ─── Mi Álbum Panini 2026 ────────────────────────────────────────────────────
const LS_KEY = 'panini2026_v1'

let state = {}
try { state = JSON.parse(localStorage.getItem(LS_KEY) || '{}') } catch (_) { state = {} }
function save() { try { localStorage.setItem(LS_KEY, JSON.stringify(state)) } catch (_) {} }

function getS(n)   { return state[String(n)] || 0 }
function setS(n,v) { if (v===0) delete state[String(n)]; else state[String(n)] = v; save() }
function cycleS(n) { const v = (getS(n)+1)%3; setS(n,v); return v }

// ── Filtros ───────────────────────────────────────────────────────────────────
let activeGroup  = 'ALL'
let activeStatus = 'ALL'
let activeConf   = 'ALL'
let searchText   = ''

// ── Cuenta regresiva ──────────────────────────────────────────────────────────
function updateCountdown() {
  const target = new Date('2026-06-11T20:00:00-06:00').getTime()
  const now    = Date.now()
  const diff   = Math.max(0, target - now)
  const days   = Math.floor(diff / 86400000)
  const hrs    = Math.floor((diff % 86400000) / 3600000)
  const min    = Math.floor((diff % 3600000)  / 60000)
  const sec    = Math.floor((diff % 60000)    / 1000)
  document.getElementById('cd-days').textContent = String(days).padStart(2,'0')
  document.getElementById('cd-hrs').textContent  = String(hrs).padStart(2,'0')
  document.getElementById('cd-min').textContent  = String(min).padStart(2,'0')
  document.getElementById('cd-sec').textContent  = String(sec).padStart(2,'0')
}

// ── Render principal ──────────────────────────────────────────────────────────
function renderAll() { renderSummary(); renderGrid() }

function renderSummary() {
  const all = ALBUM.countries.flatMap(c => c.stickers)
  const specials = [...ALBUM.intro, ...ALBUM.history, ...ALBUM.cocacola]
  const everything = [...all, ...specials]
  let got = 0, rep = 0
  everything.forEach(s => { const v=getS(s.num); if(v===1) got++; else if(v===2) rep++ })
  const total   = ALBUM.total
  const missing = total - got
  const pct     = (got/total*100).toFixed(1)

  document.getElementById('cnt-got').textContent   = got
  document.getElementById('cnt-miss').textContent  = missing
  document.getElementById('cnt-miss2').textContent = missing
  document.getElementById('cnt-rep').textContent   = rep
  document.getElementById('pct-num').textContent   = pct
  document.getElementById('prog-bar').style.width  = pct + '%'

  // especiales
  const specGot = specials.filter(s => getS(s.num) >= 1).length
  document.getElementById('spec-info').textContent =
    `00 · FWC 1-19 · CC 1-14 · ${specGot}/${specials.length}`
}

function getCountryStatus(c) {
  const got = c.stickers.filter(s => getS(s.num) >= 1).length
  if (got === 0) return 'empty'
  if (got === c.stickers.length) return 'complete'
  return 'progress'
}

function renderGrid() {
  const grid = document.getElementById('grid')
  grid.innerHTML = ''

  const countries = ALBUM.countries.filter(c => {
    if (activeGroup  !== 'ALL' && c.group !== activeGroup)  return false
    if (activeConf   !== 'ALL' && c.conf  !== activeConf)   return false
    if (activeStatus !== 'ALL' && getCountryStatus(c) !== activeStatus) return false
    if (searchText && !c.name.toLowerCase().includes(searchText.toLowerCase())) return false
    return true
  })

  countries.forEach(c => {
    const got   = c.stickers.filter(s => getS(s.num) >= 1).length
    const total = c.stickers.length
    const pct   = Math.round(got/total*100)

    const card = document.createElement('div')
    card.className = 'country-card'
    card.innerHTML = `
      <div class="card-top">
        <span class="flag">${c.flag}</span>
        <div style="min-width:0;flex:1">
          <div class="country-name">${c.name}</div>
          <span class="group-badge gb-${c.group}">G-${c.group}</span>
        </div>
      </div>
      <div class="card-progress">
        <div class="prog-wrap"><div class="prog-fill" style="width:${pct}%"></div></div>
        <div class="card-stats">
          <span>${got}/${total} láminas</span>
          <span class="card-pct">${pct}%</span>
        </div>
      </div>
    `
    card.addEventListener('click', () => openModal(c))
    grid.appendChild(card)
  })

  if (!countries.length) {
    grid.innerHTML = '<p class="empty-msg">No se encontraron selecciones.</p>'
  }
}

// ── Modal país ────────────────────────────────────────────────────────────────
function openModal(country) {
  const modal   = document.getElementById('modal')
  const mgrid   = document.getElementById('modal-grid')
  document.getElementById('modal-title').textContent =
    `${country.flag}  ${country.name}`
  document.getElementById('modal-sub').textContent =
    `Grupo ${country.group} · ${country.conf} · Láminas ${country.start}–${country.end}`
  mgrid.innerHTML = ''

  function refreshCounter() {
    const g = country.stickers.filter(s => getS(s.num) >= 1).length
    document.getElementById('modal-counter').textContent = `${g}/${country.stickers.length}`
  }

  country.stickers.forEach(s => {
    const el = document.createElement('div')
    el.className = 'sticker'
    refreshSticker(el, s)
    el.addEventListener('click', () => {
      cycleS(s.num); refreshSticker(el,s); refreshCounter(); renderAll()
    })
    mgrid.appendChild(el)
  })

  refreshCounter()
  modal.classList.remove('hidden')
  document.body.style.overflow = 'hidden'
}

// ── Modal especiales ──────────────────────────────────────────────────────────
function openSpecials() {
  const modal = document.getElementById('modal-spec')
  const mgrid = document.getElementById('modal-spec-grid')
  mgrid.innerHTML = ''

  const all = [...ALBUM.intro, ...ALBUM.history, ...ALBUM.cocacola]
  all.forEach(s => {
    const el = document.createElement('div')
    el.className = 'sticker'
    refreshSticker(el, s)
    el.addEventListener('click', () => {
      cycleS(s.num); refreshSticker(el,s); renderSummary()
    })
    mgrid.appendChild(el)
  })

  modal.classList.remove('hidden')
  document.body.style.overflow = 'hidden'
}

function refreshSticker(el, s) {
  const v = getS(s.num)
  el.className = 'sticker' + (v===1?' got':v===2?' rep':'')
  const icon = s.type==='badge'?'⭐':s.type==='team'?'📸':s.type==='history'?'🏅':'👤'
  el.innerHTML = `
    <div class="st-num">${s.num}</div>
    <div class="st-code">${s.code}</div>
    <div class="st-icon">${icon}</div>
    <div class="st-label">${s.label}</div>
    <div class="st-state">${v===1?'✓ Tengo':v===2?'＋ Repetida':'○ Falta'}</div>
  `
}

function closeModal() {
  document.getElementById('modal').classList.add('hidden')
  document.body.style.overflow = ''
}
function closeSpecials() {
  document.getElementById('modal-spec').classList.add('hidden')
  document.body.style.overflow = ''
}

// ── Exportar ──────────────────────────────────────────────────────────────────
function buildMissingList() {
  const lines = []
  ALBUM.countries.forEach(c => {
    const missing = c.stickers.filter(s => getS(s.num)===0)
    if (missing.length) {
      lines.push(`\n=== ${c.flag} ${c.name} (Grupo ${c.group}) ===`)
      missing.forEach(s => lines.push(`  ${s.code} · Nº${s.num} · ${s.label}`))
    }
  })
  const specMissing = [...ALBUM.intro,...ALBUM.history].filter(s=>getS(s.num)===0)
  if (specMissing.length) {
    lines.push('\n=== ⭐ Especiales ===')
    specMissing.forEach(s => lines.push(`  ${s.code} · Nº${s.num} · ${s.label}`))
  }
  return lines.join('\n').trim()
}

function copyMissing() {
  navigator.clipboard.writeText(buildMissingList())
    .then(()=>alert('✅ Lista copiada al portapapeles'))
    .catch(()=>alert('No se pudo copiar. Usa Descargar TXT.'))
}

function downloadMissing() {
  const blob = new Blob([buildMissingList()],{type:'text/plain;charset=utf-8'})
  const a = document.createElement('a')
  a.href = URL.createObjectURL(blob)
  a.download = 'faltantes-panini2026.txt'
  a.click()
}

function shareAlbum() {
  const all = ALBUM.countries.flatMap(c=>c.stickers)
  const got = all.filter(s=>getS(s.num)>=1).length
  const pct = (got/ALBUM.total*100).toFixed(1)
  const text = `🏆 Mi Álbum Panini FIFA Mundial 2026\n✅ ${got}/${ALBUM.total} láminas (${pct}%)\n\nhttps://ua-x99.github.io/panini2026/`
  if (navigator.share) navigator.share({text})
  else navigator.clipboard.writeText(text).then(()=>alert('✅ Enlace copiado'))
}

function resetAlbum() {
  if (!confirm('¿Reiniciar el álbum? Se perderá todo el progreso.')) return
  state = {}; save(); renderAll(); closeModal(); closeSpecials()
}

// ── Nav grupos ────────────────────────────────────────────────────────────────
function buildGroupNav() {
  const nav = document.getElementById('group-nav')
  const groups = ['ALL','A','B','C','D','E','F','G','H','I','J','K','L']
  groups.forEach(g => {
    const btn = document.createElement('button')
    btn.textContent = g==='ALL'?'Todos':'G-'+g
    btn.className = 'nav-btn'+(g===activeGroup?' active':'')
    btn.addEventListener('click', () => {
      activeGroup = g
      document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'))
      btn.classList.add('active')
      renderGrid()
    })
    nav.appendChild(btn)
  })
}

// ── Init ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildGroupNav()
  renderAll()
  updateCountdown()
  setInterval(updateCountdown, 1000)

  document.getElementById('search').addEventListener('input', e => {
    searchText = e.target.value; renderGrid()
  })
  document.getElementById('filter-conf').addEventListener('change', e => {
    activeConf = e.target.value; renderGrid()
  })
  document.querySelectorAll('.fs-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeStatus = btn.dataset.status
      document.querySelectorAll('.fs-btn').forEach(b=>b.classList.remove('active'))
      btn.classList.add('active')
      renderGrid()
    })
  })

  document.getElementById('modal').addEventListener('click', e => {
    if (e.target===document.getElementById('modal')) closeModal()
  })
  document.getElementById('modal-spec').addEventListener('click', e => {
    if (e.target===document.getElementById('modal-spec')) closeSpecials()
  })
  document.getElementById('modal-close').addEventListener('click', closeModal)
  document.getElementById('modal-spec-close').addEventListener('click', closeSpecials)
  document.getElementById('btn-copy').addEventListener('click', copyMissing)
  document.getElementById('btn-dl').addEventListener('click', downloadMissing)
  document.getElementById('btn-reset').addEventListener('click', resetAlbum)
  document.getElementById('btn-share').addEventListener('click', shareAlbum)
  document.getElementById('btn-specials').addEventListener('click', openSpecials)
})
