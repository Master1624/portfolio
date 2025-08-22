import type { Route } from "./+types/home";
import { Experiences } from "~/modules/experiences/Experiences";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Experiences" },
    { name: "description", content: "What I've done" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.VALUE_FROM_NETLIFY };
}

export default function ExperiencesView({}: Route.ComponentProps) {
  return <Experiences />;
}
