import {StoryWebPage} from '../postgres/postgres.js';

export const createStoryWebPageService = async (newData) => {
    try {
        const data = await StoryWebPage.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi StoryWebPage: ' + error.message);
    }
};

export const getStoryWebPageByIdService = async (id) => {
    try {
        const data = await StoryWebPage.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi StoryWebPage không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi StoryWebPage: ' + error.message);
    }
};

export const getStoryWebPageByIdWebPageService = async (id) => {
    try {
        const data = await StoryWebPage.findAll({
            where: {
                id_web_page : id,
                show: true
            }
        });
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi StoryWebPage: ' + error.message);
    }
};

export const getAllStoryWebPageService = async () => {
    try {
        const dataList = await StoryWebPage.findAll({
            where: {
                show: true  // Thêm điều kiện where để chỉ lấy các bản ghi có trường 'show' bằng true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi StoryWebPage: ' + error.message);
    }
};

export const updateStoryWebPageService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await StoryWebPage.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi StoryWebPage không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi StoryWebPage: ' + error.message);
    }
};

export const deleteStoryWebPageService = async (ids) => {
    try {
        const dataList = await StoryWebPage.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi StoryWebPage nào tồn tại với các ID này');
        }
        await StoryWebPage.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi StoryWebPage đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi StoryWebPage: ' + error.message);
    }
};

