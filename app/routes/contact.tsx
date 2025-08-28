import { Contact } from "~/modules/contact/contact";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Experiences" },
    { name: "description", content: "What I've done" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.VALUE_FROM_NETLIFY };
}

export default function ContactView({}: Route.ComponentProps) {
  return <Contact />;
}
