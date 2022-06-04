a=int(input())
sisa = False

if(a % 4 == 0):
    sisa = True
    if(a % 100 == 0):
        sisa = False
        if(a % 400 == 0):
            sisa = True

print(sisa)
