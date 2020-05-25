const counterReducer = (count = 0, action) => {
    switch (action) {
        case 'INCREMENT':
            return count + 1;

        case 'DICREMENT':
            return count - 1;

        default:
            return count;
    }
}

export default counterReducer;