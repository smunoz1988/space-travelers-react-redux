import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { useSelector } from 'react-redux';
import DisplayRockets from '../Components/DisplayRockets';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('DisplayRcplets component', () => {
  it('Renders reserved rockets correctly', () => {
    const mockedRockets = [
      { id: 1, name: 'Falcon 1', reserved: true },
      { id: 2, name: 'Falcon 9', reserved: true },
      { id: 3, name: 'Falcon Heavy', reserved: false },
    ];

    useSelector.mockImplementation((selectorFn) => selectorFn(
      { rockets: { rockets: mockedRockets } },
    ));

    const { container, getByText } = render(<DisplayRockets />);

    expect(getByText('Falcon 1')).toBeInTheDocument();
    expect(getByText('Falcon 9')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders "No missions assigned" when no reserved missions', () => {
    useSelector.mockImplementation((selectorFn) => selectorFn({ rockets: { rockets: [] } }));

    const { container, getByText } = render(<DisplayRockets />);

    expect(getByText('No rockets reserved')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
