// in this file you can append custom step methods to 'I' object

module.exports = function() {



  let paremeters = require('./Paremeters/hastane1.json')

  return actor({

    fields:{
        kullaniciAdi:'//input[@id="edtNickNam"]',
        sifre: '//input[@id="edtPassword"]'
    },
    buttons:{
        girisYapButton: '//div[@id="loginPanel"],'
    },

    getEnvironmetParemeters : function(key){
        return paremeters[key];

    },

    login : function(){
      this.amOnPage(this.getEnvironmetParemeters("url"))
      this.waitForElement(this.fields.kullaniciAdi)
      this.waitForElement(this.fields.sifre)
      this.fillField(this.fields.kullaniciAdi,this.getEnvironmetParemeters("kullaniciAdi"))
      pause();
      this.fillField(this.fields.sifre,this.getEnvironmetParemeters("sifre"))
      this.waitForElement(this.buttons.girisYapButton)
      this.click(this.buttons.girisYapButton)
    }

  });
}
