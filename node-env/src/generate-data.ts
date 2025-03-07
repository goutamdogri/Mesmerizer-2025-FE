// run this in node environment

import { writeFile } from "fs/promises";
import eventDetails from "./raw/eventDetails.json";
import eventRuleBook from "./raw/eventRulebook.json";
import { Event } from "./types";

export const events: Event[] = [];
let idCounter = 0;

eventDetails.schedule.forEach((daySchedule) => {
  const { day, halfs } = daySchedule;
  halfs.forEach((halfSegment) => {
    const timeLabel = halfSegment.time;
    if (halfSegment.events && Array.isArray(halfSegment.events)) {
      halfSegment.events.forEach((event) => {
        // Find rule details from the rulebook array using the event title
        const details = eventRuleBook.rulebook.find(
          (item: { title: string }) => item.title === event.title
        );
        events.push({
          id: String(++idCounter),
          title: event.title,
          date: day,
          time: timeLabel,
          image: event.image || null,
          location: event.location || null,
          tagline: event.tagline || null,
          code: event.code || null,
          entryFees: event.entryFees || null,
          coordinators: details?.coordinators || null,
          rules: details?.rules || null,
          teamSize: {
            min: details?.teamSize.min || null,
            max: details?.teamSize.max || null,
          },
        });
      });
    }
  });
});

// Function to convert JS object into a proper JS syntax string
const formatObjectToJS = (obj: any) => {
  return JSON.stringify(obj, null, 2)
    .replace(/"([^"]+)":/g, "$1:") // Remove quotes from keys
    .replace(/"([^"]+)"/g, "'$1'") // Convert values to single quotes
    .replace(/'null'/g, "null") // Fix null values
    .replace(/'true'/g, "true") // Fix boolean values
    .replace(/'false'/g, "false"); // Fix boolean values
};

// Generate a valid JS object string
const content = `import { Event } from "./types"; \n\n\nexport const events: Event[] = ${formatObjectToJS(events)};`;

writeFile("./src/data.ts", content, "utf8")
  .then(() =>
    console.log("eventdetails.ts file has been generated successfully.")
  )
  .catch((err) => console.error("Error writing file:", err));
