import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { useSelector } from 'react-redux';

import MissionProfile from '../Components/MissionProfile';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('MissionProfile component', () => {
  it('renders reserved missions correctly', () => {
    const mockedMissions = [
      { mission_id: 1, mission_name: 'Mission 1', reserved: true },
      { mission_id: 2, mission_name: 'Mission 2', reserved: true },
      { mission_id: 3, mission_name: 'Mission 3', reserved: false },
    ];

    useSelector.mockImplementation((selectorFn) => selectorFn(
      { mission: { missions: mockedMissions } },
    ));

    const { container, getByText } = render(<MissionProfile />);

    expect(getByText('Mission 1')).toBeInTheDocument();
    expect(getByText('Mission 2')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders "No missions assigned" when no reserved missions', () => {
    useSelector.mockImplementation((selectorFn) => selectorFn({ mission: { missions: [] } }));

    const { container, getByText } = render(<MissionProfile />);

    expect(getByText('No missions assigned')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
