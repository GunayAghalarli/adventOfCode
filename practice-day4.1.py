
counts = []



def parse_numbers(numbers):
    return list(map(int, numbers.strip().split()))

with open('input.day4.txt') as f:
    for line in f:    
        card_number, numbers = line.split(':', 1)
        winning_numbers, your_numbers = numbers.split('|', 1)
        winning_numbers = parse_numbers(winning_numbers)
        your_numbers = parse_numbers(your_numbers)
        common_elements = [element for element in winning_numbers if element in your_numbers]
        count = len(common_elements)
        result = 0
        if count > 0:
            result = 1 
            for _ in range(count - 1):
                result *= 2  
    
        counts.append(result)

  
    print(sum(counts))
        

        


       





