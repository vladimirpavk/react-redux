# Firebase Auth with React, Redux


## **Questions to answer:**

1. *"How to store ***additional user informations***, besides what is stored in user credential **Firebase.Auth.Credential**?"*
2. *"How to add multiple authorization levels and how to store it in ***additional user informations*** ?"*
3. *How to configure **Firebase Auth rules** to meet user authorization levels privileges ?*


## **Requirements**

### ***Additional user informations***
1. ***Additional user informations*** will be stored in database root branch, **FireBase Firestore** in a ***/usersDetails*** collection.
2. Each ***/users/Details/{userDetails}*** document will have an document ID equal to the user's UID returned when user is signed in.
3. Each ***/users/Details/{userDetails}*** document will have ***auth*** array that contains authorization levels given to a specified user,
4. Each ***/users/Details/{userDetails}*** document will contain properties that store ***additional user informations*** data.

### ***Authorization levels***
1. Any user can have multiple authorization levels,
2. Each user can read own ***additional user informations***,
3. Authorization levels must meet certain criterias as follows:
    - **Level 0** - can read ***additional user informations*** for any user,
    - **Level 1** - can delete ***additional user informations*** and **Firebase.Auth. Credential** for any user,
4. Authorization levels can be combined i.e. [0, 1], can read and delete ***additional user informations*** and **Firebase.Auth.Credential**.

### User interface
1. User interface must be adaptive to each user authorization levels,
2. Menu items will be dependent to authorization levels.
3. Each autorization level has it's own menu items.
4. **React Redux** will be used to store local data and will be synced with **Firebase Auth state.**

### Prior knowledge
1. Basic React, Redux knowledge is required to follow code,
2. Basic knowledge for following **Firebase** modules/functions is required:
    - **firebase/firestore**
        - collection(),
        - query(),
        - where(),
        - getDocs(),
        - doc(),
        - getDoc(),
    - **firebase/auth**
        - signInWithEmailAndPassword(),
        - createUserWithEmailAndPassword(),
        - onAuthStateChanged(),
        - signOut()

