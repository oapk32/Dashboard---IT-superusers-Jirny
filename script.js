const workers = ["Kocourek", "Borovička", "Studená"];
let boostSoundPlayed = false;

/* BUTTONS */
document.getElementById("panicButton").addEventListener("click", () => {
  window.open("https://www.youtube.com/watch?v=8YklJZ-PTto");
});
document.getElementById("dogButton").addEventListener("click", () => {
  window.open("https://www.youtube.com/watch?v=C81oTHgvExc", "_blank");
});

document.getElementById("panicButton2").addEventListener("click", () => {
  window.open("http://www.jobs.cz", "_blank");
});
document.getElementById("Směnybutton").addEventListener("click", () => {
const sound = document.getElementById("směnyzvuk");
    sound.currentTime = 0;
    sound.play().catch(() => {});
  window.open("https://dpdhl.sharepoint.com/:x:/r/sites/dsc_cz_jirny_lego_IT/Shared%20Documents/SUDEP/03%20-%20Important%20Documents/Smeny%20SuperUsers2025.xlsx?d=wbf9aa3ef33084dfe817d0b9bf2d4b53a&csf=1&web=1&e=XSqzcG", "_blank");
});
document.getElementById("Dovolenkabutton").addEventListener("click", () => {
	const sound = document.getElementById("dovolenkazvuk");
    sound.currentTime = 0;
    sound.play().catch(() => {});
  window.open("https://smarttimedhlg1-sso.prd.mykronos.com/wfd/home", "_blank");
});

document.getElementById("Creditsbutton").addEventListener("click", () => {

  const W = 300;
  const H = 300;

  const win = window.open(
    "",
    "Painal enjoyers",
    "toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=yes"
  );


  setTimeout(() => {
    win.resizeTo(W, H);
    win.moveTo(100, 100);
  }, 50);

 
  win.document.body.innerHTML = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      margin: 0;
      background: black;
      color: #feda4a;
      overflow: hidden;
      font-family: Arial, sans-serif;
    }

    .scene {
      width: 100%;
      height: 100%;
      perspective: 400px;
      overflow: hidden;
    }

    .crawl {
      position: absolute;
      bottom: -100%;
      width: 100%;
      text-align: center;
      transform-origin: 50% 100%;
      animation: crawl 50s linear infinite;
    }

    .crawl p {
      font-size: 18px;
      line-height: 1.6;
      font-weight: bold;
      padding: 0 10px;
    }

    @keyframes crawl {
      0% {
        transform: rotateX(20deg) translateY(100%);
      }
      100% {
        transform: rotateX(25deg) translateY(-200%);
      }
    }
  </style>
</head>

<body>
  <div class="scene">
    <div class="crawl">
      <p>EPIZODA 6-7</p>
      <p>Štejblmajster vrací úder</p>
      <br>
      <p>
		Sezona. <br/>
		ECOMM je nervózní.<br/>
		ECOMM je hlasitý.<br/>
		ECOMM poslal „nemáme kapacity na to dělat to ručně“.<br/>
		Je to urgentní.<br/>
		Všechno je urgentní.<br/>
		URGENTNÍ URGENTNÍ URGENTNÍ.<br/>
		Superusers nic neříkají.<br/>
		ECOMM píše:<br/>
		„IT nám nechce pomáhat“<br/>
		Superusers chillujou.<br/>
		Bez emocí.<br/>
		Bez strachu.<br/>
		Bez vůle k životu.<br/>
		Sponsored by <br/>
		<img src="sponzor.png" style="width:200px; height:200px;">
      </p>
    </div>
  </div>
</body>
</html>
  `;


  let dx = Math.random() > 0.5 ? 2 : -2;
  let dy = Math.random() > 0.5 ? 2 : -2;

  let lastX = 0;
  let lastY = 0;

  const interval = setInterval(() => {
    if (win.closed) {
      clearInterval(interval);
      return;
    }

    win.moveBy(dx, dy);

    const newX = win.screenX;
    const newY = win.screenY;

   
    if (newX === lastX) dx *= -1;
    if (newY === lastY) dy *= -1;

    lastX = newX;
    lastY = newY;

  }, 16); // ~60 FPS
});
document.getElementById("menuButton").addEventListener("click", () => {
  window.open("http://dhl.jidelnapopelka.cz/", "_blank");
});

document.getElementById("Contentbutton").addEventListener("click", () => {
  window.open("https://dpdhl-my.sharepoint.com/personal/zdenek_prochazka2_dhl_com/_layouts/15/onedrive.aspx?csf=1&web=1&e=fevsIe&CID=ecfa69d6%2Dd08d%2D4ee9%2Dad31%2D6f25b0c62a6e&id=%2Fpersonal%2Fzdenek%5Fprochazka2%5Fdhl%5Fcom%2FDocuments%2FDesktop%2FDaVinki%20videa%2FMem%C3%ADsky&FolderCTID=0x01200037D6C9A953A0754E9771F9019386B912&view=0", "_blank");
});

document.getElementById("darkmodeButton").addEventListener("click", () => {
  document.body.classList.toggle("darkness");
});

document.getElementById("LegendsButton").addEventListener("click", () => {

  const win = window.open(
    "",
    "Bubbles",
    "width=600,height=600,resizable=yes,scrollbars=no"
  );

  // 1️⃣ HTML + CSS (bez scriptu!)
  win.document.body.innerHTML = `
    <style>
      body {
        margin: 0;
        overflow: hidden;
        background: black;
      }
      img {
        position: fixed;
        pointer-events: none;
      }
    </style>
  `;

  const script = win.document.createElement("script");
  script.textContent = `
  
  let hue = 0;

function rainbowBackground() {
  hue = (hue + 0.5) % 360;
  document.body.style.backgroundColor =
    "hsl(" + hue + ", 100%, 50%)";

  requestAnimationFrame(rainbowBackground);
}

rainbowBackground();

  
  
    const images = [
      "humanici/onpe.png",
      "humanici/cami.jpg",
      "humanici/zdpr.png",
      "humanici/herman.jpg",
      "humanici/pema.jpg",
      "humanici/queen.jpg",
      "humanici/pepohuh.png",
      "humanici/mimy.png",
      "humanici/duo.jpg",
      "humanici/nasranej_calvin.jpg",
      "humanici/cj.png",
	  "humanici/LuBa.jpg",
	  "humanici/Resolving-ticket.jpg",
	  "humanici/npc.jpg",
	  "humanici/happy.jpg",
	  "humanici/abraham-enjoyers.jpg"
	  ];

    const SIZE = 80;
    const SPEED = 1.5;
    const bubbles = [];

    images.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      img.style.width = SIZE + "px";
      document.body.appendChild(img);

      bubbles.push({
        el: img,
        x: Math.random() * (window.innerWidth - SIZE),
        y: Math.random() * (window.innerHeight - SIZE),
        dx: (Math.random() - 0.5) * SPEED * 1,
        dy: (Math.random() - 0.5) * SPEED * 1
      });
    });

    function animate() {
      bubbles.forEach(b => {
        b.x += b.dx;
        b.y += b.dy;

        if (b.x <= 0 || b.x + SIZE >= window.innerWidth) b.dx *= -1;
        if (b.y <= 0 || b.y + SIZE >= window.innerHeight) b.dy *= -1;

        b.el.style.transform =
          "translate(" + b.x + "px, " + b.y + "px)";
      });

      requestAnimationFrame(animate);
    }

    animate();
  `;

  win.document.body.appendChild(script);
});


let quickscopePlayed = false;

document.getElementById("rollButton").addEventListener("click", () => {
    //const rollResult = Math.floor(Math.random() * 100) + 1;
    const rollResult = 100;
	
    const resultDiv = document.getElementById("rollResult");
    const diceButton = document.getElementById("rollButton");
    const quickscope = document.getElementById("quickscopeGif");

    diceButton.style.display = "none";
    resultDiv.innerText = rollResult;
    resultDiv.style.display = "block";

    if (rollResult === 100) {
        quickscope.style.display = "block";
		
	const sound = document.getElementById("mlg");
    sound.currentTime = 0;
    sound.play().catch(() => {});
    }

    setTimeout(() => {
        resultDiv.style.display = "none";
        diceButton.style.display = "block";
        quickscope.style.display = "none";
    }, 4000);
});


/* FACEBOOK → DHL BUTTON */
const fbButton = document.getElementById("fbButton");
const fbIcon = document.getElementById("fbIcon");

fbButton.addEventListener("mouseenter", () => fbIcon.src = "dhl.png");
fbButton.addEventListener("mouseleave", () => fbIcon.src = "facebook.png");
fbButton.addEventListener("click", () => {
  window.open("https://connect.dpdhl.com/content/page/62d51824d9d2cc756b153422", "_blank");
});

function getWeeklyRotation() {
    const people = ["Kocourek", "Studená", "Borovička"];

    const now = new Date();
    const currentWeek = getWeekNumber(now);

    // Tohle je důležité: týden 17 byl ten, kdy měl ranní Kocourek
    const baseWeek = 17;

    const index = (currentWeek - baseWeek) % people.length;

    return {
        ranní: people[index],
        odpolední: people[(index + 1) % people.length],
        noční: people[(index + 2) % people.length]
    };
}



/* URČENÍ AKTUÁLNÍ SMĚNY */
function getShiftInfo() {
  const now = new Date();
  const h = now.getHours();

  let shiftStart, shiftEnd, name;

  if (h >= 6 && h < 14) {
    name = "Ranní směna (6–14)";
    shiftStart = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 6, 0, 0);
    shiftEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 14, 0, 0);
  } else if (h >= 14 && h < 22) {
    name = "Odpolední směna (14–22)";
    shiftStart = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 14, 0, 0);
    shiftEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 22, 0, 0);
  } else {
    name = "Noční směna (22–6)";
    if (h >= 22) {
      shiftStart = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 22, 0, 0);
      shiftEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 6, 0, 0);
    } else {
      shiftStart = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 22, 0, 0);
      shiftEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 6, 0, 0);
    }
  }

  return { name, shiftStart, shiftEnd };
}

/* BACKGROUND */
function updateBackground(shiftName) {
  if (shiftName.includes("Ranní")) {
    document.body.style.backgroundImage = 'url("reactor.png")';
  } else if (shiftName.includes("Odpolední")) {
    document.body.style.backgroundImage = 'url("x.gif")';
  } else {
    document.body.style.backgroundImage = 'url("nocni.jpg")';
  }
}

/* CASTBAR */
function updateCastbar(diff) {
  const castbar = document.getElementById("castbarContainer");
  const fill = document.getElementById("castbarFill");
  const fifteenMinutes = 30 * 60 * 1000;

  if (diff <= fifteenMinutes && diff > 0) {
    castbar.style.display = "block";
    fill.style.width = (100 - (diff / fifteenMinutes) * 100) + "%";
  } else {
    castbar.style.display = "none";
    fill.style.width = "0%";
  }
}

let ticketsSoundPlayed = false;

function updateTickets(now) {
  const alert = document.getElementById("ticketsAlert");
  const gif = document.getElementById("ticketsGif");
  const sound = document.getElementById("ticketsSound");

  const start = new Date(now);
  start.setHours(8, 5, 0, 0);

  const end = new Date(now);
  end.setHours(8, 10, 0, 0);

  if (now >= start && now <= end) {
    alert.style.display = "block";
    gif.style.display = "block";

    if (!ticketsSoundPlayed) {
      sound.currentTime = 0;
      sound.play().catch(() => {});
      ticketsSoundPlayed = true;
    }
  } else {
    alert.style.display = "none";
    gif.style.display = "none";
    sound.pause();
    sound.currentTime = 0;

    ticketsSoundPlayed = false;
  }
}

// Nastav si svoje úkoly
const CHECKLIST_ITEMS = [
  "DHL Link",
  "CZJIRP2",
  "CZJIRP3",
  "ZABBIX"
];

const STORAGE_KEY_STATE = "shiftChecklistState";
const STORAGE_KEY_SHIFT = "shiftChecklistLastShift";

function getCurrentShift() {
  const now = new Date();
  const h = now.getHours();

  if (h >= 6 && h < 14) return "ranni";
  if (h >= 14 && h < 22) return "odpoledni";
  return "nocni";
}

function getCurrentShiftLabel(shift) {
  switch (shift) {
    case "ranni": return "Ranní";
    case "odpoledni": return "Odpolední";
    case "nocni": return "Noční";
    default: return shift;
  }
}

function loadChecklistState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_STATE);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function saveChecklistState(state) {
  localStorage.setItem(STORAGE_KEY_STATE, JSON.stringify(state));
}

function loadLastShift() {
  return localStorage.getItem(STORAGE_KEY_SHIFT);
}

function saveLastShift(shift) {
  localStorage.setItem(STORAGE_KEY_SHIFT, shift);
}

function resetChecklistForNewShift(currentShift) {
  const lastShift = loadLastShift();
  if (!lastShift || lastShift !== currentShift) {
    // jiná směna → reset
    saveChecklistState({});
    saveLastShift(currentShift);
  }
}
function playAlert() {
    const wrapper = document.getElementById("reminder");
    const sound = document.getElementById("drink");
    const gif = document.getElementById("stretch");

    gif.src = gif.src; // reset GIFu

    wrapper.style.display = "block";

    sound.currentTime = 0;
    sound.play();

    setTimeout(() => {
        wrapper.style.display = "none";
    }, 5000);
}

const ALERT_TIMES = [
    { h: 8,  m: 0,  s: 0 },
	{ h: 9, m: 0,  s: 0 },
	{ h: 10, m: 0,  s: 0 },
    { h: 11, m: 0,  s: 0 },
    { h: 16, m: 0,  s: 0 },
    { h: 20, m: 0,  s: 0 },
    { h: 0,  m: 0,  s: 0 },
    { h: 4,  m: 0,  s: 0 }
];

let lastTrigger = "";

function checkAlertTimes() {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    ALERT_TIMES.forEach(t => {
        const key = `${t.h}:${t.m}:${t.s}`;

        if (h === t.h && m === t.m && s === t.s) {
            if (lastTrigger !== key) {
                lastTrigger = key;
                playAlert();
            }
        }
    });
}

setInterval(checkAlertTimes, 1000);


function checkAlertTimes() {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    ALERT_TIMES.forEach(t => {
        const key = `${t.h}:${t.m}:${t.s}`;

        if (h === t.h && m === t.m && s === t.s) {
            if (lastTrigger !== key) {
                lastTrigger = key;
                playAlert();
            }
        }
    });
}

setInterval(checkAlertTimes, 1000);

function renderChecklist() {
  const currentShift = getCurrentShift();
  resetChecklistForNewShift(currentShift);

  const state = loadChecklistState();
  const listEl = document.getElementById("checklist-list");
  const labelEl = document.getElementById("current-shift-label");
  const resetBtn = document.getElementById("reset-checklist");

  if (!listEl || !labelEl || !resetBtn) return;

  labelEl.textContent = getCurrentShiftLabel(currentShift);
  listEl.innerHTML = "";

  CHECKLIST_ITEMS.forEach((text, index) => {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = !!state[index];

    checkbox.addEventListener("change", () => {
      const newState = loadChecklistState();
      newState[index] = checkbox.checked;
      saveChecklistState(newState);
    });

    const label = document.createElement("span");
    label.textContent = text;

    li.appendChild(checkbox);
    li.appendChild(label);
    listEl.appendChild(li);
  });

  resetBtn.onclick = () => {
    saveChecklistState({});
    renderChecklist();
  };
}

document.addEventListener("DOMContentLoaded", renderChecklist);


/* BOOST ALERT */
function updateBoostAlert(now) {
  const alert = document.getElementById("boostAlert");
  const sound = document.getElementById("boostSound");
  const gif = document.getElementById("boostGif");

  const start = new Date(now);
  start.setHours(8, 55, 0, 0);

  const end = new Date(now);
  end.setHours(9, 5, 0, 0);

  if (now >= start && now <= end) {
    alert.style.display = "block";
    gif.style.display = "block";

    if (!boostSoundPlayed) {
      sound.play().catch(() => {});
      boostSoundPlayed = true;
    }
  } else {
    alert.style.display = "none";
    gif.style.display = "none";
    boostSoundPlayed = false;
  }
}

/* FIRE GIF */
function updateFireGif(now) {
  const fire = document.getElementById("fireGif");
  fire.style.display = (now.getHours() >= 6 && now.getHours() < 14) ? "block" : "none";
}

/* LUNCH GIF */
function updateLunchGif(now) {
  const lunch = document.getElementById("lunchGif");
  const lunchText = document.getElementById("lunchText");

  const start = new Date(now);
  start.setHours(11, 25, 0, 0);

  const end = new Date(now);
  end.setHours(12, 5, 0, 0);

  const active = now >= start && now <= end;
  lunch.style.display = active ? "block" : "none";
  lunchText.style.display = active ? "block" : "none";
}
function getWeekNumber(date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
}

function getCzechDayName(dayIndex) {
  const days = ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"];
  return days[dayIndex];
}
function loadWeather() {
  fetch("https://api.open-meteo.com/v1/forecast?latitude=50.0755&longitude=14.4378&current_weather=true")
    .then(res => res.json())
    .then(data => {
      const w = data.current_weather;
      const temp = w.temperature;
      const code = w.weathercode;

      const icons = {
        0: "☀️ Venku hezky a ty si v práci",
        1: "🌤️ Ideální počasí - na práci",
        2: "⛅ Polojasno = pracuj",
        3: "☁️ Zataženo takže o moc nepřijdeš",
        45: "🌫️ Není vidět ani kokot",
        48: "🌫️ Nevidíš a mrzneš",
        51: "🌦️ Menší chcanec",
        61: "🌧️ Velkej chcanec",
        71: "❄️ Sníh",
        95: "⛈️ V piči"
      };

      document.getElementById("weather").innerHTML = `
        <h2>Počasíčko</h2>
        <p>${icons[code] || "Počasí neznámé"}</p>
        <p>Teplota: ${temp} °C</p>
      `;
    });
}

loadWeather();
setInterval(loadWeather, 30 * 60 * 1000);

/* COUNTDOWN + VÍKEND + ROTACE */
function updateCountdown() {
  const now = new Date();

  // 📅 DATUM + DEN + TÝDEN
  const week = getWeekNumber(now);
  const dateString = now.toLocaleDateString("cs-CZ");
  const dayName = getCzechDayName(now.getDay());

  document.getElementById("date_week").textContent =
    `${dateString} - ${dayName} - ${week}.týden`;

  // VÍKEND
  const day = now.getDay();

  if (day === 6 || (day === 0 && now.getHours() < 22)) {
    document.getElementById("shiftName").textContent = "Víkend";
    document.getElementById("countdown").textContent = "--:--:--";
    document.getElementById("currentWorkers").innerHTML = "<h2>Víkend</h2>";
    return;
  }

  const { name, shiftEnd } = getShiftInfo();
  document.getElementById("shiftName").textContent = name;
  updateBackground(name);

  const diff = shiftEnd - now;

  if (diff <= 0) {
    document.getElementById("countdown").textContent = "00:00:00";
    return;
  }

  const s = Math.floor(diff / 1000);
  const h = String(Math.floor(s / 3600)).padStart(2, '0');
  const m = String(Math.floor((s % 3600) / 60)).padStart(2, '0');
  const sec = String(s % 60).padStart(2, '0');

  document.getElementById("countdown").textContent = `${h}:${m}:${sec}`;

  const rotation = getWeeklyRotation();
  document.getElementById("currentWorkers").innerHTML =
    `<h2>Směny na skladě:</h2>
     <p><b>Ranní:</b> ${rotation.ranní}</p>
     <p><b>Odpolední:</b> ${rotation.odpolední}</p>
     <p><b>Noční:</b> ${rotation.noční}</p>`;

  document.getElementById("fridayAlert").style.display =
    (now.getDay() === 5) ? "block" : "none";

  updateCastbar(diff);
  updateBoostAlert(now);
  updateFireGif(now);
  updateLunchGif(now);
  updateTickets(now);
}

updateCountdown();
setInterval(updateCountdown, 1000);


document.getElementById("mamacita").addEventListener("click", () => {
	const sound = document.getElementById("aw");
    sound.currentTime = 0;
    sound.play().catch(() => {});
 
});


document.getElementById("irc").addEventListener("click", () => {
  window.open("xD.html", "mozillaWindow", "popup");
});

/*Doplň to ty čubko*/
const birthdays = [
  {
    name: "PeMa",
    date: "11-03", // MM-DD
    img: "pema.jpg"
  },
  {
    name: "MiMy",
    date: "04-28",
    img: "mimy.png"
  }
];

const today = new Date();
const todayMD = String(today.getMonth() + 1).padStart(2, "0") +
                "-" +
                String(today.getDate()).padStart(2, "0");

const bdayDiv = document.getElementById("bday-boi");

const birthdayToday = birthdays.find(b => b.date === todayMD);


if (birthdayToday) {
  const h2 = document.createElement("h2");
  h2.textContent = "Dnes má narozeniny " + birthdayToday.name;

  const img = document.createElement("img");
  img.src = "humanici/" + birthdayToday.img;
  img.classList.add("breathing");

  bdayDiv.appendChild(h2);
  bdayDiv.appendChild(img);
}
/* Ovocný automat */
const slotDialog = document.getElementById("slotDialog");
const slotButton = document.getElementById("slotButton");
const slotSpin = document.getElementById("slotSpin");
const slotStatus = document.getElementById("slotStatus");
const slotReels = [...slotDialog.querySelectorAll(".slot-reel")];
const slotFruits = ["🍒", "🍋", "🍉", "🍇", "🍊", "🍓"];

let slotTimers = [];
let slotRunning = false;

function randomFruit() {
  return slotFruits[Math.floor(Math.random() * slotFruits.length)];
}

function stopSlotTimers() {
  slotTimers.forEach(({ id, interval }) => {
    if (interval) clearInterval(id);
    else clearTimeout(id);
  });

  slotTimers = [];
  slotRunning = false;
  slotSpin.disabled = false;
  slotSpin.textContent = "🎰 TOČIT";
  slotReels.forEach(reel => reel.classList.remove("spinning"));
}

slotButton.addEventListener("click", () => slotDialog.showModal());

document.getElementById("slotClose").addEventListener("click", () => {
  slotDialog.close();
});

slotDialog.addEventListener("close", stopSlotTimers);

slotSpin.addEventListener("click", () => {
  if (slotRunning) return;

  slotRunning = true;
  slotSpin.disabled = true;
  slotSpin.textContent = "TOČÍ SE…";
  slotStatus.textContent = "Válce se točí…";
  slotDialog.classList.remove("slot-win");

  const result = slotReels.map(randomFruit);

  slotReels.forEach((reel, index) => {
    reel.classList.add("spinning");

    const intervalId = setInterval(() => {
      reel.textContent = randomFruit();
    }, 75);

    slotTimers.push({ id: intervalId, interval: true });

    const timeoutId = setTimeout(() => {
      clearInterval(intervalId);
      reel.textContent = result[index];
      reel.classList.remove("spinning");

      if (index === slotReels.length - 1) {
        const unique = new Set(result).size;

        slotStatus.textContent =
          unique === 1 ? "🎉 JACKPOT! Tři stejné!" :
          unique === 2 ? "✨ Dvě stejné! Zkus ještě jednou." :
                         "🍀 Tentokrát nic. Zkus to znovu!";

        slotDialog.classList.toggle("slot-win", unique === 1);
        slotRunning = false;
        slotSpin.disabled = false;
        slotSpin.textContent = "🎰 TOČIT ZNOVU";
        slotTimers = [];
      }
    }, 1400 + index * 550);

    slotTimers.push({ id: timeoutId, interval: false });
  });
});
