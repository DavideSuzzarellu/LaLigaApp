import { Dispatch, SetStateAction } from "react";
import { Equipments, LigaTeams, TeamPlayer, Venue } from "../config/types";

export async function fetchTeams(
  signal: AbortSignal,
  setTeams: Dispatch<SetStateAction<LigaTeams>>
) {
  try {
    const res = await fetch(
      "https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=Spanish_La_Liga",
      { signal }
    );
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

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

export async function fetchTeamPlayers(
  signal: AbortSignal,
  teamName: string,
  setTeamPlayers: Dispatch<SetStateAction<TeamPlayer[]>>
) {
  try {
    const res = await fetch(
      `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?t=${teamName}`,
      { signal }
    );
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

    const data = await res.json();
    setTeamPlayers(data?.player)
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
  signal: AbortSignal,
  setEquipments: Dispatch<SetStateAction<Equipments[]>>
) {
  const path = `https://www.thesportsdb.com/api/v1/json/3/lookupequipment.php?id=${teamId}`;
  try {
    const res = await fetch(path, { signal });
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    setEquipments(data.equipment);
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

export async function fetchVenue(
  venueId: string,
  signal: AbortSignal,
  setVenue: Dispatch<SetStateAction<Venue | undefined>>
) {
  const path = `https://www.thesportsdb.com/api/v1/json/3/lookupvenue.php?id=${venueId}`
  try {
    const res = await fetch(path, { signal });
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

    const data = await res.json();
    setVenue(data?.venues[0])
    console.log(data?.venues[0]);

  } catch (error) {
    if (error instanceof Error) {
      if (error.name === "AbortError") {
        console.log("Fetch aborted");
      } else {
        console.error("Fetch error:", error);
      }
    }
  }
};

export async function fetchTeam(
  teamId: string,
  signal: AbortSignal,
  setTeam: Dispatch<SetStateAction<Equipments[]>>) {

}
