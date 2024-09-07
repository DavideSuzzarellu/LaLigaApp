type Team = {
    idTeam: string;
    idSoccerXML: string;
    idAPIfootball: string;
    intLoved: number | null;
    strTeam: string;
    strTeamAlternate: string;
    strTeamShort: string;
    intFormedYear: string;
    strSport: string;
    strLeague: string;
    idLeague: string;
    strLeague2: string;
    idLeague2: string;
    strLeague3?: string; 
    idLeague3?: string | null;
    strLeague4?: string;
    idLeague4?: string | null;
    strLeague5?: string;
    idLeague5?: string | null;
    strLeague6?: string;
    idLeague6?: string | null;
    strLeague7?: string;
    idLeague7?: string | null;
    strDivision?: string | null;
    idVenue: string;
    strStadium: string;
    strKeywords: string;
    strRSS: string;
    strLocation: string;
    intStadiumCapacity: string;
    strWebsite: string;
    strFacebook: string;
    strTwitter: string;
    strInstagram: string;
    strDescriptionEN: string;
    strDescriptionDE?: string | null;
    strDescriptionFR?: string | null;
    strDescriptionCN?: string | null;
    strDescriptionIT: string;
    strDescriptionJP?: string | null;
    strDescriptionRU?: string | null;
    strDescriptionES: string;
    strDescriptionPT?: string | null;
    strDescriptionSE?: string | null;
    strDescriptionNL?: string | null;
    strDescriptionHU?: string | null;
    strDescriptionNO?: string | null;
    strDescriptionIL?: string | null;
    strDescriptionPL?: string | null;
    strColour1: string;
    strColour2: string;
    strColour3: string;
    strGender: string;
    strCountry: string;
    strBadge: string;
    strLogo: string;
    strFanart1: string;
    strFanart2: string;
    strFanart3: string;
    strFanart4: string;
    strBanner: string;
    strEquipment: string;
    strYoutube: string;
    strLocked: string;
};

type LigaTeams = Team[] | undefined;

export type {
    Team,
    LigaTeams
}
  