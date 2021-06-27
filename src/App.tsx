import './App.scss';
import Profile from 'react-components/Profile/Profile';
import { useEffect, useState } from 'react';
import IProfile from 'typescript-types/IProfile';

function App() {
  const [profile, setProfile] = useState<IProfile>();

  useEffect(() => {
		fetch('/profiles/1.json')
		.then(response => response.json())
		.then(((profile: IProfile) => {

      setProfile(profile);

		}));
	}, []);
  
  return (
    <div className="App">
      <Profile profile={profile}></Profile>
      <div className="linktree-logo">
        <img src="/linktree-assets/logo.svg" alt="Linktree Logo"/>
      </div>
    </div>
  );
}

export default App;
