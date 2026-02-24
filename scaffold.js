import fs from "fs";
import path from "path";

const structure = {
  src: {
    app: {},
    components: {},
    services: {},
    state: {},
    utils: {},
    styles: {
      "main.css": "",
    },
    "main.js": "",
  },
  "vite.config.js": "",
};

function createStructure(base, obj) {
  for (const key in obj) {
    const fullPath = path.join(base, key);
    if (typeof obj[key] === "object") {
      fs.mkdirSync(fullPath, { recursive: true });
      createStructure(fullPath, obj[key]);
    } else {
      fs.writeFileSync(fullPath, obj[key]);
    }
  }
}

createStructure(".", structure);
console.log("Project structure created.");