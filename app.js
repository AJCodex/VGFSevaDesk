const currentLanguage = sessionStorage.getItem('vgf-language') || 'hi';
const isHindi = currentLanguage === 'hi';
const tr = (english, hindi) => isHindi ? hindi : english;

const categoryInfo = {
  medical: { label: tr('Jan Arogya', 'जन आरोग्य'), sub: tr('Medical support', 'चिकित्सा सहायता'), assignee: 'Ritu Mehta', initials: 'RM', tone: 'blue', icon: 'https://www.vidyagracefoundation.org/assets/img/icon/service-icon/service-card-icon1-3.svg' },
  mentorship: { label: tr('Yuva Kaushal', 'युवा कौशल'), sub: tr('Mentorship', 'मार्गदर्शन'), assignee: 'Kabir Singh', initials: 'KS', tone: 'green', icon: 'https://www.vidyagracefoundation.org/assets/img/icon/service-icon/service-card-icon1-2.svg' },
  scholarship: { label: tr('Yuva Kaushal', 'युवा कौशल'), sub: tr('Scholarship', 'छात्रवृत्ति'), assignee: 'Kabir Singh', initials: 'KS', tone: 'green', icon: 'https://www.vidyagracefoundation.org/assets/img/icon/service-icon/service-card-icon1-2.svg' },
  women: { label: tr('Nari Samridhi', 'नारी समृद्धि'), sub: tr('Women empowerment', 'महिला सशक्तिकरण'), assignee: 'Megha Jain', initials: 'MJ', tone: 'amber', icon: 'https://www.vidyagracefoundation.org/assets/img/icon/service-icon/6.svg' },
  animal: { label: tr('Gaushala', 'गौशाला'), sub: tr('Animal welfare', 'जीवदया'), assignee: 'Suresh Patil', initials: 'SP', tone: 'coral', icon: 'https://www.vidyagracefoundation.org/assets/img/icon/service-icon/6.svg' },
  legal: { label: tr('VGF Seva', 'VGF सेवा'), sub: tr('Legal assistance', 'कानूनी सहायता'), assignee: 'Aarav Shah', initials: 'AS', tone: 'blue', icon: 'https://www.vidyagracefoundation.org/assets/img/icon/service-icon/4.svg' }
};

let tickets = [
  { id: 'VGF-00124', name: 'Kavita Verma', initials: 'KV', city: 'Jaipur', category: 'medical', received: 'Today, 09:42', status: 'review', remark: 'Request is queued for initial review. The team will respond within 2 working days.', files: 1 },
  { id: 'VGF-00123', name: 'Rohan Malhotra', initials: 'RM', city: 'Delhi', category: 'mentorship', received: 'Today, 08:16', status: 'progress', remark: 'A caseworker has been assigned and will connect with the applicant shortly.', files: 0 },
  { id: 'VGF-00122', name: 'Nisha Kumari', initials: 'NK', city: 'Patna', category: 'scholarship', received: 'Yesterday', status: 'progress', remark: 'Documents are being reviewed by the Yuva Kaushal team.', files: 2 },
  { id: 'VGF-00121', name: 'Arjun Das', initials: 'AD', city: 'Kolkata', category: 'animal', received: 'Yesterday', status: 'resolved', remark: 'Support connected the case with a local Gaushala partner.', files: 3 },
  { id: 'VGF-00120', name: 'Shalini Rao', initials: 'SR', city: 'Bengaluru', category: 'women', received: '18 Aug 2026', status: 'review', remark: 'Request is queued for review by the Nari Samridhi team.', files: 0 },
  { id: 'VGF-00119', name: 'Dinesh Yadav', initials: 'DY', city: 'Lucknow', category: 'legal', received: '18 Aug 2026', status: 'progress', remark: 'Assigned to a legal assistance advisor for follow-up.', files: 1 },
  { id: 'VGF-00118', name: 'Priya Nair', initials: 'PN', city: 'Kochi', category: 'medical', received: '17 Aug 2026', status: 'resolved', remark: 'The applicant was connected to a healthcare support partner.', files: 2 },
  { id: 'VGF-00117', name: 'Mohan Saini', initials: 'MS', city: 'Agra', category: 'mentorship', received: '17 Aug 2026', status: 'review', remark: 'A mentor match is being identified.', files: 0 },
  { id: 'VGF-00116', name: 'Farah Begum', initials: 'FB', city: 'Hyderabad', category: 'women', received: '16 Aug 2026', status: 'progress', remark: 'The request is in conversation with the women empowerment team.', files: 1 },
  { id: 'VGF-00115', name: 'Sanjay Patil', initials: 'SP', city: 'Nashik', category: 'animal', received: '15 Aug 2026', status: 'resolved', remark: 'Food and medical support were coordinated with a local partner.', files: 2 },
  { id: 'VGF-00114', name: 'Anu Thomas', initials: 'AT', city: 'Chennai', category: 'scholarship', received: '15 Aug 2026', status: 'progress', remark: 'Scholarship eligibility review is in progress.', files: 2 },
  { id: 'VGF-00113', name: 'Vikram Joshi', initials: 'VJ', city: 'Pune', category: 'legal', received: '14 Aug 2026', status: 'review', remark: 'Awaiting initial caseworker review.', files: 0 }
];

const activity = [
  { icon: '✓', tone: '', copy: tr('<strong>VGF-00121</strong> was marked resolved by Suresh', '<strong>VGF-00121</strong> को Suresh ने समाधान किया'), time: tr('28 minutes ago', '28 मिनट पहले') },
  { icon: '＋', tone: 'amber', copy: tr('<strong>New request</strong> from Kavita Verma was received', 'Kavita Verma का <strong>नया अनुरोध</strong> प्राप्त हुआ'), time: tr('1 hour ago', '1 घंटे पहले') },
  { icon: '↗', tone: '', copy: tr('<strong>VGF-00123</strong> assigned to Kabir Singh', '<strong>VGF-00123</strong> Kabir Singh को सौंपा गया'), time: tr('2 hours ago', '2 घंटे पहले') },
  { icon: '✎', tone: 'coral', copy: tr('<strong>Remark added</strong> to Nisha Kumari’s request', 'Nisha Kumari के अनुरोध पर <strong>टिप्पणी जोड़ी गई</strong>'), time: tr('Yesterday, 17:42', 'कल, 17:42') }
];

const statusInfo = {
  review: { label: tr('Needs review', 'समीक्षा आवश्यक'), className: 'status-review' },
  progress: { label: tr('In progress', 'प्रगति में'), className: 'status-progress' },
  resolved: { label: tr('Resolved', 'समाधान हो गया'), className: 'status-resolved' },
  rejected: { label: tr('Rejected', 'अस्वीकृत'), className: 'status-rejected' }
};

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];
const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' }[character]));

const hindiText = new Map([
  ['Welcome back', 'वापसी पर स्वागत है'], ['Serve with clarity.', 'स्पष्टता के साथ सेवा करें।'], ['Sign in to coordinate requests, people and outcomes.', 'अनुरोधों, लोगों और परिणामों को व्यवस्थित करने के लिए साइन इन करें।'], ['Email address', 'ईमेल पता'], ['Password', 'पासवर्ड'], ['Remember me', 'मुझे याद रखें'], ['Forgot password?', 'पासवर्ड भूल गए?'], ['Enter SevaDesk', 'SevaDesk में प्रवेश करें'], ['Demo access is ready. Use any valid email and password.', 'डेमो तैयार है। कोई भी मान्य ईमेल और पासवर्ड इस्तेमाल करें।'], ['Assistance management', 'सहायता प्रबंधन'], ['Workspace', 'कार्यस्थल'], ['Manage', 'प्रबंधन'], ['Need a hand?', 'सहायता चाहिए?'], ['Find guidance for your next case.', 'अपने अगले मामले के लिए मार्गदर्शन पाएं।'], ['Open help centre →', 'सहायता केंद्र खोलें →'], ['Administrator', 'प्रशासक'], ['Thursday, 20 August 2026', 'गुरुवार, 20 अगस्त 2026'], ['Good morning, Abhinav', 'सुप्रभात, Abhinav'], ['Here is what needs your attention today.', 'आज आपके ध्यान की आवश्यकता वाले कार्य यहां हैं।'], ['Create request', 'अनुरोध बनाएं'], ['Open requests', 'खुले अनुरोध'], ['vs. last month', 'पिछले महीने की तुलना में'], ['Needs review', 'समीक्षा आवश्यक'], ['requiring action', 'कार्रवाई आवश्यक'], ['Resolved this month', 'इस महीने समाधान'], ['great work', 'बहुत अच्छा कार्य'], ['Average response', 'औसत प्रतिक्रिया'], ['days', 'दिन'], ['Live queue', 'लाइव कतार'], ['Recent requests', 'हाल के अनुरोध'], ['View all', 'सभी देखें'], ['The paper trail', 'गतिविधि रिकॉर्ड'], ['Recent activity', 'हाल की गतिविधि'], ['Workload', 'कार्यभार'], ['Requests by focus area', 'क्षेत्र के अनुसार अनुरोध'], ['Our shared why', 'हमारा साझा उद्देश्य'], ['Every request is a person, not a number.', 'हर अनुरोध एक व्यक्ति है, केवल संख्या नहीं।'], ['Keep the process thoughtful, transparent and human.', 'प्रक्रिया को संवेदनशील, पारदर्शी और मानवीय रखें।'], ['Casework', 'मामले'], ['Review, assign and move assistance requests forward.', 'सहायता अनुरोधों की समीक्षा करें, उन्हें सौंपें और आगे बढ़ाएं।'], ['Search by name, ticket or category...', 'नाम, टिकट या श्रेणी से खोजें...'], ['All statuses', 'सभी स्थितियां'], ['All categories', 'सभी श्रेणियां'], ['Filters', 'फ़िल्टर'], ['Last synced just now', 'अभी-अभी सिंक किया गया'], ['Capture only what is needed to begin a thoughtful review.', 'संवेदनशील समीक्षा शुरू करने के लिए केवल आवश्यक जानकारी दर्ज करें।'], ['Applicant details', 'आवेदक का विवरण'], ['We will use these details to keep the applicant informed.', 'इन विवरणों से आवेदक को जानकारी दी जाएगी।'], ['How can we help?', 'हम कैसे सहायता कर सकते हैं?'], ['Choose the closest focus area. The request will be routed automatically.', 'सबसे उपयुक्त सहायता क्षेत्र चुनें। अनुरोध अपने-आप भेजा जाएगा।'], ['Select a category', 'श्रेणी चुनें'], ['Short description *', 'संक्षिप्त विवरण *'], ['Share a few words about the request...', 'अनुरोध के बारे में कुछ शब्द साझा करें...'], ['Supporting files', 'सहायक फाइलें'], ['Optional', 'वैकल्पिक'], ['Upload documents or images that help us understand the request. Maximum 5 MB per file.', 'अनुरोध समझने में सहायक दस्तावेज या चित्र अपलोड करें। प्रत्येक फाइल अधिकतम 5 MB।'], ['Drop files here or browse', 'फाइल यहां छोड़ें या ब्राउज़ करें'], ['Privacy by design', 'गोपनीयता के साथ डिजाइन'], ['Submit request', 'अनुरोध जमा करें'], ['Automatic routing', 'स्वचालित मार्ग निर्धारण'], ['Right person, sooner.', 'सही व्यक्ति तक जल्दी।'], ['Default response goal', 'डिफ़ॉल्ट प्रतिक्रिया लक्ष्य'], ['Within 2 working days', '2 कार्य दिवसों के भीतर'], ['Process flow', 'प्रक्रिया प्रवाह'], ['How SevaDesk works', 'SevaDesk कैसे काम करता है'], ['The request journey', 'अनुरोध की यात्रा'], ['A transparent path from a first conversation to meaningful support.', 'पहली बातचीत से सार्थक सहायता तक एक पारदर्शी यात्रा।'], ['One request, six accountable steps', 'एक अनुरोध, छह जवाबदेह चरण'], ['Decision points', 'निर्णय बिंदु'], ['Keep every handoff clear.', 'हर हस्तांतरण स्पष्ट रखें।'], ['MVP guardrails', 'MVP सुरक्षा नियम'], ['Trust is part of the workflow.', 'विश्वास प्रक्रिया का हिस्सा है।'], ['Yes / no scenarios', 'हां / नहीं परिदृश्य'], ['What happens after review?', 'समीक्षा के बाद क्या होता है?'], ['Applicant', 'आवेदक'], ['VGF reviewer', 'VGF समीक्षक'], ['Review & validate', 'समीक्षा और सत्यापन'], ['Ticket created', 'टिकट बनाया गया'], ['Caseworker assigned', 'केसवर्कर को सौंपा गया'], ['Assist & document', 'सहायता और दस्तावेजीकरण'], ['Update & close', 'अपडेट और बंद करें'], ['Anyone can share a need through the public request form.', 'कोई भी सार्वजनिक अनुरोध फॉर्म से अपनी जरूरत साझा कर सकता है।'], ['Check the request is complete, relevant and safe to process.', 'जांचें कि अनुरोध पूरा, प्रासंगिक और सुरक्षित है।'], ['An approved request becomes a trackable VGF case.', 'स्वीकृत अनुरोध एक ट्रैक किए जा सकने वाले VGF मामले में बदलता है।'], ['The category routes the case to the right VGF team.', 'श्रेणी मामले को सही VGF टीम तक भेजती है।'], ['Coordinate cash support, volunteer service or another suitable response.', 'नकद सहायता, स्वयंसेवी सेवा या उपयुक्त सहयोग का समन्वय करें।'], ['Share a clear status and remark by email or WhatsApp.', 'ईमेल या WhatsApp से स्पष्ट स्थिति और टिप्पणी साझा करें।'], ['Name, phone, email, city, category and consent', 'नाम, फोन, ईमेल, शहर, श्रेणी और सहमति'], ['Approve or reject with a mandatory reason', 'अनिवार्य कारण के साथ स्वीकृत या अस्वीकृत करें'], ['Unique ID, event history and category captured', 'विशिष्ट ID, इवेंट इतिहास और श्रेणी दर्ज'], ['Internal notes stay private; important events are audited', 'आंतरिक टिप्पणियां निजी रहेंगी; महत्वपूर्ण इवेंट का ऑडिट होगा'], ['Resolved, rejected or closed with a visible reason', 'समाधान, अस्वीकृति या स्पष्ट कारण के साथ बंद'], ['Needs more information', 'अधिक जानकारी आवश्यक'], ['Return to the applicant with a status and remark; do not create a ticket yet.', 'आवेदक को स्थिति और टिप्पणी के साथ वापस भेजें; अभी टिकट न बनाएं।'], ['Rejected', 'अस्वीकृत'], ['Close the request with a mandatory reason visible to the applicant.', 'अनिवार्य कारण के साथ अनुरोध बंद करें, जो आवेदक को दिखाई दे।'], ['Approved', 'स्वीकृत'], ['Create the ticket and auto-assign it by assistance category.', 'टिकट बनाएं और सहायता श्रेणी के अनुसार अपने-आप सौंपें।']
]);

[['Full name *', 'पूरा नाम *'], ['Phone number *', 'फोन नंबर *'], ['City / address *', 'शहर / पता *'], ['Assistance category *', 'सहायता श्रेणी *'], ['Supporting files', 'सहायक फाइलें'], ['Insights', 'अंतर्दृष्टि'], ['Understand response time, demand and meaningful outcomes.', 'प्रतिक्रिया समय, मांग और सार्थक परिणामों को समझें।'], ['Export report ↓', 'रिपोर्ट एक्सपोर्ट करें ↓'], ['Detailed reporting is being shaped', 'विस्तृत रिपोर्ट तैयार की जा रही है'], ['Impact and operations reporting will live here, with exports for the VGF team.', 'VGF टीम के लिए प्रभाव और संचालन रिपोर्ट यहां उपलब्ध होगी।'], ['Workspace', 'कार्यस्थल'], ['Keep the way VGF works clear and consistent.', 'VGF के काम करने के तरीके को स्पष्ट और एकसमान रखें।'], ['Team and permissions', 'टीम और अनुमतियां'], ['Manage administrators and caseworkers.', 'प्रशासकों और केसवर्करों का प्रबंधन करें।'], ['Response goals', 'प्रतिक्रिया लक्ष्य'], ['Set category-specific response expectations.', 'श्रेणी के अनुसार प्रतिक्रिया लक्ष्य निर्धारित करें।'], ['Notifications', 'सूचनाएं'], ['Configure email and WhatsApp updates.', 'ईमेल और WhatsApp अपडेट व्यवस्थित करें।'], ['Drop files here or browse', 'फाइल यहां छोड़ें या ब्राउज़ करें'], ['DOC, DOCX, PDF or images up to 5 MB', 'DOC, DOCX, PDF या 5 MB तक के चित्र'], ['I confirm the applicant has agreed to VGF using these details to review this request.', 'मैं पुष्टि करता हूं कि आवेदक ने VGF को इन विवरणों से अनुरोध की समीक्षा करने की सहमति दी है।'], ['Within 2 working days', '2 कार्य दिवसों के भीतर'], ['Start a request', 'अनुरोध शुरू करें'], ['VGF assistance workflow', 'VGF सहायता प्रक्रिया'], ['Auto-routing', 'स्वचालित मार्ग निर्धारण'], ['Caseworker', 'केसवर्कर'], ['Applicant + VGF', 'आवेदक + VGF'], ['Medical, mentorship, scholarship, women, animal or legal', 'चिकित्सा, मार्गदर्शन, छात्रवृत्ति, महिला, जीवदया या कानूनी सहायता'], ['Collect the minimum applicant details.', 'आवेदक की न्यूनतम जानकारी ही लें।'], ['Accept DOC, DOCX, PDF and images up to 5 MB.', 'DOC, DOCX, PDF और 5 MB तक के चित्र स्वीकार करें।'], ['Do not request sensitive health information in this MVP.', 'इस MVP में संवेदनशील स्वास्थ्य जानकारी न मांगें।'], ['Keep internal notes separate from applicant remarks.', 'आंतरिक टिप्पणियों को आवेदक की टिप्पणी से अलग रखें।'], ['Record key status and assignment events.', 'मुख्य स्थिति और असाइनमेंट इवेंट दर्ज करें।']].forEach(([english, hindi]) => hindiText.set(english, hindi));

['Overview', 'All requests', 'New request', 'Process flow', 'Reports', 'Settings'].forEach((label) => hindiText.set(label, ({ Overview: 'डैशबोर्ड', 'All requests': 'सभी अनुरोध', 'New request': 'नया अनुरोध', 'Process flow': 'प्रक्रिया प्रवाह', Reports: 'रिपोर्ट', Settings: 'सेटिंग्स' })[label]));

function translateStaticText() {
  if (!isHindi) return;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => { const key = node.nodeValue.trim(); if (hindiText.has(key)) node.nodeValue = node.nodeValue.replace(key, hindiText.get(key)); });
  document.querySelectorAll('[placeholder]').forEach((element) => { if (hindiText.has(element.placeholder)) element.placeholder = hindiText.get(element.placeholder); });
  document.querySelectorAll('option').forEach((element) => { if (hindiText.has(element.textContent.trim())) element.textContent = hindiText.get(element.textContent.trim()); });
}

function avatarClass(index) {
  return ['avatar-saffron', 'avatar-green', 'avatar-blue', 'avatar-coral'][index % 4];
}

function statusBadge(status) {
  const info = statusInfo[status] || statusInfo.review;
  return `<span class="status-pill ${info.className}">${info.label}</span>`;
}

function ticketRow(ticket, wide = false, index = 0) {
  const category = categoryInfo[ticket.category];
  const assignee = `<div class="request-person"><div class="avatar ${avatarClass(index + 1)}">${category.initials}</div><div>${escapeHtml(category.assignee)}<small>${wide ? 'Caseworker' : ticket.id}</small></div></div>`;
  return `<tr data-ticket-id="${ticket.id}"><td><div class="request-person"><div class="avatar ${avatarClass(index)}">${escapeHtml(ticket.initials)}</div><div>${escapeHtml(ticket.name)}<small>${escapeHtml(ticket.city)} · ${ticket.id}</small></div></div></td><td class="category-cell"><span class="category-icon"><img src="${category.icon}" alt=""></span>${escapeHtml(category.label)}<small>${escapeHtml(category.sub)}</small></td>${wide ? `<td>${assignee}</td>` : ''}<td>${escapeHtml(ticket.received)}</td><td>${statusBadge(ticket.status)}</td><td><button class="row-action" data-action="open-ticket" data-ticket-id="${ticket.id}" aria-label="टिकट खोलें ${ticket.id}">→</button></td></tr>`;
}

function renderTickets() {
  $('#recentTickets').innerHTML = tickets.slice(0, 5).map((ticket, index) => ticketRow(ticket, false, index)).join('');
  const search = ($('#ticketSearch')?.value || '').toLowerCase().trim();
  const status = $('#statusFilter')?.value || 'all';
  const category = $('#categoryFilter')?.value || 'all';
  const filtered = tickets.filter((ticket) => {
    const info = categoryInfo[ticket.category];
    const matchesSearch = !search || [ticket.id, ticket.name, ticket.city, info.label, info.sub].join(' ').toLowerCase().includes(search);
    return matchesSearch && (status === 'all' || ticket.status === status) && (category === 'all' || ticket.category === category);
  });
  $('#allTickets').innerHTML = filtered.length ? filtered.map((ticket, index) => ticketRow(ticket, true, index)).join('') : `<tr><td colspan="6"><div class="empty-state"><div class="empty-icon">⌕</div><h2>No requests found</h2><p>Try a different search or filter.</p></div></td></tr>`;
  $('#resultCount').textContent = `${filtered.length} request${filtered.length === 1 ? '' : 's'}`;
}

function renderActivity() {
  $('#activityList').innerHTML = activity.map((item) => `<div class="activity-item"><span class="activity-icon ${item.tone}">${item.icon}</span><p>${item.copy}<small>${item.time}</small></p></div>`).join('');
}

function renderFocusChart() {
  const counts = Object.entries(categoryInfo).map(([key, info]) => ({ label: `${info.label} · ${info.sub}`, count: tickets.filter((ticket) => ticket.category === key).length }));
  const max = Math.max(...counts.map((item) => item.count));
  $('#focusChart').innerHTML = counts.slice(0, 4).map((item) => `<div class="focus-row"><span class="focus-label">${item.label}</span><span class="bar-track"><span class="bar-fill" style="width:${Math.max(14, item.count / max * 100)}%"></span></span><span class="focus-number">${item.count}</span></div>`).join('');
}

function renderScenarioFlow() {
  const flowPanel = $('#processScreen .flow-panel');
  if (!flowPanel || flowPanel.querySelector('.scenario-map')) return;
  const scenario = document.createElement('section');
  scenario.className = 'scenario-map';
  scenario.innerHTML = `<div class="scenario-heading"><div><p class="eyebrow">हां / नहीं परिदृश्य</p><h2>समीक्षा के बाद क्या होता है?</h2></div><span>निर्णय मार्गदर्शिका</span></div><div class="scenario-route"><div class="scenario-start"><span class="scenario-node">02</span><strong>VGF समीक्षा</strong><small>क्या अनुरोध पूरा और पात्र है?</small></div><div class="scenario-branches"><div class="scenario-branch yes-branch"><span class="branch-label">हां · स्वीकृत</span><div class="branch-path"><i></i><article><strong>टिकट बनाएं</strong><small>सही केसवर्कर को अपने-आप सौंपें और सहायता शुरू करें।</small></article></div></div><div class="scenario-branch info-branch"><span class="branch-label">अधिक जानकारी</span><div class="branch-path"><i></i><article><strong>आवेदक को वापस भेजें</strong><small>टिप्पणी भेजें, अधूरी जानकारी लें और फिर समीक्षा करें।</small></article></div></div><div class="scenario-branch no-branch"><span class="branch-label">नहीं · अस्वीकृत</span><div class="branch-path"><i></i><article><strong>कारण के साथ बंद करें</strong><small>अनिवार्य कारण दर्ज करें और आवेदक को सूचित करें।</small></article></div></div></div></div>`;
  if (!isHindi) scenario.innerHTML = scenario.innerHTML.replaceAll('हां / नहीं परिदृश्य', 'Yes / no scenarios').replaceAll('समीक्षा के बाद क्या होता है?', 'What happens after review?').replaceAll('निर्णय मार्गदर्शिका', 'Decision guide').replaceAll('VGF समीक्षा', 'VGF review').replaceAll('क्या अनुरोध पूरा और पात्र है?', 'Is the request complete and eligible?').replaceAll('हां · स्वीकृत', 'YES · Approved').replaceAll('टिकट बनाएं', 'Create ticket').replaceAll('सही केसवर्कर को अपने-आप सौंपें और सहायता शुरू करें।', 'Auto-assign to the relevant caseworker and begin assistance.').replaceAll('अधिक जानकारी', 'NEEDS INFO').replaceAll('आवेदक को वापस भेजें', 'Return to applicant').replaceAll('टिप्पणी भेजें, अधूरी जानकारी लें और फिर समीक्षा करें।', 'Send a remark, collect the missing detail, then review again.').replaceAll('नहीं · अस्वीकृत', 'NO · Rejected').replaceAll('कारण के साथ बंद करें', 'Close with reason').replaceAll('अनिवार्य कारण दर्ज करें और आवेदक को सूचित करें।', 'Record the mandatory reason and notify the applicant.');
  flowPanel.appendChild(scenario);
}

function showScreen(view) {
  const screenId = view === 'new-ticket' ? 'newTicketScreen' : `${view.replace('-', '')}Screen`;
  const target = document.getElementById(screenId) || $('#overviewScreen');
  $$('.screen').forEach((screen) => screen.classList.remove('active-screen'));
  target.classList.add('active-screen');
  $$('.nav-item').forEach((item) => item.classList.toggle('active', item.dataset.view === view));
  const label = (isHindi ? { overview: 'डैशबोर्ड', tickets: 'सभी अनुरोध', 'new-ticket': 'नया अनुरोध', process: 'प्रक्रिया प्रवाह', people: 'लोग', reports: 'रिपोर्ट', settings: 'सेटिंग्स' } : { overview: 'Overview', tickets: 'All requests', 'new-ticket': 'New request', process: 'Process flow', people: 'People', reports: 'Reports', settings: 'Settings' })[view] || (isHindi ? 'डैशबोर्ड' : 'Overview');
  $('#breadcrumbCurrent').textContent = label;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
}

function openTicket(ticketId) {
  const ticket = tickets.find((item) => item.id === ticketId);
  if (!ticket) return;
  const category = categoryInfo[ticket.category];
  $('#modalContent').innerHTML = `<span class="modal-kicker">${ticket.id} · सहायता अनुरोध</span><h2 class="modal-title">${escapeHtml(ticket.name)}</h2><p class="modal-subtitle">${escapeHtml(category.label)} · ${escapeHtml(category.sub)} · प्राप्ति: ${escapeHtml(ticket.received)}</p><div class="detail-grid"><div class="detail-item"><span>संपर्क</span><strong>${escapeHtml(ticket.phone || '+91 98 7654 3210')}</strong></div><div class="detail-item"><span>स्थान</span><strong>${escapeHtml(ticket.city)}</strong></div><div class="detail-item"><span>सौंपा गया</span><strong>${escapeHtml(category.assignee)}</strong></div><div class="detail-item"><span>संलग्नक</span><strong>${ticket.files} फाइल</strong></div></div><div class="modal-remark"><strong>आवेदक को दिखाई देने वाली टिप्पणी</strong><br>${escapeHtml(ticket.remark)}</div><div class="modal-actions"><select id="modalStatus"><option value="review" ${ticket.status === 'review' ? 'selected' : ''}>समीक्षा आवश्यक</option><option value="progress" ${ticket.status === 'progress' ? 'selected' : ''}>प्रगति में</option><option value="resolved" ${ticket.status === 'resolved' ? 'selected' : ''}>समाधान हो गया</option><option value="rejected" ${ticket.status === 'rejected' ? 'selected' : ''}>अस्वीकृत</option></select><button class="primary-button" data-action="save-status" data-ticket-id="${ticket.id}">अपडेट सहेजें <span>→</span></button></div>`;
  $('#ticketModal').classList.remove('hidden');
}

function handleFiles(event) {
  const files = [...event.target.files];
  const valid = files.filter((file) => file.size <= 5 * 1024 * 1024);
  if (valid.length !== files.length) showToast('Files over 5 MB were removed.');
  $('#fileList').innerHTML = valid.map((file) => `<div class="file-chip"><span>⌁ ${escapeHtml(file.name)}</span><span>${(file.size / 1024 / 1024).toFixed(1)} MB</span></div>`).join('');
  $('#fileInput')._validFiles = valid;
}

function submitTicket(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const name = data.get('name').trim();
  const category = data.get('category');
  const initials = name.split(/\s+/).slice(0, 2).map((part) => part[0]).join('').toUpperCase();
  const newTicket = { id: `VGF-${String(125 + tickets.length - 12).padStart(5, '0')}`, name, initials, city: data.get('address').trim(), category, received: 'Just now', status: 'review', remark: 'Request received and queued for initial review. The team will respond within 2 working days.', files: ($('#fileInput')._validFiles || []).length, phone: data.get('phone') };
  tickets.unshift(newTicket);
  renderTickets();
  renderFocusChart();
  form.reset();
  $('#fileList').innerHTML = '';
  showToast(`${newTicket.id} created and routed to ${categoryInfo[category].assignee}.`);
  showScreen('tickets');
}

function bindEvents() {
  document.addEventListener('click', (event) => {
    const viewButton = event.target.closest('[data-view]');
    if (viewButton) {
      const view = viewButton.dataset.view;
      if (view === 'new-ticket' && $('#dashboardView').classList.contains('hidden')) return;
      showScreen(view);
      return;
    }
    const actionButton = event.target.closest('[data-action]');
    if (!actionButton) return;
    const action = actionButton.dataset.action;
    if (action === 'toggle-password') {
      const password = $('#loginPassword');
      password.type = password.type === 'password' ? 'text' : 'password';
      actionButton.textContent = password.type === 'password' ? '◉' : '◌';
    }
    if (action === 'forgot') { event.preventDefault(); showToast('For the demo, use any valid email and password.'); }
    if (action === 'notifications') showToast('You have 4 requests that need review.');
    if (action === 'language') { sessionStorage.setItem('vgf-language', isHindi ? 'en' : 'hi'); window.location.reload(); }
    if (action === 'help') showToast('Help centre: contact the VGF administrator for workflow guidance.');
    if (action === 'toast') showToast('This workspace is included in the next demo iteration.');
    if (action === 'open-ticket') openTicket(actionButton.dataset.ticketId);
    if (action === 'close-modal') $('#ticketModal').classList.add('hidden');
    if (action === 'save-status') {
      const ticket = tickets.find((item) => item.id === actionButton.dataset.ticketId);
      const nextStatus = $('#modalStatus').value;
      ticket.status = nextStatus;
      ticket.remark = nextStatus === 'rejected' ? 'This request was not approved. The VGF team has added a reason and will contact the applicant.' : nextStatus === 'resolved' ? 'This request has been resolved by the VGF team.' : `Request moved to ${statusInfo[nextStatus].label.toLowerCase()} by the VGF team.`;
      $('#ticketModal').classList.add('hidden');
      renderTickets();
      showToast(`${ticket.id} updated to ${statusInfo[nextStatus].label}.`);
    }
  });
  $('#loginForm').addEventListener('submit', (event) => {
    event.preventDefault();
    $('#loginView').classList.add('hidden');
    $('#dashboardView').classList.remove('hidden');
    renderTickets();
    showToast(isHindi ? 'वापसी पर स्वागत है, Abhinav।' : 'Welcome back, Abhinav.');
  });
  $('#ticketForm').addEventListener('submit', submitTicket);
  $('#fileInput').addEventListener('change', handleFiles);
  ['ticketSearch', 'statusFilter', 'categoryFilter'].forEach((id) => document.getElementById(id).addEventListener('input', renderTickets));
  $('#ticketModal').addEventListener('click', (event) => { if (event.target.id === 'ticketModal') $('#ticketModal').classList.add('hidden'); });
}

translateStaticText();
if ($('#languageToggle')) $('#languageToggle').firstChild.nodeValue = isHindi ? 'English ' : 'हिन्दी ';
renderActivity();
renderFocusChart();
renderScenarioFlow();
bindEvents();
