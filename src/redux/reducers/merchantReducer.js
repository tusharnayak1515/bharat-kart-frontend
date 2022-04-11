let isProfile;

if(localStorage.getItem("bharatkart-merchant-profile") === null) {
    isProfile = [];
}
else {
    isProfile = JSON.parse(localStorage.getItem("bharatkart-merchant-profile"));
}

let isMerchant;

if(localStorage.getItem("bharatkart-merchant") === null) {
    isMerchant = null;
}
else {
    isMerchant = localStorage.getItem("bharatkart-merchant");
}

let isError;

if(localStorage.getItem("myerror") === null) {
    isError = null;
}
else {
    isError = localStorage.getItem("myerror");
}

const initMerchant = {
    merchant: isMerchant,
    profile: isProfile,
    error: isError
}

const merchantReducer = (state=initMerchant,action)=> {

    if(action.type === "merchant-register") {
        const {merchant,profile,error} = action.payload;
        if(error) {
            return {
                ...state,
                error: error
            }
        }
        return {
            ...state,
            merchant: merchant,
            profile: profile,
            error: null
        }
    }

    else if(action.type === "merchant-login") {
        const {merchant,profile,error} = action.payload;
        if(error) {
            return {
                ...state,
                error: error
            }
        }
        return {
            ...state,
            merchant: merchant,
            profile: profile,
            error: null
        }
    }

    else if(action.type === "merchant-logout") {
        return {
            ...state,
            merchant: null,
            profile: [],
            error: null
        }
    }

    else {
        return state;
    }

}

export default merchantReducer;