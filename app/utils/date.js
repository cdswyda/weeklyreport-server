/**
 * 获取任一日期的周一
 *
 * @export
 * @param {Date} d 任意日期对象
 * @returns 周一 0.0的日期对象
 */
function getWeekStart(d) {
  const d1 = new Date(d);
  let day = d1.getDay();
  day = day === 0 ? 7 : day;
  const startDate = d1.getDate() - (day - 1);
  const s = new Date(d1.getTime());
  s.setDate(startDate);
  s.setHours(0, 0, 0, 0);

  return s;
}
/**
 * 获取任一日期的周日
 *
 * @export
 * @param {Date} d 任意日期对象
 * @returns 周日 0.0的日期对象
 */
function getWeekEnd(d) {
  const d1 = new Date(d);
  let day = d1.getDay();
  day = day === 0 ? 7 : day;
  const endDate = d1.getDate() + (7 - day);
  const e = new Date(d1.getTime());
  e.setDate(endDate);
  e.setHours(23, 59, 59, 999);
  return e;
}

function date2text(d) {
  const year = d.getFullYear();
  const month = ("" + (d.getMonth() + 1)).padStart(2, "0");
  const date = ("" + d.getDate()).padStart(2, "0");
  return `${year}-${month}-${date}`;
}

function getWeekDate(d) {
  return {
    start: getWeekStart(d),
    end: getWeekEnd(d)
  };
}

function getWeekDateText(d) {
  const { start, end } = getWeekDate(d);
  return `${date2text(start)}~${date2text(end)}`;
}
/**
 * 根据 yyyy-mm-dd 的日期获取日期对象
 *
 * @param {string} t yyyy-mm-dd 的日期
 * @returns 日期对象
 */
function getDateByText(t) {
  const d = t.split("-");
  d[1] -= 1;
  return new Date(...d);
}

module.exports = {
  getWeekDateText,
  getStartEndByRangeText(weekText) {
    const d = weekText.split("~");

    return {
      start: getDateByText(d[0]),
      end: getDateByText(d[1])
    };
  },
  getDateByText
};
