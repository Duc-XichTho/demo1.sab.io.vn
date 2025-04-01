export const addAuditHooks = (Model, AuditLog) => {
  // Hook cho create
  Model.addHook("afterCreate", async (instance, options) => {
    try {
      await AuditLog.create({
        tableName: Model.tableName,
        recordId: instance.id,
        operation: "CREATE",
        newValues: instance.toJSON(),
        email: options.email,
      });
    } catch (error) {
      console.error("Audit log error:", error);
    }
  });

  // Hook cho update
  Model.addHook("afterUpdate", async (instance, options) => {
    try {
      await AuditLog.create({
        tableName: Model.tableName,
        recordId: instance.id,
        operation: "UPDATE",
        oldValues: instance._previousDataValues,
        newValues: instance.toJSON(),
        email: options.email,
      });
    } catch (error) {
      console.error("Audit log error:", error);
    }
  });

  // Hook cho soft delete (update show = false)
  Model.addHook("beforeUpdate", async (instance, options) => {
    if (instance.changed("show") && instance.show === false) {
      try {
        await AuditLog.create({
          tableName: Model.tableName,
          recordId: instance.id,
          operation: "DELETE",
          oldValues: instance._previousDataValues,
          email: options.email,
        });
      } catch (error) {
        console.error("Audit log error:", error);
      }
    }
  });
};