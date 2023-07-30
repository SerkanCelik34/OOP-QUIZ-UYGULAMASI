function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;


}

Soru.prototype.cevabiKontrolEt = function (cevap) {
    return cevap === this.dogruCevap
}


let sorular = [
    new Soru("1-Hangisi javascript paket yönetim uygulamasıdır ?", { a: "Node.js", b: "Typscript", c: "Npm", d: "Nuget" }, "c"),
    new Soru("2-hangisi javascript paket yönetim uygulamasıdır", { a: "Node.js", b: "Typscript", c: "Npm" }, "c"),
    new Soru("3-hangisi javascript paket yönetim uygulamasıdır", { a: "Node.js", b: "Typscript", c: "Npm" }, "c"),
    new Soru("4-hangisi javascript paket yönetim uygulamasıdır", { a: "Node.js", b: "Typscript", c: "Npm" }, "c"),

];