
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: '1245225', Make: 'Honda', Model: 'Civic', Mileage: '85000', Transmission: 'Manuel'},
        {VIN: '5484548', Make: 'Toyota', Model: 'Corolla', Mileage: '15000'},
        {VIN: '1255586', Make: 'Audi', Model: 'A4', Mileage: '2500', Transmission: 'Auto', Title: 'Clean'}
      ]);
    });
};
