import { contact } from "@/content/corporate";
import { createInfoRoute } from "@/lib/info-route";

const route = createInfoRoute(contact);

export const metadata = route.metadata;
export default route.Page;
