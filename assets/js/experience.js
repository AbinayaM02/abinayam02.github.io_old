AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Manager Data Science",
    cardImage: "assets/images/experience-page/mphasis.jpg",
    place: "NEXT Labs, Mpahsis",
    time: "(Jan, 2021 - present)",
    desp: "<li>Primarily working on a client project for Bain & Company helping them build a Phase 0 Due Diligence platform leveraging ML/DL.</li> <li>Created several components for MLOps platform PACEML(https://www.mphasis.com/home/innovation/nextlabs/pace-ml.html)</li> <li>Guided team members on various client engagements and solutions.</li>",
  },
  {
    title: "Assistant Manager Data Science",
    cardImage: "assets/images/experience-page/mphasis.png",
    place: "NEXT Labs, Mphasis",
    time: "(May, 2017 - Dec, 2020)",
    desp: "<li>Worked on several client projects and PoCs and delivered end-to-end solutions.</li><li>Built several cloud and cognitive components and services.</li><li>Worked on search, recommendation engine, search engine, predictive models, text summarization, text classification, data augmentation, active learning, incremental learning and so on.</li>",
  },
  {
    title: "Software Engineer II",
    cardImage: "assets/images/experience-page/cisco.jpg",
    place: "Cisco Systems Inc.,",
    time: "(Aug, 2014 - Apr, 2017)",
    desp:"<li>Worked on Nexus 1000v - virtual switch.</li><li>Designed RESTful Infrastructure in Node.js for users to configure and troubleshoot N1Kv.</li><li>Built a search tool using HTML, CSS and JavaScript to help users customize the RESTful APIs during deployment.</li><li>Worked on Virtual Application Cloud Segmentation (VACS) – Orchestration Software (Java) and designed several feature to import existing Nexus 1000v into VACS</li>",
  },
  {
    title: "Programmer Analyst Trainee",
    cardImage: "assets/images/experience-page/cts.jpg",
    place: "Cognizant Technology Solutions",
    time: "(Jul, 2010 - Apr, 2011)",
    desp:"<li>Monitored the production system and fixed database related issues in Wal-Mart’s Global Management System.</li>",
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
    title: "Grace Hopper Celebration India (Mar, 2015 - Present)",
    cardImage: "assets/images/experience-page/ghci.jpg",
    description:
      "Part of the AI/ML/Data Science Commitee",
  },
  {
    title: "Springboard India (Apr, 2020 - Present)",
    cardImage: "assets/images/experience-page/springboard.png",
    description:
      "Mentor for the Data Science Preparation and Career track,",
  },
  {
    title: "Mentor Me India, (Mar, 2013 - Aug, 2013)",
    cardImage: "assets/images/experience-page/mentor.png",
    description:
      "Mentor Me India is an NGO that help children in low-income communities to grow to their full potential by supporting them with enduring one-to-one relationships with strong role models.Helped in creating the wiki page for the Mentor Me India portal.",
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


// Hackathon Section


const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Mphasis Hackathon Challenge",
    subtitle: "Mphasis, 2021, Second Runner up",
    image: "assets/images/experience-page/mphasis.jpg",
    desp: "Built a platform to generate insights from multi-dimensional structured data using AI and present these insights in human readable and understandable formats like text, graph and charts using NLP.
  },

  {
    title: "Digital Dutchess",
    subtitle: "Sabre, 2017, Runner up",
    image: "assets/images/experience-page/uplift.png",
    desp: "Built a solution to predict customer churn (R and Qilkview) for travel agencies as a part of the hackathon conducted by Sabre in association with Hackerearth.com. Won second place.
  },
  {
    title: "She-Hack",
    subtitle: "Go-Jek, 2017, Runner up",
    image: "assets/images/experience-page/ulhacks.png",
    desp: "Built a solution to find the areas that has high demand for Go-Jek services and implemented a model to understand and improve the servicing rate by optimally allocating resources using Python and QlikView.",
  },
  {
    title: "HACKIT",
    subtitle: "Cisco, 2015",
    image: "assets/images/experience-page/cisco.jpg",
    desp: "Built a recommender system using Python (scikit-learn) as a part of the internal hackathon to recommend skills for a designation as well as recommend people based on their skills to suit a designation.",
  },

];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp}) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
