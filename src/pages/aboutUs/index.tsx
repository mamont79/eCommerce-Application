import { StyledAboutUsPageHeading, StyledPageContentWrapper } from './style';
import { TeamMembersCardsList } from './TeamMemeberCardsList';

export default function AboutUs() {
  return (
    <StyledPageContentWrapper>
      <article>
        <StyledAboutUsPageHeading>
          <h1>About us</h1>
          <a href="https://rs.school/js/" target="_blank" rel="noreferrer">
            <img
              src="./assets/rs_school_logo.svg"
              alt="RSSchool logo"
              width={200}
            />
          </a>
        </StyledAboutUsPageHeading>
        <p>
          <i>Hi!</i>
        </p>
        <p>
          We are{' '}
          <em>
            <strong>CuberDranik</strong>
          </em>
          , - a team of frontend developers from Russia, Belarus, and Poland.
        </p>
        <p>
          Team members: <strong>Pavel Dalhou</strong>,{' '}
          <strong>Elizaveta Prigozhaya</strong>, <strong>Dmitry Mikheev</strong>
          .
        </p>
        <p>
          We have teamed up to create the final project as part of the RSSchool
          JS/FE 2023Q1 course. The result of our efforts is{' '}
          <strong>LAZZONE</strong> application, where anyone can quickly and
          easily find clothing for any purpose!
        </p>
        <p>
          The application is built using excellent commercetools service, which
          provides the backend and API for creating various commercial
          start-ups.
        </p>
        <ul>
          To enhance the development efficiency, our team utilized the following
          tools:
          <li>
            Work coordination and progress tracking were done using{' '}
            <strong>
              <i>Jira</i>.
            </strong>
          </li>
          <li>
            The project was developed using{' '}
            <strong>
              <i>REACT</i>
            </strong>{' '}
            +{' '}
            <strong>
              <i>Redux</i>
            </strong>{' '}
            +{' '}
            <strong>
              <i>TypeScript</i>.
            </strong>
          </li>
          <li>
            <strong>
              <i>Styled-components</i>
            </strong>{' '}
            library was used for styling the application.
          </li>
          <li>
            <strong>
              <i>Husky</i>
            </strong>{' '}
            library was used for commit control.
          </li>
          <li>
            <strong>
              <i>Vite</i>
            </strong>{' '}
            was used as the bundler in the project, chosen over the more
            well-known{' '}
            <strong>
              <i>Webpack</i>,
            </strong>{' '}
            at Dmitry&apos;s initiative.
          </li>
          <li>
            <strong>
              <i>ESLint</i>
            </strong>{' '}
            with{' '}
            <strong>
              <i>Airbnb</i>
            </strong>{' '}
            configuration and{' '}
            <strong>
              <i>Prettier</i>
            </strong>{' '}
            were used as the linter and formatting automation tool.
          </li>
          <li>
            <strong>
              <i>Axios</i>
            </strong>{' '}
            was used for making requests.
          </li>
          <li>
            <strong>
              <i>Formik</i>
            </strong>{' '}
            library proved to be the most convenient for working with forms.
          </li>
          <li>
            <strong>
              <i>React-toastify</i>
            </strong>{' '}
            library was used for displaying pop-up notifications.
          </li>
          <li>
            <strong>
              <i>Vitest</i>
            </strong>{' '}
            was used as the testing framework.
          </li>
        </ul>
        Contributions of team members:
        <ul>
          Thanks to <strong>Dmitry</strong>&apos;s efforts project has:
          <li>
            Adjusted and running React + Typescript, Vite, ESLint, Prettier,
            Vitest, Husky;
          </li>
          <li>Registration page;</li>
          <li>Customer profile page;</li>
          <li>About-us page;</li>
          <li>Adaptiveness and responsiveness of the whole site; and</li>
          <li>Interfaces for some types of server requests and responses.</li>
        </ul>
        <ul>
          <strong>Elizaveta</strong> did her best to make up and running:
          <li>Initial setup of Redux, Toastify, Styled-components, Formik;</li>
          <li>Login and Logout pages;</li>
          <li>Eloquent overall app design;</li>
          <li>Readme file and PR-template; and</li>
          <li>Card, header, slider and some other components.</li>
        </ul>
        <ul>
          <strong>Pavel</strong> was all in:
          <li>Seting up Axios;</li>
          <li>Making up server data request API;</li>
          <li>Implementation of page 404;</li>
          <li>Implementation of routing and navigation;</li>
          <li>Implementation of product page;</li>
          <li>
            Registration in CommerceTools, Jira, Netlify and adjustment of
            these; and
          </li>
          <li>Creation of task lists in Jira, and forming sprint framework.</li>
        </ul>
        <p>
          We cannot fail to mention the person who wished to stay behind the
          scenes but without whom we would hardly be able to develop such a
          comprehensive application within such tight deadlines - our mentor,
          code fairy, and simply a wonderful person, Ann Ignatova. She supported
          us, provided guidance on how to implement various aspects of the
          application, advised us in challenging situations, suggested code
          improvements, and rigorously ensured the code cleanliness.
        </p>
      </article>
      <TeamMembersCardsList />
    </StyledPageContentWrapper>
  );
}
