import express from 'express';
import { listBattlePlaces, countBattle, searchBattle } from '../controllers/battle.controller';

const router = express.Router();

router.get('/list', listBattlePlaces);
router.get('/count', countBattle);
router.get('/search', searchBattle);

module.exports = router;
