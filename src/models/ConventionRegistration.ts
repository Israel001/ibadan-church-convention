import db from "../configs/db";
import { DataTypes } from "sequelize";
import Church from "./Church";
import Delegate from "./Delegate";

const ConventionRegistration = db.define(
  "convention_registration",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    delegate_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    delegate_name: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    church_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    church_name: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    arrival_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("Minister", "Not Minister"),
      allowNull: false,
    },
    disability: {
      type: DataTypes.ENUM("Yes", "No"),
      allowNull: false,
    },
    sister_with_children: {
      type: DataTypes.ENUM("Yes", "No"),
      allowNull: false,
    },
    convention_year: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age_group: {
      type: DataTypes.STRING,
      allowNull: false,
      // unique: true,
    },
    parent_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

ConventionRegistration.belongsTo(Church, {
  foreignKey: "church_id",
  as: "church",
});

ConventionRegistration.belongsTo(Delegate, {
  foreignKey: "delegate_id",
  as: "delegate",
});

ConventionRegistration.belongsTo(Delegate, {
  foreignKey: "parent_id",
  as: "parent",
});

ConventionRegistration.sync({ alter: true });

export default ConventionRegistration;
