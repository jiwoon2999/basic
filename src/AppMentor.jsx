import React, { useState } from 'react';

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: '지운',
    title: '개발자',
    mentor: {
      name: '밥',
      title: '시니어개발자',
    },
  });
  const handleChangeName = () => {
    const name = prompt('당신의 멘토의 이름은 무엇인가요?');
    setPerson((person) => ({
      ...person,
      mentor: { ...person.mentor, name },
    }));
  };
  const handleChangeTitle = () => {
    const title = prompt('당신의 멘토의 직책은 무엇인가요?');
    setPerson((person) => ({
      ...person,
      mentor: { ...person.mentor, title },
    }));
  };
  return (
    <div>
      <h1>{person.name}이는 개발자</h1>
      <p>
        {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})이다.
      </p>
      <button onClick={handleChangeName}>멘토 이름 바꾸기</button>
      <button onClick={handleChangeTitle}>멘토 타이틀 바꾸기</button>
    </div>
  );
}
