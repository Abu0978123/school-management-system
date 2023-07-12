module.exports = (sequelize, DataTypes) => {

    const Datesheet = sequelize.define("Datesheet", {
      pdate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      class1: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      class2: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      class3: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      class4: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      class5: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      class6: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      class7: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      class8: {
        type: DataTypes.STRING,
        allowNull: false,
      }
      
    },
    {
      timestamps:false
    });
  
    
    return Datesheet;
  };