const Hotel = require("../models/Hotel");

async function getAll() {
  return Hotel.find({}).lean();
}

async function getById(id) {
  return Hotel.findById(id).lean();
}

async function getByUserBooking(userId) {
  return await Hotel.find({ bookings: userId }).lean();
}

async function create(hotel) {
  return await Hotel.create(hotel);
}

async function update(id, hotel) {
  const existingHotel = await Hotel.findById(id);
  existingHotel.name = hotel.name;
  existingHotel.city = hotel.city;
  existingHotel.imageUrl = hotel.imageUrl;
  existingHotel.rooms = hotel.rooms;

  await existingHotel.save();
}

async function deleteById(id) {
  await Hotel.findOneAndRemove(id);
}

async function bookRoom(hotelId, userId) {
  const existingHotel = await Hotel.findById(hotelId);

  existingHotel.bookings.push(userId);
  await existingHotel.save();
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById,
  bookRoom,
  getByUserBooking,
};
