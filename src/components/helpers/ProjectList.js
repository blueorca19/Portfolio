import project01 from "./../../img/projects/01.jpg";
import project01Big from "./../../img/projects/01-big.jpg";
import project03 from "./../../img/projects/03-big.png";
import project03Big from "./../../img/projects/03-big.png";
import project02 from "./../../img/projects/02-big.png";
import project02Big from "./../../img/projects/02-big.png";

const projects = [
    {
        title: 'Wishlist',
        skills: 'TypeScript, JavaScript, Java, Spring, MySQL, React',
        img: project01,
        imgBig: project01Big,
        siteLink: "https://project-wishlist-giftlistify-ccqrj.ondigitalocean.app/"
    }, 

    {
        title: 'Portfolio',
        skills: 'JavaScript, React, HTML, CSS',
        img: project03,
        imgBig: project03Big,
        siteLink: "https://blueorca19.github.io/Portfolio/"
    },

    {
        title: 'Salon Master',
        skills: 'SpringBoot, REST API, JPA, Hibernate, Swagger, Gradle',
        img: project02,
        imgBig: project02Big,
        siteLink: "https://dbdiagram.io/d/SalonMaster-6676f2cf5a764b3c72255b54"
    }
];
export {projects};