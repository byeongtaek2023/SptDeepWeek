
export const SELECTEDMEM_MEMBERS = 'members/SELECTEDMEM_MEMBERS';

export const selectedMem = (payload) =>{
    return{
        type: SELECTEDMEM_MEMBERS, payload
    }
};


const initialState =  '카리나';


const members = (state = initialState, action) => {
    switch (action.type){ 
        case SELECTEDMEM_MEMBERS :
        return action.payload;
        default:
            return state;
    }
}

export default members;