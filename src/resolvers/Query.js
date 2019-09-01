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
    else{
      return data.users;
    }
  }
};

export default Query;