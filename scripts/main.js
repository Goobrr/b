// Apparently this breaks textures, good.
Events.on(ContentInitEvent, () => {
  Core.atlas.getRegions().each((r) => {
    var n = Core.atlas.find("bdustry-eye");
    r.setU(n.u);
    r.setV(n.v);
    r.setU2(n.u2);
    r.setV2(n.v2);
    print("processed" + r);
  });
});
