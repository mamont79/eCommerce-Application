import { StyledAboutUsPageHeading, StyledPageContentWrapper } from './style';
import { TeamMembersCardsList } from './TeamMemeberCardsList';

export function AboutUs() {
  return (
    <StyledPageContentWrapper>
      <article>
        <StyledAboutUsPageHeading>
          <h1>Abuout us</h1>
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
          Team members: <strong>Paul Dalhau</strong>,{' '}
          <strong>Elizaveta Prigozhaya</strong>, <strong>Dmitry Mikheev</strong>
          .
        </p>
        <p>
          We have teamed up to create the final project as part of the RSSchool
          JS/FE 2023Q1 course. The result of our efforts is{' '}
          <strong>LAZZONE</strong> application, where anyone can quickly and
          easily find clothing for any purpose!
        </p>
      </article>
      <TeamMembersCardsList />
    </StyledPageContentWrapper>
  );
}
