
module.exports = (sequelize, dataTypes) => {

    let alias = 'Category'
    let cols = {
        idcateproducts: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        }
    }
    let config = {
        tableName: "category_products",
        timestamps: false
    }

    const Category = sequelize.define(alias, cols, config);

    Category.associate = function(models){
        Category.hasMany(models.Products, {
            as: 'products',
            foreignKey: 'category_id'
        })
    }

    return Category;
}

