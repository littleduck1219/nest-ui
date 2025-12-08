import { jsx as n } from "react/jsx-runtime";
const r = "_button_1lz4m_1", _ = "_primary_1lz4m_14", c = "_secondary_1lz4m_22", i = "_outline_1lz4m_30", a = "_small_1lz4m_39", u = "_medium_1lz4m_44", d = "_large_1lz4m_49", t = {
  button: r,
  primary: _,
  secondary: c,
  outline: i,
  small: a,
  medium: u,
  large: d
};
function z({
  children: o,
  variant: e = "primary",
  size: l = "medium",
  disabled: m = !1,
  onClick: s
}) {
  return /* @__PURE__ */ n(
    "button",
    {
      className: `${t.button} ${t[e]} ${t[l]}`,
      disabled: m,
      onClick: s,
      type: "button",
      children: o
    }
  );
}
const y = {};
function b() {
  return /* @__PURE__ */ n("div", { className: y.container, children: /* @__PURE__ */ n("h1", { children: "Welcome to Ui!" }) });
}
export {
  z as Button,
  b as Ui
};
