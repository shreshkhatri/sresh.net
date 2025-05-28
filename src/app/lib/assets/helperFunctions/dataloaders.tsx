import {
  getConnectionObject,
  closeConnection,
} from "@/app/lib/assets/data/datamanagement";
import { TypeExperience } from "../types/types";

export async function getExperiences(): Promise<TypeExperience[]> {
  try {
    const connectionObject = await getConnectionObject();

    const experiences: TypeExperience[] = await connectionObject
      .collection<TypeExperience>(String(process.env.EXPERIENCES))
      .find({}, { projection: { _id: 0 } })
      .toArray();
   return experiences
  } catch (error) {
    console.error("Error fetching experiences:", error);
    return [];
  } 
}
