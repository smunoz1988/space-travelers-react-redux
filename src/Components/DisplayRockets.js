/* eslint-disable arrow-body-style */
import { useSelector } from 'react-redux';

const DisplayRockets = () => {
  const { rockets } = useSelector((store) => store.rockets);
  const rocketFilter = rockets.filter((rocket) => rocket.reserved);
  return (
    <div>
      <ul>
        {rocketFilter.map((rocket) => {
          return (
            <li key={rocket.id} className="li-rocket">
              {rocket.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DisplayRockets;
