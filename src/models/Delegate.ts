import db from "../configs/db";
import { DataTypes } from "sequelize";

const Delegate = db.define(
  "delegates",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
      // unique: true,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      // unique: true,
    },
    middlename: {
      type: DataTypes.STRING,
      // allowNull: false,
      // unique: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    parent_id: {
      type: DataTypes.INTEGER,
    },
    city: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
      // unique: true,
    },
    age_group: {
      type: DataTypes.STRING,
      allowNull: false,
      // unique: true,
    },
  },
  {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

Delegate.hasMany(Delegate, {
  foreignKey: "parent_id",
  as: "children",
  // onDelete: "CASCADE",
  // onUpdate: "CASCADE",
});

export default Delegate;
