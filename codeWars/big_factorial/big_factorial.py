# big_factorial

def bigFact(n):
    if type(n) != int or n==0:
        return 1
    
    if n<0:
        return None

    i = 1
    makeFact = 1
    while i<=n:
        makeFact = makeFact*i
        i+=1
    return makeFact

thefact = bigFact(4)
print(thefact)