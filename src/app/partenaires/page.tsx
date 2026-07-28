import { partenaires } from "@/content/corporate";
import { createInfoRoute } from "@/lib/info-route";

const route = createInfoRoute(partenaires);

export const metadata = route.metadata;
export default route.Page;
