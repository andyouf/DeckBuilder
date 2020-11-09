import axios from "axios";

const API_URL = "https://api.magicthegathering.io/v1/cards?";

/**
 * 
 * @param {name} name: card name search string
 * @param {text} text: card text search string
 */
const fetchCards = async ({name, text}) => {
    try {
        const { data } = await axios.get(API_URL + `name=${name}&text=${text}`);
        return data.cards || [];
    } catch(error) {
        throw error;
    }
}

export default fetchCards;
