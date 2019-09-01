"use strict";

export const User = {
  favoriteTeams(parent, args, context, info){
    const teams = context.data.teams;
    const favoriteTeamsIdsSet = new Set(parent.favoriteTeams);
    const favTeams = [];

    for(const team of teams){
      if(favoriteTeamsIdsSet.has(team.id)) favTeams.push(team);
    }
    return favTeams;
  }
};