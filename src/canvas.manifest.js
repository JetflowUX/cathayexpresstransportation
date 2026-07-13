export const manifest = {
  screens: {
    scr_6luc89: { name: "Home", route: "/", position: { "x": 160, "y": 1820 } },
    scr_3m1q42: { name: "About", route: "/about", position: { "x": 1560, "y": 1820 } },
    scr_rg9j0y: { name: "Services", route: "/services", position: { "x": 2960, "y": 1820 } },
    scr_1ucglw: { name: "Public Transit", route: "/public-transit", position: { "x": 160, "y": 3800 } },
    scr_w0xjkx: { name: "Careers", route: "/careers", position: { "x": 0, "y": 0 }, isDefaultRow: true },
    scr_zoytdk: { name: "Transportation Assessment", route: "/assessment", position: { "x": 1560, "y": 3800 } },
    scr_6dz69i: { name: "Contact", route: "/contact", position: { "x": 4360, "y": 1820 } }
  },
  sections: {
    sec_rjkrpi: { name: "Main Navigation", x: 0, y: 1600, width: 5720, height: 1180 },
    sec_vk5j8s: { name: "Services & Assessment", x: 0, y: 3580, width: 2920, height: 1180 }
  },
  layers: [
  { kind: "screen", id: "scr_w0xjkx" },
  { kind: "section", id: "sec_rjkrpi", children: [
    { kind: "screen", id: "scr_6luc89" },
    { kind: "screen", id: "scr_3m1q42" },
    { kind: "screen", id: "scr_rg9j0y" },
    { kind: "screen", id: "scr_6dz69i" }]
  },
  { kind: "section", id: "sec_vk5j8s", children: [
    { kind: "screen", id: "scr_1ucglw" },
    { kind: "screen", id: "scr_zoytdk" }]
  }]

};