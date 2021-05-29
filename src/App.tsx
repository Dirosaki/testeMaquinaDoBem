import { Header } from "./components/Header";
import { Card } from "./components/Card";

import { GlobalStyle, Container, Button } from "./styles/global";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Card type="voluntariado" info="2-6" />
        <Card type="doação" info="36" />
        <Card type="doação" info="36" />
        <Card type="doação" info="36" />
        <Card
          type="voluntariado"
          description="Entrega de roupas e alimentos para moradores de rua"
          info="2-6"
        />
        <Card type="arrecadação" info="5000" />
        <Card type="doação" info="36" />
        <Card
          type="voluntariado"
          description="Entrega de roupas e alimentos para moradores de rua"
          info="2-6"
        />
        <Card type="doação" info="36" />
      </Container>
      <div className="button">
        <Button margin="40px"> Todas as Oportunidades </Button>
      </div>
      <GlobalStyle />
    </>
  );
}

export default App;
