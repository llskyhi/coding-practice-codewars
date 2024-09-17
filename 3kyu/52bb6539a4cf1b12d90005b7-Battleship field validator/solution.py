import itertools

def validate_battlefield(field):
    submarines = 0     # size 1
    destroyers = 0     # size 2
    cruisers = 0       # size 3
    battleships = 0    # size 4
    # use a seen table to limit direction of ship found
    seen = [[False] * 10 for _ in range(10)]
    for (column, row) in itertools.product(range(10), range(10)):
        if seen[column][row]:
            continue
        if not field[column][row]:
            seen[column][row] = True
            continue

        # whenever found a grid containing part of ship,
        # count its length in 2 direction: higher column and higher row
        row_size: int = 1
        column_size: int = 1
        for expand_row in filter(lambda expand_row: expand_row <10, range(row + 1, row + 4)):
            seen[column][expand_row] = True
            if not field[column][expand_row]:
                break
            row_size += 1
        for expand_column in filter(lambda expand_column: expand_column < 10, range(column + 1, column + 4)):
            seen[expand_column][row] = True
            if not field[expand_column][row]:
                break
            column_size += 1
        # a ship occupying more than 1 space in both direction is an error
        if row_size > 1 and column_size > 1:
            return False
        # mark surrounding grids as seen;
        # but it any of they contain a ship, it's an error
        for (empty_column, empty_row) in filter(
            lambda grid: 0 <= grid[0] < 10 and 0 <= grid[1] < 10,
            itertools.chain(
                ((column + expand_column, row + row_size  ) for expand_column in range(column_size)),
                ((column + column_size  , row + expand_row) for expand_row    in range(-1, row_size)),
                ((column + column_size  , row + row_size), ),
            ),
        ):
            if field[empty_column][empty_row]:
                return False
            seen[empty_column][empty_row] = True
        # count ship
        match max(column_size, row_size):
            case 1:
                submarines += 1
            case 2:
                destroyers += 1
            case 3:
                cruisers += 1
            case 4:
                battleships += 1
            case _:
                raise RuntimeError
    # no logical errors found, finally check the count of ships
    return (
        battleships == 1
        and cruisers == 2
        and destroyers == 3
        and submarines == 4
    )

print(validate_battlefield(
    #  [
    #     [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    #     [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    #     [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    #     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    #     [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    #     [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    #     [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    #     [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    #     [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    #     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    # ],
    [
        [0, 1, 0, 0, 0, 0, 1, 1, 1, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
        [1, 0, 0, 0, 0, 1, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 1, 1],
    ]
))