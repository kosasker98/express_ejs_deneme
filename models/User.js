const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("User", {

        firstName: {

            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                noEmpty: true
            }
        },
        age: {

            type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
                noEmpty: true
            }
        }
    });

return User;
};