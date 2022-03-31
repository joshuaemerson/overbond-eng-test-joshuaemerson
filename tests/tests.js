const request = require("supertest");
const assert = require("assert");
const { formatData, loadFileContents } = require("../app");

const arrayFileContents = [
  "BDSr,i2,NAmGITS,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,",
  "BDx,i138,Si6,s2,SYmIS,NAmNasdaq Iceland hf.,CNyIS,MIcXICE,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,",
  "BDm,i896,Si006178,s2,Ex138,NAmIceland Cash Bond Tr…406,MIcXICE,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,",
  "BDIs,i15020,SiRIK,s2,ISsRIK,NAmRíkissjóður Íslands…RC6XAJN15,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,",
  "BDt,i2878286,SiRIKS_26_0216,s2,Ex138,Mk896,INiRIK0…PTaN,PTb2,OXCl0,RLoY,IaN,FxN,IqN,TUsN,MSc449,LSz1",
  "BDu,i2878286,SiRIKS_26_0216,s2,IICtISIN,FISnENDURL…BTyEUSB,MBPs0,MCStN,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,",
  "BDBo,i2878286,SiRIKS_26_0216,s2,BTy1,DIs20180216,A…,MDo255,SSDaN,FIt3,DAd20180216,,,,,,,,,,,,,,,,,,,",
  "BDLi,i14702,SiISTO,s2,LSt433,SYmISTO,NAmICE Inflat…CyISK,TCeY,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,",
  "BDLi,i14704,SiICE_INFLATION-LINKED_TREASURY_BO,s2,…CyISK,TCeN,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,",
  "m,i2878286,t180000.355,Dt20210827,ISOcY,ISOtY,d0.0…819,LTd20210827,LPd20210827,,,,,,,,,,,,,,,,,,,,,,",
  "BDSr,i2,NAmGITS,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,",
  "BDx,i138,Si6,s2,SYmIS,NAmNasdaq Iceland hf.,CNyIS,MIcXICE,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,",
  "BDm,i896,Si006178,s2,Ex138,NAmIceland Cash Bond Tr…406,MIcXICE,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,",
  "BDIs,i15020,SiRIK,s2,ISsRIK,NAmRíkissjóður Íslands…RC6XAJN15,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,",
  "BDt,i916698,SiRIKS_30_0701,s2,Ex138,Mk896,INiRIK01…PTaN,PTb2,OXCl0,RLoY,IaN,FxN,IqN,TUsN,MSc449,LSz1",
  "BDu,i916698,SiRIKS_30_0701,s2,IICtISIN,FISnSEDLABA…BTyEUSB,MBPs0,MCStN,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,",
  "BDBo,i916698,SiRIKS_30_0701,s2,BTy1,DIs20110701,AO…,MDo255,SSDaN,FIt3,DAd20110701,,,,,,,,,,,,,,,,,,,",
  "BDLi,i14702,SiISTO,s2,LSt433,SYmISTO,NAmICE Inflat…CyISK,TCeY,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,",
  "BDLi,i14704,SiICE_INFLATION-LINKED_TREASURY_BO,s2,…CyISK,TCeN,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,",
  "m,i916698,t180000.353,Dt20210827,ISOcY,ISOtY,d0.05…d20210826,LPd20210826,,,,,,,,,,,,,,,,,,,,,,,,,,,,",
  "BDSr,i2,NAmGITS,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,",
  "BDx,i138,Si6,s2,SYmIS,NAmNasdaq Iceland hf.,CNyIS,MIcXICE,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,",
  "BDm,i896,Si006178,s2,Ex138,NAmIceland Cash Bond Tr…406,MIcXICE,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,",
  "BDIs,i15020,SiRIK,s2,ISsRIK,NAmRíkissjóður Íslands…RC6XAJN15,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,",
  "BDt,i3848464,SiRIKV_21_1115,s2,Ex138,Mk896,INiRIK0…PTaN,PTb2,OXCl0,RLoY,IaN,FxN,IqN,TUsN,MSc449,LSz1",
  "BDu,i3848464,SiRIKV_21_1115,s2,IICtISIN,FISnENDURL…BTyEUSB,MBPs0,MCStN,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,",
  "BDBo,i3848464,SiRIKV_21_1115,s2,BTy1,DIs20201001,A…8,Vm1,MDo255,SSDaN,FIt1,,,,,,,,,,,,,,,,,,,,,,,,,,",
  "BDLi,i14710,SiISTB,s2,LSt433,SYmISTB,NAmICE Treasu…CyISK,TCeY,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,",
  "BDLi,i14712,SiICE_TREASURY_BILLS,s2,LSt434,PAi1471…CyISK,TCeN,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,",
  "m,i3848464,t180000.356,Dt20210827,ISOcY,ISOtY,d0.01,BPr99.94,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,",
];

// test suite does not work as of now, ran out of time
describe("load file", () => {
  it("should load the contents of the file properly", async () => {
    assert.deepStrictEqual(arrayFileContents, await formatData("../test.csv"));
  });
});
