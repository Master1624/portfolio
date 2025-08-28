import { Button } from "@mui/material";

export function Contact() {
  return (
    <div className="flex flex-col justify-items-center items-center h-screen">
      <form action="" className="flex flex-col h-screen justify-center gap-4">
        <Button className="dark:text-white!" type="submit">
          Enviar
        </Button>
      </form>
    </div>
  );
}
