import { notreMethode } from "@/content/corporate";
import { createInfoRoute } from "@/lib/info-route";

const route = createInfoRoute(notreMethode);

export const metadata = route.metadata;
export default route.Page;
