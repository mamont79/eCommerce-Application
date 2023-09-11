import { ITeamMember } from '../types';

export function MemberCardHeader({
  teamMemberData: { fullName, roles, yearOfBirth, country, city },
}: {
  teamMemberData: Omit<ITeamMember, 'fistName' | 'lastName'> & {
    fullName: string;
  };
}) {
  return (
    <div>
      <h2>{fullName}</h2>
      <p>{roles.map((role) => role).join(', ')}</p>
      <p>Born in: {yearOfBirth}</p>
      <p>
        Lives in {city}, {country}
      </p>
    </div>
  );
}
