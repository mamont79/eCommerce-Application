import { MILLISECONDS_IN_YEAR } from '../../../registration/RegistrationForm/validators/constants';
import { ITeamMember } from '../types';

export function MemberCardHeader({
  teamMemberData: { fullName, roles, dateOfBirth, country, city },
}: {
  teamMemberData: Omit<ITeamMember, 'fistName' | 'lastName'> & {
    fullName: string;
  };
}) {
  return (
    <div>
      <h2>{fullName}</h2>
      <p>{roles.map((role) => role).join(', ')}</p>
      <p>{getAge(dateOfBirth)} years</p>
      <p>
        Lives in {city}, {country}
      </p>
    </div>
  );
}

function getAge(dateOfBirth: string) {
  const [year, month, day] = dateOfBirth.split('/');
  const millisPassed = Date.now() - new Date(+year, +month - 1, +day).getTime();

  return Math.floor(millisPassed / MILLISECONDS_IN_YEAR);
}
