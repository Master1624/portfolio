import { Button } from "@mui/material";

export function Welcome() {
  return (
    <div
      transition-style="in:circle:bottom-right"
      className="flex flex-col items-center justify-center h-screen space-y-1.5"
    >
      <div>
        <h1>¡ME PRESENTO! MI NOMBRE ES JUAN DAVID PALADINES AMAYA</h1>
        <p>
          Soy un desarrollador frontend con experiencia en React y TypeScript.
        </p>
      </div>
      <div>
        <Button>Botón 1</Button>
        <Button>Botón 2</Button>
      </div>
    </div>
  );
}
