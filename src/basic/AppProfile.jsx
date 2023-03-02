import './App.css';
import Profile from './components/Profile';

function AppProfile() {
  const onClick = (e) => {
    console.log(e);
    alert('버튼이 클릭되었음');
  };
  return (
    <>
      <button onClick={onClick}>버튼</button>
      <Profile
        name='Jiwoon'
        image='https://images.unsplash.com/photo-1518796745738-41048802f99a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
        title='프론트엔드 개발자'
        isNew={true}
      />
      <Profile
        name='Kaeun'
        image='https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        title='백엔드 개발자'
      />
      <Profile
        name='Hayoon'
        image='https://images.unsplash.com/photo-1591561582301-7ce6588cc286?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
        title='시니어개발자'
      />
    </>
  );
}

export default AppProfile;
