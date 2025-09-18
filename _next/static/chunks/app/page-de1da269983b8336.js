(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    765: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 5436));
    },
    5436: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return b;
          },
        });
      var i = n(7437),
        r = n(2265);
      n(4887), n(936);
      var o = n(5828),
        s = n.n(o),
        a = n(732),
        l = globalThis.cv
      let c = [
        "Projects",
        "Side Projects",
        "Exhibitions",
        "Speaking",
        "Writing",
        "Awards",
        "Features",
        "Work Experience",
        "Volunteering",
        "Education",
        "Certifications",
        "Contact",
      ];
      class d {
        toString() {
          return this.url;
        }
        constructor(e) {
          (this.url = e.url), (this.width = e.width), (this.height = e.height);
        }
      }
      let u = {
        "og-image-1720636895617.png": {
          url: "/mediaManager/og-image-1720636895617.png",
          width: 900,
          height: 630,
        },
      };
      u[""] = { url: "" };
      let h = {
        ...l,
        get allCollections() {
          let e = [];
          for (let t of l.general.sectionOrder || c) {
            let n = (function (e) {
              switch (e) {
                case "Projects":
                  return "projects";
                case "Side Projects":
                  return "sideProjects";
                case "Exhibitions":
                  return "exhibitions";
                case "Speaking":
                  return "talks";
                case "Writing":
                  return "writing";
                case "Awards":
                  return "awards";
                case "Features":
                  return "features";
                case "Work Experience":
                  return "workExperience";
                case "Volunteering":
                  return "volunteering";
                case "Education":
                  return "education";
                case "Certifications":
                  return "certifications";
                case "Contact":
                  return "contact";
              }
            })(t);
            if (void 0 === n) continue;
            let i = l[n];
            Array.isArray(i) && 0 !== i.length && e.push({ name: t, items: i });
          }
          return e;
        },
        media: (e) => new d(u[e] || u[""]),
      };
      function m(e) {
        return (
          h.general.location,
          (0, i.jsxs)("div", {
            className: "about",
            children: [
              (0, i.jsx)("h1", { children: h.general.displayName }),
              h.general.byline
                ? (0, i.jsx)("div", {
                    className: "byline",
                    children: h.general.byline,
                  })
                : null,
            ],
          })
        );
      }
      let g = (0, r.forwardRef)(function (e, t) {
        let [n, o] = (0, r.useState)("max(20dvmax, 96px)"),
          [s, l] = (0, r.useState)("max(0.5dvmax, 1px)"),
          [c, d] = (0, r.useState)(new Date());
        function u(e) {
          let t = e.getHours(),
            n = e.getMinutes(),
            i = e.getSeconds(),
            r = 3600 * t + 60 * n + i;
          return [
            (i / 60) * 360,
            ((r % 3600) / 3600) * 360,
            ((r % 43200) / 43200) * 360,
          ];
        }
        return (
          (0, r.useEffect)(() => {
            let e;
            o(
              Math.max(
                0.2 *
                  (e = Math.max(
                    document.body.offsetWidth,
                    document.body.offsetHeight
                  )),
                96
              )
            ),
              l(Math.max(0.005 * e, 1));
            let t = setInterval(() => {
              d(new Date());
            }, 1e3);
            return () => clearInterval(t);
          }, []),
          (0, i.jsxs)(a.E.div, {
            initial: { opacity: 0 },
            animate: { opacity: e.ready ? 1 : 0 },
            className: "clock",
            ref: t,
            style: {
              width: n,
              boxShadow: "0 0 0 " + s + "px var(--textColor) inset",
            },
            children: [
              (0, i.jsx)("div", {
                className: "clockPiece",
                children: (0, i.jsx)(f, { fill: "var(--textColor)" }),
              }),
              (0, i.jsx)("div", {
                className: "clockPiece seconds",
                style: { zIndex: 3, transform: "rotate(" + u(c)[0] + "deg)" },
                children: (0, i.jsx)(w, {}),
              }),
              (0, i.jsx)("div", {
                className: "clockPiece minutes",
                style: { zIndex: 2, transform: "rotate(" + u(c)[1] + "deg)" },
                children: (0, i.jsx)(v, { fill: "var(--textColor)" }),
              }),
              (0, i.jsx)("div", {
                className: "clockPiece hours",
                style: { zIndex: 1, transform: "rotate(" + u(c)[2] + "deg)" },
                children: (0, i.jsx)(p, { fill: "var(--textColor)" }),
              }),
            ],
          })
        );
      });
      function f(e) {
        var t;
        return (0, i.jsx)("svg", {
          width: "200",
          height: "200",
          viewBox: "0 0 200 200",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, i.jsx)("path", {
            fill: null !== (t = e.fill) && void 0 !== t ? t : "#000",
            d: "M99 8.025a1 1 0 1 1 2 0v14a1 1 0 0 1-2 0zM99 176.025a1 1 0 0 1 2 0v14a1 1 0 1 1-2 0zM144.634 19.717a1 1 0 1 1 1.732 1l-7 12.124a1 1 0 0 1-1.732-1zM60.634 165.209a1 1 0 0 1 1.732 1l-7 12.124a1 1 0 1 1-1.732-1zM178.308 52.66a1 1 0 1 1 1 1.731l-12.125 7a1 1 0 0 1-1-1.732zM32.816 136.659a1 1 0 0 1 1 1.732l-12.125 7a1 1 0 1 1-1-1.732zM191 98.025a1 1 0 0 1 0 2h-14a1 1 0 1 1 0-2zM23 98.025a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2zM179.309 143.659a1 1 0 0 1-1 1.732l-12.125-7a1 1 0 0 1 1-1.732zM33.817 59.66a1 1 0 1 1-1 1.731l-12.125-7a1 1 0 1 1 1-1.732zM146.366 177.333a1 1 0 0 1-1.732 1l-7-12.124a1 1 0 0 1 1.732-1zM62.366 31.84a1 1 0 0 1-1.732 1l-7-12.123a1 1 0 0 1 1.732-1z",
          }),
        });
      }
      function w(e) {
        var t;
        return (0, i.jsx)("svg", {
          width: "200",
          height: "200",
          viewBox: "0 0 200 200",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, i.jsx)("path", {
            fill: null !== (t = e.fill) && void 0 !== t ? t : "#FF8C21",
            d: "M99 98.268v-69.28a.994.994 0 0 1 1-.988c.552 0 1 .442 1 .988v69.28a1.999 1.999 0 0 1-1 3.732 2 2 0 0 1-1-3.732",
          }),
        });
      }
      function v(e) {
        var t;
        return (0, i.jsx)("svg", {
          width: "200",
          height: "200",
          viewBox: "0 0 200 200",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, i.jsx)("path", {
            fill: null !== (t = e.fill) && void 0 !== t ? t : "#000",
            d: "M100 102a2 2 0 0 1-2-2V30a2 2 0 1 1 4 0v70a2 2 0 0 1-2 2",
          }),
        });
      }
      function p(e) {
        var t;
        return (0, i.jsx)("svg", {
          width: "200",
          height: "200",
          viewBox: "0 0 200 200",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, i.jsx)("path", {
            fill: null !== (t = e.fill) && void 0 !== t ? t : "#000",
            d: "M100 102a2 2 0 0 1-2-2V55a2 2 0 1 1 4 0v45a2 2 0 0 1-2 2",
          }),
        });
      }
      let x = (0, r.forwardRef)(function (e, t) {
        let [n, o] = (0, r.useState)("max(6dvmax, 28.8px)"),
          [s, l] = (0, r.useState)("max(4dvmax, 19.2px)");
        return (
          (0, r.useEffect)(() => {
            let e;
            o(
              Math.max(
                0.06 *
                  (e = Math.max(
                    document.body.offsetWidth,
                    document.body.offsetHeight
                  )),
                28.8
              )
            ),
              l(Math.max(0.04 * e, 19.2));
          }, []),
          (0, i.jsx)(a.E.div, {
            initial: { opacity: 0 },
            animate: { opacity: e.ready ? 1 : 0 },
            className: "link",
            ref: t,
            children: (0, i.jsx)("a", {
              draggable: !1,
              style: { fontSize: n, paddingLeft: s, paddingRight: s },
              target: "_blank",
              href: e.url,
              children: e.label,
            }),
          })
        );
      });
      function y(e) {
        let t = (0, r.useRef)();
        (0, r.useRef)();
        let n = (0, r.useRef)(),
          [o, a] = (0, r.useState)(0),
          l = 1 + h.contact.length,
          c = (0, r.useRef)({}),
          d = (0, r.useRef)(),
          u = (0, r.useRef)(!1),
          m = (0, r.useRef)({ x: 0, y: 0 }),
          [f, w] = (0, r.useState)({ beta: 0, gamma: 0 }),
          v = () => {
            n.current = s().Engine.create();
            let e = n.current;
            e.gravity.scale = 0.002;
            let i = d.current.getBoundingClientRect(),
              r = Object.entries(c.current),
              o = [];
            for (let [e, t] of r) {
              let n = t.getBoundingClientRect();
              n.width, n.height;
              let r = n.x - i.x + n.width / 2,
                a = n.y - i.y + n.height / 2;
              (r = (i.width - n.width) * Math.random()),
                (a = (i.height - n.height) * Math.random());
              let l = {
                body:
                  "clock" === e
                    ? s().Bodies.circle(r, a, n.width / 2, {
                        frictionStatic: 1,
                        slop: 1,
                      })
                    : s().Bodies.rectangle(r, a, n.width, n.height, {
                        chamfer: { radius: n.height / 2 },
                        frictionStatic: 1,
                        slop: 1,
                      }),
                elem: t,
                render() {
                  let { x: e, y: t } = this.body.position;
                  (this.elem.style.position = "absolute"),
                    (this.elem.style.top = "".concat(t - n.height / 2, "px")),
                    (this.elem.style.left = "".concat(e - n.width / 2, "px")),
                    (this.elem.style.transform = "rotate(".concat(
                      this.body.angle,
                      "rad)"
                    ));
                },
              };
              o.push(l);
            }
            let a = { isStatic: !0, frictionStatic: 1, slop: 1, inertia: 0 },
              l = [
                s().Bodies.rectangle(-500, 0, 1e3, 2 * window.screen.height, {
                  ...a,
                  label: "leftWall",
                }),
                s().Bodies.rectangle(
                  i.width + 500,
                  0,
                  1e3,
                  2 * window.screen.height,
                  { ...a, label: "rightWall" }
                ),
                s().Bodies.rectangle(
                  i.width / 2,
                  i.height + 500,
                  2 * window.screen.width,
                  1e3,
                  { ...a, label: "bottomWall" }
                ),
                s().Bodies.rectangle(
                  i.width / 2,
                  -500,
                  2 * window.screen.width,
                  1e3,
                  { ...a, label: "topWall" }
                ),
              ],
              h = s().Mouse.create(document.body);
            document.body.removeEventListener("touchmove", h.mousemove),
              document.body.removeEventListener("touchstart", h.mousedown),
              document.body.removeEventListener("touchend", h.mouseup),
              document.body.addEventListener("touchmove", h.mousemove, {
                passive: !0,
              }),
              document.body.addEventListener("touchstart", h.mousedown, {
                passive: !0,
              }),
              document.body.addEventListener("touchend", h.mouseup, {
                passive: !0,
              });
            let g = s().MouseConstraint.create(e, {
              mouse: h,
              constraint: { stiffness: 0.2, render: { visible: !1 } },
            });
            s().Events.on(g, "startdrag", function (e) {
              (u.current = !0),
                (m.current = { x: e.mouse.position.x, y: e.mouse.position.y });
            }),
              s().Events.on(g, "mousemove", function (e) {
                let t = e.mouse.position.x - m.current.x,
                  n = e.mouse.position.y - m.current.y;
                t * t + n * n > 4 &&
                  u.current &&
                  document.body.classList.add("dragging");
              }),
              s().Events.on(g, "enddrag", function (e) {
                (u.current = !1), document.body.classList.remove("dragging");
              }),
              s().Composite.add(e.world, [...o.map((e) => e.body), ...l, g]),
              (function n() {
                for (let e of o) e.render();
                s().Engine.update(e), (t.current = requestAnimationFrame(n));
              })();
          };
        function p(e, t) {
          return s()
            .Composite.allBodies(e)
            .filter((e) => e.label === t)[0];
        }
        function y(e) {
          return (t) => {
            e in c.current || ((c.current[e] = t), a((e) => e + 1));
          };
        }
        let b = () => {
            let e = window.innerWidth,
              t = window.innerHeight,
              i = [
                s().Bodies.rectangle(-500, 0, 1e3, 2 * window.screen.height),
                s().Bodies.rectangle(e + 500, 0, 1e3, 2 * window.screen.height),
                s().Bodies.rectangle(
                  e / 2,
                  t + 500,
                  2 * window.screen.width,
                  1e3
                ),
                s().Bodies.rectangle(e / 2, -500, 2 * window.screen.width, 1e3),
              ];
            s().Body.setPosition(p(n.current.world, "leftWall"), i[0].position),
              s().Body.setPosition(
                p(n.current.world, "rightWall"),
                i[1].position
              ),
              s().Body.setPosition(
                p(n.current.world, "bottomWall"),
                i[2].position
              ),
              s().Body.setPosition(
                p(n.current.world, "topWall"),
                i[3].position
              );
          },
          j = (e) => {
            console.log(e), w({ beta: e.beta, gamma: e.gamma });
          };
        return (
          (0, r.useEffect)(() => {
            if (o === l)
              return (
                v(),
                () => {
                  cancelAnimationFrame(t.current), s().Engine.clear(n.current);
                }
              );
          }, [o]),
          (0, r.useEffect)(
            () => (
              window.addEventListener("resize", b),
              window.addEventListener("devicemotion", j),
              () => {
                window.removeEventListener("resize", b),
                  window.removeEventListener("devicemotion", j);
              }
            ),
            []
          ),
          (0, i.jsxs)("div", {
            className: "links",
            ref: d,
            children: [
              (0, i.jsx)(g, { ref: y("clock"), ready: o === l }),
              h.contact.map((e, t) =>
                (0, i.jsx)(
                  x,
                  {
                    ready: o === l,
                    ref: y("link" + t),
                    url: e.url,
                    label: e.platform,
                  },
                  t
                )
              ),
            ],
          })
        );
      }
      var b = function () {
        return (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(m, {}), (0, i.jsx)(y, {})],
        });
      };
    },
  },
  function (e) {
    e.O(0, [21, 351, 971, 938, 744], function () {
      return e((e.s = 765));
    }),
      (_N_E = e.O());
  },
]);
