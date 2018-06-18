import { AsyncStorage } from 'react-native';

const Store = {

  isReady: false,
  piggyIdList: [],

  init: () => {
    AsyncStorage.getItem('@PiggyList', (err, res) => {
      if (!err) { Store.piggyIdList = JSON.parse(res) || [] };
      Store.isReady = true;
    })
  },

  updatePiggyIdList: (id) => {
    Store.piggyIdList.push(id);
    AsyncStorage.setItem('@PiggyList', JSON.stringify(Store.piggyIdList));
  },

  saveNewPiggy: (name, callback) => {
    if (!name) return;

    const created_at = Date.now()
    const id = name.trim().toLowerCase().replace(/\s/g, "") + created_at;
    const newPiggy = {
      id,
      name,
      created_at,
      balance: 0,
      transactions: [],
    }

    Store.save(`@Piggy:${id}`, JSON.stringify(newPiggy), (err, res) => {
      if (err) { console.log('could not save piggy', err)}
      Store.updatePiggyIdList(id);
      if (callback) { callback(err, res); }
    })
  },

  getPiggy: (id) => {
    AsyncStorage.getItem(`@Piggy:${id}`, (err, res) => {
      if(!err) {
        return JSON.parse(res)
      }
      if (err) {
        console.error('could not find piggy with id', id, err)
        return null
      }
    })
  },

  getAllPiggys: (callback) => {
    const ids = Store.piggyIdList.map(id => `@Piggy:${id}`)
    AsyncStorage.multiGet(ids, (err, res) => {
      if(err && err.length >= 1) { callback && callback([]) }
      else {
        console.log(res)
        const piggys = res.map((outerArray) => {
          const piggyObj = outerArray[1]
          return JSON.parse(piggyObj)
        })
        if (callback) {
          callback(piggys)
        }
      }
    })
  },

  save: (key, value, callback) => {
    AsyncStorage.setItem(key, value, callback);
  },
}

Store.init()

export default Store;
