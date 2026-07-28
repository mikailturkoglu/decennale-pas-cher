import { conditionsUtilisation } from "@/content/corporate";
import { createInfoRoute } from "@/lib/info-route";

const route = createInfoRoute(conditionsUtilisation, { hideStickyCta: true });

export const metadata = route.metadata;
export default route.Page;
