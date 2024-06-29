import re
games_in_limit = []

with open('input.day2.txt') as f:
    for line in f:        
        red_limit = 12
        green_limit = 13
        blue_limit = 14

        game_number, colors = line.split(':', 1)
        
        color_groups = colors.strip().split(';')
        game_within_limit = True  
        
        for color_group in color_groups:
            all_colors_within_limit = True  
            
            for color_count in color_group.split(','):
                color_count_parts = color_count.strip().split()
                count, color = color_count_parts[0], color_count_parts[1]
                count = int(count)
                
                # Checking if each color count is within its respective limit
                if (color == 'red' and count > red_limit) or (color == 'green' and count > green_limit) or (color == 'blue' and count > blue_limit):
                    all_colors_within_limit = False
                    break  # Exit the loop if any color count exceeds its limit
            
            if not all_colors_within_limit:
                game_within_limit = False
                break  # Exit the loop if any color count within a game exceeds its limit
        
        if game_within_limit:
            games_in_limit.append(game_number)  # Add the game number if all color counts within the game are within limit

print('line', line)
print("Games within limit:", games_in_limit)

numbers_pattern = re.compile(r'\d+')

# Extracting numbers from game names and summing them up
total_sum = sum(int(numbers_pattern.search(game).group()) for game in games_in_limit)

print("Total sum of numbers from game names:", total_sum)