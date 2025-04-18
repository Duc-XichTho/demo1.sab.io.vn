import {StoryWebPage, WebPage} from '../postgres/postgres.js';

export const createWebPageService = async (newData) => {
    try {
        const data = await WebPage.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi WebPage: ' + error.message);
    }
};

export const getWebPageByIdService = async (id) => {
    try {
        const data = await WebPage.findByPk(id, { raw: true });

        if (!data) {
            throw new Error('Bản ghi WebPage không tồn tại');
        }

        const stories = await StoryWebPage.findAll({
            where: {
                id_web_page: id,
                show: true,
            },
            order: [['id', 'DESC']],
            raw: true,
        });

        return {
            ...data,
            stories,
        };
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi WebPage: ' + error.message);
    }
};


export const getAllWebPageService = async () => {
    try {
        const dataList = await WebPage.findAll({
            where: {
                show: true
            },
            order: [['id', 'DESC']],
            raw: true,
        });
        const result = await Promise.all(
            dataList.map(async (tab) => {
                const notes = await StoryWebPage.findAll({
                    where: {
                        id_web_page: tab.id,
                        show: true
                    },
                    order: [['id', 'DESC']],
                    raw: true,
                });
                return {
                    ...tab,
                    stories: notes,
                };
            })
        );
        return result;

    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi WebPage: ' + error.message);
    }
};

export const updateWebPageService = async (newData) => {
    const {id, oldValue, name} = newData;
    try {
        const data = await WebPage.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi WebPage không tồn tại');
        }
        await data.update(newData)
        //     .then(()=> {
        //      fetchAndUpdateRecords(oldValue, name)
        // })
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi WebPage: ' + error.message);
    }
};

export const deleteWebPageService = async (ids) => {
    try {
        const dataList = await WebPage.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi WebPage nào tồn tại với các ID này');
        }
        await WebPage.update(
            {show: false},
            {
                where: {
                    id: ids,
                },
            }
        );
        return {message: 'Các bản ghi WebPage đã được ẩn thành công'};
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi WebPage: ' + error.message);
    }
};

