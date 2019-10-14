import Errors from "@/utils/Errors";

export default class Form {
  /**
   * Create a new Form instance.
   *
   * @param {object} data
   */
  constructor(data) {
    this.originalData = data;

    for (const field in data) {
      this[field] = data[field];
    }

    this.errors = new Errors();
  }

  /**
   * Fetch all relevant data for the form.
   */
  data() {
    const data = {};

    for (const property in this.originalData) {
      data[property] = this[property];
    }

    return data;
  }

  /**
   * Return true if the form is incompleted.
   */
  incompleted() {
    return this.hasEmptyProperties(this.originalData);
  }

  /**
   * Return true if the form is completed.
   */
  completed() {
    return !this.incompleted();
  }

  hasEmptyProperties(object) {
    for (const key in object) {
      if (Array.isArray(object[key]) || object[key] instanceof Object) {
        if (this.hasEmptyProperties(object[key])) {
          return true;
        }
      } else if (object[key] === "" || object[key] === null) {
        return true;
      }
    }

    return false;
  }

  /**
   * Reset the form fields and errors.
   */
  reset() {
    this.resetFields();

    this.errors.clear();
  }

  /**
   * Reset the form fields and errors.
   */
  resetFields() {
    for (const field in this.originalData) {
      this[field] = "";
    }
  }

  /**
   * Handle a failed form submission.
   *
   * @param {object} errors
   */
  onFail(errors) {
    this.errors.record(errors);
  }
}
