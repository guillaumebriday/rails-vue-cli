import Vue from "vue";
import Vuex from "vuex";
import VuexORM from "@vuex-orm/core";
import VuexORMAxios from "@vuex-orm/plugin-axios";
import JsonApiResponseConverter from "json-api-response-converter";
import Post from "./models/Post";

Vue.use(Vuex);

const database = new VuexORM.Database();

database.register(Post);

VuexORM.use(VuexORMAxios, {
  database,
  http: {
    baseURL: "/api/v1",
    onResponse: response => {
      if (response.data === null) {
        return;
      }

      return new JsonApiResponseConverter(response.data).formattedResponse;
    }
  }
});

export default new Vuex.Store({
  namespaced: true,
  plugins: [VuexORM.install(database)]
});
