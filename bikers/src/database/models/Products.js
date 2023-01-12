module.exports = (sequelize, dataTypes) => {

    let alias = 'Products'
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        price: {
            type: dataTypes.INTEGER
        },
        image: {
            type: dataTypes.INTEGER
        },
        category_id: {
            type: dataTypes.INTEGER
        },
        description: {
            type: dataTypes.STRING
        }
    }
    let config = {
        tableName: "products",
        timestamps: false
    }

    const Product = sequelize.define(alias, cols, config);

    return Product;
}

