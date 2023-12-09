
const hashed = (stringToHash) => {
    let hash = 0;
    if (stringToHash.length === 0) return stringToHash;
    for (let i = 0; i < stringToHash.length; i++) {
        let char = stringToHash.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash;
    }
    return hash;
}

export { hashed }