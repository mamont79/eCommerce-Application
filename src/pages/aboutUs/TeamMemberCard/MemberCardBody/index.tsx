import { EducationBlock } from './EducationBlock';
import { ITeamMember } from '../types';
import {
  StyledCarSectionHeading,
  StyledMemberCardBodySection,
  StyledMemberCardBodyWrapper,
} from './style';
import { CoursesBlock } from './CoursesBlock';

export function MemberCardBody({
  teamMemberData: { education, courses },
}: {
  teamMemberData: ITeamMember;
}) {
  return (
    <StyledMemberCardBodyWrapper>
      <StyledMemberCardBodySection>
        <StyledCarSectionHeading>Education</StyledCarSectionHeading>
        {education && education.length && (
          <EducationBlock education={education} />
        )}
      </StyledMemberCardBodySection>

      <StyledMemberCardBodySection>
        <StyledCarSectionHeading>Courses</StyledCarSectionHeading>
        {courses && courses.length && <CoursesBlock courses={courses} />}
      </StyledMemberCardBodySection>
    </StyledMemberCardBodyWrapper>
  );
}
