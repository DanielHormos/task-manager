import { createService } from "./service";
import { db } from "@/index";

export const featureService = createService(db);
