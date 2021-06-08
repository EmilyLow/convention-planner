
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert(
        [
          {
            id: 1,
            schedule_id: 1,
            event_name: "Lovecraft Bus Tour 1",
            speaker: "",
            summary: "Tickets $15",
            location: "Departs from the Providence Visitor Information Center, 1 Sabin St.",
            start_time: "2019-08-22T18:30:00.000Z",
            end_time: "2019-08-22T20:00:00.000Z",
            start_col: 2,
            span: 4,
            color: "#bae1ff"
          },
          {
            id: 2,
            schedule_id: 1,
            event_name: "Lovecraft Bus Tour 2",
            speaker: "",
            summary: "Tickets $15",
            location: "Departs from the Providence Visitor Information Center, 1 Sabin St.",
            start_time: "2019-08-22T20:00:00.000Z",
            end_time: "2019-08-22T21:30:00.000Z",
            start_col: 6,
            span: 4,
            color: "#bae1ff"
          },
          {
            id: 3,
            schedule_id: 1,
            event_name: "Lovecraft Walking Tour",
            speaker: "",
            summary: "Tickets $10",
            location: "Departs from the Graduate Hotel",
            start_time: "2019-08-22T18:30:00.000Z",
            end_time: "2019-08-22T21:30:00.000Z",
            start_col: 10,
            span: 4,
            color: "#bae1ff"
          },
          {
            id: 4,
            schedule_id: 1,
            event_name: "Welcoming Ceremony",
            speaker: "",
            summary: "Our convention Poet Laureate Sonya Taaffe, Guests of Honor, and local historians and luminaries, will welcome attendees to this historic and symbolic Providence landmark. Barnaby Evans, executive director of WaterFire, will emcee, and renowned organist Stephen Martorella will provide a musical accompaniment to the ceremony.",
            location: "First Baptist Church, 75 N. Main St. 02903",
            start_time: "2019-08-22T22:00:00.000Z",
            end_time: "2019-08-22T23:00:00.000Z",
            start_col: 2,
            span: 12,
            color: "#ffb3ba"
          },
          {
            id: 5,
            schedule_id: 1,
            event_name: "Party Under the Stars",
            speaker: "",
            summary: "OPEN TO THE PUBLIC (free). Kick off the convention with our big outdoor bash! NEON Retrofest partners with us to bring electronic musical acts Triangle Forest (Providence) and Straplocked (Connecticut) to the party. Plus we've got local dancing monstrosities Big Nazo, a Frank Difficult Presents music/video mash-up, screenings, a beer garden with Narragansett beers (including a reprise of their first Lovecraft beer), libations by New Harvest Coffee & Spirits, and a carnival fire pit roast by Julians and Dreadnaught Provisions to feed your cultist belly.",
            location: "Facade Parking Lot, 35 Weybosset St. 02903",
            start_time: "2019-08-23T00:00:00.000Z",
            end_time: "2019-08-23T04:00:00.000Z",
            start_col: 2,
            span: 6,
            color: "#ffdfba"
          },
          {
            id: 6,
            schedule_id: 1,
            event_name: "Black Lodge Party (Private Event)",
            speaker: "",
            summary: "A private club for Golden Key and Silver Key members only (passes required). An intimate getaway spot for Key members. But remember - there are only three rules about Black Lodge...",
            location: "Secret, undisclosed location",
            start_time: "2019-08-23T01:00:00.000Z",
            end_time: "2019-08-23T04:00:00.000Z",
            start_col: 8,
            span: 6,
            color: "#baffc9"
          },
          {
            id: 7,
            schedule_id: 1,
            event_name: "Grand Emporium of Weird",
            speaker: "",
            summary: "Vendor Hall. Booksellers, publishers, artists, sculptors, jewelers, and general purveyors of top-tier weird.",
            location: "Omni, Narragansett Ballroom",
            start_time: "2019-08-23T16:00:00.000Z",
            end_time: "2019-08-23T23:00:00.000Z",
            start_col: 14,
            span: 6,
            color: "#ffb3ba"
          },
          {
            id: 8,
            schedule_id: 1,
            event_name: "Food Truck Court",
            speaker: "",
            summary: "",
            location: "Across the street from the Graduate Hotel.",
            start_time: "2019-08-23T17:00:00.000Z",
            end_time: "2019-08-23T18:30:00.000Z",
            start_col: 20,
            span: 6,
            color: "#baffc9"
          },
          {
            id: 9,
            schedule_id: 1,
            event_name: "Lovecraft Bus Tour 3",
            speaker: "",
            summary: "Tickets $15",
            location: "Departs from the Providence Visitor Information Center, 1 Sabin St.",
            start_time: "2019-08-23T18:30:00.000Z",
            end_time: "2019-08-23T20:00:00.000Z",
            start_col: 20,
            span: 6,
            color: "#bae1ff"
          },
          {
            id: 10,
            schedule_id: 1,
            event_name: "Private Guest Reception",
            speaker: "",
            summary: "A private reception for Guests of honor, guests, and Golden Key holders. Hors d'oeuvres provided, cash bar available. The reception includes the presentation of the Robert Block Award.",
            location: "L'Apogee, Graduate 17th Floor",
            start_time: "2019-08-24T00:00:00.000Z",
            end_time: "2019-08-24T02:00:00.000Z",
            start_col: 14,
            span: 6,
            color: "#ffdfba"
          },
          {
            id: 11,
            schedule_id: 1,
            event_name: "Stranger Things Trivia Night!",
            speaker: "",
            summary: "OPEN TO THE GENERAL PUBLIC (21+) Something special for this year - an evening of trivia for the sensational Weird show, Stranger Things! Led by our good friends at Bad Taste, and hosted by Black Sheep pub, next to AS220. Trivia will cover each season, one season at a time, over three separate rounds!",
            location: "Black Sheep, 297 Westminster St. 02903",
            start_time: "2019-08-24T00:00:00.000Z",
            end_time: "2019-08-24T03:00:00.000Z",
            start_col: 20,
            span: 6,
            color: "#bae1ff"
          },
          {
            id: 12,
            schedule_id: 1,
            event_name: "The Eldritch Ball: Dreaming in Carcosa",
            speaker: "",
            summary: "TICKETED EVENT: Tickets $28 at the door for pass-holders/$35 for public. Our Eldritch Ball is a fancy-dress, masquerade, cosplay, semi-formal affair of Hyadean scale. Ticket cost includes two drink tickets (21+ ID required for alcohol). Free admission for Golden Key and Guests of Honor.",
            location: "Biltmore Ballroom, Graduate 17th Floor",
            start_time: "2019-08-24T02:00:00.000Z",
            end_time: "2019-08-24T04:00:00.000Z",
            start_col: 14,
            span: 6,
            color: "#ffdfba"
          }
        ]
      
      

      );
    });
};
