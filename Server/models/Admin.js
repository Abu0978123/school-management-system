module.exports = (sequelize, DataTypes) => {

    const Admin = sequelize.define("Admin", {
      
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cpassword: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      
    },
    {
      timestamps:false
    });

  
    
    return Admin;
  };