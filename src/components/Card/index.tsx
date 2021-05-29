import { CardContainer } from "./style";

interface CardProps {
  type?: "voluntariado" | "doação" | "arrecadação";
  state?: string;
  description?: string;
  info: string;
}

export function Card({
  type = "voluntariado",
  state = "Natal, RN",
  description = "Arrecadação de alimentos para moradores de rua",
  info,
}: CardProps) {
  const value = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(Number(info));

  return (
    <CardContainer>
      <header>
        <strong>
          {type === "voluntariado"
            ? "Vaga de voluntariado"
            : type === "doação"
            ? "Doação de materiais"
            : "Campanha de arrecadação"}
        </strong>
      </header>

      <main>
        <div>
          <p>{description}</p>
          <img
            src={
              type === "voluntariado"
                ? "/voluntariado-icon.svg"
                : type === "doação"
                ? "/doacao-icon.svg"
                : "/arrecadacao-icon.svg"
            }
            alt="Ícone Card"
          />
        </div>
        <p>SP Invisível</p>

        <div>
          <div>
            <strong>{type === "arrecadação" ? value : info}</strong>
            <span>
              {type === "voluntariado"
                ? "horas semana"
                : type === "doação"
                ? "ítens disponíveis"
                : "valor esperado"}
            </span>
          </div>

          <button type="button">
            {type === "voluntariado"
              ? "Participar"
              : type === "doação"
              ? "Doar"
              : "Contribuir"}
          </button>
        </div>
      </main>

      <footer>
        <p>{state}</p>
      </footer>
    </CardContainer>
  );
}
