//Sitewide cursor
const site_wide_cursor = document.querySelector(' .custom-cursor.site-wide');

document.addEventListener('mouseenter', () => {
  site_wide_cursor.style.display = 'block';
});

document.addEventListener('mouseleave', () => {
  site_wide_cursor.style.display = 'none';
});

document.addEventListener('mousemove', TrackCursor);

document.addEventListener('mousedown', () => site_wide_cursor.classList.add('active'));
document.addEventListener('mouseup', () => site_wide_cursor.classList.remove('active'));

function TrackCursor(evt) {
  const w = site_wide_cursor.clientWidth;
  const h = site_wide_cursor.clientHeight;
  site_wide_cursor.style.transform = 
    `translate(${evt.clientX}px, ${evt.clientY}px)`;
}

const sections = document.querySelectorAll('section');

sections.forEach(section => {
  section.addEventListener('mouseover', () => {
    section.style.transform = 'scale(1.05)';
  });

  section.addEventListener('mouseout', () => {
    section.style.transform = 'scale(1)';
  });
});

const header = document.querySelector('header');
const h1 = header.querySelector('h1');

// Create the social links element
const socialLinksElement = document.createElement('div');
socialLinksElement.classList.add('social-links');

const socialLinks = [
  { icon: '/Users/ritthickthiaga/Desktop/Work/Webpage\ 1/Images/Linkedin.png', link: 'https://www.linkedin.com/in/ritthick-thiaga-483628214/' },
  { icon: '/Users/ritthickthiaga/Desktop/Work/Webpage\ 1/Images/Instagram.png', link: 'https://www.instagram.com/ritthickthiaga/' },
];

// Create and style the social links
socialLinks.forEach(link => {
  const socialLink = document.createElement('a');
  socialLink.href = link.link;
  socialLink.target = '_blank';
  socialLink.style.display = 'inline-block'; // Display icons inline-block
  socialLink.style.marginRight = '10px'; // Add margin for spacing

  const socialIcon = document.createElement('img');
  socialIcon.src = link.icon;
  socialIcon.alt = link.link;
  socialIcon.width = 50; // Adjust the width as needed
  socialIcon.height = 50; // Adjust the height as needed

  socialLink.appendChild(socialIcon);
  socialLinksElement.appendChild(socialLink);
});

// Append social links element to the h1 (inside, not as a child)
h1.insertAdjacentElement('beforeend', socialLinksElement);

// No need for absolute positioning or explicit width on socialLinksElement

// Add CSS transition for smoother animation (if not already defined in CSS)
socialLinksElement.style.transition = 'opacity 0.3s ease-in-out';

h1.addEventListener('mouseover', () => {
  socialLinksElement.style.opacity = '1';
});

h1.addEventListener('mouseout', () => {
  socialLinksElement.style.opacity = '0';
});

const hiThereElement = document.getElementById("hi-there");

gsap.fromTo(hiThereElement, {
  rotation: 0,
  x: 0,
  y: 0,
}, {
  duration: 2, // Adjust duration as needed
  rotation: 360,
  x: 50,
  y: -50,
  ease: "bounce",
});