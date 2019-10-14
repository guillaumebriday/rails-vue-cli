import { Model } from "@vuex-orm/core";

export default class Post extends Model {
  static entity = "posts";

  static fields() {
    return {
      id: this.attr(null),
      title: this.attr(""),
      content: this.attr(""),
      created_at: this.attr(""),
      updated_at: this.attr("")
    };
  }
}
