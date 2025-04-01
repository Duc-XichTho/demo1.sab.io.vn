import { Chain, Template, Step, SubStep } from "../postgres/postgres.js";

export const getAllChainTemplateStepSubStepService = async () => {
  try {
    const chains = await Chain.findAll({
      where: {
        show: true,
      },
      order: [["name", "ASC"]],
    });

    const templates = await Template.findAll({
      where: {
        show: true,
      },
      order: [["name", "ASC"]],
    });

    const steps = await Step.findAll({
      where: {
        show: true,
      },
      order: [["position", "ASC"]],
    });

    const subSteps = await SubStep.findAll({
      where: {
        show: true,
      },
      order: [["position", "ASC"]],
    });

    const result = chains.map((chain) => {
      const chainData = chain.toJSON();

      chainData.templates = templates
        .filter((template) => template.chain_id === chain.id)
        .map((template) => {
          const templateData = template.toJSON();

          templateData.steps = steps
            .filter((step) => step.template_id === template.id)
            .map((step) => {
              const stepData = step.toJSON();

              stepData.subSteps = subSteps
                .filter((subStep) => subStep.step_id === step.id)
                .map((subStep) => subStep.toJSON());

              return stepData;
            });

          return templateData;
        });

      return chainData;
    });

    return result;
  } catch (error) {
    throw error;
  }
};

export const createChainService = async (newData) => {
  try {
    const data = await Chain.create(newData);
    return data;
  } catch (error) {
    throw new Error("Lỗi khi tạo bản ghi Chain: " + error.message);
  }
};

export const getChainByIdService = async (id) => {
  try {
    const data = await Chain.findByPk(id);
    if (!data) {
      throw new Error("Bản ghi Chain không tồn tại");
    }
    return data;
  } catch (error) {
    throw new Error("Lỗi khi lấy bản ghi Chain: " + error.message);
  }
};

export const getAllChainService = async () => {
  try {
    const dataList = await Chain.findAll({
      where: {
        show: true,
      },
    });
    return dataList.sort((a, b) => b.id - a.id);
  } catch (error) {
    throw new Error("Lỗi khi lấy danh sách bản ghi Chain: " + error.message);
  }
};

export const updateChainService = async (newData) => {
  const { id, oldValue, name } = newData;
  try {
    const data = await Chain.findByPk(id);
    if (!data) {
      throw new Error("Bản ghi Chain không tồn tại");
    }
    await data.update(newData);
    //     .then(()=> {
    //      fetchAndUpdateRecords(oldValue, name)
    // })
    return data;
  } catch (error) {
    throw new Error("Lỗi khi cập nhật bản ghi Chain: " + error.message);
  }
};

export const deleteChainService = async (ids) => {
  try {
    const dataList = await Chain.findAll({
      where: {
        id: ids,
      },
    });
    if (dataList.length === 0) {
      throw new Error("Không có bản ghi Chain nào tồn tại với các ID này");
    }
    await Chain.update(
      { show: false },
      {
        where: {
          id: ids,
        },
      }
    );
    return { message: "Các bản ghi Chain đã được ẩn thành công" };
  } catch (error) {
    throw new Error("Lỗi khi ẩn các bản ghi Chain: " + error.message);
  }
};
