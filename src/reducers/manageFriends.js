export function manageFriends(state = {
    friends: []
}, action){
    switch (action.type) {
        case 'ADD_FRIEND':
            return { friends: state.friends.concat(action.friend) }
        case 'REMOVE_FRIEND':
            let stillFriends = []
            for (const friend of state.friends) {
                if (friend.id != action.id) {
                    stillFriends.concat(friend)
                    return {friends: friend}
                }
            }
            return {friends: stillFriends}
        default:
            return state;
    }
}
