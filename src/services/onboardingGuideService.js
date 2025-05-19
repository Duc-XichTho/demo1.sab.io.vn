import { OnboardingGuide } from '../postgres/postgres.js';

export const createOnboardingGuideService = async (newData) => {
    try {
        const data = await OnboardingGuide.create(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi tạo bản ghi OnboardingGuide: ' + error.message);
    }
};

export const getOnboardingGuideByIdService = async (id) => {
    try {
        const data = await OnboardingGuide.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi OnboardingGuide không tồn tại');
        }
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi OnboardingGuide: ' + error.message);
    }
};

export const getOnboardingGuideByComponentService = async (componentName) => {
    try {
        const data = await OnboardingGuide.findOne({
            where: {
                component_name: componentName,
                show: true
            }
        });
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi OnboardingGuide theo component: ' + error.message);
    }
};

export const getAllOnboardingGuideService = async () => {
    try {
        const dataList = await OnboardingGuide.findAll({
            where: {
                show: true
            }
        });
        return dataList.sort((a, b) => b.id - a.id);
    } catch (error) {
        throw new Error('Lỗi khi lấy danh sách bản ghi OnboardingGuide: ' + error.message);
    }
};

export const updateOnboardingGuideService = async (newData) => {
    const { id } = newData;
    try {
        const data = await OnboardingGuide.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi OnboardingGuide không tồn tại');
        }
        await data.update(newData);
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật bản ghi OnboardingGuide: ' + error.message);
    }
};

export const updateOnboardingGuideSlidesService = async (id, slides) => {
    try {
        const data = await OnboardingGuide.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi OnboardingGuide không tồn tại');
        }
        await data.update({
            slides,
            updated_at: new Date().toISOString()
        });
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật slides OnboardingGuide: ' + error.message);
    }
};

export const updateOnboardingGuideTabsService = async (id, tabs) => {
    try {
        const data = await OnboardingGuide.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi OnboardingGuide không tồn tại');
        }
        await data.update({
            tabs,
            updated_at: new Date().toISOString()
        });
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật tabs OnboardingGuide: ' + error.message);
    }
};

export const updateTabContentService = async (id, tabOrder, content) => {
    try {
        const data = await OnboardingGuide.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi OnboardingGuide không tồn tại');
        }
        
        // Cập nhật nội dung cho tab cụ thể
        const updatedTabs = data.tabs.map(tab => 
            tab.order === tabOrder ? { ...tab, content } : tab
        );
        
        await data.update({
            tabs: updatedTabs,
            updated_at: new Date().toISOString()
        });
        
        return data;
    } catch (error) {
        throw new Error('Lỗi khi cập nhật nội dung tab OnboardingGuide: ' + error.message);
    }
};

export const deleteOnboardingGuideService = async (ids) => {
    try {
        const dataList = await OnboardingGuide.findAll({
            where: {
                id: ids,
            },
        });
        if (dataList.length === 0) {
            throw new Error('Không có bản ghi OnboardingGuide nào tồn tại với các ID này');
        }
        await OnboardingGuide.update(
            { show: false },
            {
                where: {
                    id: ids,
                },
            }
        );
        return { message: 'Các bản ghi OnboardingGuide đã được ẩn thành công' };
    } catch (error) {
        throw new Error('Lỗi khi ẩn các bản ghi OnboardingGuide: ' + error.message);
    }
}; 