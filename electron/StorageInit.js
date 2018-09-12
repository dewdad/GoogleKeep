/**
 * @author jcxu
 * @description 初始化本地数据库
 * @todo 后期修改为单例
 */

const Nedb = require('nedb')

class StorageInit {
  constructor (filePath = '/data/rosa.db', autoLoad = true) {
    this.filepath = filePath
    this.autoload = autoLoad
    this.db = new Nedb({
      filepath: this.filepath,
      autoload: this.autoload
    })
  }

  INSERT (DATA) {
    let me = this
    let result = new Promise(function (resolve, reject) {
      me.db.insert(DATA, (err, ret) => {
        if (err) {
          reject(err)
        } else {
          resolve(ret)
        }
      })
    })
    return result
  }

  GET (DATA) {
    let me = this
    let result = new Promise(function (resolve, reject) {
      me.db.findOne(DATA, (err, ret) => {
        if (err) {
          reject(err)
        } else {
          resolve(ret)
        }
      })
    })
    return result
  }

  SEARCH (DATA) {
    let me = this
    let result = new Promise(function (resolve, reject) {
      me.db.find(DATA, (err, ret) => {
        if (err) {
          reject(err)
        } else {
          resolve(ret)
        }
      })
    })
    return result
  }

  UPDATE (DATA) {

  }

  REMOVE (DATA) {

  }

  DELETE (DATA) {

  }
}

module.exports = StorageInit