
counts = []
power_colors = 0
array_of_color = []

with open('input.day2.txt') as f:
    for line in f:
        max_red = 0
        max_blue = 0
        max_green = 0
        game_number, colors = line.split(':', 1)
        print(game_number)
        color_groups = colors.strip().split(';')
        print(color_groups)

        for color_group in color_groups:
             for color_count in color_group.split(','):
                color_count_parts = color_count.strip().split()
                count, color = color_count_parts[0], color_count_parts[1]
                count = int(count)
         
                if color == 'red' and count > max_red:
                    max_red = count 
                elif color == 'blue' and count > max_blue:
                    max_blue = count
                elif color == 'green' and count > max_green:
                    max_green = count
        print('max', max_red, max_blue,max_green)           
        power_colors = max_red*max_blue*max_green
        print('power of colors', power_colors)

        array_of_color.append(power_colors)
        print('array of color', array_of_color)

        print(sum(array_of_color))





