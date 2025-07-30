import type { Route } from "./+types/home";
import '../styles/main.scss';

import ToDoList from "../components/display/ToDoList";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Todoy" },
    { name: "description", content: "Todoy: your fav todo app." },
  ];
}

export default function Home() {
  return (
    <>
    <main>
      <ToDoList />
    </main>
    </>
  );
}
