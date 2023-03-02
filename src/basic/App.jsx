import './App.css';

function AppJSX() {
  const name = '지운';
  const list = ['우유', '딸기', ' 바나나'];
  return (
    <>
      <h1 className='orange'>{`Hello, ${name}`}</h1>
      <h2>Hello!</h2>
      <p>{name}</p>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <img
        style={{ width: '200px', height: '200px' }}
        src='https://images.unsplash.com/photo-1677680127713-f23a55c96955?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        alt=''
      />
    </>
  );
}

export default AppJSX;
