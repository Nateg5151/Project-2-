const {Model, DataTypes} = require('sequelize');

const sequelize = require('../config/config');

class Search extends Model {}

Search.init({

    id: {

        type: DataTypes.INTEGER,

        allowNull: false,

        primaryKey: true,

        autoIncrement: true,

    },

    search_text: {

        type: DataTypes.TEXT,

    },

    search_id: {

        type: DataTypes.INTEGER,

        allowNull: false,

        references: {model: 'search', key: 'id', },

    },
},

{

    sequelize,

    freezeTableName: true,

    underscored: true,

    modelName:'search',

}

);

module.exports = Search;