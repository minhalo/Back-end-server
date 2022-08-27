'use strict';

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
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      password: '123456',
      firstName: 'minh',
      lastName: 'duong',
      address: 'hanoi',
      gender: 'female',
      typeRole: 'ROLE',
      phonenumber: 123,
      image: 'R1',
      description: 'ok',
      ids: 'ok',
      age: 1,
      status: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
