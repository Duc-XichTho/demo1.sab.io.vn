import {
	CanvasContainer,
	CanvasNotepad
} from "../postgres/postgres.js";

export const getAllCanvasContainerService = async () => {
	return await CanvasContainer.findAll();
}

export const createCanvasContainerService = async (data) => {
	try {
		return await CanvasContainer.create(data);
	} catch (error) {
		throw error;
	}
}

export const updateCanvasContainerService = async (id, data) => {
	try {
		const canvas = await CanvasContainer.findOne({
			where: {
				id
			}
		})
		if (canvas) {
			return await canvas.update(data);
		}
	} catch (error) {
		throw error;
	}
}

export const deleteCanvasContainerService = async (id) => {
	try {
		const canvas = await CanvasContainer.findOne({
			where: {
				id
			}
		})
		if (canvas) {
			const notepad = await CanvasNotepad.findOne({
				where: {
					canvasContainerId: id,
					show: true
				}
			})
			if (notepad) {
				await notepad.update({
					show: false
				});
			}
			return await canvas.destroy();
		}
	} catch (error) {
		throw error;
	}
}