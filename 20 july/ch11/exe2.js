function vaccine(dosage) {
  if (dosage > 0) {
    inject(dosage);
  }
}
administer(patient, vaccine, time);

//anonymous function

administer(
  patient,
  function (dosage) {
    if (dosage > 0) {
      inject(dosage);
    }
  },
  time
);

// arrow function

administer(
  patient,
  (dosage) => {
    if (dosage > 0) {
      inject(dosage);
    }
  },
  time
);
