const { create, getById, update } = require("../services/hotelService");
const { parseError } = require("../util/parser");

const hotelController = require("express").Router();

hotelController.get("/:id/details", async (req, res) => {
  const hotel = await getById(req.params.id);

  res.render("details", {
    title: "Hotel Details",
    hotel,
  });
});

hotelController.get("/create", (req, res) => {
  res.render("create", {
    title: "Create Hotel",
  });
});

hotelController.post("/create", async (req, res) => {
  const hotel = {
    name: req.body.name,
    city: req.body.city,
    imageUrl: req.body.imageUrl,
    rooms: Number(req.body.rooms),
    owner: req.user._id,
  };

  try {
    if (Object.values(hotel).some((value) => !value)) {
      throw new Error("All fields required");
    }
    await create(hotel);
    res.redirect("/");
  } catch (error) {
    res.render("create", {
      title: "Create Hotel",
      body: hotel,
      errors: parseError(error),
    });
  }
});

hotelController.get("/:id/edit", async (req, res) => {
  const hotel = await getById(req.params.id);

  if (hotel.owner != req.user._id) {
    return res.redirect("/auth/login");
  }

  res.render("edit", {
    title: "Edit Hotel",
    hotel,
  });
});

hotelController.post("/:id/edit", async (req, res) => {
  const hotel = await getById(req.params.id);
  if (hotel.owner != req.user._id) {
    return res.redirect("/auth/login");
  }

  const editedHotel = {
    name: req.body.name,
    city: req.body.city,
    imageUrl: req.body.imageUrl,
    rooms: Number(req.body.rooms),
  };

  try {
    if (Object.values(editedHotel).some((value) => !value)) {
      throw new Error("All fields required");
    }

    await update(req.params.id, editedHotel);
    res.redirect(`/hotel/${req.params.id}/details`);
  } catch (error) {
    res.render("edit", {
      title: "Edit Hotel",
      hotel: Object.assign(editedHotel, { _id: req.params.id }),
      errors: parseError(error),
    });
  }
});

module.exports = hotelController;
