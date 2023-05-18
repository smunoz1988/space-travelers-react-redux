/* eslint-disable arrow-body-style */
import { useSelector } from 'react-redux';

const DisplayRockets = () => {
  const { rockets } = useSelector((store) => store.rockets);
  const rocketFilter = rockets.filter((rocket) => rocket.reserved);

  return (
    <>
      {rocketFilter.length > 0 && (
        <table className="profile-table">
          <tbody>
            {rocketFilter.map((rocket) => {
              return rocket.reserved && (
                <tr key={rocket.id}>
                  <td>{rocket.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      {!rocketFilter.length && (<p className="profile-table">No rockets reserved</p>)}
    </>
  );
};

export default DisplayRockets;
