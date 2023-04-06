from time import sleep
print("enter space/folder name")
# folder_name=input()
folder_name = "BlenderWorkspace"
import os,requests

while True:
    sleep(3)

    print ( "reading files in ", folder_name)
    # os yet to do
    resp = requests.post("http://172.16.128.189:3000/sync", data={"spacename" : folder_name}, files={"data":open('cuterobot.jpg','rb')}  )
    print(resp.text)
    