import bisect

def dbl_linear(n: int) -> int:
    u: list[int] = []
    u_candidates = [1]
    while True:
        x = u_candidates.pop(0)
        next2 = 2*x + 1
        next3 = 3*x + 1

        u.append(x)
        if len(u) > n:
            return u[n]

        insertion_point_next2 = bisect.bisect_left(u_candidates, next2)
        if next2 not in u_candidates[insertion_point_next2:insertion_point_next2+1]:
            u_candidates.insert(insertion_point_next2, next2)

        insertion_point_next3 = bisect.bisect_left(u_candidates, next3, lo=insertion_point_next2)
        if next3 not in u_candidates[insertion_point_next3:insertion_point_next3+1]:
            u_candidates.insert(insertion_point_next3, next3)

if __name__ == "__main__":
    assert dbl_linear(10) == 22
    assert dbl_linear(20) == 57
    assert dbl_linear(30) == 91
