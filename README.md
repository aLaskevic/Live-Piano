![Screenshot_2023-02-13_181538-removebg-preview](https://user-images.githubusercontent.com/96989243/218527982-4e0b0ebc-5790-46e3-99c8-9f3e1a08bf3e.png)
![Visitor](https://visitor-badge.laobi.icu/badge?page_id=aLaskevic.Live-Piano)

This main purpose of the project was to learn the usage of websockets and creating a simple lobby system within it.
### What is the idea behind <span style='color:#25a448;'>Live</span> <span style='color:black;'>Piano</span>?
The fundamental idea behind live piano was it to create a platform where people could jam together. Simply connect your piano via MIDI to your pc, connect to a lobby and let the jam begin

![image](https://user-images.githubusercontent.com/96989243/218526713-e9ecac43-817c-4aa8-8dba-a1f1bdeebc01.png)


### Setup
If you like to setup it locally simply run following commands in the root directory.
##### Web Client
```xml
npm run dev
```
##### Web Service
```
node server/index.js
```

### Features
- Integrated MIDI Support
- Interact with players within the same lobby like kick/mute
- A simple and scalable Lobbysystem by detecting and clearing empty rooms
  ´.
