import { actions } from './Actions'
const { ADD_TO_CART, SAVE_CART, UPDATE_CART, REMOVE_FROM_CART } = actions
     
const saveToLocalStorage = object => {
    // Transforme l'objet "items" en chaine de caractère 
    localStorage.setItem("items", JSON.stringify(object));
}
const initialState = {
    items :
        JSON.parse(localStorage.getItem("items")) !== null
            ? JSON.parse(localStorage.getItem("items"))
            : []
};

export default function onlineStoreApp(state = initialState, action) {
    switch (action.type) {

        case ADD_TO_CART: 
            return Object.assign({}, state, {
                items: [...state.items, action.payload]});

        case UPDATE_CART:
            return Object.assign({}, state, {
                items: state.items.map(item => {
                    return item.id === action.payload.id
                        ? Object.assign({}, item, {
                            quantity: action.payload.quantity
                        })
                        : item;
                })
            });

        case REMOVE_FROM_CART:
            return Object.assign({}, state, {
                items: state.items.filter(item => {
                    return item.id != action.payload;
                })
            });

        case actions.SAVE_CART: 
            saveToLocalStorage(action.payload.items)
            return state
        
        case actions.RESET_CART: 
            saveToLocalStorage([])
            return Object.assign({}, state,  {
                items : []
        })

        default:
            return state;
    }
}

// La règle dans React est :
// De ne as modifier le State directement, mais de faire une copie, afin de modifier la copie, pour renvoyer cette copie Modidié (Ex : La méthode "Object.assign()")