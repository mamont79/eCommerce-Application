import { ICourses } from './MemberCardBody/CoursesBlock/type';
import { IEducation } from './MemberCardBody/EducationBlock/type';

export type ITeamMember = {
  photoRef: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  city: string;
  country: string;
  gitHub: string;
  education?: IEducation[];
  courses?: ICourses[];
  roles: string[];
};

export type ITeamMemberCardProps = {
  teamMemberData: ITeamMember;
};
