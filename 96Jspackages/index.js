//Required package
var pdf = require("pdf-node");
var fs = require("fs");

// Read HTML Template
var html = fs.readFileSync("template.html", "utf8");
var options = {
    format: "A3",
    orientation: "portrait",
    border: "10mm",
    header: {
        height: "45mm",
        contents: '<div style="text-align: center;">Author: Shyam Hajare</div>'
    },
    footer: {
        height: "28mm",
        contents: {
            first: 'Cover page',
            2: 'Second page', // Any page number is working. 1-based index
            default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
            last: 'Last Page'
        }
    }
};

var users = [
    {
      name: "tom",
      age: "21",
    },
    {
      name: "dick",
      age: "23",
    },
    {
      name: "harry",
      age: "29",
    },
  ];
  var document = {
    html: html,
    data: {
      users: users,
    },
    path: "./output.pdf",
    type: "pdf",
  };
  // By default a file is created but you could switch between Buffer and Streams by using "buffer" or "stream" respectively.
// console.log(pdf.create)
  pdf(document, options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });