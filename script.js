(function () {
  "use strict";

  var frames = [
    "assets/runner-01.png", "assets/runner-02.png", "assets/runner-03.png", "assets/runner-04.png",
    "assets/runner-05.png", "assets/runner-06.png", "assets/runner-07.png", "assets/runner-08.png",
  ];

  var i18n = {
    pt: {
      heroLabel: "( LISTA DE ESPERA )",
      heroH1: 'UMA TELINHA<br />PARA AS COISAS<br /><span style="color: #ff7300;">QUE VOCÊ AMA.</span>',
      heroSub: "Fotos, pixel art, gifs, pequenos momentos. Coloque na tela o que você quiser.",
      heroBtn: "ENTRAR NA FILA →",
      deskStamp: "FEITO NUMA MESA",
      langNudge: "TAMBÉM EM EN / ES",
      scrollCue: "MAIS INFORMAÇÕES",
      mediaLabel: "( NO APARELHO )",
      mediaHint: "ROLE PARA ATRAVESSAR · TOQUE UM CARTÃO PARA TOCAR",
      closeBtn: "FECHAR ✕",
      vid1: "SEU GIF FAVORITO, EM LOOP", vid2: "SUA ARTE, PIXEL A PIXEL", vid3: "SUA MÚSICA TOCANDO",
      featLabel: "( O QUE VOCÊ PODE FAZER COM ELE )",
      feat1H: "COLOQUE<br />O QUE QUISER",
      feat1P: "Sua arte, suas fotos favoritas, um gif que um amigo te mandou. Se couber na tela, é sua para brincar.",
      feat2H: "MANTENHA ALGUÉM<br />PERTO",
      feat2P: "Mande um toque para o chaveiro de um amigo. É uma coisinha pequena, mas às vezes coisas pequenas bastam para dizer <em>ei, estou pensando em você.</em>",
      feat2Btn: "MANDAR UM TOQUE →",
      pokeFlash: "TOQUE<br />DO YUAN",
      feat3H: "FAÇA DELE<br />O SEU",
      feat3P: "Pequeno, de bolso, e feito em lotes pequenos. Cada um começa como o mesmo aparelhinho, e depois vira o que você colocar nele.",
      deskLabel: "( DA MESA DO ARTISTA )",
      essay1: "A pixel art me encontrou um tempo atrás e nunca mais me largou. Tem algo em trabalhar dentro daquelas restrições minúsculas, cada pixel merecendo o seu lugar, que simplesmente clicou comigo e coçou uma vontade como nada mais. Venho construindo em direção a 1000 armas desenhadas à mão sob essa obsessão, uma espada e uma lore estranha por vez, e cada uma delas foi uma aventura, boa ou ruim.",
      essay2: "Em algum momento comecei a me perguntar por que aquela arte tinha que viver só numa tela pela qual você passa uma vez e esquece. Eu queria ela mais perto. Algo que você pudesse carregar de verdade.",
      essay3: "Eu não sou engenheiro eletrônico. Não tinha equipe, nem experiência em fabricação, nem um caminho limpo para nada disso. O que eu tinha eram muitas noites teimosas aprendendo firmware sozinho, desmontando projetos de case que não funcionavam, voltando à prancheta mais vezes do que consigo contar sobre a identidade da coisa em si: como ela deveria ser na sua mão, como deveria se chamar, o que significa algo tão pequeno guardar algo que importa para você. Boa parte desse pensamento nunca entra na descrição do produto. Ele simplesmente se torna o produto.",
      essay4: "Este chaveiro carrega a mesma crença que a pixel art me deu: coisas pequenas, feitas com cuidado de verdade, dizem mais do que coisas grandes e polidas feitas sem ele. Eu também acredito que existe uma comunidade inteira de artistas fazendo trabalho tão bom quanto esse ou melhor, que merece muito mais reconhecimento do que recebe. Parte do motivo de eu estar construindo isso é dar a esse trabalho, e às pessoas por trás dele, um lugar real para viver, em algo que as pessoas de fato carregam, perto de quem elas amam.",
      deskTap: "TOQUE NA FOTO PARA VER MAIS PERTO",
      deskBy: "FEITO POR @CHIUSDAY.ART",
      photo1: "01 · EU E MINHAS CRIAÇÕES",
      formH: "QUER UM?",
      formP: "Estou fazendo em lotes pequenos. Entre na lista de espera e eu te aviso quando o próximo lote estiver pronto.",
      formOpt: "OPCIONAL · PODE PULAR TUDO ISSO",
      q1: "O que você colocaria no seu?",
      q1a: "Minha própria arte", q1b: "Fotos de amigos / de quem eu amo", q1c: "Gifs e coisas bobas",
      q1d: "Pixel art", q1e: "Outra coisa", q1f: "Ainda não sei",
      q2: "Quantos você queria?",
      q2a: "Só um", q2b: "2–3, para amigos", q2c: "Alguns mais", q2d: "Ainda não sei",
      q3: "Quer me contar mais alguma coisa?",
      formBtn: "ENTRAR NA LISTA DE ESPERA",
      formNote: "Você terá prioridade no próximo lote. Sem spam, prometo.",
      confH: 'VOCÊ ESTÁ<br />NA LISTA <span style="color: #b48cff;">💜</span>',
      conf1: "Obrigado por se interessar por essa coisinha que estou fazendo.",
      conf2: "Estou mantendo os lotes pequenos, então te mando um email ou uma DM quando o próximo estiver pronto.",
      conf3: 'Enquanto isso, você pode ver o que estou fazendo em <a href="https://instagram.com/chiusday.art">@chiusday.art</a>.',
      confBack: "← VOLTAR AO FORMULÁRIO",
      footer: "FEITO POR YUAN, SOB @CHIUSDAY.ART",
      barBtn: "ENTRAR →",
      dest: "LOJA DE<br />CHAVEIROS",
      phEmail: "seu email", phName: "nome", phEmail2: "email",
      phHandle: "instagram (opcional)", phOwn: "…ou diga com suas palavras", phElse: "opcional",
    },
    es: {
      heroLabel: "( LISTA DE ESPERA )",
      heroH1: 'UNA PANTALLITA<br />PARA LAS COSAS<br /><span style="color: #ff7300;">QUE AMAS.</span>',
      heroSub: "Fotos, pixel art, gifs, pequeños momentos. Pon en la pantalla lo que quieras.",
      heroBtn: "ENTRAR EN LA FILA →",
      deskStamp: "HECHO EN UN ESCRITORIO",
      langNudge: "TAMBIÉN EN EN / PT",
      scrollCue: "MÁS INFORMACIÓN",
      mediaLabel: "( EN EL APARATO )",
      mediaHint: "DESPLÁZATE PARA ATRAVESAR · TOCA UNA TARJETA",
      closeBtn: "CERRAR ✕",
      vid1: "TU GIF FAVORITO, EN BUCLE", vid2: "TU ARTE, PIXEL A PIXEL", vid3: "TU MÚSICA SONANDO",
      featLabel: "( LO QUE PUEDES HACER CON ÉL )",
      feat1H: "PONLE<br />LO QUE QUIERAS",
      feat1P: "Tu arte, tus fotos favoritas, un gif que te mandó un amigo. Si cabe en la pantalla, es tuyo para jugar.",
      feat2H: "MANTÉN A ALGUIEN<br />CERCA",
      feat2P: "Manda un toque al llavero de un amigo. Es una cosita pequeña, pero a veces las cosas pequeñas bastan para decir <em>hey, estoy pensando en ti.</em>",
      feat2Btn: "MANDAR UN TOQUE →",
      pokeFlash: "TOQUE<br />DE YUAN",
      feat3H: "HAZLO<br />TUYO",
      feat3P: "Pequeño, de bolsillo, y hecho en lotes pequeños. Cada uno empieza como el mismo aparatito, y después se convierte en lo que le pongas.",
      deskLabel: "( DESDE EL ESCRITORIO DEL ARTISTA )",
      essay1: "El pixel art me encontró hace un tiempo y nunca me dejó ir. Hay algo en trabajar dentro de esas restricciones mínimas, donde cada pixel se gana su lugar, que simplemente encajó conmigo y me rascó una picazón como nada más. Llevo tiempo construyendo hacia 1000 armas dibujadas a mano bajo esa obsesión, una espada y una lore extraña a la vez, y cada una fue una aventura, buena o mala.",
      essay2: "En algún momento empecé a preguntarme por qué ese arte tenía que vivir solo en una pantalla por la que pasas una vez y olvidas. Lo quería más cerca. Algo que pudieras llevar contigo de verdad.",
      essay3: "No soy ingeniero electrónico. No tenía equipo, ni experiencia en fabricación, ni un camino limpio hacia nada de esto. Lo que tenía eran muchas noches tercas aprendiendo firmware solo, desarmando diseños de carcasa que no funcionaban, volviendo al punto de partida más veces de las que puedo contar sobre la identidad misma de la cosa: cómo debería sentirse en tu mano, cómo debería llamarse, qué significa que algo tan pequeño guarde algo que te importa. Mucho de ese pensamiento nunca llega a la descripción del producto. Simplemente se convierte en el producto.",
      essay4: "Este llavero lleva la misma creencia que me dio el pixel art: las cosas pequeñas, hechas con cuidado real, dicen más que las cosas grandes y pulidas hechas sin él. También creo que hay toda una comunidad de artistas haciendo trabajo igual de bueno o mejor, que merece mucho más reconocimiento del que recibe. Parte de por qué estoy construyendo esto es darle a ese trabajo, y a las personas detrás de él, un lugar real donde vivir, en algo que la gente de verdad lleva consigo, cerca de quienes quiere.",
      deskTap: "TOCA LA FOTO PARA VERLA MÁS CERCA",
      deskBy: "HECHO POR @CHIUSDAY.ART",
      photo1: "01 · YO Y MIS CREACIONES",
      formH: "¿QUIERES UNO?",
      formP: "Los estoy haciendo en lotes pequeños. Entra en la lista de espera y te aviso cuando el próximo lote esté listo.",
      formOpt: "OPCIONAL · PUEDES SALTARTE TODO ESTO",
      q1: "¿Qué pondrías en el tuyo?",
      q1a: "Mi propio arte", q1b: "Fotos de amigos / de quien amo", q1c: "Gifs y cosas tontas",
      q1d: "Pixel art", q1e: "Otra cosa", q1f: "Todavía no sé",
      q2: "¿Cuántos querrías?",
      q2a: "Solo uno", q2b: "2–3, para amigos", q2c: "Algunos más", q2d: "Todavía no sé",
      q3: "¿Algo más que quieras contarme?",
      formBtn: "ENTRAR EN LA LISTA DE ESPERA",
      formNote: "Tendrás prioridad en el próximo lote. Sin spam, lo prometo.",
      confH: 'ESTÁS<br />EN LA LISTA <span style="color: #b48cff;">💜</span>',
      conf1: "Gracias por interesarte en esta cosita que estoy haciendo.",
      conf2: "Estoy manteniendo los lotes pequeños, así que te mando un email o un DM cuando el próximo esté listo.",
      conf3: 'Mientras tanto, puedes ver lo que estoy haciendo en <a href="https://instagram.com/chiusday.art">@chiusday.art</a>.',
      confBack: "← VOLVER AL FORMULARIO",
      footer: "HECHO POR YUAN, BAJO @CHIUSDAY.ART",
      barBtn: "ENTRAR →",
      dest: "TIENDA DE<br />LLAVEROS",
      phEmail: "tu email", phName: "nombre", phEmail2: "email",
      phHandle: "instagram (opcional)", phOwn: "…o dilo con tus palabras", phElse: "opcional",
    },
  };

  var $ = function (id) { return document.getElementById(id); };

  var APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbySwWO9xMM-jhCB86OnJQ1YOyFcjrLR7jq6ww6EV6vLRBaMK-AkG-C8nhWUygFsm3VC/exec";

  var state = {
    lang: "en",
    ahead: 64,
    cap: 100,
    touch: window.matchMedia("(hover: none)").matches,
    focused: null,
    p: 0,
  };

  // Apps Script Web Apps send no CORS headers, so fetch() can't read a
  // response back. A <script src="...&callback=fn"> tag isn't subject to
  // CORS at all — JSONP is the reliable way to talk to it from a static page.
  var jsonpSeq = 0;
  function jsonp(params, onDone) {
    var cbName = "ppCb" + (jsonpSeq++);
    var script = document.createElement("script");
    var finished = false;
    var timer = setTimeout(function () { finish(new Error("timeout")); }, 10000);
    function cleanup() {
      delete window[cbName];
      if (script.parentNode) script.parentNode.removeChild(script);
      clearTimeout(timer);
    }
    function finish(err, data) {
      if (finished) return;
      finished = true;
      cleanup();
      onDone(err, data);
    }
    window[cbName] = function (data) { finish(null, data); };
    script.onerror = function () { finish(new Error("network")); };
    var qs = Object.keys(params).map(function (k) {
      return encodeURIComponent(k) + "=" + encodeURIComponent(params[k] == null ? "" : params[k]);
    }).concat("callback=" + cbName).join("&");
    script.src = APPS_SCRIPT_URL + "?" + qs;
    document.body.appendChild(script);
  }

  function fetchQueueCount() {
    jsonp({ action: "queue" }, function (err, data) {
      if (err || !data) return; // keep the local placeholder rather than break the page
      state.ahead = data.ahead;
      if (data.cap) state.cap = data.cap;
      renderQueue();
    });
  }

  var refs = {
    hotRef: $("hotRef"), tiltRef: $("tiltRef"),
    carWrap: $("carWrap"), stage: $("stage"), hint: $("hint"), closer: $("closer"),
    carCount: $("carCount"), carBar: $("carBar"),
    ownAnswer: $("ownAnswer"),
    bar: $("bar"), queueRow: $("queueRow"), queueLabel: $("queueLabel"),
    pokeOverlay: $("pokeOverlay"), pokeDevice: $("pokeDevice"), pokeFlash: $("pokeFlash"),
    formBlock: $("formBlock"), confirmBlock: $("confirmBlock"),
    headerCap: $("headerCap"), heroEmail: $("heroEmail"), heroSubmit: $("heroSubmit"),
    heroAhead: $("heroAhead"),
  };

  // ---------- i18n ----------

  function setLang(lang) {
    state.lang = lang;
    try { localStorage.setItem("pp-lang", lang); } catch (err) { /* private mode */ }
    document.documentElement.lang = lang === "pt" ? "pt-BR" : lang;
    var t = i18n[lang] || {};
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = lang === "en" ? el.dataset.en : t[el.dataset.i18n];
      if (v == null) return;
      el.innerHTML = v;
      if (el.dataset.text !== undefined) el.dataset.text = v;
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      var v = lang === "en" ? el.dataset.enPh : t[el.dataset.i18nPh];
      if (v != null) el.placeholder = v;
    });
    renderQueue();
    document.querySelectorAll("[data-lang]").forEach(function (b) {
      var on = b.dataset.lang === lang;
      b.style.color = on ? "#050706" : "#7e8f79";
      b.style.background = on ? "#ff7300" : "transparent";
      b.style.borderColor = on ? "#ff7300" : "#24322b";
    });
  }

  document.querySelectorAll(".pp-lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () { setLang(btn.dataset.lang); dismissLangNudge(); });
  });

  // ---------- language nudge ----------

  var langNudge = $("langNudge");
  function dismissLangNudge() {
    if (!langNudge || langNudge.dataset.gone) return;
    langNudge.dataset.gone = "1";
    langNudge.style.opacity = "0";
    langNudge.style.transform = "translateY(-4px)";
    setTimeout(function () { langNudge.style.display = "none"; }, 260);
    try { localStorage.setItem("pp-lang-nudge-2", "seen"); } catch (err) { /* private mode */ }
  }
  (function () {
    var seen = null;
    try { seen = localStorage.getItem("pp-lang-nudge-2"); } catch (err) { seen = null; }
    if (seen && langNudge) langNudge.style.display = "none";
  })();
  var langNudgeX = $("langNudgeX");
  if (langNudgeX) langNudgeX.addEventListener("click", dismissLangNudge);

  // ---------- reveal on scroll ----------

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      en.target.style.opacity = "1";
      en.target.style.transform = en.target.id === "photoPrint"
        ? "rotate(" + en.target.dataset.rot + "deg)" : "none";
      io.unobserve(en.target);
    });
  }, { threshold: 0.18 });
  document.querySelectorAll("[data-reveal]").forEach(function (el) { io.observe(el); });

  var ioCards = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      var el = en.target;
      el.style.opacity = "1";
      el.style.transform = "none";
      el.style.borderColor = "#2a3a31";
      el.querySelectorAll("[data-life]").forEach(function (t, i) {
        setTimeout(function () {
          t.style.opacity = "1";
          t.style.transform = "none";
          if (t.tagName === "STRONG") summon(t);
        }, 220 + i * 340);
      });
      ioCards.unobserve(el);
    });
  }, { threshold: 0.55, rootMargin: "0px 0px -16% 0px" });
  document.querySelectorAll("[data-reveal-card]").forEach(function (el) { ioCards.observe(el); });

  // headings resolve out of pixel blocks, one glyph at a time
  var summonTimer = null;
  function summon(el) {
    var raw = el.dataset.text || el.innerHTML;
    el.dataset.text = raw;
    var lines = raw.split(/<br\b[^>]*>/i);
    var blocks = "█▓▒░";
    var total = lines.join("").length;
    var i = 0;
    function tick() {
      if (el.dataset.text !== raw) return; // language switched mid-run
      if (i > total) { el.innerHTML = raw; return; }
      var n = i;
      el.innerHTML = lines.map(function (line) {
        var out = "";
        for (var c = 0; c < line.length; c++) {
          if (n > 0) { out += line[c]; n--; }
          else out += line[c] === " " ? " " : blocks[(Math.random() * blocks.length) | 0];
        }
        return out;
      }).join("<br />");
      i++;
      summonTimer = setTimeout(tick, 42);
    }
    tick();
  }

  // ---------- device tilt ----------

  function applyTilt(nx, ny, maxY, maxX) {
    var tilt = refs.tiltRef;
    if (!tilt) return;
    function q(v, max) { return Math.round(Math.max(-1, Math.min(1, v)) * max / 2) * 2; }
    tilt.style.transform = "translateZ(0) rotateX(" + q(-ny, maxX || 14) + "deg) rotateY(" +
      q(nx, maxY || 20) + "deg) rotateY(13deg) rotateX(-4deg)";
  }

  function scrollTilt() {
    var el = refs.hotRef;
    if (!el) return;
    var r = el.getBoundingClientRect();
    var span = Math.max(140, r.height * 1.15);
    var p = Math.max(-1, Math.min(1, (window.scrollY / span) * 2 - 1));
    applyTilt(p, 0, 34);
  }

  window.addEventListener("mousemove", function (e) {
    if (state.touch) return;
    var el = refs.hotRef;
    if (!el) return;
    var r = el.getBoundingClientRect(), pad = 70;
    var inside = e.clientX >= r.left - pad && e.clientX <= r.right + pad &&
                 e.clientY >= r.top - pad && e.clientY <= r.bottom + pad;
    if (!inside) { applyTilt(0, 0); return; }
    applyTilt((e.clientX - (r.left + r.width / 2)) / (r.width / 2 + pad),
              (e.clientY - (r.top + r.height / 2)) / (r.height / 2 + pad));
  }, { passive: true });

  // ---------- flythrough ----------

  function flyCards() {
    var wrap = refs.carWrap, stage = refs.stage;
    if (!wrap || !stage) return;
    var sticky = stage.parentElement.parentElement;
    var stageH = sticky.offsetHeight || window.innerHeight;
    var top = parseFloat(getComputedStyle(sticky).top) || 0;
    var travel = wrap.offsetHeight - stageH - top;
    var p = travel > 0 ? Math.max(0, Math.min(1, (top - wrap.getBoundingClientRect().top) / travel)) : 0;
    state.p = p;
    var cards = Array.from(stage.querySelectorAll(".pp-card"));
    // how far off-center each card's own authored position sits, relative to
    // the most extreme card — the further out a card naturally is, the more
    // it gets pulled toward the middle, so the composition doesn't scatter
    // chaotically at the edges
    var maxMag = 0;
    cards.forEach(function (el) {
      var bx = Number(el.dataset.x) + 30, by = Number(el.dataset.y) + 40;
      maxMag = Math.max(maxMag, Math.sqrt(bx * bx + by * by));
    });
    // every card gets an identical-shaped, identical-duration arrival: it
    // fades/zooms in, holds, then fades/zooms out over the same fraction of
    // scroll (WINDOW). Only WHEN that window starts differs, staggered by
    // each card's authored depth order, so cards still arrive in sequence —
    // this makes "the same amount of scroll" produce the same motion for
    // every card, instead of near cards rushing through their arc while far
    // cards linger.
    var WINDOW = 0.34, FAR_Z = -2900, NEAR_Z = 480;
    var sorted = cards.slice().sort(function (a, b) { return Number(b.dataset.z) - Number(a.dataset.z); });
    cards.forEach(function (el) {
      var rank = sorted.indexOf(el);
      var offset = (cards.length > 1 ? rank / (cards.length - 1) : 0) * (1 - WINDOW);
      var t = Math.max(0, Math.min(1, (p - offset) / WINDOW));
      var z = FAR_Z + t * (NEAR_Z - FAR_Z);
      var opacity;
      if (state.focused) {
        opacity = el === state.focused ? 1 : 0.05;
      } else {
        var fadeIn = Math.min(1, t / 0.18);
        var fadeOut = t > 0.82 ? Math.max(0, 1 - (t - 0.82) / 0.18) : 1;
        opacity = Math.min(fadeIn, fadeOut) * (el.offsetWidth < 120 ? 0.55 : 1);
        var baseX = Number(el.dataset.x) + 30, baseY = Number(el.dataset.y) + 40;
        var outside = Math.min(1, Math.sqrt(baseX * baseX + baseY * baseY) / (maxMag || 1));
        var hold = 1 - 0.35 * outside;
        var ox = baseX * 1.1 * hold, oy = baseY * 1.1 * hold;
        el.style.transform = "translate3d(" + ox + "px," + oy +
          "px," + z.toFixed(0) + "px) rotate(" + el.dataset.rot + "deg)";
      }
      el.style.opacity = opacity.toFixed(2);
      syncCardVideo(el, opacity);
    });
    if (refs.carCount) refs.carCount.textContent = "0" + Math.min(3, Math.floor(p * 3 + 0.34) + 1) + " / 03";
    if (refs.carBar) refs.carBar.style.width = (p * 100).toFixed(1) + "%";
  }

  // videos play ambiently whenever their card is meaningfully visible, not
  // only when tapped — muted + playsinline keep this within autoplay policy
  function syncCardVideo(el, opacity) {
    var video = el.querySelector(".pp-video");
    if (!video) return;
    if (opacity > 0.15) {
      if (video.paused) video.play().catch(function () {});
    } else if (!video.paused) {
      video.pause();
    }
  }

  function focusCard(el) {
    if (state.focused === el) { unfocusCard(); return; }
    state.focused = el;
    el.style.transition = "transform .45s steps(6), opacity .3s linear";
    el.style.opacity = "1";
    el.style.transform = "translate3d(0px,-10px,300px) rotate(0deg)";
    refs.stage.querySelectorAll(".pp-card").forEach(function (c) {
      if (c !== el) c.style.opacity = "0.05";
    });
    if (refs.hint) refs.hint.style.opacity = "0";
    if (refs.closer) {
      refs.closer.style.opacity = "1";
      refs.closer.style.pointerEvents = "auto";
    }
    var video = el.querySelector(".pp-video");
    if (video) video.play().catch(function () {});
  }

  function unfocusCard() {
    var el = state.focused;
    state.focused = null;
    if (el) {
      setTimeout(function () { el.style.transition = "opacity .3s linear"; }, 460);
      var video = el.querySelector(".pp-video");
      if (video) { video.pause(); video.currentTime = 0; }
    }
    if (refs.hint) refs.hint.style.opacity = "1";
    if (refs.closer) {
      refs.closer.style.opacity = "0";
      refs.closer.style.pointerEvents = "none";
    }
    flyCards();
  }

  document.querySelectorAll(".pp-card").forEach(function (el) {
    el.addEventListener("click", function () { focusCard(el); });
  });
  if (refs.closer) refs.closer.addEventListener("click", function (e) { e.stopPropagation(); unfocusCard(); });

  // ---------- poke overlay ----------

  var pokeTimers = [];
  function poke() {
    var ov = refs.pokeOverlay, d = refs.pokeDevice, f = refs.pokeFlash;
    if (!ov || !d || !f) return;
    pokeTimers.forEach(clearTimeout);
    ov.style.opacity = "1";
    ov.style.pointerEvents = "auto";
    requestAnimationFrame(function () { d.style.transform = "none"; });
    pokeTimers = [
      setTimeout(function () {
        f.style.opacity = "1";
        d.style.animation = "ppShake .32s steps(4) 2";
      }, 440),
      setTimeout(function () {
        f.style.opacity = "0";
        d.style.animation = "none";
        d.style.transform = "none";
      }, 1950),
      setTimeout(dismissPoke, 2320),
    ];
  }

  function dismissPoke() {
    var ov = refs.pokeOverlay, d = refs.pokeDevice, f = refs.pokeFlash;
    pokeTimers.forEach(clearTimeout);
    pokeTimers = [];
    if (f) f.style.opacity = "0";
    if (ov) { ov.style.opacity = "0"; ov.style.pointerEvents = "none"; }
    if (d) { d.style.animation = "none"; d.style.transform = "translateY(20px) scale(.95)"; }
  }

  var pokeBtn = $("pokeBtn");
  if (pokeBtn) pokeBtn.addEventListener("click", poke);
  if (refs.pokeOverlay) refs.pokeOverlay.addEventListener("click", dismissPoke);

  // ---------- form chips + photo print ----------

  function wireChipGroup(id) {
    var group = $(id);
    if (!group) return;
    group.addEventListener("click", function (e) {
      var chip = e.target.closest(".pp-chip");
      if (!chip) return;
      Array.from(group.children).forEach(function (c) { c.classList.remove("pp-chip-selected"); });
      chip.classList.add("pp-chip-selected");
      if (chip.dataset.i18n === "q1e" && refs.ownAnswer) refs.ownAnswer.focus();
    });
  }
  wireChipGroup("chipGroup1");
  wireChipGroup("chipGroup2");

  var photoPrint = $("photoPrint");
  if (photoPrint) {
    photoPrint.addEventListener("click", function () {
      var open = photoPrint.dataset.open === "1";
      if (!open) {
        photoPrint.dataset.open = "1";
        photoPrint.style.zIndex = "4";
        photoPrint.style.transform = "rotate(0deg) scale(1.12)";
      } else {
        photoPrint.dataset.open = "0";
        photoPrint.style.zIndex = "1";
        photoPrint.style.transform = "rotate(" + photoPrint.dataset.rot + "deg)";
      }
    });
  }

  // ---------- form submit / confirmation ----------

  // the Sheet should read like a real answer, not an internal chip id —
  // always store the English label regardless of the submitter's language
  var Q1_LABELS = {
    q1a: "My own art", q1b: "Photos of friends / people I love", q1c: "Gifs and silly things",
    q1d: "Pixel art", q1e: "Something else", q1f: "I'm not sure yet",
  };
  var Q2_LABELS = {
    q2a: "Just one", q2b: "2–3, for friends", q2c: "A few more", q2d: "Not sure yet",
  };

  function getSelectedChip(groupId) {
    var group = $(groupId);
    var sel = group && group.querySelector(".pp-chip-selected");
    return sel ? sel.dataset.i18n : "";
  }

  var loadingTimers = new Map();
  function setSubmitLoading(loading) {
    [formSubmit, barSubmit, refs.heroSubmit].forEach(function (b) {
      if (!b) return;
      if (loading) {
        b.disabled = true;
        if (loadingTimers.has(b)) return;
        var original = b.textContent;
        var n = 0;
        var timer = setInterval(function () {
          n = (n + 1) % 4;
          b.textContent = "SENDING" + ".".repeat(n);
        }, 280);
        loadingTimers.set(b, { timer: timer, original: original });
      } else {
        b.disabled = false;
        var entry = loadingTimers.get(b);
        if (entry) {
          clearInterval(entry.timer);
          b.textContent = entry.original;
          loadingTimers.delete(b);
        }
      }
    });
  }

  function submitForm() {
    var fEmail = $("fEmail");
    if (!fEmail || !fEmail.value.trim()) { fEmail && fEmail.focus(); return; }

    var q1 = getSelectedChip("chipGroup1");
    var params = {
      action: "submit",
      email: fEmail.value,
      name: $("fName") ? $("fName").value : "",
      handle: $("fHandle") ? $("fHandle").value : "",
      putOnYours: q1 === "q1e" && refs.ownAnswer && refs.ownAnswer.value ? refs.ownAnswer.value : (Q1_LABELS[q1] || ""),
      howMany: Q2_LABELS[getSelectedChip("chipGroup2")] || "",
      notes: $("fNotes") ? $("fNotes").value : "",
      lang: state.lang,
      website: $("hpWebsite") ? $("hpWebsite").value : "", // honeypot
    };

    setSubmitLoading(true);
    jsonp(params, function (err, data) {
      setSubmitLoading(false);
      if (err || !data || !data.ok) {
        alert("Something went wrong submitting — please try again in a moment.");
        return;
      }
      state.ahead = data.position; // authoritative count from the sheet
      renderQueue();
      if (you) {
        var row = refs.queueRow;
        you.goalX = row ? row.clientWidth : 430;
        retarget();
        wake();
      }
      if (refs.formBlock) refs.formBlock.hidden = true;
      if (refs.confirmBlock) refs.confirmBlock.hidden = false;
      requestAnimationFrame(function () {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
      });
    });
  }

  function resetForm() {
    if (refs.formBlock) refs.formBlock.hidden = false;
    if (refs.confirmBlock) refs.confirmBlock.hidden = true;
  }

  // hero/bar are shortcuts: they only collect an email, so feed it into the
  // real form's email field (if that's still empty) before submitting
  function quickSubmit(emailInput) {
    var fEmail = $("fEmail");
    if (fEmail && emailInput && emailInput.value && !fEmail.value) fEmail.value = emailInput.value;
    submitForm();
  }

  var formSubmit = $("formSubmit"), barSubmit = $("barSubmit"), confirmBack = $("confirmBack");
  if (formSubmit) formSubmit.addEventListener("click", submitForm);
  if (refs.heroSubmit) refs.heroSubmit.addEventListener("click", function () { quickSubmit(refs.heroEmail); });
  if (barSubmit) barSubmit.addEventListener("click", function () { quickSubmit($("barEmail")); });
  if (confirmBack) confirmBack.addEventListener("click", resetForm);

  // ---------- queue simulation ----------
  // Only the front (rightmost) walker has an externally driven goal, tied to how
  // far down the page the reader has scrolled. Everyone behind aims to close up on
  // the person ahead, so movement originates at the front and ripples backward.
  // You are a queue member who cannot push anyone; your target follows scroll.

  var body = 30, slot = 40, chars = [], you = null, moveTimer = null, queueRaf = null;

  function queueText() {
    var n = state.ahead + 1;
    if (state.lang === "pt" || state.lang === "es") return "FILA: " + n + "/" + state.cap;
    return "QUEUE: " + n + "/" + state.cap;
  }

  var AHEAD_TEXT = { en: "ahead of you", pt: "na sua frente", es: "delante de ti" };

  function renderQueue() {
    if (refs.queueLabel) refs.queueLabel.textContent = queueText();
    if (refs.heroAhead) {
      refs.heroAhead.innerHTML = state.ahead + " " + (AHEAD_TEXT[state.lang] || AHEAD_TEXT.en) +
        '<span style="color: #ff7300; animation: ppBlink 1s steps(1) infinite;">_</span>';
    }
    if (refs.headerCap) {
      var n = state.ahead + 1;
      refs.headerCap.textContent = String(n).padStart(3, "0") + "/" + state.cap;
    }
  }

  function initQueue() {
    var row = refs.queueRow;
    if (!row) return;
    var nodes = Array.from(row.querySelectorAll("[data-runner]"));
    var W = row.clientWidth || 386;
    body = 30;
    slot = Math.max(34, Math.min(46, (W - 58) / Math.max(1, nodes.length - 1)));
    chars = nodes.slice().reverse().map(function (el, i) {
      return {
        el: el,
        sprite: el.dataset.you ? el.querySelector("[data-you-sprite]") : el,
        base: W - 46 - i * slot,
        x: 0, goal: 0, step: 0,
        frame: 1,
        patience: 0.55 + Math.random() * 0.4,
      };
    });
    chars.forEach(function (c) { c.isYou = !!c.el.dataset.you; });
    you = chars.find(function (c) { return c.isYou; }) || chars[chars.length - 1];
    you.dir = 1;
    chars.forEach(function (c) { c.x = c.base; c.step = c.base; c.goal = c.base; });
    retarget();
    paint();
    if (!moveTimer) moveTimer = setInterval(tryMoves, 90);
    wake();
  }

  function retarget() {
    if (!chars.length || !you) return;
    var row = refs.queueRow;
    var W = row ? row.clientWidth || 430 : 430;
    var walkers = chars.filter(function (c) { return !c.isYou; });
    if (!walkers.length) return;
    var pad = 14;
    var front = walkers[0];
    var travel = Math.max(0, W + walkers.length * (body + pad) - front.base);
    front.goal = Math.max(front.goal || front.base, front.base + (state.p || 0) * travel);
    for (var k = 1; k < walkers.length; k++) {
      var w = walkers[k];
      w.goal = Math.max(w.goal || w.base, w.base, walkers[k - 1].goal - (body + pad));
    }
  }

  function tryMoves() {
    if (!chars.length) return;
    var pending = false;
    chars.forEach(function (c) {
      if (c.isYou) return;
      var want = c.goal - c.step;
      if (want > 0.5) pending = true;
      if (want < 2) return;
      var lead = null;
      chars.forEach(function (o) {
        if (o === c || o.isYou || o.step <= c.step) return;
        if (!lead || o.step < lead.step) lead = o;
      });
      var acceptable = (4 + Math.random() * 12) / c.patience;
      var room = lead ? Math.max(0, lead.step - c.step - body - 2) : want;
      if (lead && room < acceptable) return;
      var hurry = Math.min(3.2, 1 + Math.max(0, want) / 90);
      var stride = Math.min(want, room, (9 + Math.random() * 9) * hurry);
      if (stride < 1.5) return;
      c.step += stride;
      c.from = c.x;
      c.to = c.step;
      c.t = 0;
      var pace = 0.5 + Math.random() * 0.22 + Math.min(1.5, want / 140);
      c.dur = Math.max(14, Math.abs(c.to - c.from) / pace);
      pending = true;
    });
    if (pending) wake();
  }

  function wake() {
    if (!queueRaf) queueRaf = requestAnimationFrame(animQueue);
  }

  function animQueue() {
    if (!chars.length) { queueRaf = null; return; }
    var alive = false;
    if (you && you.goalX !== undefined) {
      var y = you;
      var lead = null;
      chars.forEach(function (o) {
        if (o === y || o.x <= y.x) return;
        if (!lead || o.x < lead.x) lead = o;
      });
      var ceiling = lead ? lead.x - (body + 4) : y.goalX;
      var aim = Math.min(y.goalX, ceiling);
      var d = aim - y.x;
      if (Math.abs(d) > 0.4) {
        if (d < 0 && y.dir !== -1) { y.dir = -1; y.sprite.style.transform = "scaleX(-1)"; }
        if (d > 0 && y.dir !== 1) { y.dir = 1; y.sprite.style.transform = "none"; }
        var nx = y.x + d * 0.09;
        y.dist = (y.dist || 0) + Math.abs(nx - y.x);
        y.x = nx;
        y.running = true;
        alive = true;
      } else {
        y.x = aim;
        y.running = false;
      }
    }
    chars.forEach(function (c) {
      if (c.isYou) return;
      if (c.dur && c.t < c.dur) {
        c.t += 1;
        var p = Math.min(1, c.t / c.dur);
        var e = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
        var nx = c.from + (c.to - c.from) * e;
        c.dist = (c.dist || 0) + Math.abs(nx - c.x);
        c.x = nx;
        c.running = true;
        alive = true;
      } else {
        if (c.dur) { c.x = c.to; c.dur = 0; }
        c.running = false;
      }
      var lead = null;
      chars.forEach(function (o) {
        if (o === c || o.x <= c.x) return;
        if (!lead || o.x < lead.x) lead = o;
      });
      if (lead && c.x > lead.x - body) c.x = lead.x - body;
    });
    paint();
    queueRaf = alive ? requestAnimationFrame(animQueue) : null;
  }

  function paint() {
    chars.forEach(function (c) {
      c.el.style.transform = "translateX(" + c.x.toFixed(1) + "px)";
      var f = c.running ? 2 + (Math.floor((c.dist || 0) / 2) % 7) : 1;
      if (f !== c.frame) {
        c.frame = f;
        c.sprite.src = frames[f - 1];
      }
    });
  }

  function trackYou() {
    var wrap = refs.carWrap, row = refs.queueRow;
    if (!you || !wrap || !row) return;
    var yStart = wrap.getBoundingClientRect().top + window.scrollY;
    var yEnd = document.documentElement.scrollHeight - window.innerHeight;
    var span = Math.max(1, yEnd - yStart);
    var p = Math.min(1, Math.max(0, (window.scrollY - yStart) / (span * 0.93)));
    var W = row.clientWidth || 430;
    you.goalX = Math.max(10, you.base + p * (W - you.base));
    state.p = p;
    retarget();
    wake();
  }

  // ---------- boot ----------

  document.querySelectorAll("[data-i18n]").forEach(function (el) { el.dataset.en = el.innerHTML; });
  document.querySelectorAll("[data-i18n-ph]").forEach(function (el) { el.dataset.enPh = el.placeholder; });

  var savedLang = null;
  try { savedLang = localStorage.getItem("pp-lang"); } catch (err) { savedLang = null; }
  setLang(savedLang || "en");

  initQueue();
  renderQueue();
  fetchQueueCount();

  var scrollCue = $("scrollCue");
  function onScroll() {
    if (scrollCue) scrollCue.style.opacity = window.scrollY > 90 ? "0" : "1";
    var b = refs.bar;
    if (b) {
      var past = window.scrollY > window.innerHeight * 0.72;
      b.style.opacity = past ? "1" : "0";
      b.style.transform = past ? "none" : "translateY(100%)";
    }
    flyCards();
    if (state.touch) scrollTilt();
    trackYou();
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  window.addEventListener("touchmove", onScroll, { passive: true });
  onScroll();
  if (state.touch) scrollTilt();
})();
