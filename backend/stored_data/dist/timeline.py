from time import sleep
# print("enter space/folder name")
# folder_name=input()
import os,requests


while True:

    print ( "reading files in current directory",os.path.basename(os.getcwd()))
    all  = os.listdir()
    print(all)
    for file in all:
        print(file)
        if(file=="timeline.exe" or file=="timeline.py"):
            print("skipped timeline.exe/py")
            continue
        resp = requests.post("http://172.16.128.95:3001/sync", data={"spacename" : os.path.basename(os.getcwd())}, files={"data":open(file,'rb')}  )
        print(resp.text)
        sleep(5)    