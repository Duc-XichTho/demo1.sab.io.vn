
import {updateDMFromSABService} from "../services/updateDMFromSABService.js";

export const updateDMFromSABController = async (req, res) => {

    try {
        const team = await updateDMFromSABService();
        res.status(200).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi: ' + error});
    }
};
