from time import sleep
# print("enter space/folder name")
# folder_name=input()
import os,requests


while True:
    sleep(3)

    print ( "reading files in current directory",os.pardir)
    all  = os.listdir()
    for file in all:
        print(file.title())
        resp = requests.post("http://172.16.128.95:3001/sync", data={"spacename" : os.pardir}, files={"data":open(file.title(),'rb')}  )
        print(resp.text)
    