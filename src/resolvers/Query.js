"use strict";

const Query = {
  users(parent, args, context, info){
    const {id} = args;
    const {data} = context;
    if(id){
      for(const user of data.users){
        if(user.id === id) return [user];
      }
      return [];
    }
    return data.users;
  },
  teams(parent, args, context, info){
    const {id} = args;
    const {data} = context;
    if(id){
      for(const team of data.teams){
        if(team.id === id) return [team];
      }
      return [];
    }
    return data.teams;
  }
};

export default Query;