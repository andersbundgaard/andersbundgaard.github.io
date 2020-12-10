lines = [
]


def load_data(fileName):
    global lines
    with open(fileName, "r") as input_data:
        lines = input_data.readlines()
    for i in range(len(lines)):
        lines[i] = lines[i].strip()


def myHelperFunction():
    global lines
    pass

def problemOne():
    global lines

    for a in lines:
        for b in lines:
            x = int(a)
            y = int(b)
            if 2020 == x + y:
                print (x,y,x+y,x*y)
                return

def problemTwo():
    pass

if __name__ == "__main__":
    load_data("day1-input.txt")
    problemOne()
    # problemTwo()