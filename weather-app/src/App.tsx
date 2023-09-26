import { useState } from "react";
import { Container } from "./components/Container"
import { Panel } from "./components/Panel"

const App = () => {

  const [cityName, setCityName] = useState('');

  const handleCityNameChange = (newCityName) => {
    setCityName(newCityName);
  };

  return (
    <Container>
      <Panel cityName={cityName} onCityNameChange={handleCityNameChange} />
    </Container>
  )
}

export default App
