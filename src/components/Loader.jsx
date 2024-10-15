import { Html, useProgress } from "@react-three/drei"

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html center>{progress.toFixed(2)} % loaded</Html>
    
  )
}

export default CanvasLoader