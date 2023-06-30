import e, { Request, Response } from "express";
import { Church, ConventionRegistration, Delegate } from "../models";
import RegistrationCard from "../models/RegistrationCard";

export const addNewChurch = async (req: Request, res: Response) => {
  const { name, address, city, state, email, phone, church_id } = req.body;
  const churches = await Church.findAll({});
  try {
    if (church_id) {
      const church = await Church.findOne({ where: { id: church_id } });
      if (!church) {
        res.render("add_new_church", {
          message: "Church not found",
          user: req.user,
          churches: churches,
        });
        return;
      }
      await Church.update(req.body, { where: { id: church_id } });
      const message = encodeURIComponent("Church details updated successfully");
      res.redirect("/add-new-church?message=" + message);
      return;
    }

    const newChurch = await Church.create({
      name: name!.trim(),
      address: address!.trim(),
      city: city!.trim(),
      state: state!.trim(),
      email: email!.trim(),
      phone: phone!.trim(),
    });

    const message = encodeURIComponent("Church added successfully");
    res.redirect("/add-new-church?message=" + message);
  } catch (error) {
    console.log(error);
    res.render("add_new_church", {
      message: "Error adding new church",
      user: req.user,
      churches: churches,
    });
  }
};

export const addNewDelegate = async (req: Request, res: Response) => {
  const {
    surname,
    firstname,
    middlename,
    phone,
    address,
    city,
    gender,
    age_group,
  } = req.body;
  try {
    // console.log(req.body);
    if (req.body.delegate_id) {
      const del = await Delegate.findOne({
        where: { id: req.body.delegate_id },
        include: { model: Delegate, as: "children" },
      });
      if (!del) {
        const message = encodeURIComponent("Delegate not found");
        res.redirect("/delegate?errormessage=" + message);
        return;
      }
      await Delegate.update(req.body, { where: { id: req.body.delegate_id } });
      const message = encodeURIComponent(
        "Delegate details updated successfully"
      );
      res.redirect("/delegate?message=" + message);
      return;
    }

    const delCheck = await Delegate.findOne({
      where: { firstname, surname, middlename },
    });
    if (delCheck) {
      const message = encodeURIComponent(
        "Delegate already exists, please check the list of delegates or add middlename"
      );
      res.redirect("/delegate?errormessage=" + message);
      return;
    }
    await Delegate.create({
      surname: surname!.trim(),
      firstname: firstname!.trim(),
      middlename: middlename!.trim(),
      phone: phone!.trim(),
      address: address!.trim(),
      city: city!.trim(),
      gender: gender!.trim(),
      age_group: age_group!.trim(),
    });
    // console.log(req.body);
    // console.log(newDelegate?.toJSON());
    const message = encodeURIComponent("Delegate added successfully");
    res.redirect("/delegate?message=" + message);
  } catch (error) {
    console.log(error);
    res.render("delegate", {
      message: "Error adding new delegate",
      user: req.user,
    });
  }
};

export const conventionRegistration = async (req: Request, res: Response) => {
  const {
    church_id,
    delegate_id,
    arrival_date,
    status,
    disability,
    sister_with_children,
    age_group_reg,
    // children_no,
  } = req.body;
  try {
    const user = req.user;
    const delegates = await Delegate.findAll({
      include: { model: Delegate, as: "children" },
    });
    const churches = await Church.findAll({});
    if (!church_id) {
      return res.render("conventionRegistration", {
        message: "Church is not registered",
        delegates,
        churches,
        user,
      });
    }

    const church = await Church.findOne({ where: { id: church_id } });
    //@ts-ignore
    const church_name = church?.name;

    if (!delegate_id) {
      return res.render("conventionRegistration", {
        message: "Delegate is not registered",
        delegates,
        churches,
        user,
      });
    }

    if (!arrival_date) {
      return res.render("conventionRegistration", {
        message: "Arrival date is required",
        delegates,
        churches,
        user,
      });
    }

    if (!status) {
      return res.render("conventionRegistration", {
        message: "Status is required",
        delegates,
        churches,
        user,
      });
    }

    if (!disability) {
      return res.render("conventionRegistration", {
        message: "Disability is required",
        delegates,
        churches,
        user,
      });
    }

    if (!sister_with_children) {
      return res.render("conventionRegistration", {
        message: "Sister with children is required",
        delegates,
        churches,
        user,
      });
    }

    // console.log(req.body);

    if (sister_with_children == "Yes") {
      const children_no =
        typeof req.body.delegate_id_child == "object"
          ? req.body.delegate_id_child.length
          : 1;
      const delegate = await Delegate.findOne({
        where: { id: delegate_id },
        include: { model: Delegate, as: "children" },
      });
      //@ts-ignore
      let dlData = delegate.toJSON();
      const children = [];
      const toUpdateChildren = [];
      const convention_year = arrival_date.split("-")[2];
      for (let itr = 0; itr < children_no; itr++) {
        if (children_no == 1) {
          const el = {
            id: req.body.delegate_id_child,
            parent_id: delegate_id,
            surname: req.body.surname,
            firstname: req.body.firstname,
            middlename: req.body.middlename,
            address: dlData.address, //To get from parent
            city: dlData.city, //To get from parent
            gender: req.body.gender,
            age_group: req.body.age_group,
          };
          if (
            req.body.delegate_id_child &&
            req.body.delegate_id_child != "undefined"
          ) {
            toUpdateChildren.push(el);
          } else {
            children.push(el);
          }
        } else {
          const el = {
            id: req.body.delegate_id_child[itr],
            parent_id: delegate_id,
            surname: req.body.surname[itr],
            firstname: req.body.firstname[itr],
            middlename: req.body.middlename[itr],
            address: dlData.address, //To get from parent
            city: dlData.city, //To get from parent
            gender: req.body.gender[itr],
            age_group: req.body.age_group[itr],
          };
          if (
            req.body.delegate_id_child[itr] &&
            req.body.delegate_id_child[itr] != "undefined"
          ) {
            toUpdateChildren.push(el);
          } else {
            children.push(el);
          }
        }
      }
      await Delegate.bulkCreate(children);
      for (let j = 0; j < toUpdateChildren.length; j++) {
        await Delegate.update(toUpdateChildren[j], {
          where: { id: toUpdateChildren[j].id },
        });
      }

      const delegateChildren = await Delegate.findAll({
        where: { parent_id: delegate_id },
      });

      if (delegateChildren.length > 0) {
        const childrenTobeReg: any = [];
        const mergedChildren: any = [...children, ...toUpdateChildren];
        // const noMoreChildren = [];
        const errors = [];
        for (let i = 0; i < delegateChildren.length; i++) {
          const el = {
            church_id: church_id,
            //@ts-ignore
            delegate_id: delegateChildren[i].id,
            church_name,
            //@ts-ignore
            delegate_name: `${delegateChildren[i].surname} ${delegateChildren[i].firstname} ${delegateChildren[i].middlename}`,
            arrival_date,
            status,
            disability,
            sister_with_children,
            convention_year,
            //@ts-ignore
            age_group: delegateChildren[i].age_group,
            parent_id: delegate_id,
          };
          const checkIfRegistered = await ConventionRegistration.findOne({
            //@ts-ignore
            where: { delegate_id: delegateChildren[i].id, convention_year },
          });
          const mergedChild = mergedChildren.find(
            //@ts-ignore
            (dt) =>
              `${dt.surname} ${dt.firstname} ${dt.middlename}` ==
              el.delegate_name
          );
          if (!checkIfRegistered && mergedChild) {
            childrenTobeReg.push(el);
          } else {
            const noMoreChild = {
              ...delegateChildren[i].toJSON(),
              parent_id: null,
            };
            await Delegate.update(noMoreChild, {
              //@ts-ignore
              where: { id: delegateChildren[i].id },
            });
          }
          if (checkIfRegistered) {
            errors.push(
              //@ts-ignore
              `${el.delegate_name} has already been registered for convention ${convention_year}`
            );
          }
        }
        console.log(childrenTobeReg);
        if (childrenTobeReg.length > 0) {
          await ConventionRegistration.bulkCreate(childrenTobeReg);
        }
      }
      // console.log(children, toUpdateChildren);
    }

    if (typeof arrival_date === "object") {
      const errors = [];
      const data = [];
      for (let i = 0; i < arrival_date.length; i++) {
        const convention_year = arrival_date[i].split("-")[2];
        const cid = church_id;
        const did = delegate_id[i];

        if (!cid || !did) {
          return res.render("conventionRegistration", {
            message: "Church or delegate is not registered",
            delegates,
            churches,
            user,
          });
        }
        const findDelegate = await Delegate.findOne({ where: { id: did } });
        //@ts-ignore
        const delegate_name = `${findDelegate?.surname} ${findDelegate?.firstname} ${findDelegate?.middlename}`;
        const dt = {
          church_id: cid,
          church_name,
          delegate_name,
          delegate_id: did,
          arrival_date: arrival_date[i],
          status: status[i],
          disability: disability[i],
          sister_with_children: sister_with_children[i],
          age_group: age_group_reg[i],
          convention_year: convention_year,
        };
        const checkIfRegistered = await ConventionRegistration.findOne({
          where: { delegate_id: did, convention_year },
        });
        if (!checkIfRegistered && findDelegate) {
          await findDelegate?.update({ age_group: age_group_reg[i] });
          data.push(dt);
        }
        if (checkIfRegistered) {
          errors.push(
            `${delegate_name} has already been registered for convention ${convention_year}`
          );
        }
        // await ConventionRegistration.create(dt);
      }
      await ConventionRegistration.bulkCreate(data);
      const message = encodeURIComponent("Registration successful");
      const errormessage = encodeURIComponent(errors.join(","));
      if (errors.length > 0) {
        return res.redirect(
          "/convention-registration?message=" +
            message +
            "&errormessage=" +
            errormessage
        );
      }
      res.redirect("/convention-registration?message=" + message);
      return;
    }
    const convention_year = arrival_date.split("-")[2];
    const cid = church_id;
    const did = delegate_id;

    if (!cid || !did) {
      return res.render("conventionRegistration", {
        message: "Church or delegate is not registered",
        delegates,
        churches,
        user,
      });
    }
    const findDelegate = await Delegate.findOne({ where: { id: did } });
    //@ts-ignore
    const delegate_name = `${findDelegate?.surname} ${findDelegate?.firstname} ${findDelegate?.middlename}`;

    if (!findDelegate)
      return res.render("conventionRegistration", {
        message: "Delegate not found",
        delegates,
        churches,
        user,
      });

    await findDelegate?.update({ age_group: age_group_reg });
    const checkIfRegistered = await ConventionRegistration.findOne({
      where: { delegate_id: did, convention_year },
    });

    if (checkIfRegistered) {
      return res.render("conventionRegistration", {
        message: "Delegate already registered for this year",
        delegates,
        churches,
        user,
      });
    }

    await ConventionRegistration.create({
      church_id: cid,
      delegate_id: did,
      church_name,
      delegate_name,
      arrival_date,
      status,
      disability,
      sister_with_children,
      convention_year,
      age_group: age_group_reg,
    });

    // console.log(newConventionRegistration?.toJSON());
    const message = encodeURIComponent("Registration successful");
    res.redirect("/convention-registration?message=" + message);
  } catch (error) {
    console.log(error);
    const delegates = await Delegate.findAll({
      include: {
        model: Delegate,
        as: "children",
      },
    });
    const churches = await Church.findAll({});
    res.render("conventionRegistration", {
      message: "Error adding new convention registration",
      delegates,
      churches,
      user: req.user,
    });
  }
};

export const regStatus = async (req: Request, res: Response) => {
  const { delegate_id, church_id } = req.body;
  const user = req.user;
  try {
    const delegates = await Delegate.findAll({
      include: {
        model: Delegate,
        as: "children",
      },
    });
    // console.log(delegates)
    const churches = await Church.findAll({});
    if (!delegate_id && !church_id) {
      return res.render("reg_status", {
        message: "Select a delegate or church to view registration status",
        delegates,
        churches,
        user,
      });
    }

    const cid = church_id;
    const did = delegate_id;
    if (church_id && !cid) {
      return res.render("reg_status", {
        message: "Church selected is not registered",
        delegates,
        churches,
        user,
      });
    }
    if (delegate_id && !did) {
      return res.render("reg_status", {
        message: "Delegate selected is not registered",
        delegates,
        churches,
        user,
      });
    }
    if (did) {
      const conventionRegistrations = await ConventionRegistration.findAll({
        where: {
          delegate_id: did,
        },
        include: [
          {
            model: Delegate,
            as: "delegate",
            include: [
              //@ts-ignore
              {
                model: Delegate,
                as: "children",
                include: {
                  //@ts-ignore
                  model: RegistrationCard,
                  as: "registration_cards",
                },
              },
              { model: RegistrationCard, as: "registration_cards" },
            ],
          },
          { model: Church, as: "church" },
        ],
      });
      const data = conventionRegistrations.map((item) => {
        const dt = item.toJSON();
        return dt;
      });
      return res.render("reg_status", {
        conventionRegistrations: data,
        conventionRegistrationsDelegate: true,
        delegates,
        churches,
        user,
      });
    }

    if (cid) {
      const conventionRegistrations = await ConventionRegistration.findAll({
        where: { church_id: cid },
        include: [
          {
            model: Delegate,
            as: "delegate",
            //@ts-ignore
            include: [
              //@ts-ignore
              {
                model: Delegate,
                as: "children",
                include: {
                  //@ts-ignore
                  model: RegistrationCard,
                  as: "registration_cards",
                },
              },
              { model: RegistrationCard, as: "registration_cards" },
            ],
          },
          { model: Church, as: "church" },
        ],
      });
      const data = conventionRegistrations.map((item) => {
        const dt = item.toJSON();
        return dt;
      });
      return res.render("reg_status", {
        conventionRegistrations: data,
        conventionRegistrationsChurch: true,
        delegates,
        churches,
        user,
      });
    }
    res.render("reg_status", { delegates, churches });
  } catch (error) {
    console.log(error);
    const delegates = await Delegate.findAll({
      include: { model: Delegate, as: "children" },
    });
    const churches = await Church.findAll({});
    res.render("reg_status", {
      message: "Error fetching registration status",
      delegates,
      churches,
      user,
    });
  }
};
