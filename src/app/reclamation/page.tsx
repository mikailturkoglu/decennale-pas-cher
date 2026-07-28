import { reclamation } from "@/content/corporate";
import { createInfoRoute } from "@/lib/info-route";

const route = createInfoRoute(reclamation, { hideStickyCta: true });

export const metadata = route.metadata;
export default route.Page;
