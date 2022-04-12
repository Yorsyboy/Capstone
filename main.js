function openNav() {
  document.getElementById('myNav').style.display = 'block';
}

function closeNav() {
  document.getElementById('myNav').style.display = 'none';
}

document.querySelector('.hamburger-span').addEventListener('click', openNav);
document.querySelector('.closebtn').addEventListener('click', closeNav);
document.querySelectorAll('.web-nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    document.getElementById('myNav').style.display = 'none';
  });
});

const devSections = document.querySelector('.dev_section');

const devList = [
  {
    name: 'Emmanuel Jolugbo',
    description: 'A Professional softawre developer all the way from Lagos, Nigeria. He is one of the great devs out there in the world known for his design skill and DOM manipulation',
    imageLink: 'images/temi.png',
    nickName: ['Code Specialist'],
  },
  {
    name: 'Toyosi Taiwo',
    description: 'A Professional softawre developer all the way from Lagos, Nigeria. He is one of the great devs out there in the world known for his design skill and DOM manipulation',
    imageLink: 'images/toyosi.png',
    nickName: ['Yorsy_Dev'],
  },
  {
    name: 'Nedjwa Bouraiou',
    description: 'A Professional softawre developer all the way from Algeria, She is one of the great devs out there in the world known for her technical skills',
    imageLink: 'images/nedjwa.png',
    nickName: ['Ned Dev'],
  },
  {
    name: 'Hammad Siddique',
    description: 'A Professional softawre developer all the way from Pakistan. He is one of the great devs out there in the world known for his design skill and DOM manipulation',
    imageLink: 'images/hammad.png',
    nickName: ['Hammad Code'],
  },
  {
    name: 'Shaquille Ndunda',
    description: 'A Professional softawre developer all the way from Kenya. He is one of the great devs out there in the world known for his design skill and DOM manipulation',
    imageLink: 'images/shaq.png',
    nickName: ['Shaq Dev'],
  },
  {
    name: 'Yussuf Bashir',
    description: 'A Professional softawre developer all the way from Lagos, Nigeria. He is one of the great devs out there in the world known for his design skill and DOM manipulation',
    imageLink: 'images/bash.png',
    nickName: ['Bash'],
  },
];

devSections.innerHTML = '';
for (let i = 0; i < devList.length; i += 1) {
  devSections.innerHTML += `
      <div class='devs'>
          <div class='devs__image'>
            <img src='${devList[i].imageLink}' alt='dev 1' class='img1' />
          </div>
          <div class='dev__description'>
            <h3>${devList[i].name}</h3>
            <div class='short_desc'>
              <h4> ${devList[i].nickName}</h4>
              <span></span>
            </div>
            <div class='long_desc'>
              <p>
                ${devList[i].description}
              </p>
            </div>
    </div>
  `;
}
