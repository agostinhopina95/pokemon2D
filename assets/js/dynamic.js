const draw = {
  table: function (x, y) {
    var html = "<table>";
    for (i = 0; i < x; i++) {
      html += "<tr>";
      for (j = 0; j < y; j++) {
        photo = i == j && parseInt(x / 2) == i ? "ash" : "ball";
        html += "<td " + photo + " >" + (i + 1 + ":" + (j + 1)) + "</td>";
      }
      html += "</tr>";
    }
    html += "</table>";
    $(".dynamic-content").html(html);
  },
};
