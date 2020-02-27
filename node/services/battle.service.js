import { listBattlePlaces, countBattle, searchBattle } from '../repositories/battle.repository';

exports.listBattlePlaces = () =>  new Promise((resolve, reject) => {
    listBattlePlaces()
        .then((response) => {
            return resolve(response);
        })
        .catch((error) => {
            return reject(error);
        });
});

exports.countBattle = () => new Promise((resolve, reject) => {
    countBattle()
        .then((response) => {
            return resolve(response);
        })
        .catch((error) => {
            return reject(error);
        });
});

exports.searchBattle = (data) => new Promise((resolve, reject) => {
    searchBattle(data)
        .then((response) => {
            return resolve(response);
        })
        .catch((error) => {
            return reject(error);
        });
});