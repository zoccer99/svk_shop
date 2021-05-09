import { useSpring, animated } from "react-spring";

function Spring() {
  const props = useSpring({ to: { rotateZ:180 }, from: { rotateZ:0 },loop:{reverse:true} });
  return <animated.div style={{width:100,height:100,backgroundColor:'#46e891',borderRadius:16,...props}}></animated.div>;
}

export default Spring;
