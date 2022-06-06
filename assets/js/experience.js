AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "IT Manager",
    cardImage: "https://lh3.googleusercontent.com/8ik0dRraIlm0qK7Wv3FS0ws5imhYYwDcqruS3TE1YnA06jvr-5SpRT56YKtr8gvJIKCDrCRP9eyvBT4DhHyyt6s",
    place: "Longwood Athletic Booster Club",
    time: "(Sept., 2019 - present)",
    desp: "<li>Responsible of all computing devices.</li><li>Responsible for credit card proccessing.</li>",
  },
  {
    title: "IT Consultant",
    cardImage: "https://pbs.twimg.com/media/EhpPiDZX0AEQrV9.jpg",
    place: "SectionXI Athletics",
    time: "(May 2022 - Present)",
    desp: "<li>Responsible for playoff game credit card proccessing.</li><li>Responsible for ticket services backend and frontend website.</li>",
  },
  {
    title: "Webmaster",
    cardImage: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/Boy_Scouts_of_America_corporate_trademark.svg/1200px-Boy_Scouts_of_America_corporate_trademark.svg.png",
    place: "Troop 560, Suffolk County Council, Boy Scouts of America",
    time: "(Sept 2020 - Present)",
    desp: "<li>Responsible for troop website.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "FIRST Long Island",
    cardImage: "https://www.sbpli-lifirst.org/images/FIRST-Regional-LONG_ISLAND-h.png",
    description:
      "Responsible for working on a team to setup and ensure smooth technical operations of robotics matches for K-12 students.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);