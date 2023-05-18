import React from 'react';
import {
  render, screen, act, fireEvent,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect'; 
import Navbar from '../Components/NavBar';

describe('Navbar functionality', () => {
  it('render correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    expect(screen.getByText('Missions')).toBeInTheDocument();
    expect(screen.getByText('Rockets')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  })
  it('navigates to the Missions page when Missions link is clicked', () => {
    const { container } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    act(() => {
      const missionsLink = screen.getByText('Missions');
      fireEvent.click(missionsLink);
    });
    expect(window.location.pathname).toBe('/Missions');
    expect(container.firstChild).toMatchSnapshot();
  });
})