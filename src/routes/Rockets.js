import { useSelector, useDispatch } from 'react-redux';
import { reserveRocket } from '../redux/rockets/rocketsSlice';
import '../styles/rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const { rockets } = useSelector((store) => store.rockets);
  //  console.log(rockets);
  return (
    <div>
      <ul>
        {rockets.map((rocket) => {
          //  console.log(rocket);
          const {
            id, images, name, description, reserved,
          } = rocket;
          return (
            <li key={id} className="li-rocket">
              <img className="image-rocket" src={images} alt="A rocket" />
              <div className="rocket-text-container">
                <h3 className="rocket-title">{name}</h3>
                <p className="rocket-description">
                  {reserved ? (
                    <span className="reserved-tag">Reserved</span>
                  ) : (
                    ''
                  )}
                  {description}
                </p>
                <button
                  className={`btn ${reserved ? 'reserved' : ''}`}
                  type="button"
                  onClick={() => {
                    dispatch(reserveRocket(id));
                  }}
                >
                  {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Rockets;
