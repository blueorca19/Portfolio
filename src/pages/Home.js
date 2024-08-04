import Header from "./../components/header/Header";
import Contacts from "./Contacts";
import Projects from "./Projects";

const Home = () => {
  return (
    <>
      <Header />
      <main class="section">
        <div class="container">
          <ul class="content-list">
            <li class="content-list__item">
              <h2 class="title-2">Frontend</h2>
              <p>JavaScript, TypeScript, React, HTML, CSS, BootStrap</p>
              <h2 class="title-2">Backend</h2>
<<<<<<< HEAD
<<<<<<< HEAD
              <p> SpringBoot, REST API, RESTful web services, JPA,
                Hibernate, Swagger, Mocking Frameworks, GitHub, Jira,
                Postman, Kanban, Gradle, Maven, MySQL, PostgreSQL
=======
              <p>
                Java, Spring Boot, Spring Security, Hibernate, MySQL, Postgres
>>>>>>> eb7b3bd49a92bb5e0dc5bb19a6253c64cc265ce5
=======
              <p> SpringBoot, REST API, RESTful web services, JPA,
                Hibernate, Swagger, Mocking Frameworks, GitHub, Jira,
                Postman, Kanban, Gradle, Maven, MySQL, PostgreSQL
>>>>>>> f1e8fc2e920716e1798d2e624345bb16911c71b5
              </p>
            </li>
            <li class="content-list__item"></li>
          </ul>
        </div>
      </main>
      <Projects />
      <Contacts />
    </>
  );
};

export default Home;
