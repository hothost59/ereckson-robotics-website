const committees = [
  ['Display', 'The Display committee is responsible for the creative and artistic aspects of the team\'s presentation. They make a trifold display that serves as a physical representation of the team. This display is shown to the competition judges to highlight the team\'s notable achievements, sponsors, and committee roles.'],
  ['Website', 'The Web Committee is responsible for creating and maintaining our robotics team website. It promotes our team using text, pictures, and videos to show our work and accomplishments. The website is coded to be simple and easy to navigate, so visitors can quickly find important information. The committee also updates the site regularly to keep everything current and organized.'],
  ['Marketing', 'The marketing team consists of people chosen from different committees for their excellent communication and presentation skills. Their main role is to develop and deliver an elaborate presentation about the robotics team to the competition judges. The foremost objective is to highlight the team\'s key qualities and accomplishments, using their strong public speaking abilities to earn points. They’re the official voice of the team, using their abilities to show the judges how incredible our team is.'],
  ['Fabrication', 'The Fab team is responsible for designing and constructing the robot. This involves the entire process, from creating the initial concept to the physical assembly of the final machine. It is a huge challenge as they must produce a fully operational robot capable of withstanding multiple rounds of competition using only the provided materials. A crucial aspect of their work is maintaining a clear and detailed record of the entire process in the Engineering Notebook. Before construction, they develop a virtual mock-up of the robot using computer-aided design (CAD).'],
  ['Tech', 'The Tech team is the central control of the robot. They are responsible for writing the code and software that dictate the robot\'s actions and manage its controller. The team also serves as the primary support for resolving any technical difficulties that arise during competition. They use specialized software, such as MATLAB and Simulink, for their programming needs. Furthermore, they are tasked with the maintenance and repair of the robot\'s motors to ensure maximum efficiency.'],
  ['Media', 'The Media team is all about capturing the team\'s story. They\'re the photographers and videographers who document everything the robotics team does, from the very first brainstorming sessions all the way through the final competition. They use these photos and videos to share the team\'s journey on social media and with the broader community, giving everyone an inside look at all their hard work.'],
];

const projects = [
  { title: 'Finding Sponsors', sponsors: [{ name: 'Hashi Japanese Kitchen', logo: '/sponsors/hashi.png' }, { name: 'Asian King Buffet Waxahachie', logo: '/sponsors/asian-king-buffet.png' }, { name: 'Ereckson PTA', logo: '/sponsors/ereckson-pta.png' }], text: 'During the beginning of the year, we researched and called many local companies to ask if they could support our robotics team through sponsorships, donations, or resources.', points: ['Overcame Public Anxiety', 'Strengthens community connections', 'Creates new networking opportunities'] },
  { title: 'STEAM Center', text: 'We have dedicated countless hours at the STEAM Center, receiving valuable mentorship and guidance from Mr. Gadd as well as the experienced students of Allen High School Robotics, which has greatly helped us refine our skills and strategies.', points: ['Strategy Development', 'Problem-Solving', 'Teamwork and Communication'] },
];

const people = [
  ['Lily Cagle', 'Fabrication'],
  ['Ramzi Elissa', 'Tech'],
  ['Violet Forbes', 'Web and Media'],
  ['Aanya Gandhi', 'Web and Media'],
  ['Avni Goyal', 'Display'],
  ['Ryan Hester', 'Tech'],
  ['Pranika Jain', 'Display'],
  ['Ally Jin', 'Display'],
  ['Arnik Jayervand', 'Fabrication'],
  ['Alex Jo', 'Tech'],
  ['Zidaan Kazi', 'Tech'],
  ['Brayden Keller', 'Tech'],
  ['Brian Kim', 'Fabrication'],
  ['Claire Lee', 'Fabrication'],
  ['Abieyuwa Macfoy', 'Tech'],
  ['Adesuwa Macfoy', 'Fabrication'],
  ['Yuvan Manimaran', 'Display'],
  ['Harshith Medida', 'Web and Media'],
  ['Shivika Misra', 'Tech'],
  ['Riley Pascual', 'Web and Media'],
  ['Izyan Qureshi', 'Fabrication'],
  ['Carissa Samant', 'Web and Media'],
  ['Arohi Sharma', 'Fabrication'],
  ['Leon Shen', 'Display'],
  ['Banji Shobowale', 'Display'],
  ['Aashna Shrivastava', 'Fabrication'],
  ['Simon Wei', 'Tech'],
  ['Junior Ye', 'Fabrication'],
  ['Justin Ye', 'Fabrication'],
  ['Henry Zhang', 'Fabrication'],
  ['Ms. Churchill', 'Sponsor'],
  ['Mr. Gunderson', 'Sponsor'],
];

const process = [
  ['Define & Research', 'We identify the problem and challenge, and then we gather information and observe existing solutions.'],
  ['Plan', 'We generate ideas and possible solutions, and create a plan or strategy for building the design.'],
  ['Develop & Test', 'Build and develop the prototype or solution, and test it, identify problems, and make improvements.'],
  ['Reflect', 'When we are done we present the final solution, and then evaluate the results and see what we can do better and keep on making improvements.'],
];

const milestones = [
  ['Acquiring Trifolds', 'Display', 'Our Display team is gathering trifold boards and the other supplies we need to build this year’s team display, so everything is ready before construction begins.'],
  ['Driving', 'Fab and Tech', 'In each competition, we have multiple drivers operating the robot on the course, supported by spotters who guide them. To improve our skills, we made numerous visits to the STEAM Center to receive guidance from Allen High School students and Mr. Gadd.'],
  ['Marketing', 'People from all different teams', 'Our Marketing team prepared and memorized a comprehensive presentation to deliver to the judges, highlighting our team’s strengths and effectively showcasing the skills we developed throughout the season.'],
  ['Photos', 'Media', 'Our Media team has been capturing photos and videos that showcase the effort, dedication, and teamwork behind all the hard work and challenges of our robotics journey.'],
  ['Game', 'Display', 'This year\'s game is Byte to Bite, where robots run a restaurant from farm to table: harvesting ingredients, building meals, and delivering them to diners. The process was lengthy and challenging, but the final outcome was successful and rewarding.'],
  ['Coding', 'Web', 'Our Web committee is diligently working to design and develop a fully functional website for the competition. They are responsible for organizing content, creating an intuitive layout, and ensuring that the site effectively showcases our team’s achievements and skills.'],
];

const testimonials = [
  ['“The Ereckson Middle School Husky Robotics program provides a chance for students of various interests and abilities to come together and work collaboratively. It helps students improve their planning, engineering, leadership, and presentation skills as well as other career capabilities.”', 'Lori Allen', '7th Grade GT Science'],
  ['“I believe the robotics team at Ereckson is a fantastic group to join. They are always collaborating with one another to help students reach their full potential. Their participation in the BEST Robotics program involves designing, building, and programming robots, and they also benefit from mentorship by experienced coaches and high school robotics members, fostering growth and confidence in STEM fields.”', 'Christopher Burgos', '7th Grade Math'],
  ['“Robotics has been part of Ereckson for as long as I can remember. It has provided students with interests in engineering and robotics an opportunity to learn these skills and applications outside of the classroom. It has allowed the students to learn and apply skills they are interested in and show these skills as shown by the successes that EMS Robotics has achieved throughout the years.”', 'James Byers', 'Fundamentals of Business Information Marketing'],
  ['“When I first got to Ereckson it was obvious that the Robotics program was a top-notch organization. There is also such a strong sense of community with the students involved in BEST Husky Robotics; working towards a common goal and producing high-quality work builds great camaraderie.”', 'Joanna DeVoto', 'Orchestra'],
  ['“BEST Robotics isn’t just ROBOTICS. From marketing, to engineering basics, to oral presentations, to learning how to problem solve and think critically, BEST Robotics truly shapes students and prepares them for the future. The skills learned are irreplaceable.”', 'Sarah Twedt', '8th grade GT Science'],
];

const faqs = [
  ['How does the club help children succeed in the future?', 'Our program allows its members future STEM opportunities, pathways, and careers. Many students have participated in our club and have considered a job in the STEM field.'],
  ['What do you do in BEST Robotics?', 'Everyone works diligently and hard for the competition. Some build the robot, while others help market and showcase our team. All these efforts eventually help us compete at the robotics competitions for awards.'],
  ['How can I join?', 'Unfortunately, not everyone has the opportunity to join a BEST Robotics club. Different schools have different clubs, so many are unable to join. But if you are trying to join Ereckson BEST, you will have to complete a project related to your committee, and then get interviewed by a member who has already been on the team for the past year. Based on certain criteria, we determine who will make the team during the next season.'],
  ['How do the competitions work?', 'In the competitions, different teams come to compete with their robot and other components to gain points. Points could come from the robot completing tasks, display, marketing presentation, engineering notebook, etc. If your team does well in the regional competition, you will be able to compete in the state competition. If you win the state competition, your team will advance further into the national competition, while also potentially earning recognition of your team.'],
];

// IMAGE LINKS — paste each year's image URL between the blank quotes.
// Leave a value blank to keep that image area empty.
const imageLinks = {
  teamLogo: '/ereckson-huskies-logo.png',
  aboutTeam: '/coco-best-logo.jpg',
  projects: {
    'finding-sponsors': '/finding-sponsors.png',
    'steam-center': '/steam-center.png',
  },
  people: {
    'lily-cagle': '/photos/lily-cagle.png',
    'ramzi-elissa': '/photos/ramzi-elissa.png',
    'violet-forbes': '/photos/violet-forbes.png',
    'aanya-gandhi': '/photos/aanya-gandhi.png',
    'avni-goyal': '/photos/avni-goyal.png',
    'ryan-hester': '/photos/ryan-hester.png',
    'pranika-jain': '/photos/pranika-jain.png',
    'ally-jin': '/photos/ally-jin.png',
    'arnik-jayervand': '/photos/arnik-jayervand.webp',
    'alex-jo': '/photos/alex-jo.png',
    'zidaan-kazi': '/photos/zidaan-kazi.png',
    'brayden-keller': '/photos/brayden-keller.png',
    'brian-kim': '/photos/brian-kim.webp',
    'claire-lee': '/photos/claire-lee.jpg',
    'abieyuwa-macfoy': '/photos/abieyuwa-macfoy.png',
    'adesuwa-macfoy': '/photos/adesuwa-macfoy.webp',
    'yuvan-manimaran': '/photos/yuvan-manimaran.png',
    'harshith-medida': '/photos/harshith-medida.png',
    'shivika-misra': '/photos/shivika-misra.png',
    'riley-pascual': '/photos/riley-pascual.png',
    'izyan-qureshi': '',
    'carissa-samant': '/photos/carissa-samant.png',
    'arohi-sharma': '/photos/arohi-sharma.webp',
    'leon-shen': '/photos/leon-shen.png',
    'banji-shobowale': '/photos/banji-shobowale.png',
    'aashna-shrivastava': '/photos/aashna-shrivastava.webp',
    'simon-wei': '/photos/simon-wei.png',
    'junior-ye': '/photos/junior-ye.webp',
    'justin-ye': '/photos/justin-ye.webp',
    'henry-zhang': '/photos/henry-zhang.webp',
    'ms-churchill': '/photos/ms-churchill.png',
    'mr-gunderson': '/photos/mr-gunderson.png',
  },
  competitionTheme: '/season-welcome.jpg',
  fieldKickoff: '/field.jpg',
  testimonials: {
    'lori-allen': '/photos/teachers/lori-allen.png',
    'christopher-burgos': '/photos/teachers/christopher-burgos.png',
    'james-byers': '/photos/teachers/james-byers.png',
    'joanna-devoto': '/photos/teachers/joanna-devoto.png',
    'sarah-twedt': '/photos/teachers/sarah-twedt.png',
  },
  milestones: {
    'acquiring-trifolds': '/trifold-display.jpg',
    driving: '/photos/driving.jpg',
    marketing: '',
    photos: '/photos-section.jpg',
    game: '/byte-to-bite-logo.jpg',
    coding: '/coding.webp',
  },
};

const e = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const slugify = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const imageMarkup = (url, alt, className = 'slot-image') => {
  const source = typeof url === 'string' ? url.trim() : '';
  return source ? `<img class="${className}" src="${e(source)}" alt="${e(alt)}" loading="lazy" decoding="async">` : '';
};

document.querySelector('#app').innerHTML = `
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="topbar">
    <div class="wrap nav-shell">
      <a class="brand" href="#home" aria-label="Ereckson Middle School BEST Robotics, home">
        <span class="brand-mark" aria-hidden="true"><img src="/favicon.ico" alt="" width="36" height="36"></span><span class="brand-name">Ereckson Middle School<span>BEST Robotics</span></span>
      </a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-nav" aria-label="Open navigation menu"><span></span><span></span><span></span></button>
      <nav aria-label="Main navigation"><ul class="nav-links" id="primary-nav">
        <li><a href="#home">Home</a></li><li><a href="#about">About</a></li><li><a href="#committees">Committees</a></li><li><a href="#people">People</a></li><li><a href="#milestones">Milestones</a></li>
      </ul></nav>
    </div>
  </header>
  <main id="main">
    <section class="hero" id="home" aria-labelledby="hero-title">
      <div class="wrap hero-grid">
        <div class="hero-copy">
          <h1 id="hero-title">Ereckson Middle School<br><span>BEST Robotics</span></h1>
          <p class="hero-quote">We’ve got a dream to achieve.</p>
          <div class="hero-actions"><a class="button" href="#about">Start Journey <span class="button-arrow" aria-hidden="true">↘</span></a></div>
        </div>
        <div class="hero-art">
          <div class="logo-asset-slot image-slot" role="img" aria-label="Team logo image area. Paste its URL in imageLinks.teamLogo">${imageMarkup(imageLinks.teamLogo, 'Ereckson Middle School BEST Robotics team logo')}</div>
        </div>
      </div>
    </section>
    <section class="section section--white" id="about" aria-labelledby="about-title">
      <div class="wrap about-grid">
        <div class="about-image"><div class="asset-slot image-slot" role="img" aria-label="Team photo image area. Paste its URL in imageLinks.aboutTeam">${imageMarkup(imageLinks.aboutTeam, 'Ereckson Robotics team')}</div></div>
        <div class="about-copy"><p class="eyebrow">Who we are</p><h2 id="about-title">Crafting Excellence Through Innovation and Dedication</h2>
          <p>As the Ereckson Middle School BEST Robotics team, we are proud to represent the CoCo BEST Area. This competition is a tough, eight-week challenge where we strive for excellence in numerous categories. Beyond just building a high-performing robot, our team is evaluated on various aspects of our work. These include the Simulink Design Award, which showcases our technical prowess in software design, and the Sportsmanship Award, which recognizes our commitment to teamwork and respect. We're also striving for the respected BEST Award, which is a significant honor that celebrates our efforts in project management, community outreach, and overall team spirit.</p>
          <div class="stats" aria-label="Team stats"><div class="stat"><strong>60+</strong><span>Hours Dedicated</span></div><div class="stat"><strong>14+</strong><span>Years Experience</span></div><div class="stat"><strong>155%</strong><span>Effort and Determination</span></div></div>
        </div>
      </div>
    </section>
    <section class="section" id="committees" aria-labelledby="committees-title">
      <div class="wrap"><div class="section-head"><p class="eyebrow">One team, many talents</p><h2 id="committees-title">Committees</h2><p class="section-intro">Our robotics committees collaborate seamlessly to design, build, program, and promote our robot, ensuring every part of the team works together toward competition success.</p></div>
        <div class="committee-grid">${committees.map(([title, text], i) => `<article class="committee"><span class="committee-number">0${i + 1} / TEAM</span><h3>${e(title)}</h3><p>${e(text)}</p></article>`).join('')}</div>
      </div>
    </section>
    <section class="section section--white" id="projects" aria-labelledby="projects-title">
      <div class="wrap"><div class="section-head"><p class="eyebrow">Making it happen</p><h2 id="projects-title">Project Stories</h2></div>
        <div class="projects-grid">${projects.map((project, i) => `<article class="project"><div><p class="eyebrow">Team project · 0${i + 1}</p><h3>${e(project.title)}</h3><p>${e(project.text)}</p>${project.sponsors ? `<p class="sponsor-label">Thank you to our sponsors</p><ul class="sponsor-list">${project.sponsors.map(({ name, logo }) => `<li>${logo ? `<img src="${e(logo)}" alt="" loading="lazy">` : ''}<span>${e(name)}</span></li>`).join('')}</ul>` : ''}</div><div class="project-aside">${project.sponsors ? '' : `<div class="project-image-slot image-slot" role="img" aria-label="${e(project.title)} photo area. Paste its URL in imageLinks.projects.${e(slugify(project.title))}">${imageMarkup(imageLinks.projects[slugify(project.title)], `${project.title} photo`)}</div>`}${project.points.map((point) => `<span>${e(point)}</span>`).join('')}</div></article>`).join('')}</div>
      </div>
    </section>
    <section class="section" id="people" aria-labelledby="people-title">
      <div class="wrap">
        <div class="people-head"><div class="section-head"><p class="eyebrow">The people behind the finished products</p><h2 id="people-title">People</h2><p class="section-intro">These are all of the spectacular people that help contribute to make our team who it is today.</p></div><p class="people-count" id="people-count" aria-live="polite"></p></div>
        <ul class="filter-list" aria-label="Filter team members">${['Everyone', 'Tech', 'Display', 'Fabrication', 'Web and Media', 'Sponsors'].map((filter, i) => `<li><button type="button" class="filter-button" data-filter="${e(filter)}" aria-pressed="${i === 0 ? 'true' : 'false'}">${e(filter)}</button></li>`).join('')}</ul>
        <div class="people-grid" id="people-grid">${people.map(([name, role]) => {
          const slug = slugify(name);
          return `<article class="person" data-role="${e(role)}"><div class="portrait-slot image-slot" role="img" aria-label="${e(name)} portrait area. Paste its URL in imageLinks.people.${e(slug)}">${imageMarkup(imageLinks.people[slug], `${name} portrait`)}</div><div class="person-details"><h3>${e(name)}</h3><p>${e(role)}</p></div></article>`;
        }).join('')}</div>
      </div>
    </section>
    <section class="section section--blue" id="process" aria-labelledby="process-title">
      <div class="wrap"><p class="eyebrow">A path from idea to impact</p><h2 id="process-title">Working Process</h2><p class="section-intro">This is the Design Process, which is a process we use to work efficiently and effectively as a team towards our goal</p>
        <div class="process-grid">${process.map(([title, text], i) => `<article class="process-step"><span class="step-line" aria-hidden="true"></span><span class="step-num">0${i + 1}</span><h3>${e(title)}</h3><p>${e(text)}</p></article>`).join('')}</div>
      </div>
    </section>
    <section class="section section--white" id="competition" aria-labelledby="competition-title">
      <div class="wrap competition">
        <div class="game-aside"><div class="game-diagram image-slot" role="img" aria-label="Byte to Bite theme image area. Paste its URL in imageLinks.competitionTheme">${imageMarkup(imageLinks.competitionTheme, 'Byte to Bite competition theme')}</div><div class="game-caption"><span>01 &nbsp; Competition</span><span>Byte to Bite</span></div></div>
        <div class="competition-copy"><p class="eyebrow">Innovation Hub</p><h2 id="competition-title">Competition</h2><p>The BEST Robotics program is a competition with middle and high schools competing throughout the United States. In the time span of 2 months, we must build a robot fit to perform the tasks at the competition. We also have to code the robot, build an exhibit showcasing our team, market, and show our organization to others. This year's theme is Byte to Bite, a restaurant where the food of the future is served to the diners of today. Our robot has to tend a garden, harvest ingredients, build meals, and deliver them to different areas of the restaurant. Robots spin a water valve to irrigate their garden, twist a handle to deploy a crop-tending drone, and even deliver completed meals autonomously to the Dining Room. The goal is to score the most points in the least amount of time.</p>
          <div class="competition-metrics"><div class="metric"><strong>17+</strong><span>Schools Competing</span></div><div class="metric"><strong>5</strong><span>Drivers</span></div></div>
          <div class="kickoff-note">Byte to Bite <strong>Theme</strong> &nbsp; · &nbsp; Kickoff - The Field</div>
        </div>
      </div>
    </section>
    <section class="section field-section" id="field" aria-labelledby="field-title">
      <div class="wrap field-grid"><div class="field-art image-slot" role="img" aria-label="Kickoff field image area. Paste its URL in imageLinks.fieldKickoff">${imageMarkup(imageLinks.fieldKickoff, 'Collin County kickoff field')}</div><div><p class="eyebrow">Competition field</p><h2 id="field-title">The Field</h2><p>The field is the Byte to Bite Restaurant, split into four quadrants around a shared Autonomous Dining Room. Each team's quadrant has a Garden, Dishware, Warming Shelves, a Dining Room entrance, and access to a Balance Buffet that is shared with a team on the opposite side.</p><ul class="field-bullets"><li>Got to learn about the challenges we have to face</li><li>Saw the field for the first time</li><li>Saw all of the rules that we have to follow</li></ul><span class="kickoff-note">Collin County <strong>Kickoff</strong></span></div></div>
    </section>
    <section class="section section--white" id="testimonials" aria-labelledby="testimonials-title">
      <div class="wrap"><div class="section-head"><p class="eyebrow">From our school community</p><h2 id="testimonials-title">Testimonials</h2><p class="section-intro">Teacher testimonials emphasize the valuable skills students develop through robotics.</p></div>
        <div class="testimonials">${testimonials.map(([quote, name, role]) => `<article class="quote-card"><span class="quote-mark" aria-hidden="true">“</span><blockquote>${e(quote)}</blockquote><div class="quote-person"><div class="testimonial-photo image-slot" role="img" aria-label="${e(name)} portrait area. Paste its URL in imageLinks.testimonials.${e(slugify(name))}">${imageMarkup(imageLinks.testimonials[slugify(name)], `${name} portrait`)}</div><div class="quote-person-copy"><strong>${e(name)}</strong><span>${e(role)}</span></div></div></article>`).join('')}</div>
      </div>
    </section>
    <section class="section" id="faq" aria-labelledby="faq-title">
      <div class="wrap faq-layout"><div><p class="eyebrow">Good questions</p><h2 id="faq-title">FAQs</h2><p class="section-intro">These are some Frequently Asked Questions that people ask when they hear about Ereckson Middle School BEST Robotics.</p></div>
        <div class="faq-list">${faqs.map(([question, answer], i) => `<article class="faq-item"><h3><button class="faq-question" type="button" aria-expanded="false" aria-controls="faq-answer-${i}" id="faq-question-${i}"><span><span class="faq-number">0${i + 1}</span>${e(question)}</span><span class="faq-plus" aria-hidden="true">+</span></button></h3><div class="faq-answer" id="faq-answer-${i}" role="region" aria-labelledby="faq-question-${i}" hidden>${e(answer)}</div></article>`).join('')}</div>
      </div>
    </section>
    <section class="section section--white" id="milestones" aria-labelledby="milestones-title">
      <div class="wrap"><div class="milestone-intro"><div class="section-head"><p class="eyebrow">Work worth remembering</p><h2 id="milestones-title">Milestones to Greatness</h2></div><p class="section-intro">These are just a few of the many tasks we completed to prepare for the competition.</p></div>
        <div class="milestone-grid">${milestones.map(([title, team, text], i) => `<article class="milestone"><div class="milestone-art image-slot" role="img" aria-label="${e(title)} image area. Paste its URL in imageLinks.milestones.${e(slugify(title))}">${imageMarkup(imageLinks.milestones[slugify(title)], `${title} milestone photo`)}</div><div class="milestone-copy"><h3>${e(title)}</h3><p class="team">${e(team)}</p><p>${e(text)}</p></div></article>`).join('')}</div>
      </div>
    </section>
  </main>
  <footer class="footer"><div class="wrap"><div class="footer-main"><div class="footer-title"><p class="eyebrow">Ereckson Middle School</p><h2>Ereckson Middle School BEST Robotics</h2><p>We’ve got a dream to achieve.</p></div><nav class="footer-links" aria-label="Footer navigation"><a href="#about">About</a><a href="#committees">Committees</a><a href="#projects">Project Stories</a><a href="#people">People</a><a href="#process">Working Process</a><a href="#competition">Competition</a><a href="#testimonials">Testimonials</a><a href="#faq">FAQs</a><a href="#milestones">Milestones</a></nav></div><div class="footer-bottom"><p>© Copyright <strong>EMS Robotics</strong> All Rights Reserved</p><p>Designed by <a href="https://bootstrapmade.com/" target="_blank" rel="noopener noreferrer">BootstrapMade</a></p><a class="back-top" href="#home">Back to top ↑</a></div></div></footer>
`;

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-nav');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  menuButton.setAttribute('aria-label', open ? 'Open navigation menu' : 'Close navigation menu');
  navigation.classList.toggle('is-open', !open);
});
navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation menu');
  }
});

const filterButtons = [...document.querySelectorAll('.filter-button')];
const personCards = [...document.querySelectorAll('.person')];
const count = document.querySelector('#people-count');
const normalizeRole = (role) => role.toLowerCase();
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
function filterPeople(filter, animate = false) {
  animate = animate && !reduceMotion.matches;
  // Remember where each visible card is now, so the cards can slide to their new spots.
  const before = new Map();
  if (animate) personCards.forEach((card) => { if (!card.hidden) before.set(card, card.getBoundingClientRect()); });
  let visible = 0;
  personCards.forEach((card) => {
    const role = normalizeRole(card.dataset.role);
    const show = filter === 'Everyone'
      || (filter === 'Tech' && role === 'tech')
      || (filter === 'Display' && role === 'display')
      || (filter === 'Fabrication' && role === 'fabrication')
      || (filter === 'Web and Media' && (role.includes('web') || role.includes('media')))
      || (filter === 'Sponsors' && role === 'sponsor');
    card.hidden = !show;
    if (show) visible += 1;
  });
  count.textContent = `${visible} people`;
  if (!animate) return;
  let entering = 0;
  personCards.forEach((card) => {
    if (card.hidden) return;
    const from = before.get(card);
    const to = card.getBoundingClientRect();
    if (from) {
      const dx = from.left - to.left;
      const dy = from.top - to.top;
      if (dx || dy) card.animate([{ transform: `translate(${dx}px, ${dy}px)` }, { transform: 'none' }], { duration: 600, easing: 'cubic-bezier(.2, .8, .2, 1)' });
    } else {
      card.animate([{ opacity: 0, transform: 'scale(.9)' }, { opacity: 1, transform: 'none' }], { duration: 450, delay: 150 + Math.min(entering, 10) * 35, easing: 'ease-out', fill: 'backwards' });
      entering += 1;
    }
  });
  count.classList.remove('bump');
  void count.offsetWidth;
  count.classList.add('bump');
}
filterButtons.forEach((button) => button.addEventListener('click', () => {
  filterButtons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
  filterPeople(button.dataset.filter, true);
}));
filterPeople('Everyone');

document.querySelectorAll('.faq-question').forEach((button) => {
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    const answer = document.getElementById(button.getAttribute('aria-controls'));
    button.setAttribute('aria-expanded', String(!expanded));
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { answer.hidden = expanded; return; }
    // Slide the answer open or closed instead of snapping.
    answer.getAnimations().forEach((animation) => animation.cancel());
    answer.style.overflow = 'hidden';
    const settle = () => { answer.style.overflow = ''; };
    if (expanded) {
      const height = answer.offsetHeight;
      const close = answer.animate([{ height: `${height}px`, opacity: 1 }, { height: '0px', opacity: 0, paddingBottom: '0px' }], { duration: 280, easing: 'ease-in-out' });
      close.onfinish = () => { answer.hidden = true; settle(); };
    } else {
      answer.hidden = false;
      const height = answer.offsetHeight;
      const open = answer.animate([{ height: '0px', opacity: 0, paddingBottom: '0px' }, { height: `${height}px`, opacity: 1 }], { duration: 380, easing: 'cubic-bezier(.2, .8, .2, 1)' });
      open.onfinish = settle;
    }
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation menu');
    menuButton.focus();
  }
});

// Scroll animations: fade/slide items in as they enter the screen, and count up the numbers.
// Skipped for people who prefer reduced motion.
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const groups = ['.section-head', '.about-image', '.about-copy', '.committee', '.project', '.process-step', '.competition-copy', '.game-aside', '.field-art', '.field-grid > div:last-child', '.quote-card', '.faq-item', '.milestone', '.person', '.stat', '.metric', '.people-head'];
  let pending = [];
  groups.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.classList.add('reveal');
      el.style.setProperty('--d', `${(i % 4) * 90}ms`);
      pending.push(el);
    });
  });

  const countUp = (el) => {
    const number = el.querySelector('strong');
    const match = number && number.textContent.match(/^(\d+)(.*)$/);
    if (!match) return;
    const end = Number(match[1]);
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / 1100, 1);
      number.textContent = `${Math.round(end * (1 - Math.pow(1 - t, 3)))}${match[2]}`;
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const check = () => {
    const limit = window.innerHeight * 0.92;
    pending = pending.filter((el) => {
      if (el.getBoundingClientRect().top > limit) return true;
      el.classList.add('in');
      if (el.matches('.stat, .metric')) countUp(el);
      return false;
    });
    if (!pending.length) {
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
    }
  };
  window.addEventListener('scroll', check, { passive: true });
  window.addEventListener('resize', check);
  check();
}

// Nav polish: stagger the menu links, shadow when scrolled, highlight the current section.
document.querySelectorAll('#primary-nav li').forEach((li, i) => li.style.setProperty('--n', String(i)));
{
  const topbar = document.querySelector('.topbar');
  const links = [...document.querySelectorAll('#primary-nav a')].map((a) => ({ a, section: document.querySelector(a.getAttribute('href')) })).filter((item) => item.section);
  const update = () => {
    topbar.classList.toggle('is-scrolled', window.scrollY > 8);
    let current = null;
    links.forEach((item) => { if (item.section.getBoundingClientRect().top <= 120) current = item; });
    links.forEach((item) => item.a.classList.toggle('is-active', item === current));
  };
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
}

// Hero particles: drifting dots joined by thin lines, which gently move away from the cursor.
// Skipped for reduced motion, and paused when the hero is off screen or the tab is hidden.
{
  const hero = document.querySelector('.hero');
  if (hero && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const canvas = document.createElement('canvas');
    canvas.className = 'hero-particles';
    canvas.setAttribute('aria-hidden', 'true');
    hero.prepend(canvas);
    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let dots = [];
    let running = false;
    let visible = true;
    const mouse = { x: -9999, y: -9999 };
    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = hero.clientWidth;
      height = hero.clientHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      const count = Math.round(Math.min(70, Math.max(24, (width * height) / 16000)));
      dots = Array.from({ length: count }, () => ({
        x: Math.random() * width, y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
        r: 1.4 + Math.random() * 1.8, silver: Math.random() < 0.35,
      }));
    };
    const frame = () => {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);
      for (const d of dots) {
        const dx = d.x - mouse.x;
        const dy = d.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 120 && dist > 0) { d.x += (dx / dist) * 1.6; d.y += (dy / dist) * 1.6; }
        d.x += d.vx; d.y += d.vy;
        if (d.x < -10) d.x = width + 10; else if (d.x > width + 10) d.x = -10;
        if (d.y < -10) d.y = height + 10; else if (d.y > height + 10) d.y = -10;
      }
      for (let i = 0; i < dots.length; i += 1) {
        for (let j = i + 1; j < dots.length; j += 1) {
          const dist = Math.hypot(dots[i].x - dots[j].x, dots[i].y - dots[j].y);
          if (dist < 130) {
            ctx.strokeStyle = `rgba(23, 101, 179, ${0.18 * (1 - dist / 130)})`;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(dots[i].x, dots[i].y); ctx.lineTo(dots[j].x, dots[j].y); ctx.stroke();
          }
        }
      }
      for (const d of dots) {
        ctx.fillStyle = d.silver ? 'rgba(127, 143, 163, 0.6)' : 'rgba(23, 101, 179, 0.45)';
        ctx.beginPath(); ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2); ctx.fill();
      }
      requestAnimationFrame(frame);
    };
    const sync = () => {
      const shouldRun = visible && !document.hidden;
      if (shouldRun && !running) { running = true; requestAnimationFrame(frame); }
      if (!shouldRun) running = false;
    };
    hero.addEventListener('pointermove', (event) => {
      const rect = hero.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    });
    hero.addEventListener('pointerleave', () => { mouse.x = -9999; mouse.y = -9999; });
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', sync);
    if ('IntersectionObserver' in window) {
      new IntersectionObserver((entries) => { visible = entries[0].isIntersecting; sync(); }).observe(hero);
    }
    resize();
    sync();
  }
}
