import { ImageWrapper } from './ImageWrapper';
import { MemberCardBody } from './MemberCardBody';
import { MemberCardHeader } from './MemberCardHeader';
import { StlyedGitHubLinkWrapper, StyledMemberCardWrapper } from './style';
import { ITeamMemberCardProps } from './types';

export function TeamMemberCard({ teamMemberData }: ITeamMemberCardProps) {
  const { firstName, lastName, photoRef, gitHub } = teamMemberData;
  const fullName = `${firstName} ${lastName}`;

  return (
    <StyledMemberCardWrapper>
      <ImageWrapper photoRef={`url(${photoRef})`} />
      <MemberCardHeader teamMemberData={{ ...teamMemberData, fullName }} />
      <MemberCardBody teamMemberData={teamMemberData} />
      <StlyedGitHubLinkWrapper>
        <a href={gitHub} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </StlyedGitHubLinkWrapper>
    </StyledMemberCardWrapper>
  );
}
