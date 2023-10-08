const Eggs = require("../models/Eggs");

async function add_eggs(req, res) {
  const { flock_name, date_picked, good_eggs, bad_eggs, additional_notes } =
    req.body;

  if (
    !flock_name ||
    !date_picked ||
    !good_eggs ||
    !bad_eggs ||
    !additional_notes
  ) {
    return res.status(422).json({ message: "Invalid fields" });
  }

  const eggsRecordExists = await Eggs.exists(req.body).exec();

  if (eggsRecordExists)
    return res.status(409).send({ message: "Record already exists!" });

  try {
    await Eggs.create({
      flock_name,
      date_picked,
      good_eggs,
      bad_eggs,
      additional_notes,
    });

    return res.status(201).send({
      message: "Egg record updated!",
    });
  } catch (error) {
    return res.status(400).json({ message: "Could not add record" });
  }
}

async function eggs(req, res) {
  const eggs = await Eggs.find().exec();

  return res.status(200).json(eggs);
}

module.exports = { add_eggs, eggs };
