module.exports = (sequelize, DataTypes) => {

    const Results = sequelize.define("Results", {
      year:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      computer: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nazira: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      islamiat: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      urdu: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      math: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      pakstudy: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      science: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      english: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      
    },
    {
      timestamps:false
    });

    Results.associate = (models) => {
      Results.belongsTo(models.Students)
  }
    
  
    return Results;
  };