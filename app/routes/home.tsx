import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pala's Portfolio" },
    { name: "description", content: "My personal portfolio" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.VALUE_FROM_NETLIFY };
}

export default function Home({}: Route.ComponentProps) {
  return <Welcome />;
}
