(function (dataLayer) {
  
  var _config = {
    roiqId: 'gQg95XW1',
    fbId: '',
    phonenum: {
      hardNumToFlip: '',
      numToFlipCss: '.phone1 .value span'
    },
    chunk: {
      notchunk: false,
      clickUDClass: 'undefined',
      clickUDType: 'submit',
      formFrame: 'undefined'
    },
    form: {
      search: '',
      email: 'input[name="contact.email"]',
      firstName: 'input[name="contact.firstName"]',
      lastName: 'input[name="contact.lastName"]',
      phone: 'input[name="contact.phone"]',
      subject: 'input[name="form.id"]'
    },
    page: {
      VDP: '\\/new|used|bargain|certified\\/.*',
      SRP: '\\/(new|used|bargain|certified)-inventory\\/.*',
      model: '\\/showroom'
    },
    vdpcustom: {}
  }

  dataLayer.push({event: 'configReady', config: _config})
})(window.dataLayer)
