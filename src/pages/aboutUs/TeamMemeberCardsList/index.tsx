import TeamMemebersData from '../../../teamMemebersData.json';
import { TeamMemberCard } from '../TeamMemberCard';
import { StyledMemberCardsList } from './style';

export function TeamMembersCardsList() {
  return (
    <StyledMemberCardsList>
      {TeamMemebersData.map((member) => {
        const { firstName, lastName, dateOfBirth } = member;
        return (
          <TeamMemberCard
            key={`${firstName}${lastName}${dateOfBirth}`}
            teamMemberData={member}
          />
        );
      })}
    </StyledMemberCardsList>
  );
}
