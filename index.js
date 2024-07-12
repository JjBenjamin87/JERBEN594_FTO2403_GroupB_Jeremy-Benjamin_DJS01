/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const vel_kmph = 10000; // velocity (km/h)
const acc_ms2 = 3; // acceleration (m/s^2)
const time_seconds = 3600; // seconds (1 hour)
const d_km = 0; // distance (km)
const fuel_kg = 5000; // remaining fuel (kg)
const fbr_kgs = 0.5; // fuel burn rate (kg/s)

// Convert initial velocity from km/h to m/s
const vel_mps = vel_kmph * (1000 / 3600); // km/h to m/s

// Calculate new velocity in m/s
const vel2_mps = vel_mps + (acc_ms2 * time_seconds);

// Convert new velocity from m/s back to km/h
const vel2_kmph = vel2_mps * (3600 / 1000); // m/s to km/h

// Calculate new distance in km (unchanged from initial calculation)
const d2_km = d_km + (vel_kmph * (time_seconds / 3600));

// Calculate remaining fuel in kg
const rf_kg = fuel_kg - (fbr_kgs * time_seconds);

  // Output the corrected results
  console.log(`Corrected New Velocity: ${vel2_kmph.toFixed(2)} km/h`);
  console.log(`Corrected New Distance: ${d2_km.toFixed(2)} km`);
  console.log(`Corrected Remaining Fuel: ${rf_kg.toFixed(2)} kg`);
  
