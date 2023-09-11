import TeamMemebersData from '../../../teamMemebersData.json';
import { TeamMemberCard } from '../TeamMemberCard';
import { StyledMemberCardsList } from './style';

export function TeamMembersCardsList() {
  return (
    <StyledMemberCardsList>
      {TeamMemebersData.map((member) => {
        const { firstName, lastName, yearOfBirth } = member;
        return (
          <TeamMemberCard
            key={`${firstName}${lastName}${yearOfBirth}`}
            teamMemberData={member}
          />
        );
      })}
    </StyledMemberCardsList>
  );
}
