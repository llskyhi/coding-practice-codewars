"""
https://www.codewars.com/kata/56a73d2194505c29f600002d/python
"""
import re
"""
0 to 1
1 repeat
    route 1
        1 to 2
        2 repeat `((0|1(001*0)*1)1)*`
        2 to 4
        4 repeat
        4 to 1
    route 2
        1 to 3
        3 repeat
        3 to 6
        6 repeat
        6 to 5
        5 repeat
        5 to 4
        4 repeat
        4 to 1
1 to 3
    route 1
        1 to 3
    route 2
        1 to 2
        2 repeat
        2 to 5
        5 repeat `(001*0)*`
        5 to 3
3 repeat
3 to 0
"""
pattern_string = "^(0 | 1 (0 ((0|1(001*0)*1)1)* (0|1(001*0)*1) 0 | 1 (01*0 (1(10)*11)* 0)* 0 1* 0 (1(10)*11)* 1 (1(0|11))* 0 )* (1 | 0 ((0|1(001*0)*1)1)* 1 (001*0)* 0 ) (01*0 (1(10)*11)* 0)* 1)+$".replace(" ", "")
pattern = re.compile(pattern_string)

n = 7

for i in range(10000):
    can_divided_by_n = i%n == 0
    binary_string = format(i, "b")
    match_ = pattern.match(binary_string)
    correct_result = can_divided_by_n == (match_ is not None)
    print("i: {:>5d} ({} - {}); {:>20}; {}".format(
        i,
        "O" if can_divided_by_n else "X",
        "O" if match_ is not None else "X",
        binary_string,
        "" if correct_result else "<---"
    ))
print(pattern_string)
