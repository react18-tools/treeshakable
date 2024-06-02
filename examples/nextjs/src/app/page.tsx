import MyButton from "./button";
import { LandingPage } from "@repo/shared/dist/server";
import { Demo } from "./demo";

export const metadata = {
  title: "Treeshakable",
};

/** next.js landing page */
export default function Page(): JSX.Element {
  return (
    <LandingPage title="Next.js Example">
      <Demo />
    </LandingPage>
  );
}
