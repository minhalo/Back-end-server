'use strict';
const faker = require('faker');
const users = [...Array(100)].map((user) => (
  {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    address: faker.internet.address(),
    password: faker.internet.password(8),
    phonenumber: faker.name.phonenumber(),
    description: faker.name.description(),
    ids: faker.name.ids(),
    image: faker.name.image(),
    age: faker.name.age(),
    gender: faker.name.gender(),
    status: faker.name.status(),
    createdAt: new Date(),
    updatedAt: new Date()
  }
))

// email: DataTypes.STRING,
//     password: DataTypes.STRING,
//     firstName: DataTypes.STRING,
//     lastName: DataTypes.STRING,
//     address: DataTypes.STRING,
//     phonenumber: DataTypes.INTEGER,
//     description: DataTypes.TEXT,
//     ids: DataTypes.STRING,
//     image: DataTypes.TEXT('long'),
//     age:DataTypes.INTEGER,
//     gender:DataTypes.STRING,
//     status: DataTypes.INTEGER
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', users, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});

  }
};
