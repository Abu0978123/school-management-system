module.exports = (sequelize, DataTypes) => {

  const Students = sequelize.define("Students", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true
    },
    studentname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fathername: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    province: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    year: {
      type: DataTypes.STRING,
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

  Students.associate = (models) => {
    Students.hasMany(models.Results, {
    onDelete: "cascade",
  })
}  

  return Students;
};