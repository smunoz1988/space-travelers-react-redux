import { useSelector } from 'react-redux';

const Rockets = () => {
  //  const dispatch = useDispatch();
  const { rockets } = useSelector((store) => store.rockets);
  //  console.log(rockets);
  return (
    <div>
      {Object.entries(rockets).map((rocket) => {
        const {
          id, images, name, type,
        } = rocket[1][0];
        return (
          <p key={id + name}>
            {' '}
            Rocket Name:
            {name}
            ,
            {images}
            ,
            {type}
          </p>
        );
      })}
    </div>
  );
};

export default Rockets;
