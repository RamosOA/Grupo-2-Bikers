module.exports = (sequelize, dataTypes) => {

    let alias = 'Products'
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            // allowNull: false
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        price: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        image: {
            type: dataTypes.STRING,
            // allowNull: false
        },
        description: {
            type: dataTypes.STRING,
            allowNull: false
        }
    }
    let config = {
        tableName: "products",
        timestamps: false
    }

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function(models){
        Product.belongsTo(models.Category, {
            as: 'category',
            foreignKey: 'category_id'
        })
    }

    return Product;
}

