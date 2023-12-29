
// GLOBALS --------------------------------------------------
const ROOT_DIV = document.getElementById('root');
const CONTACT_LINKS = ["github.com/Jaycossey", "linkedin.com/ian-j-scott", "jaycossey:live.com"];
const PROJECT_TITLES = ["Portfolio Generator", "README Generator", "Police Interceptors"];
const PROJECT_DESCRIPTIONS = ["Node project to handle portfolio generation with npm inquirer prompts.", "Node project to create and automate README.md file generation", "Group project which allows a user to search for crime data within a given area. Using the UK police data API."];
const PROJECT_LINKS = ["https://github.com/Jaycossey/portfolio-generator", "https://github.com/Jaycossey/readme-generator", "https://github.com/Alan-Chumbley/Police-Interceptors"];

// PROFILE CONTAINER 
const profile = () => {
    const parentDiv = document.createElement('div');
    parentDiv.className = "aboutCont";

    const nameJobEl = document.createElement('h1');
    nameJobEl.className = "titleName";
    nameJobEl.innerText = "Ian - Software Developer";

    const profilePic = document.createElement('img');
    profilePic.classList = "profileImg";
    profilePic.src = "./images/profile.png";            // NOTE: This is the input for profile photo, rename file to match or edit here. 
    profilePic.alt = "Profile Picture of Ian";

    const aboutText = document.createElement('p');
    aboutText.innerText = "Software developer with 2 years experience within various languages. A focus on front end technologies such as Node.js, JavaScript, React, HTML, CSS, BootstrapCSS and TailwindCSS.";

    const otherInfo = document.createElement('p');
    otherInfo.innerText = "I chose these projects to showcase my ability to handle data, automation and my teamwork skills. Each project had their own challenges as well as being invaluable learning experiences which I would be happy to discuss further through the contact links at the bottom of the screen.";

    parentDiv.append(nameJobEl, profilePic, aboutText);

    ROOT_DIV.append(parentDiv);
}


// PROJECT CONTAINER ----------------------------------------
const createDiv = (type) => {
    const div = document.createElement('div');
    div.className = type;

    return div;
}

// card generator
const generateCard = (parent, rank) => {
    const card = createDiv('card');
    card.id = "presentation" + rank;

    const titleDiv = createDiv('title');
    titleDiv.innerText = PROJECT_TITLES[rank];

    const screenGrabDiv = createDiv('image');

    const textDiv = createDiv('text');
    textDiv.innerText = PROJECT_DESCRIPTIONS[rank];
    
    const urlDiv = createDiv('url');
    const anchor = document.createElement('a');
    anchor.innerText = PROJECT_LINKS[rank];
    urlDiv.append(anchor);

    card.append(titleDiv, screenGrabDiv, textDiv, urlDiv);

    parent.append(card);
}

// portfolio creation
const createPortfolio = () => {
    const sectionDiv = createDiv('section');
    sectionDiv.className = "portfolio";

    for (let i = 0; i < 3; i++) {
        generateCard(sectionDiv, i);
    }

    ROOT_DIV.append(sectionDiv);
}



// FOOTER CONTAINER ----------------------------------------
const contact = () => {
    let i = 0;
    const footer = createDiv('footer');

    const iconArr = ['<i class="fa-brands fa-github"></i>', '<i class="fa-brands fa-linkedin"></i>', '<i class="fa-solid fa-envelope"></i>'];

    iconArr.forEach((element) => {
        const aEl = document.createElement('a');
        aEl.classList = "iconAnchor";
        aEl.innerHTML = element;
        aEl.href = CONTACT_LINKS[i];
        aEl.target = "_blank";
        aEl.rel = "noopener noreferrer";
        aEl.setAttribute('crossorigin', 'anonymous');
        footer.append(aEl);
        i++;
    });

    ROOT_DIV.append(footer);
}


profile();
createPortfolio();
contact();
