import { StyledSectionParagraph } from '../style';
import { IEducation } from './type';

export function EducationBlock({ education }: { education: IEducation[] }) {
  return (
    <div>
      {education.map((educationStep) => makeEducationString(educationStep))}
    </div>
  );
}

function makeEducationString({
  faculty,
  specialization,
  university,
  yearOfGraduation,
}: IEducation) {
  return (
    <StyledSectionParagraph key={`${specialization}${yearOfGraduation}`}>
      Graduated from <em>{university}</em>, faculty of <em>{faculty}</em>, in{' '}
      {yearOfGraduation}, with diploma in <em>{specialization}</em>.
    </StyledSectionParagraph>
  );
}
