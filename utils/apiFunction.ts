import { Dispatch, SetStateAction } from "react";
import { Equipments, LigaTeams } from "../config/types";

export async function fetchTeams(
  signal: AbortSignal,
  setTeams: Dispatch<SetStateAction<LigaTeams>>
) {
  try {
    const res = await fetch(
      "https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=Spanish_La_Liga",
      { signal }
    );
    if (!res.ok) {
      console.error(res.status);
    }

    const data = await res.json();
    setTeams(data.teams);
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === "AbortError") {
        console.log("Fetch aborted");
      } else {
        console.error("Fetch error:", error);
      }
    }
  }
}

export async function fetchEquipment(
  teamId: string,
  setEquipments: Dispatch<SetStateAction<Equipment[]>>
) {
  const path = `https://www.thesportsdb.com/api/v1/json/3/lookupequipment.php?id=${teamId}`;
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    setEquipments(data.equipment);
  } catch (error) {
    console.error(error);
  }
}
