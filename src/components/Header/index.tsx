import { useState } from "react";
import { HeaderContainer } from "./styles";

export function Header() {
  const [isLocationActive, setIsLocationActive] = useState(true);

  return (
    <HeaderContainer active={isLocationActive}>
      <h1>Oportunidades em destaque</h1>

      <div>
        <span>Geolocalização Ativa</span>
        <button
          type="button"
          className="switch"
          onClick={() => setIsLocationActive(!isLocationActive)}
        >
          <span></span>
        </button>
      </div>
    </HeaderContainer>
  );
}
