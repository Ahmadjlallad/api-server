class Collections {
  constructor(model) {
    this.model = model;
  }
  read = async (id, next) => {
    try {
      return !id
        ? this.model.findAll()
        : this.model.findAll({
            where: { id: id },
          });
    } catch (err) {
      next(new Error("something went wrong" + err));
    }
  };
  update = async (id, updateObj, next) => {
    try {
      return this.model.update(updateObj, {
        where: { id: id },
      });
    } catch (err) {
      next(new Error("something went wrong" + err));
    }
  };
  create = async (updateObj, next) => {
    try {
      return this.model.create(updateObj);
    } catch (err) {
      next(new Error("something went wrong" + err));
    }
  };
  delete = async (id, next) => {
    try {
      return this.model.destroy({
        where: { id: id },
      });
    } catch (err) {
      next(new Error("something went wrong" + err));
    }
  };
}
module.exports = Collections;
