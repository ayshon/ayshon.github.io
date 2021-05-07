const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

// Display Mobile Menu
const mobileMenu = () => {
  // toggle adds class if it doesn't exist
  // removes class if it does exist
  // .is-active and .active need to be connected to 
  // #mobile-menu and .navbar__menu in CSS for this to work
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('display');
};
menu.addEventListener('click', mobileMenu);

const hoverAnimation = (selectedClass, color = "#EF233C") => {
  // get all the elements with the given class that should have the highlight effect
  document.querySelectorAll(selectedClass).forEach(element => {
    // replaces the element's content with spans of each letter
    // '.' finds a single character, except newline or line terminator
    // $& gets the letter that matched '/./'
    // need the 'g' in '/./g' to replace all letters in the element
    element.innerHTML = element.textContent.replace(/./g, "<span>$&</span>");
    element.textContent.replace()
    // add the event listeners for when the element is hovered over and not hovered over
    // need to use 'event =>' because event needs to be defined for the currentTarget function
    element.addEventListener("mouseenter", event => animate(event));
    element.addEventListener("mouseleave", event => clear(event));
  });
  // need these functions to be local so that they can use the color variable

  // changes the color of each letter and adds a delay to each letter
  function animate(event){
    event.currentTarget.querySelectorAll("span").forEach((element, i) =>
    element.style.cssText = `
        transition: 0.2s ease-in ${(30*i)}ms;
        color: ${(color)};
      `);
  }

  // clears the hover effects by removing the color style
  function clear(event){
    event.currentTarget.querySelectorAll("span").forEach((element, i) =>
    element.style.cssText = `
        transition: 0.2s ease-in ${(30*i)}ms;
        color: ${("")};
      `);
  }
};

hoverAnimation(".home", "#EF233C");
hoverAnimation(".navbar__links", "#EF233C");

const modal = document.querySelector(".project_modal");
const proj_title = document.querySelector(".project_title");
const proj_desc = document.querySelector(".project_description");
const proj_link = document.querySelector(".project_link");
const dim1 = document.querySelector(".dimmer1");
const dim2 = document.querySelector(".dimmer2");
const dim3 = document.querySelector(".dimmer3");
const dim4 = document.querySelector(".dimmer4");

const projectModalEffect = (selectedClass) => {
  document.querySelectorAll(selectedClass).forEach((element,projectNum) => {
    element.addEventListener('click', () => {
      resetDimmers();
      if(projectNum ===  0){
        dim1.style.display = "block";
        proj_title.innerHTML = "[ The Great Canadian Masterpiece ]";
        proj_desc.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non arcu porta, semper massa eu, feugiat mauris. Fusce rutrum urna nec est euismod euismod. Nulla viverra eu felis eget mollis. Etiam consectetur in tellus in dapibus. Aenean ut fringilla urna. Pellentesque eget orci in eros viverra imperdiet ac sit amet tellus. Nulla nec diam pulvinar, pulvinar orci in, lobortis ligula. In molestie, dolor vel porta rutrum, tortor risus venenatis lectus, sit amet consectetur quam justo a sem. Integer eget eleifend metus. Pellentesque suscipit purus quis nunc tincidunt iaculis. Mauris bibendum dolor sit amet ";
        proj_link.innerHTML = "[ Github Link ]";
        proj_link.href = "https://github.com/ayshon/calgaryhacks2021";
        modal.style.display = "block";
      } else if(projectNum === 1) {
        dim3.style.display = "block";
        proj_title.innerHTML = "[ Personal Website ]";
        proj_desc.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non arcu porta, semper massa eu, feugiat mauris. Fusce rutrum urna nec est euismod euismod. Nulla viverra eu felis eget mollis. Etiam consectetur in tellus in dapibus. Aenean ut fringilla urna. Pellentesque eget orci in eros viverra imperdiet ac sit amet tellus. Nulla nec diam pulvinar, pulvinar orci in, lobortis ligula. In molestie, dolor vel porta rutrum, tortor risus venenatis lectus, sit amet consectetur quam justo a sem. Integer eget eleifend metus. Pellentesque suscipit purus quis nunc tincidunt iaculis. Mauris bibendum dolor sit amet ";
        proj_link.innerHTML = "[ Github Link ]";
        proj_link.href = "https://github.com/ayshon/ayshon.github.io";
        modal.style.display = "block";
      } else if(projectNum === 2) {
        dim2.style.display = "block";
        proj_title.innerHTML = "[ Semejo Maps (GIS) ]";
        proj_desc.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non arcu porta, semper massa eu, feugiat mauris. Fusce rutrum urna nec est euismod euismod. Nulla viverra eu felis eget mollis. Etiam consectetur in tellus in dapibus. Aenean ut fringilla urna. Pellentesque eget orci in eros viverra imperdiet ac sit amet tellus. Nulla nec diam pulvinar, pulvinar orci in, lobortis ligula. In molestie, dolor vel porta rutrum, tortor risus venenatis lectus, sit amet consectetur quam justo a sem. Integer eget eleifend metus. Pellentesque suscipit purus quis nunc tincidunt iaculis. Mauris bibendum dolor sit amet ";
        proj_link.innerHTML = "[ Github Link ]";
        proj_link.href = "https://github.com/ayshon/Semejo-Maps";
        modal.style.display = "block";
      } else if(projectNum === 3) {
        dim4.style.display = "block";
        proj_title.innerHTML = "[ Space Invaders on De1-SoC ]";
        proj_desc.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non arcu porta, semper massa eu, feugiat mauris. Fusce rutrum urna nec est euismod euismod. Nulla viverra eu felis eget mollis. Etiam consectetur in tellus in dapibus. Aenean ut fringilla urna. Pellentesque eget orci in eros viverra imperdiet ac sit amet tellus. Nulla nec diam pulvinar, pulvinar orci in, lobortis ligula. In molestie, dolor vel porta rutrum, tortor risus venenatis lectus, sit amet consectetur quam justo a sem. Integer eget eleifend metus. Pellentesque suscipit purus quis nunc tincidunt iaculis. Mauris bibendum dolor sit amet ";
        proj_link.innerHTML = "[ Github Link ]";
        proj_link.href = "https://github.com/ayshon/space-invaders-c";
        modal.style.display = "block";
      }
    });
  });
};

const resetDimmers = () => {
  dim1.style.display = "none";
  dim2.style.display = "none";
  dim3.style.display = "none";
  dim4.style.display = "none";
}

projectModalEffect(".project_img");

const closeElement = document.querySelector(".close");
closeElement.addEventListener('click', () => {
  resetDimmers();
  modal.style.display = "none";
});

const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav_link');

function highlightNavLink() {
  // console.log("page offset " + pageYOffset);
  var currSection = '';
  sections.forEach(section => {
    // console.log("section " + section.offsetTop);
    // console.log("section modify offset " + (section.offsetTop - section.clientHeight/1.5));
    if(pageYOffset >= section.offsetTop - section.clientHeight/3){
      currSection = section.getAttribute('id');
    }
    if (section.getAttribute('id') === "contact_page_section") {
        if(pageYOffset >= section.offsetTop - section.clientHeight/1.5){
          currSection = section.getAttribute('id');
          console.log("here");
        }
    }
  })
  // console.log(currSection);
  navLinks.forEach( link => {
    // console.log(link.classList);
    link.classList.remove('active');
    if(link.classList.contains(currSection)){
      link.classList.add('active');
    }
  })
  
  const element = document.querySelector('.active');
  // console.log(window.innerWidth);
  if ((element && window.innerWidth < 780)) {
    element.classList.remove('active');
  }
}


window.addEventListener('scroll', highlightNavLink);


