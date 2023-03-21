# Dirt Surfer

## Trail Data

Trail data is primarily pulled from local maps and information, first-hand knowledge, and [Trailforks](https://www.trailforks.com/). Each of the JSON files can be called with the fetch api to the src/trails  directory (this may be moved to an external api in the future purely for learning purposes), eg "fetch("./src/trails/rossland-trails.json")".

### JSON Key and Value Sets

"Trail name" returns a string value of the grammatically correct name of the trail.

"Description" at this point is an empty string. This will either be hardcoded into the JSON over time, or programmatically generated into the app with the OpenAI API. Placeholder key for now.

"Difficulty" returns one of the four accepted mountainbiking difficulty ratings in North America:
- "Green" is easiest or beginners
- "Blue" is intermediate
- "Black" is advanced
- "Double Black" is very advanced

"Composition" returns an array and can return any of the following values:
- "Dirt"
- "Rocks"
- "Roots"
- "Wooden features"
- "Rock rolls"
- "Drops"

"Weather Reactivity" and "Traffic" both return one of three values:
- "Low"
- "Moderate"
- "High"

"Elevation" returns an integer value, denoting meters above sealevel.

"Aspect" refers to the side of the mountain that the trail primarly lies upon, and returns one of the four points on the compass:
- "North"
- "East"
- "South"
- "West"

"Trail type" refers to the style of mountain bike riding that the trail primarily focuses on and returns one of the following values:
- "XC" is cross-country
- "Flow" is more speed focused, often including smoother trail and jumps
- "Tech" is slower paced, often steeper, and involves technical features 

An example trail object is as follows:

    {
        "Trail name": "Drake's",
        "Description": "",
        "Difficulty": "Blue",
        "Composition": [
            "Dirt",
            "Rocks",
            "Roots"
        ],
        "Weather Reactivity": "Low",
        "Traffic": "Moderate",
        "Elevation": "950",
        "Aspect": "North",
        "Trail type": "Climb"
    }