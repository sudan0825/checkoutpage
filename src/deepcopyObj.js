//deep copy an object and update values
export const deepcopyObj = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};
