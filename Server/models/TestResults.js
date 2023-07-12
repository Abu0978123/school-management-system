module.exports = (sequelize, DataTypes) => {

    const TestResults = sequelize.define("TestResults", {
      marks: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    },
    {
      timestamps:false
    });
    TestResults.associate = (models) => {
      TestResults.belongsTo(models.Applicants)
  } 
    return TestResults;
  };