import { outils } from "@/content/corporate";
import { createInfoRoute } from "@/lib/info-route";

const route = createInfoRoute(outils);

export const metadata = route.metadata;
export default route.Page;
