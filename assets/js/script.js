/* coordinates
    N : 1,
    E : 2,
    S : 3,
    W : 4
    */
const screen = {
  size: function () {
    return {
      x: $(".dynamic-content tr").length,
      y: $(".dynamic-content tr:nth-child(2)").find("td").length,
    };
  },
  setPos: function (coordinate) {
    $(".dynamic-content td[ash]").attr("ash", null);
    newElem = $(".dynamic-content")
      .find("tr")
      .eq(coordinate[0] - 1)
      .find("td")
      .eq(coordinate[1] - 1);
    newElem.attr("ball", null);
    newElem.attr("ash", true);
    return newElem;
  },
};
const coordinate = {
  ash: function () {
    e = $(".dynamic-content td[ash]");
    var p = e.parent();
    var Y = p.index() + 1;
    var X = 1;
    var d = p[0].cells;
    for (i = 0; i < d["length"]; i++) {
      if ($(d[i]).is(e)) {
        X = i + 1;
      }
    }
    return [Y, X];
  },
};
const GEO = {
  N: function (c) {
    return [c[0] - 1, c[1]];
  },
  E: function (c) {
    return [c[0], c[1] + 1];
  },
  S: function (c) {
    return [c[0] + 1, c[1]];
  },
  W: function (c) {
    return [c[0], c[1] - 1];
  },
  LIMIT: function (ash, geo, limit = 0) {
    x = screen.size().x;
    y = screen.size().y;
    mod_x = 0;
    mod_y = 0;
    if (geo.dir == 1) {
      mod_x = -limit;
    } else if (geo.dir == 2) {
      mod_y = limit;
    } else if (geo.dir == 3) {
      mod_x = limit;
    } else if (geo.dir == 4) {
      mod_y = -limit;
    }
    ash = [ash[0] + mod_x, ash[1] + mod_y];
    ash = geo.fn(ash);
    if (ash[0] <= 0 || ash[0] > x || ash[1] <= 0 || ash[1] > y) {
      return !1;
    }
    return !0;
  },
};
const move = {
  to: function (direction) {
    ash = coordinate.ash();
    if (direction == 1) {
      geo = GEO.N;
    } else if (direction == 2) {
      geo = GEO.E;
    } else if (direction == 3) {
      geo = GEO.S;
    } else if (direction == 4) {
      geo = GEO.W;
    }
    if (
      GEO.LIMIT(
        ash,
        {
          dir: direction,
          fn: geo,
        },
        1
      )
    ) {
      ash = geo(ash);
    }
    screen.setPos(ash);
  },
  camera: function (dir) {},
};
