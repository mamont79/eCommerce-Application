import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { StyledBtn } from '.';

describe('StyledBtn', () => {
  it('is created', () => {
    const btnTxt = 'someBtnTxt';
    render(<StyledBtn>${btnTxt}</StyledBtn>);
    expect(screen.getByRole('button')).toHaveTextContent(btnTxt);
  });
});
