# instagram-feed-clone
A Instagram feed clone with NodeJs, ReactJs and React Native

<br />
![image app] (/Clone-Instagram.gif)

<br />

## Description

  ### Backend
  The back-end is a simple Rest Api with four routes to add, list, like a post and get image from server
  
  - list <br />
  ```  http://localhost:3333/posts ``` <br />
      With a **Get** requisition return a json with all posts <br />
       ```
        {
          "likes": 2,
          "_id": "5f113da7b455232d04cee1e3",
          "author": "Victor Vitalino",
          "place": "Maceió, AL",
          "description": "Testando WebSocket com ui clone do Instagram",
          "hashtags": "#nodejs #backend #instaClone",
          "image": "b0c1c6e0dd2e0082345a5bf391e94d2d.jpg",
          "createdAt": "2020-07-17T05:56:55.143Z",
          "updatedAt": "2020-07-18T06:02:04.810Z",
          "__v": 0
       },
      ```
  - add <br />
  ```  http://localhost:3333/posts ``` <br />
      With a **Post** requisition, sending a file with multipart/form-data <br />
       ```
        const data = new FormData();
        data.append('image', values.image);
        data.append('author', values.author);
        data.append('place', values.place);
        data.append('description', values.description);
        data.append('hashtags', values.hashtags);

        await axios.post('http://localhost:3333/posts', data);
      ```
      <br />
      
  - like <br />
  ```  http://localhost:3333/posts/${id}/like ``` <br />
      With a **Post** requisition, sending an id of post  <br />
       ```
        http://localhost:3333/posts/5f0b8282dceb9e262c2e588b/like
      ```
      <br />
      


### Used packages

- backend
  - **express:** To routes and control http requests
  - **mongoose:** To connect with mongoDb and query
  - **socket.io:** To update posts and likes in realtime
  - **multer:** To handle uploaded files
  
- Web
  - **axios:** To make http requests
  - **styled-components:** To style the components
  - **socket.io/client:** To listen post and 'likes' updates  in real time
  
- Mobile
  - **axios:** To make http requests
  - **react-native-image-picker:** To get images from gallery
  - **socket.io/client:** To listen post and 'likes' updates  in real time
  - **react-navigation/stack:** For stack navigation


## Errors

- React Native post multipart/form-data Network Error <br />
    The multipart/form-data post on react native gave a connection error, resolved by commenting out the line <br />
  ```
    initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
  
  ``` 
  <br />
  In the file <br /> 
  
   ```  
   android/app/src/main/java/com/instaclone/MainApplication.java  
   ``` 



