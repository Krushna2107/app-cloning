import { useSpring, animated } from "react-spring";

const Home = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return <animated.div style={props} className="container mt-5"></animated.div>;
};

export default Home;
