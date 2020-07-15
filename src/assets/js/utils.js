export default {
  filters: {
    emptyChange (val) {
      if( val === null || val === '' || val === undefined ) {
        val = '- -'
      }
      return val
    },
    shortDate (val) {
      if(val) {
        return val.slice(0,10)
      }
    },
    // 数字(可含两位小数)千分位分隔符展示
    formatThousands (num) {
      let numArray = String(num).split('.')
      const reg = /\d{1,3}(?=(\d{3})+$)/g
      if(numArray[1]) {
        if(numArray[1].length === 1) {
          return (numArray[0] + '').replace(reg, '$&,') + '.' + numArray[1] + '0'
        }else {
          return (numArray[0] + '').replace(reg, '$&,') + '.' + numArray[1]
        }
      }else{
        return (numArray[0] + '').replace(reg, '$&,')
      }
    },
    // 数字取消千分位分隔符展示
    formatNoThousands (num) {
      const reg = /,/gi
      return num.replace(reg, '')
    },

    // 数字展示为两位小数
    twoFloat (num) {
      if(isNaN(num)) {
        return num
      }else{
        return Number(num).toFixed(2)
      }
    },
  },
  data () {
    return {
      hrefErrorTips: '非法链接，请检查您的链接地址。',
    }
  },
  destroyed () {
    this.$message.closeAll()
  },
  S4 () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  },
  getKeys () {
    return this.S4()
  },

  getLocationStaticPath (url) {
    return window.location.origin + window.location.pathname + url
  },
  // 校验手机号
  checkTelephone (val) {
    const uPhone = new RegExp('^1[3|4|5|7|8][0-9]{9}$')
    return uPhone.test(val)
  },
  // 校验身份证
  checkIdCard () {
    const uIdCard = new RegExp('^([0-9]){7,18}(x|X)?$')
    return uIdCard
  },
  // 校验银行卡号
  checkCardNo () {
    const uCardNo = new RegExp('^[1-9]{1}[0-9]{14,18}$')
    return uCardNo
  },
  // 数字(可含两位小数)千分位分隔符展示
  formatThousands (num) {
    let numArray = String(num).split('.')
    const reg = /\d{1,3}(?=(\d{3})+$)/g
    if(numArray[1]) {
      if(numArray[1].length === 1) {
        return (numArray[0] + '').replace(reg, '$&,') + '.' + numArray[1] + '0'
      }else {
        return (numArray[0] + '').replace(reg, '$&,') + '.' + numArray[1]
      }
    }else{
      return (numArray[0] + '').replace(reg, '$&,')
    }
  },
  // 取消千分位分隔符
  formatNoThousands (num) {
    const reg = /,/gi
    return num.replace(reg, '')
  },
  // 校验100的整数倍，可含有小数00
  reg100 (val) {
    const reg = new RegExp('^[1-9][0-9]*00(.0{1,2})?$')
    return reg.test(val)
  },
  // 去掉左右空格
  trim (val) {
    if(val) {
      const reg = /(^\s*)|(\s*$)/g
      return val.replace(reg,'')
    }
  },
  // 过滤查询参数
  filterParams (obj) {
    let params = {}
    const reg = /(^\s*)|(\s*$)|(^\s*$)/g
    Object.keys(obj).map((key) => {
      if(typeof(obj[key]) === 'string') {
        obj[key] = obj[key].replace(reg,'')
      }
      if (typeof(obj[key]) === 'string' && obj[key] !== '' || typeof(obj[key]) !== 'string' && Object.prototype.toString.call(obj[key]) !== '[object Array]' && obj[key] !== null && obj[key] !== undefined && !isNaN(obj[key])) {
        params[key] = obj[key]
      }
    })
    return params
  }

}
