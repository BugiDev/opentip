// Generated by CoffeeScript 1.3.3
var $;

$ = ender;

describe("Opentip - Appearing", function() {
  var adapter;
  adapter = Opentip.adapters["native"];
  beforeEach(function() {
    return Opentip.adapter = adapter;
  });
  return describe("prepareToShow()", function() {
    var opentip;
    opentip = null;
    beforeEach(function() {
      return opentip = new Opentip(adapter.create("<div></div>"), "Test");
    });
    afterEach(function() {
      var prop, _base, _results;
      _results = [];
      for (prop in opentip) {
        _results.push(typeof (_base = opentip[prop]).restore === "function" ? _base.restore() : void 0);
      }
      return _results;
    });
    it("should always abort a hiding process", function() {
      sinon.stub(opentip, "_abortHiding");
      opentip.prepareToShow();
      return expect(opentip._abortHiding.callCount).to.be(1);
    });
    it("even when aborting because it's already visible", function() {
      sinon.stub(opentip, "_abortHiding");
      opentip.visible = true;
      opentip.prepareToShow();
      return expect(opentip._abortHiding.callCount).to.be(1);
    });
    return it("should abort when already visible", function() {
      expect(opentip.preparingToShow).to.not.be.ok();
      opentip.visible = true;
      opentip.prepareToShow();
      expect(opentip.preparingToShow).to.not.be.ok();
      opentip.visible = false;
      opentip.prepareToShow();
      return expect(opentip.preparingToShow).to.be.ok();
    });
  });
});
