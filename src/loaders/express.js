const express = require('express');
const api = require('../apis/routes');
const errorHandler = require('./error');
const { sequelize } = require('../models');

module.exports = (app) => {
  /**
   * Database sync
   */
  sequelize.sync({ force: false });  //true 상태면 X, 그대로 실행시키면 테이블 리셋됨
  /**
   * Health Check endpoints
   * @TODO Explain why they are here
   */
  app.get('/health', (req, res) => {
    res.status(200).end();
  });
  app.head('/health', (req, res) => {
    res.status(200).end();
  });
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use('/', api);
  app.use(errorHandler);
};
