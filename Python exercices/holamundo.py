numero = input()

numero = int(numero)

if(numero % 2 != 0):
    print("Weird")
elif (numero % 2 == 0 and numero >= 2 and numero <= 5 ):
    print("Not Weird")
elif (numero % 2 == 0 and numero >= 6 and numero <= 20 ):
    print("Weird")
elif (numero % 2 == 0 and numero >= 21 ):
    print("Not Weird")