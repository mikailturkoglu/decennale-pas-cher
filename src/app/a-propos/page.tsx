import { aPropos } from "@/content/corporate";
import { createInfoRoute } from "@/lib/info-route";

const route = createInfoRoute(aPropos);

export const metadata = route.metadata;
export default route.Page;
