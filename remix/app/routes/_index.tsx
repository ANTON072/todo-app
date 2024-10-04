import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Todo App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return <div>Home</div>;
}
