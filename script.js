// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const navUl = document.querySelector('nav ul');
mobileMenuToggle.addEventListener('click', () => {
  navUl.classList.toggle('active');
});

// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if(target){
      const yOffset = -60;
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top:y, behavior:'smooth'});
      navUl.classList.remove('active'); // close mobile menu
    }
  });
});

// // Dark mode toggle with persistence
// const toggleBtn = document.getElementById('theme-toggle');
// if(localStorage.getItem('theme') === 'dark'){
//   document.body.classList.add('dark');
//   toggleBtn.textContent = "☯";
// }
// toggleBtn.addEventListener('click', () => {
//   document.body.classList.toggle('dark');
//   const isDark = document.body.classList.contains('dark');
//   toggleBtn.textContent = isDark ? "☯" : "☯";
//   localStorage.setItem('theme', isDark ? 'dark' : 'light');
// });



// Certificates viewer
const certListItems = document.querySelectorAll('.cert-list li');
const certFrame = document.getElementById('cert-frame');
certListItems.forEach(item => {
  item.addEventListener('click', () => {
    const pdfPath = item.querySelector('a').getAttribute('href');
    certFrame.src = pdfPath;
    certFrame.style.display = 'block';
    window.scrollTo({ top: certFrame.offsetTop - 60, behavior:'smooth' });
  });
});

// Section fade-in animation
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold:0.1 });
sections.forEach(section => observer.observe(section));


// Array of your video links
const videoLinks = [
  "https://www.youtube.com/watch?v=xygAmmuEjMk",
  "https://www.youtube.com/watch?v=XgRm3Xcjyjw",
  "https://www.youtube.com/watch?v=uBKEgU4kbMI",
  "https://www.youtube.com/watch?v=WglhgmzXwLw"
];

// Array of corresponding video titles
const videoTitles = [
  "Visiting Georgia Tech for the first time!",
  "A productive day in my life as an International Student in the USA | Freshman at GSU",
  "What’s Inside? Georgia Aquarium & World of Coca-Cola | Atlanta Vlog",
  "Bengaluru to the USA Vlog'24"
];

const youtubeGrid = document.getElementById('youtube-video-grid');

videoLinks.forEach((link, index) => {
  // Extract video ID from link
  const videoId = link.split("v=")[1];

  // Create video card element
  const videoCard = document.createElement('a');
  videoCard.href = link;
  videoCard.target = "_blank";
  videoCard.rel = "noopener noreferrer";
  videoCard.classList.add('youtube-video-card');

  // Set thumbnail and title dynamically
  videoCard.innerHTML = `
    <img src="https://img.youtube.com/vi/${videoId}/0.jpg" alt="${videoTitles[index]}">
    <div class="content">
      <h3>${videoTitles[index]}</h3>
    </div>
  `;

  youtubeGrid.appendChild(videoCard);
});

