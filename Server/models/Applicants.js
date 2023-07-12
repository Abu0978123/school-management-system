module.exports = (sequelize, DataTypes) => {

    const Applicants = sequelize.define("Applicants", {
      cnic: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey:true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fathername: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nationality: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dob: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      caddress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      paddress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phoneno: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      timestamps:false
    });
  
    Applicants.associate = (models) => {
        Applicants.hasOne(models.TestResults, {
        onDelete: "cascade",
      })
    }  
    
    return Applicants;
  };