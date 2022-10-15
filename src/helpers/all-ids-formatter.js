import Cookies from "js-cookie";

const formatStringToArray = (string) => {
    return string.split(',');
}

export const artistIdsHandler = (allIds, publicId) => {
    let idArray = allIds;
    let previous, next;

    if(allIds.lenght == 0) {
        const cookie = Cookies.get('allIds');
        idArray = formatStringToArray(cookie);
    }

    let idPosition = idArray.findIndex(id => id == publicId);

    previous = allIds[idPosition - 1] ? allIds[idPosition - 1] : publicId;
    next = allIds[idPosition + 1] ? allIds[idPosition + 1] : publicId;
    
    return {
        previous, next
    }
}