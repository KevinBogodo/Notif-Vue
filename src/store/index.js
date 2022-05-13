import { createStore } from 'vuex'
// Axios import
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://laravelnotif.test/api'
});


// Create user in local storage for reload
let user = localStorage.getItem('user');
if(!user) {
//    If not definet set default
    user = {
        userId: -1,
        token: '',
    };
} else {
    // if define try to set value
    try {
        user = JSON.parse(user);
        instance.defaults.headers.common['Authorization'] = 'Bearer '+ user.token;
    } catch (ex) {
    //  in case of error set to not user
        user = {
            userId: -1,
            token: '',    
        };
    }
}

const store = createStore({
    state: {
        status: '',
        user: user,
        userInfos: {
            name: '',
            surname: '',
            email: ''
        },
        currentNotif: {},
        notifInfos: {
            id: '',
            title: '',
            content: '',
            read: '',
        },
    },
    // add getter
    getters: {
        getNotifs(state) {
            return state.notifInfos;
        },
       getCurrentNotifs(state) {
           return state.currentNotif;
       },
       items: state => {
        return state.items;
    }
    },
    mutations: {
        setStatus(state, status) {
            state.status = status;
        },
        // mutation login user
        logUser(state, user) {
            instance.defaults.headers.common['Authorization'] = 'Bearer '+ user.token;
            localStorage.setItem('user', JSON.stringify(user));
            state.user = user;
        },
        // mut for user Infos
        userInfos(state, userInfos) {
            state.userInfos = userInfos;
            // console.log(user.token);
        },
        logout(state) {
            state.user = {
                userId: -1,
                token: '',
            }
            localStorage.removeItem('user');
        },
        SET_notifInfos (state, notifInfos) {
            state.notifInfos = notifInfos
        },
        SET_CurrentNotifs (state, currentNotifs) {
            state.items = currentNotifs
        }
    },
    actions: {
        login: ({commit}, userInfos) => {
            commit('setStatus', 'loading');
            return new Promise((resolve, reject)=> {
                // call for instance axios and pass userInfos as params
                instance.post('/auth/login', userInfos)
                .then(function (response) {
                    commit('setStatus', '');
                    // Take current user loged
                    commit('logUser', response.data);
                    resolve(response);
                })
                .catch(function (error){
                    commit('setStatus', 'error_login');
                    reject(error);
                });
            });
        },
        getUserInfos: ({commit}) => {
            instance.get('auth/profile')
            .then(function (response){
                commit('userInfos', response.data);
                resolve(response)
            })
            .catch(function(){
            });
          
        },
        loadNotifs ({ commit }) {
            instance.get('/notifications')
                .then(response => response.data)
                .then(notifInfos => {
                    console.log(notifInfos);
                commit('SET_notifInfos', notifInfos)
            })
        },
        ViewNotif ({ commit }) {
            instance.get('/notification/3')
                .then(response => response.data)
                .then(currentNotifs => {
                    console.log(currentNotifs);
                commit('SET_Items', currentNotifs)
            })
        }
    }
})


export default store;