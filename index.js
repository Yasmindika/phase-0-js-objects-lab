let attendee = {
    attendeeId: "T001",
    name: "Alice Smith",
    event: "JavaScript Conference",
    ticketType: "VIP",
    ticketPrice: 150.00
}

function logAttendeeName(attendee){
  console.log(name);
}

function logTicketPrice(attendee){
  console.log(ticketPrice);
}

function updateTicketType(attendee, newTicketType){
  attendee.ticketType = newTicketType;
}
updateTicketType(attendee, "standard");
console.log(attendee.ticketType);

function updateTicketPrice(attendee, newTicketType){
  attendee.ticketPrice = newTicketType;
}
updateTicketPrice(attendee, 100.00);
console.log(attendee.ticketPrice);

function removeEventProperty(attendee){
  delete attendee.event;
}
removeEventProperty(attendee);
console.log(attendee.event);

function addCheckedInProperty(attendee){
  attendee.checkedIn = true;
}
addCheckedInProperty(attendee)
console.log(attendee.checkedIn)

//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};