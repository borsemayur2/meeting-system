import moment from "moment";

const startDate = moment().subtract(3, "days");
const endDate = moment().add(5, "days");
let start = startDate.clone();
export const dateSlots = [];
export const timeSlots = [];

// Generate date slots
while (start <= endDate) {
  dateSlots.push(start.format("DD MMMM"));
  start = start.add(1, "days");
}

// Generate time slots
for (let hour = 7; hour < 12; hour++) {
  timeSlots.push(moment({ hour }).format("h:mm A"));

  timeSlots.push(
    moment({
      hour,
      minute: 15,
    }).format("h:mm A")
  );

  timeSlots.push(
    moment({
      hour,
      minute: 30,
    }).format("h:mm A")
  );

  timeSlots.push(
    moment({
      hour,
      minute: 45,
    }).format("h:mm A")
  );
}
