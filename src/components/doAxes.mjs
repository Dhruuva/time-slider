function DoAxes() {
  let tmlbl = []; //[{"id" : 1 ,tm: "06:00", tmx:3.001}],
  let axislbl = [];
  let test = arg =>
    new Promise((resolve, reject) => {
      let path = "return:";
      try {
        let x = 100 / arg;
        if (isNaN(arg) || !isFinite(x)) {
          console.log(isNaN(arg), isFinite(x));
          throw "Parameter is not a number!" + x;
        }
        resolve(path + arg + x);
      } catch (e) {
        reject(e);
      }
    });

  let fillTimeLabel = (width, offset, minutes) => {
    //tmlbl:[{"id" : 1 ,tm: "06:00", tmx:3.001}]
    while (tmlbl.length > 0) tmlbl.pop();
    let step = offset;
    let i = 1,
      pxInTicks = parseFloat((width - offset * 2) / minutes),
      tm = new Date(),
      h1 = 6 - tm.getTimezoneOffset() / 60;
    tm.setHours(h1, 0, 0);
    while (i <= 1440) {
      step += pxInTicks;
      let row = {
        id: Math.round(i),
        tm: new Date(tm).toISOString().slice(11, 16),
        tmx: step
      };
      //console.log(row);
      tmlbl.push(row);
      tm = new Date(tm).getTime() + 60 * 1 * 1000;
      i++;
    }
    return tmlbl;
  };

  let fillAxisLabel = (offset, minutes, tickNum) => {
    //tmlbl:[ { id: 1, x: 3.0652777777777778, tml: '06:00' }],
    if (tmlbl.length < 2)
      return [{ id: -1, x: "Please call fillTimeLabel function first!" }];
    let id = 1,
      step = oddTickSize(minutes, tickNum),
      n = 1;
    axislbl = tmlbl
      .map(a => {
        if (a.id == id) {
          let row = { id: a.id, x: a.tmx, tml: a.tm, n: n };
          //console.log(id,step)
          id += step;
          n++;
          return row;
        }
      })
      .filter(Boolean);
    let a = tmlbl.slice(-1)[0];
    let endTick = { id: a.id, x: a.tmx, tml: a.tm, n: n };
    axislbl.push(endTick);
    //console.log(axislbl);
    return axislbl;
  };
  let oddTickSize = (minutes, mayBeSize) => {
    let rtn = minutes / 24;
    for (var i = mayBeSize; i <= 24; i++) {
      let remaider = minutes % i;
      if (remaider == 0) {
        rtn = minutes / i;
        break;
      }
      //console.log(mayBeSize, " ###oddTickSize ", rtn);
    }
    // console.log(mayBeSize, " ###oddTickSize ", rtn);
    return rtn;
  };
  // Exhibating private methods
  this.test = function(arg) {
    return test(arg);
  };
  this.fillTimeLabel = (width, offset, minutes) =>
    fillTimeLabel(width, offset, minutes);
  this.fillAxisLabel = (offset, minutes, tickNum) =>
    fillAxisLabel(offset, minutes, tickNum);
}
//module.exports.default = DoAxes;
export default DoAxes;