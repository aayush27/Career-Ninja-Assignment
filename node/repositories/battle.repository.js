const db = require('../models/index');
const _ = require('underscore');
const Battle = db.Battle;

exports.listBattlePlaces = () => new Promise((resolve, reject) => {
    let query = {};
    let fields = "location -_id";
    Battle.find(query, fields)
    .then((battles) => {
        battles = _.reject(_.pluck(battles, "location"), _.isEmpty);
        return resolve(battles);
    })
    .catch((error) => {
        return reject(error);
    });
})

exports.countBattle = () => new Promise((resolve, reject) => {
    let query = {};
    Battle.count(query)
    .then((battles) => {
        return resolve(battles);
    })
    .catch((error) => {
        return reject(error);
    });
})

exports.searchBattle = (data) => new Promise((resolve, reject) => {
    let array = [];
    if (data.location) array.push({"location": data.location});
    if (data.type) array.push({"battle_type": data.type});
    if (data.king) {
        array.push({"attacker_king": data.king });
        array.push({"defender_king": data.king });
    }
    Battle.find({ $or : array})
    .then((battles) => {
        return resolve(battles);
    })
    .catch((error) => {
        return reject(error);
    });
})