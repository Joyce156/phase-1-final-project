## introduction
-This is a simple travel planner app where one can choose their dream countries plan the budget and choose a travel style.

## features

-- **Fetch API**: Loads country data from a local `db.json` file (using `json-server`).
- **Country List**: Displays all available countries. Clicking a country shows its details (name, capital, region, tip, image).
- **Form**: Users can type a destination, enter their budget, and select a travel style (Adventure, Chill, Luxury).
- **Events**:
  1. **Input Event** → Live preview of typed destination.  
  2. **Change Event** → Background color of the details box changes depending on travel style.  
  3. **Submit Event** → Uses `.find()` to search for a country, shows details if found, or an error if not.
- **PATCH Request**: Updates the selected country.
-The background color changes according to the travel style choosen.
-if the destination is not found a message returns destination not found.