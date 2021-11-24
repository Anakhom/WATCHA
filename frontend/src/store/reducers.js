import { ACTypes } from './types';

const initialState = {
  user: null,
}
export const reducers = (state = initialState, action) => {
  switch (action.type) {

    // case ACTypes.SET_AUTH:
    //   const { _id, name } = action.payload;
    //   return {...state,  
    //     user: { _id, name }
    //   }

    // case ACTypes.SIGNOUT:
    //   return {...state,  
    //     user: false
    //   }
    
    // case ACTypes.SET_GAME_STATE:
    //   const {score} = action.payload;
    //   const newGameState = {...state.gameState, 
    //     total_score: state.gameState.total_score + score,
    //     count_card: state.gameState.count_card + 1,
    //   }
    //   localStorage.setItem('gameState', JSON.stringify(newGameState));
    //   return {...state, gameState: newGameState};
      
    // case ACTypes.DELETE_GAME:
    //   return {...state, gameState: { total_score: 0, count_card: 0,}}

    default:
      return state;
  }
}
