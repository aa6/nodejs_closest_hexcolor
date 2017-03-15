# nodejs_closest_hexcolor [![Travis CI badge](https://travis-ci.org/aa6/nodejs_closest_hexcolor.svg?branch=master) Travis CI](https://travis-ci.org/aa6/nodejs_closest_hexcolor)
Returns closest hex color for a specified color and list of color samples

## Installation and Usage

```bash
npm install closest-hexcolor
```

```javascript
var closest_hexcolor = require("closest-hexcolor")
var color_samples = 
{
    "#FFC0CB": "Pink",
    "#FFB6C1": "LightPink",
    "#FF69B4": "HotPink",
    "#FF1493": "DeepPink",
    "#DB7093": "PaleVioletRed",
    "#C71585": "MediumVioletRed",
    "#FFA07A": "LightSalmon",
    "#FA8072": "Salmon",
    "#E9967A": "DarkSalmon",
    "#F08080": "LightCoral",
    "#CD5C5C": "IndianRed",
    "#DC143C": "Crimson",
    "#B22222": "FireBrick",
    "#8B0000": "DarkRed",
    "#FF0000": "Red",
    "#FF4500": "OrangeRed",
    "#FF6347": "Tomato",
    "#FF7F50": "Coral",
    "#FF8C00": "DarkOrange",
    "#FFA500": "Orange",
    "#FFFF00": "Yellow",
    "#FFFFE0": "LightYellow",
    "#FFFACD": "LemonChiffon",
    "#FAFAD2": "LightGoldenrodYellow",
    "#FFEFD5": "PapayaWhip",
    "#FFE4B5": "Moccasin",
    "#FFDAB9": "PeachPuff",
    "#EEE8AA": "PaleGoldenrod",
    "#F0E68C": "Khaki",
    "#BDB76B": "DarkKhaki",
    "#FFD700": "Gold",
    "#FFF8DC": "Cornsilk",
    "#FFEBCD": "BlanchedAlmond",
    "#FFE4C4": "Bisque",
    "#FFDEAD": "NavajoWhite",
    "#F5DEB3": "Wheat",
    "#DEB887": "BurlyWood",
    "#D2B48C": "Tan",
    "#BC8F8F": "RosyBrown",
    "#F4A460": "SandyBrown",
    "#DAA520": "Goldenrod",
    "#B8860B": "DarkGoldenrod",
    "#CD853F": "Peru",
    "#D2691E": "Chocolate",
    "#8B4513": "SaddleBrown",
    "#A0522D": "Sienna",
    "#A52A2A": "Brown",
    "#800000": "Maroon",
    "#556B2F": "DarkOliveGreen",
    "#808000": "Olive",
    "#6B8E23": "OliveDrab",
    "#9ACD32": "YellowGreen",
    "#32CD32": "LimeGreen",
    "#00FF00": "Lime",
    "#7CFC00": "LawnGreen",
    "#7FFF00": "Chartreuse",
    "#ADFF2F": "GreenYellow",
    "#00FF7F": "SpringGreen",
    "#00FA9A": "MediumSpringGreen",
    "#90EE90": "LightGreen",
    "#98FB98": "PaleGreen",
    "#8FBC8F": "DarkSeaGreen",
    "#66CDAA": "MediumAquamarine",
    "#3CB371": "MediumSeaGreen",
    "#2E8B57": "SeaGreen",
    "#228B22": "ForestGreen",
    "#008000": "Green",
    "#006400": "DarkGreen",
    "#00FFFF": "Aqua",
    "#00FFFF": "Cyan",
    "#E0FFFF": "LightCyan",
    "#AFEEEE": "PaleTurquoise",
    "#7FFFD4": "Aquamarine",
    "#40E0D0": "Turquoise",
    "#48D1CC": "MediumTurquoise",
    "#00CED1": "DarkTurquoise",
    "#20B2AA": "LightSeaGreen",
    "#5F9EA0": "CadetBlue",
    "#008B8B": "DarkCyan",
    "#008080": "Teal",
    "#B0C4DE": "LightSteelBlue",
    "#B0E0E6": "PowderBlue",
    "#ADD8E6": "LightBlue",
    "#87CEEB": "SkyBlue",
    "#87CEFA": "LightSkyBlue",
    "#00BFFF": "DeepSkyBlue",
    "#1E90FF": "DodgerBlue",
    "#6495ED": "CornflowerBlue",
    "#4682B4": "SteelBlue",
    "#4169E1": "RoyalBlue",
    "#0000FF": "Blue",
    "#0000CD": "MediumBlue",
    "#00008B": "DarkBlue",
    "#000080": "Navy",
    "#191970": "MidnightBlue",
    "#E6E6FA": "Lavender",
    "#D8BFD8": "Thistle",
    "#DDA0DD": "Plum",
    "#EE82EE": "Violet",
    "#DA70D6": "Orchid",
    "#FF00FF": "Fuchsia",
    "#FF00FF": "Magenta",
    "#BA55D3": "MediumOrchid",
    "#9370DB": "MediumPurple",
    "#8A2BE2": "BlueViolet",
    "#9400D3": "DarkViolet",
    "#9932CC": "DarkOrchid",
    "#8B008B": "DarkMagenta",
    "#800080": "Purple",
    "#4B0082": "Indigo",
    "#483D8B": "DarkSlateBlue",
    "#6A5ACD": "SlateBlue",
    "#7B68EE": "MediumSlateBlue",
    "#FFFFFF": "White",
    "#FFFAFA": "Snow",
    "#F0FFF0": "Honeydew",
    "#F5FFFA": "MintCream",
    "#F0FFFF": "Azure",
    "#F0F8FF": "AliceBlue",
    "#F8F8FF": "GhostWhite",
    "#F5F5F5": "WhiteSmoke",
    "#FFF5EE": "Seashell",
    "#F5F5DC": "Beige",
    "#FDF5E6": "OldLace",
    "#FFFAF0": "FloralWhite",
    "#FFFFF0": "Ivory",
    "#FAEBD7": "AntiqueWhite",
    "#FAF0E6": "Linen",
    "#FFF0F5": "LavenderBlush",
    "#FFE4E1": "MistyRose",
    "#DCDCDC": "Gainsboro",
    "#D3D3D3": "LightGray",
    "#C0C0C0": "Silver",
    "#A9A9A9": "DarkGray",
    "#808080": "Gray",
    "#696969": "DimGray",
    "#778899": "LightSlateGray",
    "#708090": "SlateGray",
    "#2F4F4F": "DarkSlateGray",
    "#000000": "Black",
}

var closest_color = closest_hexcolor("#60f99f", Object.keys(color_samples))
// #66CDAA

var closest_color = color_samples[closest_hexcolor("#60f99f", Object.keys(color_samples))]
// "MediumAquamarine"

var closest_colors = closest_hexcolor("#60f99f", Object.keys(color_samples), 8)
// [ 
//     [ '#66CDAA', 61 ],
//     [ '#98FB98', 65 ],
//     [ '#90EE90', 74 ],
//     [ '#7FFFD4', 90 ],
//     [ '#5F9EA0', 93 ],
//     [ '#00FA9A', 102 ],
//     [ '#40E0D0', 106 ],
//     [ '#48D1CC', 109 ],
// ]

var closest_colors = closest_hexcolor("#60f99f", Object.keys(color_samples), 8).map(function(item)
{
    return color_samples[item[0]]
})
// [
//     "MediumAquamarine",
//     "PaleGreen",
//     "LightGreen",
//     "Aquamarine",
//     "CadetBlue",
//     "MediumSpringGreen",
//     "Turquoise",
//     "MediumTurquoise",
// ]
```