import lume from "lume/mod.ts";
import postcss from "lume/plugins/postcss.ts";
import inline from "lume/plugins/inline.ts";

const site = lume();
site.use(postcss());
site.use(inline());
site.loadPages([".html"]);
site.copy("img");

export default site;
