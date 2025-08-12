import type { Route } from "./+types/home";
import { About } from "../modules/about/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Pala" },
    { name: "description", content: "This is me" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.VALUE_FROM_NETLIFY };
}

export default function AboutView({}: Route.ComponentProps) {
  return <About />;
}
