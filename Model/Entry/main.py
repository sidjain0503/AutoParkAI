import cv2
import pytesseract
import numpy as np
import requests

pytesseract.pytesseract.tesseract_cmd = "/opt/homebrew/bin/tesseract"

cascade = cv2.CascadeClassifier("haarcascade_russian_plate_number.xml")

gotit = False
cap = cv2.VideoCapture(0)

while True:
    ret, img = cap.read()
    k = cv2.waitKey(1)
    if ret:
        cv2.imshow("img", img)

        gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        nplate = cascade.detectMultiScale(gray, 1.1, 4)
        plate = None 
        if len(nplate) > 0:
            for (x, y, w, h) in nplate:
                (a,b) = (int(0.02 * img.shape[0]), int(0.025 * img.shape[1]))
                if y + a < img.shape[0] and y + h - a < img.shape[0] and x < img.shape[1] and x + w - b < img.shape[1]:
                    plate = img[y + a:y + h - a, x:x + w - b, :]
                    kernel = np.ones((1, 1), np.uint8)
                if plate is not None:
                    plate = cv2.dilate(plate, kernel, iterations=1)
                    plate_gray = cv2.erode(plate, kernel, iterations=1)
                    (thresh, plate) = cv2.threshold(plate_gray, 127, 255, cv2.THRESH_BINARY)

                    read = pytesseract.image_to_string(plate)
                    read = ''.join(e for e in read if e.isalnum())
                    if read:
                        if (len(read) == 10) & (read[0:1].isalpha()) & (read[4:5].isalpha()) & (read[6:10].isdigit()):
                            data = read.upper()
                            gotit = True
                else:
                    print("Slice parameters are out of image bounds.")
        else:
            print("nplate is empty.")
        if k & 0xFF == ord('q'):
            break
        elif gotit:
            break
    else:
        break

print(data)
urlExit = 'http://localhost:8000/api/model/entry'
myobj = {'data': data}
x = requests.post(urlExit, json = myobj)
print(x , myobj )
cv2.destroyAllWindows()