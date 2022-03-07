# Native Github Profiler

In this exercise, we will create a mobile version for the [Github Profiler](https://github.com/MedTech-CS311/github-profiler/tree/redux) application.

### Steps

- [ ] Create the `.env` file that will hold your API token
- [ ] Create a directory called `screens` and create the needed components
- [ ] Bring the implementation code from the web app and adapt it to React Native
- [ ] Create a directory called `redux` and create the **store** with the needed **actions** and **reducers** for `profile` and `repos` slices
- [ ] Create a navigation between the 2 screens (profile / repos)

### Advanced: Organisations feature

- [ ] Create another screen that will hold the organisations of the user
- [ ] Create another tab for the new screen
- [ ] Implement the needed redux logic to fetch the organisationsList from [github API](https://docs.github.com/en/rest/reference/orgs)

# Native Github Profiler

In this exercise, we will create a mobile version for the [Github Profiler](https://github.com/MedTech-CS311/github-profiler/tree/redux) application.

### Steps

- [ ] Create the `.env` file that will hold your API token
- [ ] Create a directory called `screens` and create the needed components
- [ ] Bring the implementation code from the web app and adapt it to React Native
- [ ] Create a directory called `redux` and create the **store** with the needed **actions** and **reducers** for `profile` and `repos` slices
- [ ] Create a navigation between the 2 screens (profile / repos)

### Advanced: Organisations feature

- [ ] Create another screen that will hold the organisations of the user
- [ ] Create another tab for the new screen
- [ ] Implement the needed redux logic to fetch the organisationsList from [github API](https://docs.github.com/en/rest/reference/orgs)

### Authentication

- [ ] Pull the latest changes from [Let me in Repository](https://github.com/MedTech-CS311/let-me-in)
- [ ] Start the API server
- [ ] Create a `Login` Screen under screens with 2 inputs (email + password) and a submit button
- [ ] Create a new file called `Navigator.js` and move everything related to navigation to that component
- [ ] Add a Stack Navigator that navigates between Login and Signup
- [ ] Create a new slice in Redux called auth. Initial state for the reducer should be

```
{
    isLoggedIn: false,
    token: null
}
```

- [ ] Create a new action under `auth.actions` named `login` that should a request to `/api/auth/login`
- [ ] Handle the action in the reducer to save the token and set `isLoggedIn` to `true`
- [ ] Install `react-native-encrypted-storage` with npm. This will act as our local storage
- [ ] Use `EncryptedStorage` to persist the value of `isLoggedIn` and `token`
