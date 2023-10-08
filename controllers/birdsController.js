const Birds= require("../models/Birds");

async function add_birds(req, res) {
  const {
    flock_name,
    date_acquired,
    bird_type,
    breed_type,
    acquisition_method,
    flock_size,
    flock_source,
    description
  } = req.body;

  if (
    !flock_name ||
    !date_acquired ||
    !bird_type ||
    !breed_type ||
    !acquisition_method ||
    !flock_size ||
    !flock_source ||
    !description
  ) {
    return res.status(422).json({ message: "Invalid fields" });
  }

  const birdRecordExists = await Birds.exists({ flock_name }).exec();

  if (birdRecordExists)
    return res
      .status(409)
      .send({ message: "Flock name already exists!" });

  try {

    await Birds.create({
        flock_name,
        date_acquired,
        bird_type,
        breed_type,
        acquisition_method,
        flock_size,
        flock_source,
        description
    });

    return res
      .status(201)
      .send({
        message:
          "Bird record added",
      });
  } catch (error) {
    return res.status(400).json({ message: "Could not add record" });
  }
}

async function birds(req, res) {
    const birds = await Birds.find().exec();

    return res.status(200).json(birds);
  }

module.exports = { add_birds, birds };
