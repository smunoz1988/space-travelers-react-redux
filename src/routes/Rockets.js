import { useSelector } from 'react-redux';
import '../styles/rockets.css';

const Rockets = () => {
  //  const dispatch = useDispatch();
  const { rockets } = useSelector((store) => store.rockets);
  //  console.log(rockets);
  return (
    <div>
      <ul>
        {rockets.map((rocket) => {
          const {
            id, images, name, description,
          } = rocket;
          return (
            <li key={id} className="li-rocket">
              <img className="image-rocket" src={images} alt="A rocket" />
              <div className="rocket-text-container">
                <h3 className="rocket-title">{name}</h3>
                <p className="rocket-description">{description}</p>
                <button className="btn" type="button">
                  Reserve rocket
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
