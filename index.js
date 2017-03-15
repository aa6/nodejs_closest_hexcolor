module.exports = function(orig_color, color_samples, multiple_results_limit)
{
    // Prepare colors for comparing.
    var rgb_colors = [orig_color].concat(color_samples).map(function(color)
    {
        color = color.toString().toLowerCase().replace("#","")
        if(!color.match(/^[0-9a-z]+$/)) 
            { throw Error("Invalid color " + color) }
        if(color.length == 3)
            { color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2] }
        if(color.length != 6)
            { throw Error("Invalid color " + color) }
        return color.match(/.{1,2}/g).map(function(item){return parseInt(item,16)})
    })
    // Find closest color.
    orig_color = rgb_colors.shift()
    rgb_colors = rgb_colors.map(function(color)
    {
        return (
            Math.abs(orig_color[0] - color[0]) +
            Math.abs(orig_color[1] - color[1]) +
            Math.abs(orig_color[2] - color[2])
        )
    })
    if(multiple_results_limit > 0)
    {
        return rgb_colors.map(function(item, index)
        { 
            return [color_samples[index],item] 
        }).sort(function(a,b)
        {
            return a[1] - b[1]
        }).slice(
            0, multiple_results_limit
        )
    }
    else
    {
        return color_samples[rgb_colors.reduce(function(best_index, current_value, current_index, array)
        {
           return current_value < array[best_index] ? current_index : best_index
        },0)]
    }
}