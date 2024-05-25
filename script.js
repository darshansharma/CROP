

const candidates = [
  { name: "John Doe", source: "LinkedIn", phone: "123-456" },
  { name: "Jane Smith", source: "Naukri", phone: "789-012" },
  { name: "Bob Lee", source: "Email", phone: "345-678" },
  { name: "Alice Brown", source: "Company Website", phone: "234-567" },
  { name: "Charlie Black", source: "Referral", phone: "456-789" },
];

const candidateGrid = document.getElementById('candidateGrid');
function renderCandidates(candidates) {
  candidateGrid.innerHTML = '';
  candidates.forEach(candidate => {
    const card = document.createElement('div');
    card.className = 'candidate-card';
    card.innerHTML = `
      <h3>${candidate.name}</h3>
      <p>Source: ${candidate.source}</p>
      <p>Phone: ${candidate.phone}</p>
      <div class="contact-icons">
        <button onclick="scheduleInterview('${candidate.name}', '${candidate.phone}')">📞</button>
        <button onclick="sendWhatsApp('${candidate.name}', '${candidate.phone}')">💬</button>
      </div>
    `;
    candidateGrid.appendChild(card);
  });
}

renderCandidates(candidates);

function scheduleInterview(name, phone) {
  alert(`Schedule interview for ${name} at ${phone}`);
  // Implement interview scheduling logic here
}

function sendWhatsApp(name, phone) {
  alert(`Send WhatsApp message to ${name} at ${phone}`);
  // Implement WhatsApp messaging logic here
}

function importCVsFromLinkedIn() {
  const newCandidates = [
    { name: "LinkedIn Candidate 1", source: "LinkedIn", phone: "555-111" },
    { name: "LinkedIn Candidate 2", source: "LinkedIn", phone: "555-222" }
  ];
  newCandidates.forEach(candidate => candidates.push(candidate));
  renderCandidates(candidates);
}



// function importCVsFromLinkedIn() {
//   getAuthorizationCode();
// }

// Function to import CVs from Naukri (mock implementation)
function importCVsFromNaukri() {
  const newCandidates = [
    { name: "Naukri Candidate 1", source: "Naukri", phone: "666-111" },
    { name: "Naukri Candidate 2", source: "Naukri", phone: "666-222" }
  ];
  newCandidates.forEach(candidate => candidates.push(candidate));
  renderCandidates(candidates);
}

// Function to import CVs from Email (mock implementation)
function importCVsFromEmail() {
  const newCandidates = [
    { name: "Email Candidate 1", source: "Email", phone: "777-111" },
    { name: "Email Candidate 2", source: "Email", phone: "777-222" }
  ];
  newCandidates.forEach(candidate => candidates.push(candidate));
  renderCandidates(candidates);
}

// Function to import CVs from Disk (mock implementation)
function importCVsFromDisk() {
  const newCandidates = [
    { name: "Disk Candidate 1", source: "Disk", phone: "888-111" },
    { name: "Disk Candidate 2", source: "Disk", phone: "888-222" }
  ];
  newCandidates.forEach(candidate => candidates.push(candidate));
  renderCandidates(candidates);
}



window.addEventListener('message', event => {
  if (event.origin === window.location.origin) {
    const code = new URL(event.data).searchParams.get('code');
    if (code) {
      fetchAccessToken(code);
    }
  }
});

// Add event listeners to the import buttons
document.getElementById('importLinkedInBtn').addEventListener('click', importCVsFromLinkedIn);
document.getElementById('importNaukriBtn').addEventListener('click', importCVsFromNaukri);
document.getElementById('importEmailBtn').addEventListener('click', importCVsFromEmail);
document.getElementById('importDiskBtn').addEventListener('click', importCVsFromDisk);