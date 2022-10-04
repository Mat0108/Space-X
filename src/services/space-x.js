import axios from "axios";
export const getCapsules = async () => {
    const res = await axios.get(`https://api.spacexdata.com/v3/capsules`);
    return res.data;
}
export const getLaunches = async () => {
    const res = await axios.get(`https://api.spacexdata.com/v3/launches`);
    return res.data;
}
