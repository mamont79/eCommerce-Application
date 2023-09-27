import { StyledSectionParagraph } from '../style';
import { StyledCourseName } from './style';
import { ICourses } from './type';

export function CoursesBlock({ courses }: { courses: ICourses[] }) {
  return (
    <ul>
      {courses.map(({ organisation, courseName, yearOfFinishing }) => (
        <li key={`${courseName}${yearOfFinishing}`}>
          <StyledCourseName>{courseName}</StyledCourseName>
          <StyledSectionParagraph>
            <em>{organisation}</em>
          </StyledSectionParagraph>
          <StyledSectionParagraph>{yearOfFinishing}</StyledSectionParagraph>
        </li>
      ))}
    </ul>
  );
}
