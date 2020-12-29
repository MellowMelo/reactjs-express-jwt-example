import './App.css';
import {useState, useEffect} from 'react';
import api from './services/api';

function App() {
    let [logged, setLogged] = useState(false);
    let [login, setLogin] = useState("");
    let [password, setPassword] = useState("");
    let [status, setStatus] = useState("None");
    
    useEffect(async ()=>{
        let { data } = await api.get('/csrf-token');
        api.defaults.headers.post['X-CSRF-Token'] = data.csrfToken;
        await api.get("/auth/m1").then(response => {
            setLogged(true);
            setStatus(response.status+" Logged");
        }).catch(err => {
            
        });
    }, []);

    async function handleLogin(e){
        e.preventDefault();

        await api.post("/login", {login, password}).then(response => {
            setStatus(response.status+" Logged");
            setLogged(true);
        }).catch(err => {
            setStatus(err.request.status+" Login Problem");
        });
    }

    async function logout(){
        await api.post("/logout", {login, password}).then(response => {
            setStatus("Logout");
            setLogged(false);
        }).catch(err => {
            setStatus(err.request.status+" Logout Problem");
        });
    }

    async function AuthorizedRoute(){
        await api.get("/auth/m1").then(response => {
            setStatus(response.status+" "+response.data.data);
        }).catch(err => {
            setStatus(err.request.status+" Token Problem");
        });
    }

    async function noAuthRoute(){
        await api.get("/m2").then(response => {
            setStatus(response.status+" "+response.data.data);
        }).catch(err => {
            setStatus(err.request.status);
        });
    }

    return (
        <div className="Body">
            {logged==false ? (
                <form onSubmit={handleLogin}>
                    <h2 className="d-flex justify-content-center">Login</h2>
                    <div className="mb-3">
                        <label className="form-label">Login: </label>
                        <input className="form-control" type="text" value={login} onChange={e => setLogin(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password: </label>
                        <input className="form-control" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="col-md-4 btn btn-primary">Submit</button>
                    </div>
                </form>) 
            : (<div className="d-flex justify-content-center"><button className="col-md-4 btn btn-primary" onClick={logout} >Logout</button></div>)}
            <br />
            <div className="d-flex justify-content-center">
                <button className="col-md-2 btn btn-outline-success" onClick={AuthorizedRoute} >Test auth-need route</button>
                
                <button className="col-md-2 btn btn-outline-warning" onClick={noAuthRoute}>Test no-auth-need route</button>
            </div>
            <h3 className="d-flex justify-content-center" >Satus: {status}</h3>
        </div>
    );
}

export default App;
