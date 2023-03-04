import React, { useReducer } from 'react';
import personReducer from './reducer/person-reducer';

export default function AppMentors() {
  // const [person, setPerson] = useState(initialPerson);
  const [person, dispatch] = useReducer(personReducer, initialPerson);
  const handleUpdate = () => {
    const prev = prompt('누구의 이름을 바꾸고 싶은가요?');
    const current = prompt('이름을 무엇으로 바꾸고 싶은가요?');
    dispatch({ type: 'updated', prev, current });
  };

  const handleAdd = () => {
    const name = prompt('새로운 멘토는 누구입니까?');
    const title = prompt('직책은 무엇입니까?');
    dispatch({ type: 'added', name, title });
  };
  const handleDelete = () => {
    const name = prompt('누구의 이름을 삭제하고 싶습니까?');
    dispatch({ tpye: 'deleted', name });
  };

  return (
    <div>
      <h1>{person.name}이는 개발자</h1>
      <p>{person.name}의 멘토는 :</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleUpdate}>멘토의 이름을 바꾸기</button>
      <button onClick={handleAdd}>멘토 추가하기</button>
      <button onClick={handleDelete}>멘토 삭제하기</button>
    </div>
  );
}

const initialPerson = {
  name: '지운',
  title: '개발자',
  mentors: [
    {
      name: '밥',
      title: '시니어개발자',
    },
    {
      name: '제임스',
      title: '시니어개발자',
    },
  ],
};
