export const initialState = {
    notifications: [],
    basket: [],
    selectedItem: '',
    user: null
}

export const getBasketTotal = (basket) => {
    return basket?.reduce((amount, item) => item.price + amount, 0);
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
                notifications: [...state.notifications, action.item]
            }

        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            let newBasket = [...state.basket];
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(`Cannot remove the product (id: ${action.id} as it is not in the basket`);
            }
            return {
                ...state,
                basket: newBasket
            }

        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: []
            }

        case 'REMOVE_FROM_NOTIFICATION':
            const i = state.notifications.findIndex((notificationItem) => notificationItem.id === action.id);
            let newNotification = [...state.notifications];
            if (i >= 0) {
                newNotification.splice(i, 1);
            } else {
                console.warn(`Cannot remove the notification (id: ${action.id} as it is not in the basket`);
            }
            return {
                ...state,
                notifications: newNotification
            }

        case 'SET_SELECTED_ITEM':
            return {
                ...state,
                selectedItem: action.item
            }

        case 'DESELECT_SELECTED_ITEM':
            return {
                ...state,
                selectedItem: ''
            }
        default:
            return state
    }
}

export default reducer;