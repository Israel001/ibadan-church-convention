const fs = require("fs-extra");

const copy = (src, dest) => {
  try {
    fs.copySync(src, dest);
    console.log("success!");
  } catch (err) {
    console.error(err);
  }
};

copy("src/public", "build/src/public");
copy("src/views", "build/src/views");
