import { listBattlePlaces, countBattle, searchBattle } from '../services/battle.service';

exports.listBattlePlaces = (req, res) => {
    listBattlePlaces()
        .then((response) => {
            res.status(200).json({ data: response });
        })
        .catch((error) => {
            res.status(400).json({ error: error});
        });
};

exports.countBattle = (req, res) => {
    countBattle()
        .then((response) => {
            res.status(200).json({ data: response });
        })
        .catch((error) => {
            res.status(400).json({ error: error});
        });
}

exports.searchBattle = (req, res) => {
    const params = req.query;
    searchBattle(params)
        .then((response) => {
            res.status(200).json({ data: response });
        })
        .catch((error) => {
            res.status(400).json({ error: error});
        });
}