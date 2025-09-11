// script.js

// All event data
const events = {
  "Meta Brand": {
    "date":"September 15, 2025",
    "desc":"A branding challenge where creativity meets strategy.",
    "rounds":[
      "Round 1: Choose one or two companies and create a fresh idea. (3 mins presentation + 2 mins Q&A)",
      "Round 2: A failing brand will be given; revive it with a new strategy in 5 mins."
    ],
    "rules":[
      "Teams of 4–5 members.",
      "Work must be original.",
      "Bring charged laptops for presentation."
    ],
    "coords":[
      {"role":"Faculty Co-Ordinator","name":"Mr. Devan","phone":"8248657633"},
      {"role":"Student Co-Ordinator","name":"Mr. Venkatajalapathi","phone":"6385575445"},
      {"role":"Student Co-Ordinator","name":"Mr. PremKumar","phone":"6381642481"}
    ],
    "form":"https://forms.gle/AaKNHgdrVkbBwGHDA"
  },
  "MindSprint": {
    "date":"September 15, 2025",
    "desc":"A high-energy contest where participants solve entrepreneurial challenges with strategy and clarity.",
    "rounds":[
      "Round 1: Case study given on the spot → 5 mins to discuss + 3 mins presentation on handling the challenge.",
      "Round 2: Financial round → teams analyze budgets and present practical solutions."
    ],
    "rules":[
      "Teams of 4–5 members.",
      "Be on time for each round.",
      "Mobile phones not allowed."
    ],
    "coords":[
      {"role":"Faculty Co-Ordinator","name":"Dr. R. Valarmathi","phone":"9095788323"},
      {"role":"Student Co-Ordinator","name":"Mr. Mohan","phone":"9360342119"},
      {"role":"Student Co-Ordinator","name":"Mr. Sanjai","phone":"9342698266"}
    ],
    "form":"https://forms.gle/kwKQm8oXjSxv5JTG9"
  },
  "Prodigy Lab": {
    "date":"September 16, 2025",
    "desc":"A product expo that celebrates innovation and creativity.",
    "rounds":[
      "Round 1: Showcase and explain your own product or prototype.",
      "Round 2: A random product will be given; market it with creativity."
    ],
    "rules":[
      "Teams of 4–5 members.",
      "Functional or demo-ready prototypes required.",
      "Both hardware and software solutions allowed."
    ],
    "coords":[
      {"role":"Faculty Co-Ordinator","name":"Mrs. Pushpa","phone":"6379706388"},
      {"role":"Student Co-Ordinator","name":"Mr. Prakashraj","phone":"9597390705"},
      {"role":"Student Co-Ordinor","name":"Mr. ManojKumar","phone":"6385320019"}
    ],
    "form":"https://forms.gle/S4epzpTDjzijFgtf6"
  },
  "Founders Arena": {
    "date":"September 16, 2025",
    "desc":"An entrepreneurial pitch event that tests vision, communication, and strategy.",
    "rounds":[
      "Round 1: Pitch your startup idea (3 mins presentation + 2 mins Q&A).",
      "Round 2: Analyze your opponent’s startup, critique it, and present why yours is better."
    ],
    "rules":[
      "Teams of 4–5 members.",
      "Presentations must be original.",
      "Themes or critique formats will be given on the spot."
    ],
    "coords":[
      {"role":"Faculty Co-Ordinator","name":"Mr. Devan","phone":"8248657633"},
      {"role":"Student Co-Ordinator","name":"Ms. Gunapriya","phone":"6385268221"},
      {"role":"Student Co-Ordinator","name":"Ms. Monikka","phone":"8072016490"}
    ],
    "form":"https://forms.gle/w13QB3h7RNmiia6u7"
  },
  "Rhetorica": {
    "date":"September 17, 2025",
    "desc":"An on-the-spot debate where participants battle it out with logic, wit, and persuasion.",
    "rounds":[
      "Round 1: Problem statements shared a day before. Each team has 5 members, 1 min each, total 10 mins for debate.",
      "Round 2: Surprise topic given on the spot → 5 mins to discuss before debating."
    ],
    "rules":[
      "Teams of 5 members.",
      "Arguments must be logical and respectful.",
      "Maintain time discipline during rounds."
    ],
    "coords":[
      {"role":"Faculty Co-Ordinator","name":"Mrs. Pushpa","phone":"6379706388"},
      {"role":"Student Co-Ordinator","name":"Ms. Sandhiyashree","phone":"6374004282"}
    ],
    "form":"https://forms.gle/46exZDXsnXxMoeL88"
  },
  "Think Sync": {
    "date":"September 18, 2025",
    "desc":"A lively two-stage event designed to test teamwork, quick thinking, and adaptability through exciting games.",
    "rounds":[
      "Round 1: A set of fun games to challenge leadership skills and team coordination.",
      "Round 2: A final game to decide the ultimate winners."
    ],
    "rules":[
      "Teams of 4–5 members.",
      "Active participation in all rounds is mandatory.",
      "Maintain fairness and team spirit throughout."
    ],
    "coords":[
      {"role":"Faculty Co-Ordinator","name":"Mrs. Valarmathi","phone":""},
      {"role":"Student Co-Ordinator","name":"Mr. GowthamaChandran","phone":""},
      {"role":"Student Co-Ordinator","name":"Mr. Sabarishan","phone":""}
    ],
    "form":"https://forms.gle/QcpeQb4HoYKNoWLZ8"
  },
  "StartUp IQ": {
    "date":"September 19, 2025",
    "desc":"An exciting quiz-meets-innovation challenge that blends speed, creativity, and business knowledge.",
    "rounds":[
      "Round 1: Fast-paced quiz on intellectual property with just 15 seconds to answer each question.",
      "Round 2: Teams design their desired product, create a unique logo, and give it a distinctive name."
    ],
    "rules":[
      "Teams of 4–5 members.",
      "No use of mobile phones or gadgets.",
      "Work must be original and creative."
    ],
    "coords":[
      {"role":"Faculty Co-Ordinator","name":"Mr. Periyasamy","phone":"7667469100"},
      {"role":"Student Co-Ordinator","name":"Mr. Darshan","phone":"9498383367"},
      {"role":"Student Co-Ordinator","name":"Mr. Hariraghavenddar","phone":"6381303148"}
    ],
    "form":"https://forms.gle/kbUerjteLfV2zXrM8"
  },
  "Brain Hack": {
    "date":"September 20, 2025",
    "desc":"A 4-hour hackathon where innovation meets real-world problem-solving. Teams choose a domain, build a solution, and pitch it within the deadline.",
    "rounds":[
      "Domains: • Agriculture & Food • Cutting-edge Technology • Waste Management • Health Monitoring • Social & Civil Innovation",
      "Format: Teams work for 4 hours to develop a solution, followed by a 5-minute presentation of their idea."
    ],
    "rules":[
      "Teams of 4–5 members.",
      "Problem statements will be provided at the start.",
      "All work must be completed within the given 4 hours.",
      "Final presentation limited to 5 minutes."
    ],
    "coords":[
      {"role":"Faculty Co-Ordinator","name":"Mr. Inbasekaran","phone":"9942013775"},
      {"role":"Student Co-Ordinator","name":"Mr. Ganesh","phone":"9345190811"},
      {"role":"Student Co-Ordinor","name":"Ms. Keerthana","phone":"9003890683"}
    ],
    "form":"https://forms.gle/z3FE3rfoQJBK4tJX8"
  }
};

// Elements
const select = document.getElementById("event-select");
const card = document.getElementById("event-card");

// Populate dropdown
Object.keys(events).forEach(eventName => {
  const option = document.createElement("option");
  option.value = eventName;
  option.textContent = eventName;
  select.appendChild(option);
});

// When user selects → show details
select.addEventListener("change", () => {
  const selected = select.value;
  if (!selected || !events[selected]) {
    card.classList.add("hidden");
    return;
  }

  const ev = events[selected];

  document.getElementById("ev-name").textContent = selected;
  document.getElementById("ev-date").textContent = ev.date;
  document.getElementById("ev-desc").textContent = ev.desc;

  // Rounds
  const roundsDiv = document.getElementById("ev-rounds");
  roundsDiv.innerHTML = "";
  ev.rounds.forEach(r => {
    const p = document.createElement("p");
    p.textContent = r;
    roundsDiv.appendChild(p);
  });

  // Rules
  const rulesUl = document.getElementById("ev-rules");
  rulesUl.innerHTML = "";
  ev.rules.forEach(r => {
    const li = document.createElement("li");
    li.textContent = r;
    rulesUl.appendChild(li);
  });

  // Coordinators
  const coordsDiv = document.getElementById("ev-coords");
  coordsDiv.innerHTML = "";
  ev.coords.forEach(c => {
    const p = document.createElement("p");
    p.textContent = `${c.role}: ${c.name} (${c.phone})`;
    coordsDiv.appendChild(p);
  });

  // Register button
  const actionsDiv = document.getElementById("ev-actions");
  actionsDiv.innerHTML = "";
  if (ev.form) {
    const a = document.createElement("a");
    a.href = ev.form;
    a.target = "_blank";
    a.className = "btn";
    a.textContent = "Register Now";
    actionsDiv.appendChild(a);
  }

  card.classList.remove("hidden");
});
